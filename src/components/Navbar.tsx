import { Link, NavLink, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/mens", label: "Men's Wear" },
  { to: "/perfumes", label: "Perfumes" },
  { to: "/offers", label: "Offers" },
];

const Navbar = () => {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/60">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <img src={logo} alt="Kumari Fashion" className="h-10 md:h-12 w-auto drop-shadow-[0_0_12px_hsl(var(--primary)/0.6)] transition-transform group-hover:scale-110" />
          <div className="hidden sm:block leading-none">
            <div className="font-display text-xl md:text-2xl text-gradient-red tracking-wider">KUMARI</div>
            <div className="font-display text-[10px] md:text-xs text-muted-foreground tracking-[0.3em]">FASHION</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `font-display text-lg tracking-wider transition-colors hover:text-primary ${isActive ? "text-primary" : "text-foreground"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/cart" className="relative p-2.5 rounded-sm hover:bg-secondary transition-colors" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center animate-glow-pulse">
                {count}
              </span>
            )}
          </Link>
          <button className="md:hidden p-2.5" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border/60 bg-background">
          <div className="container py-4 flex flex-col gap-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-display text-lg py-3 px-3 tracking-wider rounded-sm ${isActive ? "bg-primary/10 text-primary" : "text-foreground"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;