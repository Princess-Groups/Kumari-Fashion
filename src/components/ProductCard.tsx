import { useNavigate } from "react-router-dom";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Zap } from "lucide-react";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: Product }) => {
  const { add } = useCart();
  const navigate = useNavigate();
  const buyNow = () => navigate(`/checkout?buy=${product.id}`);
  return (
    <div className="group relative bg-card border border-border/60 overflow-hidden hover:border-primary/70 transition-all duration-500 hover:shadow-card-premium hover:-translate-y-1">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-gradient-primary text-primary-foreground text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-sm shadow-glow">
            {product.badge}
          </span>
        )}
        {product.pieces && (
          <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-sm">
            {product.pieces} PCS
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-3 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-background via-background/90 to-transparent">
          <button
            onClick={() => { add(product); toast.success(`${product.name} added to cart`); }}
            className="flex-1 bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-bold tracking-widest py-2.5 transition-colors flex items-center justify-center gap-1.5"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> ADD
          </button>
          <button
            onClick={buyNow}
            className="flex-1 bg-gradient-primary text-primary-foreground text-xs font-bold tracking-widest py-2.5 flex items-center justify-center gap-1.5 hover:opacity-90"
          >
            <Zap className="h-3.5 w-3.5" /> BUY NOW
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg tracking-wide truncate">{product.name}</h3>
        {product.volume && <p className="text-xs text-muted-foreground">{product.volume}</p>}
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-primary font-display text-xl">₹{product.price}</span>
          {product.oldPrice && (
            <span className="text-muted-foreground text-sm line-through">₹{product.oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;