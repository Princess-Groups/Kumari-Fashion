import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const tabs = [
  { id: "all", label: "ALL" },
  { id: "shirt", label: "SHIRTS" },
  { id: "pant", label: "PANTS" },
  { id: "tshirt", label: "T-SHIRTS" },
] as const;

const Mens = () => {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("all");
  const list = tab === "all" ? products : products.filter((p) => p.category === tab);
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-10">
        <p className="text-accent font-luxury tracking-[0.3em] text-sm mb-2">★ COLLECTION</p>
        <h1 className="font-display text-5xl md:text-7xl"><span className="text-gradient-red">MEN'S WEAR</span></h1>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Crafted for the bold. Premium fits, runway-ready every day.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`font-display tracking-widest px-5 py-2.5 text-sm border transition-all ${tab === t.id ? "bg-gradient-primary text-primary-foreground border-primary shadow-glow" : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {list.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
};

export default Mens;