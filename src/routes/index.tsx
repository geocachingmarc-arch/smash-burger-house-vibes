import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Flame, Star, Instagram, MessageCircle, Truck } from "lucide-react";
import burgerHero from "@/assets/burger-hero.png";
import sbhLogo from "@/assets/sbh-logo.png";
import kingFighters from "@/assets/king-fighters.png";
import burgerHands from "@/assets/burger-hands.png";
import tequenos from "@/assets/tequenos.png";
import { OrderSystem, buildMenu } from "@/components/OrderSystem";

export const Route = createFileRoute("/")({
  component: Index,
});

const burgers = [
  { name: "Simple Cheeseburger", desc: "Pan brioche, una carne smash de ternera y doble cheddar.", price: "10,00€", tag: "CLASSIC" },
  { name: "Playstation", desc: "Pan brioche, doble carne smash, cheddar y bacon.", price: "14,00€", tag: "TOP" },
  { name: "Tetris", desc: "Pan brioche, doble smash, cheddar, lechuga, tomate, cebolla morada y mayonesa.", price: "14,00€", tag: "FRESH" },
  { name: "Pac Man", desc: "Pan brioche, doble smash, cheddar, salsa doble cuarto y pepinillos.", price: "14,00€", tag: "ARCADE" },
  { name: "Bomberman", desc: "Pan brioche, doble smash, cheddar, cebolla caramelizada y mayonesa.", price: "15,00€", tag: "SWEET" },
  { name: "Big Sonic", desc: "Pan brioche, doble smash, cheddar, lechuga capuchina, salsa BIG, cebolla picada y pepinillos.", price: "15,00€", tag: "SPEED" },
  { name: "The King Of Fighters", desc: "Pan brioche, doble smash, cheddar, alioli, lechuga capuchina, cebolla morada y bacon.", price: "16,00€", tag: "KING" },
  { name: "Mortal Kombat", desc: "Pan brioche, doble smash, cheddar, salsa tekken, cebolla morada, cebolla crispy, bacon, pepinillos y kétchup.", price: "16,00€", tag: "FATALITY" },
  { name: "Family Game", desc: "Pan brioche, doble smash, queso Roquefort, cebolla caramelizada y mayonesa.", price: "16,00€", tag: "ROQUEFORT" },
  { name: "Súper Mario Bros", desc: "Pan brioche, doble smash, cheddar, bacon, bastones de mozzarella + salsa BBQ.", price: "17,00€", tag: "ICÓNICA" },
  { name: "Luigi", desc: "Pan brioche, doble smash, queso de cabra, mermelada de bacon, rúcula y mayonesa verde.", price: "17,00€", tag: "GOURMET" },
  { name: "Pokémon", desc: "Pan brioche, doble smash, cheddar, huevo (Granja Campomayor) y salsa de trufa negra.", price: "17,00€", tag: "PREMIUM" },
];

const sides = [
  { name: "Nachos SBH", desc: "Chili de carne, cheddar cremoso, guacamole, jalapeños.", price: "15,00€" },
  { name: "Tequeños (6 uds.)", desc: "Con dips.", price: "12,00€" },
  { name: "Sticks de pollo (6 uds.)", desc: "Con dips.", price: "10,50€" },
  { name: "Patatas XL", desc: "Simples, provenzal, mayo verde, cheddar+bacon o chili+jalapeños.", price: "6,50–8,50€" },
  { name: "Patatas small", desc: "Ración pequeña.", price: "3,50€" },
  { name: "Bastones de mozzarella (4)", desc: "Con dips.", price: "5,50€" },
];

const desserts = [
  { name: "Ramon Novarro", price: "6,50€" },
  { name: "Red Velvet", price: "6,50€" },
  { name: "Cheesecake", price: "6,50€" },
  { name: "Tarta Kinder", price: "6,50€" },
];

const drinks = [
  { name: "Estrella Galicia 330ml", price: "3,50€" },
  { name: "Refrescos lata", price: "3,25€" },
  { name: "Agua 330ml (normal/gas)", price: "2,60€" },
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
          <a href="#visit" className="hover:neon-text-blue transition">Visítanos</a>
        </nav>
        <a
          href="tel:+34934559038"
          className="px-4 py-2 rounded-full bg-[var(--neon-red)] text-white text-sm font-bold neon-border-red hover:scale-105 transition"
        >
          Llamar
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
      <section className="relative min-h-screen grid-bg flex items-center pt-24 pb-16 overflow-hidden">
        <div className="neon-orb-red orb-float -top-40 -left-40" />
        <div className="neon-orb-blue orb-float top-1/2 -right-40" style={{ animationDelay: "3s" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-6">
              <Flame className="h-3 w-3 text-[var(--neon-red)]" />
              Castelldefels · Estilo americano
            </div>
            <h1 className="text-6xl md:text-8xl font-display leading-none mb-6">
              <span className="neon-text-red flicker">SMASH</span>
              <br />
              <span className="neon-text-blue">BURGER</span>
              <br />
              <span className="text-foreground">HOUSE</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              Carne aplastada en plancha al rojo vivo, costra crujiente y sabor intenso. Recetas argentinas, alma barcelonesa.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#menu" className="px-6 py-3 rounded-full bg-[var(--neon-red)] text-white font-bold uppercase tracking-wider neon-border-red hover:scale-105 transition">
                Ver menú
              </a>
              <a href="https://glovoapp.com/es/es/castelldefels/sbh-smash-burger-house-cas/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-[#FFC244] text-black font-bold uppercase tracking-wider hover:scale-105 transition flex items-center gap-2">
                <Truck className="h-4 w-4" /> Glovo
              </a>
              <a href="https://wa.me/34934559038" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-[#25D366] text-black font-bold uppercase tracking-wider hover:scale-105 transition flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href="https://instagram.com/sbh_castelldefels" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full glass font-bold uppercase tracking-wider hover:neon-border-blue transition flex items-center gap-2">
                <Instagram className="h-4 w-4" /> Instagram
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
            <div className="absolute -bottom-4 -left-4 glass-strong rounded-2xl px-4 py-3 flex items-center gap-2">
              <Star className="h-4 w-4 text-[var(--neon-red)] fill-[var(--neon-red)]" />
              <span className="font-bold">4.9</span>
              <span className="text-xs text-muted-foreground">/ valoración local</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 relative overflow-hidden">
        <div className="neon-orb-blue orb-float top-20 left-1/4" />
        <div className="neon-orb-red orb-float bottom-20 right-1/4" style={{ animationDelay: "5s" }} />
        <div className="max-w-7xl mx-auto px-6 relative">
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
            <p className="text-muted-foreground mt-4 text-sm uppercase tracking-widest">Carta original SBH · precios reales</p>
          </motion.div>

          <h3 className="font-display text-3xl mb-6 neon-text-red">BURGERS</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {burgers.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass-strong rounded-2xl p-6 hover:neon-border-red transition group relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-3 gap-3">
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

          <h3 className="font-display text-3xl mt-16 mb-6 neon-text-blue">ENTRANTES</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sides.map((item) => (
              <div key={item.name} className="glass rounded-2xl p-5 hover:neon-border-blue transition">
                <div className="flex items-start justify-between mb-2 gap-3">
                  <h4 className="font-display text-xl">{item.name}</h4>
                  <span className="font-display text-xl neon-text-red">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            <div className="glass-strong rounded-2xl p-6">
              <h3 className="font-display text-2xl mb-4 neon-text-red">POSTRES</h3>
              <ul className="space-y-2">
                {desserts.map((d) => (
                  <li key={d.name} className="flex justify-between border-b border-border py-2 text-sm">
                    <span>{d.name}</span>
                    <span className="font-bold neon-text-blue">{d.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-strong rounded-2xl p-6">
              <h3 className="font-display text-2xl mb-4 neon-text-blue">BEBIDAS</h3>
              <ul className="space-y-2">
                {drinks.map((d) => (
                  <li key={d.name} className="flex justify-between border-b border-border py-2 text-sm">
                    <span>{d.name}</span>
                    <span className="font-bold neon-text-red">{d.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / GALLERY */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="neon-orb-red orb-float top-10 right-0" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
          <div className="grid grid-cols-2 gap-4">
            <img src={kingFighters} alt="Smash burger SBH" className="rounded-2xl col-span-2 neon-border-blue" />
            <img src={burgerHands} alt="Smash burger close up" className="rounded-2xl" />
            <img src={tequenos} alt="Tequeños SBH" className="rounded-2xl" />
          </div>
          <div>
            <p className="uppercase text-sm tracking-[0.3em] neon-text-blue mb-3">Sobre nosotros</p>
            <h2 className="text-5xl md:text-6xl font-display mb-6">
              CARNE. <span className="neon-text-red">FUEGO.</span> NEÓN.
            </h2>
            <p className="text-muted-foreground mb-4">
              SBH Smash Burger nació en Argentina durante la pandemia, de la mano de dos hermanos
              apasionados por la hamburguesa. Hoy se expande por Barcelona con varios locales,
              entre ellos Castelldefels.
            </p>
            <p className="text-muted-foreground mb-8">
              Carne aplastada en plancha caliente para sellar el jugo y crear esa costra crujiente
              característica. Mezclas de carne estilo argentino, recetas propias y un ambiente
              urbano con el alma de la cadena.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Smash auténtica", "Recetas argentinas", "Cadena en Barcelona", "Delivery disponible"].map((t) => (
                <span key={t} className="glass px-4 py-2 rounded-full text-sm">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24 relative overflow-hidden">
        <div className="neon-orb-blue orb-float top-0 left-0" />
        <div className="neon-orb-red orb-float bottom-0 right-0" style={{ animationDelay: "4s" }} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="glass-strong rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 neon-border-red">
            <div>
              <p className="uppercase text-sm tracking-[0.3em] neon-text-blue mb-3">Visítanos</p>
              <h2 className="text-5xl font-display mb-8">
                NOS VEMOS <span className="neon-text-red">EN</span> CASTELLDEFELS
              </h2>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <MapPin className="h-5 w-5 text-[var(--neon-red)] mt-1 shrink-0" />
                  <div>
                    <div className="font-bold">Av. Santa Maria, 7</div>
                    <div className="text-sm text-muted-foreground">08860 Castelldefels, Barcelona</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="h-5 w-5 text-[var(--neon-blue)] mt-1 shrink-0" />
                  <a href="tel:+34934559038" className="font-bold hover:neon-text-blue">+34 934 559 038</a>
                </li>
                <li className="flex gap-4">
                  <Star className="h-5 w-5 text-[var(--neon-red)] mt-1 shrink-0 fill-[var(--neon-red)]" />
                  <div className="font-bold">4.9 / 5 <span className="text-sm text-muted-foreground font-normal">· cientos de reseñas</span></div>
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
                  ["Comidas", "12:30 – 16:30"],
                  ["Cenas (L–J / Dom)", "19:00 – 00:00"],
                  ["Cenas (V–S)", "19:00 – 01:00"],
                ].map(([d, h]) => (
                  <div key={d} className="flex justify-between border-b border-border py-2">
                    <span className="text-muted-foreground uppercase tracking-wider">{d}</span>
                    <span className="font-bold neon-text-blue">{h}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Av.+Santa+Maria+7+Castelldefels"
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
