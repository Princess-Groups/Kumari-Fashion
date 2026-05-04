import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const OrderConfirmed = () => {
  const [params] = useSearchParams();
  const id = params.get("id");
  const total = params.get("total");
  return (
    <div className="container py-20 text-center max-w-xl">
      <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-primary shadow-glow mb-5">
        <CheckCircle2 className="h-10 w-10 text-primary-foreground" />
      </div>
      <h1 className="font-display text-4xl md:text-5xl mb-3">ORDER <span className="text-gradient-red">PLACED!</span></h1>
      <p className="text-muted-foreground mb-6">Thank you for shopping with Kumari Fashion. Your order details have been sent to us on WhatsApp.</p>
      <div className="bg-card border border-border p-5 inline-block min-w-[260px]">
        <p className="text-xs font-display tracking-widest text-muted-foreground">ORDER ID</p>
        <p className="font-display text-2xl text-primary">{id}</p>
        {total && (
          <>
            <div className="border-t border-border my-3" />
            <p className="text-xs font-display tracking-widest text-muted-foreground">AMOUNT</p>
            <p className="font-display text-2xl">₹{total}</p>
          </>
        )}
        <p className="mt-3 text-xs text-accent font-display tracking-widest">PAYMENT · PENDING VERIFICATION</p>
      </div>
      <div className="mt-8">
        <Link to="/" className="inline-block bg-gradient-primary text-primary-foreground font-display tracking-widest px-7 py-3 shadow-glow">CONTINUE SHOPPING</Link>
      </div>
    </div>
  );
};

export default OrderConfirmed;