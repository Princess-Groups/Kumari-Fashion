import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Flame, Sparkles, Truck, ShieldCheck } from "lucide-react";
import hero from "@/assets/hero.jpg";
import ProductCard from "@/components/ProductCard";
import { products, offers, perfumes } from "@/data/products";
import { INSTAGRAM_URL, waLink } from "@/lib/whatsapp";

const Index = () => {
  const featured = products.slice(0, 4);
  const trending = offers.slice(0, 4);
  const featuredPerfumes = perfumes.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Kumari Fashion campaign" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-radial-red opacity-60" />
        </div>

        <div className="relative container py-20 md:py-32">
          <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <p className="font-luxury text-accent text-sm md:text-base tracking-[0.4em] mb-4">★ EST. ICONIC ★</p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-3">
              <span
                className="distressed"
                style={{
                  background: "linear-gradient(135deg, hsl(0 100% 70%) 0%, hsl(0 95% 60%) 50%, hsl(15 100% 65%) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  filter: "drop-shadow(0 0 30px hsl(0 100% 60% / 0.6))",
                }}
              >
                KUMARI
              </span>
              <br />
              <span className="text-foreground">FASHION</span>
            </h1>
            <p className="font-display text-2xl md:text-4xl tracking-widest mb-2">
              <span className="text-foreground">MEN'S</span> <span className="text-primary">WEAR</span>
            </p>
            <p className="font-luxury text-lg md:text-2xl text-gradient-luxury mb-8">ONE WORLD · ONE FASHION</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/mens" className="bg-gradient-primary text-primary-foreground font-display tracking-widest px-7 py-3.5 text-lg hover:opacity-90 transition shadow-glow">
                SHOP MEN'S
              </Link>
              <Link to="/offers" className="border-2 border-primary text-primary font-display tracking-widest px-7 py-3.5 text-lg hover:bg-primary hover:text-primary-foreground transition">
                🔥 OFFERS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE TAGLINES */}
      <div className="bg-gradient-primary text-primary-foreground py-4 overflow-hidden border-y border-primary-deep">
        <div className="flex animate-marquee whitespace-nowrap font-display text-xl md:text-2xl tracking-widest">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 pr-12">
              <span>★ NO.1 FASHION BRAND</span>
              <span>★ ONLY FASHION BRAND</span>
              <span>★ ORDINARY PERSON WILL CHANGE INTO A MODEL AT KUMARI FASHION</span>
              <span>★ FREE DELIVERY AVAILABLE</span>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED MEN'S */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-accent font-luxury tracking-[0.3em] text-sm mb-2">★ COLLECTION</p>
            <h2 className="font-display text-4xl md:text-6xl">MEN'S <span className="text-gradient-red">WEAR</span></h2>
          </div>
          <Link to="/mens" className="hidden md:inline font-display tracking-widest text-sm border-b-2 border-primary pb-1 hover:text-primary">VIEW ALL →</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* OFFER BANNER */}
      <section className="container">
        <Link to="/offers" className="block relative overflow-hidden border-2 border-primary group">
          <div className="bg-gradient-primary p-10 md:p-16 text-center">
            <Flame className="h-10 w-10 mx-auto mb-3 text-accent" />
            <p className="font-display text-3xl md:text-5xl text-primary-foreground mb-2">MEGA SALE — UP TO 60% OFF</p>
            <p className="font-luxury text-primary-foreground/90 tracking-widest">5 PIECES @ ₹1000 · LIMITED TIME</p>
            <span className="inline-block mt-5 bg-foreground text-background font-display tracking-widest px-6 py-2 group-hover:scale-105 transition-transform">SHOP OFFERS →</span>
          </div>
        </Link>
      </section>

      {/* TRENDING */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-accent font-luxury tracking-[0.3em] text-sm mb-2">★ TRENDING NOW</p>
            <h2 className="font-display text-4xl md:text-6xl"><span className="text-gradient-red">HOT</span> STYLES</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {trending.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* PERFUMES */}
      <section className="container pb-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-accent font-luxury tracking-[0.3em] text-sm mb-2">★ SIGNATURE SCENTS</p>
            <h2 className="font-display text-4xl md:text-6xl"><span className="text-gradient-red">PERFUMES</span></h2>
          </div>
          <Link to="/perfumes" className="hidden md:inline font-display tracking-widest text-sm border-b-2 border-primary pb-1 hover:text-primary">VIEW ALL →</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredPerfumes.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* CTAs */}
      <section className="container pb-20 grid md:grid-cols-2 gap-5">
        <a href={waLink("Hi Kumari Fashion, I want to know more about your collections.")} target="_blank" rel="noreferrer" className="group bg-card border border-border p-8 hover:border-primary transition flex items-center gap-5">
          <div className="h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-110 transition">
            <MessageCircle className="h-7 w-7 text-white" fill="white" />
          </div>
          <div>
            <h3 className="font-display text-2xl tracking-wider">CHAT ON WHATSAPP</h3>
            <p className="text-muted-foreground text-sm">Talk to us · 8438235691</p>
          </div>
        </a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="group bg-card border border-border p-8 hover:border-primary transition flex items-center gap-5">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] flex items-center justify-center shrink-0 group-hover:scale-110 transition">
            <Instagram className="h-7 w-7 text-white" />
          </div>
          <div>
            <h3 className="font-display text-2xl tracking-wider">FOLLOW ON INSTAGRAM</h3>
            <p className="text-muted-foreground text-sm">@kumari__fashion</p>
          </div>
        </a>
      </section>

      {/* TRUST */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { Icon: ShieldCheck, t: "100% Secure Payments" },
            { Icon: Truck, t: "Fast Delivery Available" },
            { Icon: Sparkles, t: "Premium Quality" },
            { Icon: Flame, t: "Trending Styles" },
          ].map(({ Icon, t }) => (
            <div key={t} className="flex flex-col items-center gap-2">
              <Icon className="h-7 w-7 text-primary" />
              <p className="font-display tracking-widest text-sm">{t}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Index;
