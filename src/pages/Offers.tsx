import ProductCard from "@/components/ProductCard";
import { offers } from "@/data/products";
import { Flame } from "lucide-react";

const Offers = () => (
  <div>
    <section className="bg-gradient-primary text-primary-foreground py-14 text-center border-b-2 border-primary-deep">
      <Flame className="h-10 w-10 mx-auto mb-2 text-accent" />
      <p className="font-luxury tracking-[0.3em] text-sm mb-2">★ MEGA SALE ★</p>
      <h1 className="font-display text-5xl md:text-7xl distressed">OFFERS & DEALS</h1>
      <p className="mt-3 tracking-widest">UP TO 60% OFF · LIMITED TIME</p>
    </section>
    <div className="container py-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
      {offers.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  </div>
);

export default Offers;