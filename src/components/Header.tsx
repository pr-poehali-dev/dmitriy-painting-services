import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Цены", href: "#prices" },
  { label: "Документы", href: "#documents" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-site/95 backdrop-blur border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-gold flex items-center justify-center">
            <div className="w-3 h-3 bg-gold" />
          </div>
          <span className="font-display text-lg tracking-widest text-gold uppercase">МАХ</span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm tracking-wider text-muted-text hover:text-gold transition-colors uppercase font-body"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <a
          href="tel:89935039859"
          className="hidden lg:flex items-center gap-2 text-gold text-sm tracking-wider font-display"
        >
          <Icon name="Phone" size={15} />
          8 (993) 503-98-59
        </a>

        <button
          className="lg:hidden text-gold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-site border-t border-gold/20 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-left text-sm tracking-wider text-muted-text hover:text-gold transition-colors uppercase"
            >
              {l.label}
            </button>
          ))}
          <a href="tel:89935039859" className="text-gold text-sm tracking-wider">
            8 (993) 503-98-59
          </a>
        </div>
      )}
    </header>
  );
}
