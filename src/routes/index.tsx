import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Flame, Star, Instagram, MessageCircle, Truck } from "lucide-react";
import burgerHero from "@/assets/burger-hero.png";
import sbhLogo from "@/assets/sbh-logo.png";
import kingFighters from "@/assets/king-fighters.png";
import burgerHands from "@/assets/burger-hands.png";
import tequenos from "@/assets/tequenos.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const menu = [
  { name: "S+ Basic", desc: "Pan de patata tostado en mantequilla, cebolla cruda, pepinillo, smash burger, queso americano, salsa S+ casera", price: "6,99€", tag: "BASIC" },
  { name: "S+ Doble", desc: "Pan de patata, cebolla cruda, pepinillo, doble smash burger, dos lonchas de queso americano, salsa S+ casera", price: "8,99€", tag: "DOBLE" },
  { name: "S+ Bacon", desc: "Pan de patata, mermelada de bacon, bacon crujiente, doble smash, dos lonchas de queso americano, salsa de bacon ahumado", price: "9,99€", tag: "TOP" },
  { name: "S+ Trufada", desc: "Pan de patata, cebolla confitada, bacon crujiente, doble smash, queso americano, salsa trufada casera", price: "10,99€", tag: "PREMIUM" },
  { name: "S+ Ribs", desc: "Pan de patata, doble smash burger, queso americano, carne mechada de costilla y panceta con salsa BBQ al bourbon", price: "12,40€", tag: "ICÓNICA" },
  { name: "S+ Chicken", desc: "Pan de patata, contramuslo de pollo crujiente, pepinillo, cebolla agridulce, salsa S+ casera", price: "9,99€", tag: "CRUNCH" },
  { name: "S+ Vegetal", desc: "Pan de patata tostado, carne vegetariana, bacon vegetariano, salsitas", price: "9,99€", tag: "VEGGIE" },
  { name: "S+ Junior", desc: "Pan slider en mantequilla, una smash burger, salsitas", price: "4,99€", tag: "KIDS" },
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
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 flex items-center gap-2">
              <Star className="h-4 w-4 text-[var(--neon-red)] fill-[var(--neon-red)]" />
              <span className="font-bold">4.9</span>
              <span className="text-xs text-muted-foreground">/ valoración local</span>
            </div>
          </motion.div>
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
            <p className="text-muted-foreground mt-4 text-sm uppercase tracking-widest">Añade patatas y bebida por <span className="neon-text-red font-bold">+2,90€</span></p>
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
        </div>
      </section>

      {/* ABOUT / GALLERY */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
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
      <section id="visit" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 neon-border-red">
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
