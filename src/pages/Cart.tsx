import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { calcShipping } from "@/lib/shipping";

const Cart = () => {
  const { items, setQty, remove, total } = useCart();
  const shipping = total > 0 ? calcShipping(total) : 0;
  const grand = total + shipping;

  if (items.length === 0) {
    return (
      <div className="container py-24 text-center">
        <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
        <h1 className="font-display text-4xl mb-3">YOUR CART IS EMPTY</h1>
        <p className="text-muted-foreground mb-6">Discover the latest drops.</p>
        <Link to="/mens" className="inline-block bg-gradient-primary text-primary-foreground font-display tracking-widest px-7 py-3 shadow-glow">SHOP NOW</Link>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <h1 className="font-display text-4xl md:text-5xl mb-8">YOUR <span className="text-gradient-red">CART</span></h1>
      <div className="grid lg:grid-cols-[1fr_380px] gap-8">
        <div className="space-y-3">
          {items.map((it) => (
            <div key={it.id} className="flex gap-4 bg-card border border-border p-3">
              <img src={it.image} alt={it.name} loading="lazy" className="h-28 w-24 object-cover" />
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg tracking-wide truncate">{it.name}</h3>
                {it.pieces && <p className="text-xs text-muted-foreground">{it.pieces} pieces</p>}
                <p className="text-primary font-display text-xl mt-1">₹{it.price}</p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center border border-border">
                    <button onClick={() => setQty(it.id, it.qty - 1)} className="p-2 hover:bg-secondary"><Minus className="h-3 w-3" /></button>
                    <span className="px-4 font-display">{it.qty}</span>
                    <button onClick={() => setQty(it.id, it.qty + 1)} className="p-2 hover:bg-secondary"><Plus className="h-3 w-3" /></button>
                  </div>
                  <button onClick={() => remove(it.id)} className="text-muted-foreground hover:text-primary"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
              <div className="text-right font-display text-xl">₹{it.price * it.qty}</div>
            </div>
          ))}
        </div>
        <div className="bg-card border border-border p-6 h-fit lg:sticky lg:top-24">
          <h2 className="font-display text-2xl tracking-widest mb-4">ORDER SUMMARY</h2>
          <div className="flex justify-between text-sm mb-2"><span className="text-muted-foreground">Subtotal</span><span>₹{total}</span></div>
          <div className="flex justify-between text-sm mb-2"><span className="text-muted-foreground">Shipping</span><span>₹{shipping}</span></div>
          <p className="text-[10px] text-muted-foreground mb-3">₹50 below ₹3000 · ₹100 for ₹3000 and above</p>
          <div className="border-t border-border my-4" />
          <div className="flex justify-between font-display text-2xl mb-5"><span>TOTAL</span><span className="text-primary">₹{grand}</span></div>
          <Link to="/checkout" className="block text-center bg-gradient-primary text-primary-foreground font-display tracking-widest py-3.5 shadow-glow hover:opacity-90">CHECKOUT</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;