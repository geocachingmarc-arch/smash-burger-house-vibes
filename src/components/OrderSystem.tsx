import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Plus, Minus, X, MessageCircle, Trash2 } from "lucide-react";

export type MenuItem = { name: string; price: number; desc?: string; category: string };

type CartLine = { item: MenuItem; qty: number };

const PHONE = "34934559038";

function parsePrice(p: string): number {
  // takes "10,00€" or "6,50–8,50€" -> first number
  const match = p.replace(/\./g, "").match(/(\d+),(\d+)/);
  if (!match) return 0;
  return parseFloat(`${match[1]}.${match[2]}`);
}

export function buildMenu(raw: {
  burgers: { name: string; desc: string; price: string }[];
  sides: { name: string; desc: string; price: string }[];
  desserts: { name: string; price: string }[];
  drinks: { name: string; price: string }[];
}): MenuItem[] {
  return [
    ...raw.burgers.map((i) => ({ name: i.name, desc: i.desc, price: parsePrice(i.price), category: "Burgers" })),
    ...raw.sides.map((i) => ({ name: i.name, desc: i.desc, price: parsePrice(i.price), category: "Entrantes" })),
    ...raw.desserts.map((i) => ({ name: i.name, price: parsePrice(i.price), category: "Postres" })),
    ...raw.drinks.map((i) => ({ name: i.name, price: parsePrice(i.price), category: "Bebidas" })),
  ];
}

export function OrderSystem({ menu }: { menu: MenuItem[] }) {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState<Record<string, CartLine>>({});
  const [askTable, setAskTable] = useState(false);
  const [table, setTable] = useState("");
  const [takeaway, setTakeaway] = useState(false);

  const totalQty = useMemo(() => Object.values(cart).reduce((s, l) => s + l.qty, 0), [cart]);
  const total = useMemo(
    () => Object.values(cart).reduce((s, l) => s + l.qty * l.item.price, 0),
    [cart],
  );

  const add = (item: MenuItem) =>
    setCart((c) => ({ ...c, [item.name]: { item, qty: (c[item.name]?.qty ?? 0) + 1 } }));
  const dec = (name: string) =>
    setCart((c) => {
      const cur = c[name];
      if (!cur) return c;
      if (cur.qty <= 1) {
        const { [name]: _, ...rest } = c;
        return rest;
      }
      return { ...c, [name]: { ...cur, qty: cur.qty - 1 } };
    });
  const remove = (name: string) =>
    setCart((c) => {
      const { [name]: _, ...rest } = c;
      return rest;
    });
  const clear = () => setCart({});

  const sendWhatsApp = () => {
    if (totalQty === 0) return;
    const lines = Object.values(cart).map(
      (l) => `• ${l.qty}× ${l.item.name} — ${(l.qty * l.item.price).toFixed(2).replace(".", ",")}€`,
    );
    const header = takeaway
      ? `📦 *Pedido para llevar*`
      : `🪑 *Mesa: ${table.trim()}*`;
    const msg =
      `¡Hola SBH! Me gustaría hacer un pedido:\n\n` +
      `${header}\n\n` +
      lines.join("\n") +
      `\n\n*Total: ${total.toFixed(2).replace(".", ",")}€*\n\nGracias 🍔🔥`;
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setAskTable(false);
    setTable("");
    setTakeaway(false);
  };

  const grouped = useMemo(() => {
    const g: Record<string, MenuItem[]> = {};
    menu.forEach((m) => {
      if (m.price <= 0) return;
      (g[m.category] ||= []).push(m);
    });
    return g;
  }, [menu]);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 px-5 py-3 rounded-full bg-[var(--neon-red)] text-white font-bold uppercase tracking-wider neon-border-red hover:scale-105 transition flex items-center gap-2 shadow-2xl"
      >
        <ShoppingCart className="h-5 w-5" />
        Pedir
        {totalQty > 0 && (
          <span className="ml-1 bg-white text-[var(--neon-red)] rounded-full text-xs font-black h-6 min-w-6 px-1.5 flex items-center justify-center">
            {totalQty}
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-6"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-t-3xl md:rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col neon-border-red overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-border">
                <div>
                  <p className="uppercase text-[10px] tracking-[0.3em] neon-text-blue">Tu pedido</p>
                  <h3 className="font-display text-2xl neon-text-red">SBH ORDER</h3>
                </div>
                <button onClick={() => setOpen(false)} className="glass p-2 rounded-full hover:neon-border-red transition">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 grid md:grid-cols-[1fr_340px] overflow-hidden">
                {/* Menu */}
                <div className="overflow-y-auto p-5 space-y-6">
                  {Object.entries(grouped).map(([cat, items]) => (
                    <div key={cat}>
                      <h4 className="font-display text-xl mb-3 neon-text-blue">{cat}</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {items.map((it) => {
                          const qty = cart[it.name]?.qty ?? 0;
                          return (
                            <div key={it.name} className="glass rounded-xl p-3 flex flex-col gap-2">
                              <div className="flex justify-between gap-2">
                                <span className="font-bold text-sm">{it.name}</span>
                                <span className="font-display neon-text-red text-sm whitespace-nowrap">
                                  {it.price.toFixed(2).replace(".", ",")}€
                                </span>
                              </div>
                              {it.desc && <p className="text-[11px] text-muted-foreground line-clamp-2">{it.desc}</p>}
                              <div className="flex items-center justify-end gap-2 mt-1">
                                {qty > 0 && (
                                  <>
                                    <button onClick={() => dec(it.name)} className="glass p-1.5 rounded-full hover:neon-border-red">
                                      <Minus className="h-3 w-3" />
                                    </button>
                                    <span className="font-bold w-5 text-center">{qty}</span>
                                  </>
                                )}
                                <button onClick={() => add(it)} className="bg-[var(--neon-red)] text-white p-1.5 rounded-full hover:scale-110 transition">
                                  <Plus className="h-3 w-3" />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart */}
                <div className="border-t md:border-t-0 md:border-l border-border flex flex-col bg-background/40 max-h-[40vh] md:max-h-none">
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <h4 className="font-display text-lg neon-text-red">CARRITO</h4>
                    {totalQty > 0 && (
                      <button onClick={clear} className="text-xs text-muted-foreground hover:text-[var(--neon-red)] flex items-center gap-1">
                        <Trash2 className="h-3 w-3" /> Vaciar
                      </button>
                    )}
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    {totalQty === 0 && (
                      <p className="text-sm text-muted-foreground text-center py-8">
                        Añade items del menú para empezar tu pedido.
                      </p>
                    )}
                    {Object.values(cart).map((l) => (
                      <div key={l.item.name} className="glass rounded-lg p-2 flex items-center gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold truncate">{l.item.name}</div>
                          <div className="text-[11px] text-muted-foreground">
                            {l.qty} × {l.item.price.toFixed(2).replace(".", ",")}€
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <button onClick={() => dec(l.item.name)} className="glass p-1 rounded-full">
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{l.qty}</span>
                          <button onClick={() => add(l.item)} className="bg-[var(--neon-red)] text-white p-1 rounded-full">
                            <Plus className="h-3 w-3" />
                          </button>
                          <button onClick={() => remove(l.item.name)} className="ml-1 text-muted-foreground hover:text-[var(--neon-red)]">
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-border space-y-3">
                    <div className="flex justify-between items-baseline">
                      <span className="uppercase text-xs tracking-widest text-muted-foreground">Total</span>
                      <span className="font-display text-3xl neon-text-blue">
                        {total.toFixed(2).replace(".", ",")}€
                      </span>
                    </div>
                    <button
                      onClick={sendWhatsApp}
                      disabled={totalQty === 0}
                      className="w-full px-5 py-3 rounded-full bg-[#25D366] text-black font-bold uppercase tracking-wider hover:scale-[1.02] transition flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Finalizar por WhatsApp
                    </button>
                    <p className="text-[10px] text-muted-foreground text-center">
                      Te redirigiremos a WhatsApp con tu pedido pre-escrito.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
