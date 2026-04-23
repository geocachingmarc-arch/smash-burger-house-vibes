import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Mail, Star, Flame, Truck } from "lucide-react";
import burgerHero from "@/assets/burger-hero.png";
import sbhLogo from "@/assets/sbh-logo.png";
import kingFighters from "@/assets/king-fighters.png";
import burgerHands from "@/assets/burger-hands.png";
import tequenos from "@/assets/tequenos.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const menu = [
  { name: "SBH Classic", desc: "Smash 150g, cheddar, lechuga, tomate, cebolla", price: "9,50€", tag: "ICÓNICA" },
  { name: "Truffle Smash", desc: "Trufa negra, queso brie, rúcula fresca", price: "12€", tag: "PREMIUM" },
  { name: "King of Fighters", desc: "Doble smash, bacon, cebolla crispy, salsa SBH", price: "13,50€", tag: "TOP" },
  { name: "Veggie Smash", desc: "Beyond Meat, queso vegano, pickles", price: "11€", tag: "VEGGIE" },
  { name: "Loaded Fries", desc: "Patatas con queso fundido, bacon y salsa", price: "6€", tag: "SHARE" },
  { name: "Tequeños", desc: "6 unidades crujientes con queso", price: "7€", tag: "NUEVO" },
];

const reviews = [
  { src: "Google", score: "4.4", count: "450+", quote: "Mejores smash burgers de la zona. Carne jugosa y porciones generosas." },
  { src: "TripAdvisor", score: "4.5", count: "120+", quote: "Vistas al mar, ambiente chill. Ideal para after-beach." },
  { src: "Glovo", score: "4.6", count: "1.200+", quote: "Rápido delivery, bien empaquetado y siempre caliente." },
];

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={sbhLogo} alt="SBH" className="h-9 w-9 rounded-md" />
          <span className="font-display text-xl tracking-widest neon-text-red">SBH</span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider">
          <a href="#menu" className="hover:neon-text-red transition">Menú</a>
          <a href="#about" className="hover:neon-text-blue transition">Sobre</a>
          <a href="#reviews" className="hover:neon-text-red transition">Reseñas</a>
          <a href="#visit" className="hover:neon-text-blue transition">Visítanos</a>
        </nav>
        <a
          href="tel:+34677485839"
          className="px-4 py-2 rounded-full bg-[var(--neon-red)] text-white text-sm font-bold neon-border-red hover:scale-105 transition"
        >
          Reservar
        </a>
      </div>
    </header>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen text-foreground overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen grid-bg flex items-center pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-6">
              <Flame className="h-3 w-3 text-[var(--neon-red)]" />
              Castelldefels · Frente al mar
            </div>
            <h1 className="text-6xl md:text-8xl font-display leading-none mb-6">
              <span className="neon-text-red flicker">SMASH</span>
              <br />
              <span className="neon-text-blue">BURGER</span>
              <br />
              <span className="text-foreground">HOUSE</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              Carne prensada en plancha al rojo vivo. Pan brioche dorado. Sabor que no se olvida.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#menu" className="px-6 py-3 rounded-full bg-[var(--neon-red)] text-white font-bold uppercase tracking-wider neon-border-red hover:scale-105 transition">
                Ver menú
              </a>
              <a href="https://glovoapp.com" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full glass font-bold uppercase tracking-wider hover:neon-border-blue transition flex items-center gap-2">
                <Truck className="h-4 w-4" /> Pedir delivery
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-[var(--neon-red)] opacity-30 blur-3xl rounded-full" />
            <img src={burgerHero} alt="SBH signature smash burger" className="relative rounded-3xl w-full neon-border-red" />
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 flex items-center gap-2">
              <Star className="h-4 w-4 text-[var(--neon-red)] fill-[var(--neon-red)]" />
              <span className="font-bold">4.6</span>
              <span className="text-xs text-muted-foreground">/ 1.700+ reseñas</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BANNER */}
      <section className="relative py-12 border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {[
            { k: "Carne fresca", v: "Local & diaria" },
            { k: "Desde", v: "2022" },
            { k: "Plazas", v: "40-50" },
            { k: "Pet friendly", v: "Terraza al mar" },
          ].map((s) => (
            <div key={s.k} className="text-center">
              <div className="text-3xl font-display neon-text-blue">{s.v}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="uppercase text-sm tracking-[0.3em] neon-text-red mb-3">El menú</p>
            <h2 className="text-5xl md:text-7xl font-display">
              SMASH <span className="neon-text-blue">CLASSICS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menu.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-6 hover:neon-border-red transition group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[10px] tracking-widest px-2 py-1 rounded-full bg-[var(--neon-red)]/20 text-[var(--neon-red)] border border-[var(--neon-red)]/40">
                    {item.tag}
                  </span>
                  <span className="font-display text-2xl neon-text-blue">{item.price}</span>
                </div>
                <h3 className="text-2xl font-display mb-2 group-hover:neon-text-red transition">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-10">
            Combo (burger + fries + bebida) <span className="neon-text-red font-bold">+4€</span> · Envío gratis &gt;15€
          </p>
        </div>
      </section>

      {/* ABOUT / GALLERY */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={kingFighters} alt="King of Fighters burger" className="rounded-2xl col-span-2 neon-border-blue" />
            <img src={burgerHands} alt="Smash burger close up" className="rounded-2xl" />
            <img src={tequenos} alt="Tequeños SBH" className="rounded-2xl" />
          </div>
          <div>
            <p className="uppercase text-sm tracking-[0.3em] neon-text-blue mb-3">Sobre nosotros</p>
            <h2 className="text-5xl md:text-6xl font-display mb-6">
              CARNE. <span className="neon-text-red">FUEGO.</span> NEÓN.
            </h2>
            <p className="text-muted-foreground mb-4">
              Desde 2022, una familia catalana lleva el espíritu del smash burger americano al paseo
              marítimo de Castelldefels. Carne fresca de proveedores locales, prensada sobre plancha
              ardiente para sellar el sabor en cada bite.
            </p>
            <p className="text-muted-foreground mb-8">
              Local industrial con neones rojos y azules, terraza con vistas al Mediterráneo y un
              ambiente joven, pet-friendly y siempre lleno los fines de semana.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Smash 100% fresca", "Pan brioche artesano", "Vistas al mar", "Pet friendly", "WiFi gratis"].map((t) => (
                <span key={t} className="glass px-4 py-2 rounded-full text-sm">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase text-sm tracking-[0.3em] neon-text-red mb-3">La gente habla</p>
            <h2 className="text-5xl md:text-7xl font-display">
              <span className="neon-text-blue">1.700+</span> RESEÑAS
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 hover:neon-border-blue transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-xl">{r.src}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-[var(--neon-red)] fill-[var(--neon-red)]" />
                    <span className="font-bold">{r.score}</span>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{r.quote}"</p>
                <p className="text-xs text-muted-foreground mt-4 uppercase tracking-widest">{r.count} opiniones</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 neon-border-red">
            <div>
              <p className="uppercase text-sm tracking-[0.3em] neon-text-blue mb-3">Visítanos</p>
              <h2 className="text-5xl font-display mb-8">
                NOS VEMOS <span className="neon-text-red">EN LA</span> PLAYA
              </h2>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <MapPin className="h-5 w-5 text-[var(--neon-red)] mt-1 shrink-0" />
                  <div>
                    <div className="font-bold">Av. Castelldefels, 45</div>
                    <div className="text-sm text-muted-foreground">08860 Castelldefels, Barcelona</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="h-5 w-5 text-[var(--neon-blue)] mt-1 shrink-0" />
                  <a href="tel:+34677485839" className="font-bold hover:neon-text-blue">+34 677 48 58 39</a>
                </li>
                <li className="flex gap-4">
                  <Mail className="h-5 w-5 text-[var(--neon-red)] mt-1 shrink-0" />
                  <a href="mailto:info@smashburgerhouse.com" className="font-bold hover:neon-text-red break-all">info@smashburgerhouse.com</a>
                </li>
                <li className="flex gap-4">
                  <Instagram className="h-5 w-5 text-[var(--neon-blue)] mt-1 shrink-0" />
                  <a href="https://instagram.com/sbh_castelldefels" target="_blank" rel="noreferrer" className="font-bold hover:neon-text-blue">@sbh_castelldefels</a>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-[var(--neon-red)]" />
                <h3 className="font-display text-2xl">HORARIO</h3>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  ["Lunes", "Cerrado"],
                  ["Martes – Jueves", "18:00 – 23:00"],
                  ["Viernes – Sábado", "12:30 – 00:00"],
                  ["Domingo", "12:30 – 23:00"],
                ].map(([d, h]) => (
                  <div key={d} className="flex justify-between border-b border-border py-2">
                    <span className="text-muted-foreground uppercase tracking-wider">{d}</span>
                    <span className={`font-bold ${h === "Cerrado" ? "neon-text-red" : "neon-text-blue"}`}>{h}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=41.2745,1.9712"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center w-full px-6 py-3 rounded-full bg-[var(--neon-blue)] text-white font-bold uppercase tracking-wider neon-border-blue hover:scale-[1.02] transition"
              >
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={sbhLogo} alt="SBH" className="h-8 w-8 rounded-md" />
            <span className="font-display tracking-widest neon-text-red">SBH SMASH BURGER HOUSE</span>
          </div>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} · Castelldefels · Made with 🔥
          </p>
        </div>
      </footer>
    </div>
  );
}
