import ProductCard from "@/components/ProductCard";
import { perfumes } from "@/data/products";

const Perfumes = () => (
  <div className="container py-12 md:py-16">
    <div className="text-center mb-10">
      <p className="text-accent font-luxury tracking-[0.3em] text-sm mb-2">★ COLLECTION</p>
      <h1 className="font-display text-5xl md:text-7xl"><span className="text-gradient-red">PERFUMES</span></h1>
      <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Signature scents · Long-lasting fragrance · Premium quality.</p>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {perfumes.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  </div>
);

export default Perfumes;
