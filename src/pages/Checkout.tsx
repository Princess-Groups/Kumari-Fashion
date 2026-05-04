import { useMemo, useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { UPI_ID, waLink } from "@/lib/whatsapp";
import { calcShipping } from "@/lib/shipping";
import { allProducts, perfumes, type Product } from "@/data/products";
import qr from "@/assets/qr.png";
import { Copy, ShieldCheck, Upload, Minus, Plus } from "lucide-react";
import { toast } from "sonner";

const SIZES = ["S", "M", "L", "XL"] as const;

const findProduct = (id: string): Product | undefined =>
  [...allProducts, ...perfumes].find((p) => p.id === id);

const Checkout = () => {
  const { items: cartItems, total: cartTotal, clear } = useCart();
  const nav = useNavigate();
  const [params] = useSearchParams();
  const buyId = params.get("buy");
  const buyProduct = buyId ? findProduct(buyId) : undefined;
  const isDirect = !!buyProduct;

  const [step, setStep] = useState<"details" | "pay">("details");
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState<string>("");
  const [txn, setTxn] = useState("");
  const [screenshotName, setScreenshotName] = useState("");

  const needsSize = !!buyProduct && (buyProduct.category === "shirt" || buyProduct.category === "pant" || buyProduct.category === "tshirt" || buyProduct.category === "offer");

  const lineItems = useMemo(() => {
    if (isDirect && buyProduct) {
      return [{ ...buyProduct, qty, size: needsSize ? size : undefined }];
    }
    return cartItems.map((i) => ({ ...i, size: undefined as string | undefined }));
  }, [isDirect, buyProduct, qty, size, needsSize, cartItems]);

  const subtotal = useMemo(
    () => lineItems.reduce((s, i) => s + i.price * i.qty, 0),
    [lineItems]
  );
  const shipping = subtotal > 0 ? calcShipping(subtotal) : 0;
  const grandTotal = subtotal + shipping;

  if (!isDirect && cartItems.length === 0) {
    return (
      <div className="container py-24 text-center">
        <p className="text-muted-foreground mb-4">Your cart is empty.</p>
        <Link to="/mens" className="inline-block bg-gradient-primary text-primary-foreground font-display tracking-widest px-6 py-3">SHOP NOW</Link>
      </div>
    );
  }

  const submitDetails = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) return toast.error("Please fill all fields");
    if (needsSize && !size) return toast.error("Please select a size");
    setStep("pay");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const confirmPaid = () => {
    if (!txn) return toast.error("Enter transaction ID");
    const orderId = "KF" + Date.now().toString().slice(-7);
    const productsList = lineItems
      .map((i) => `• ${i.name}${i.size ? ` (Size: ${i.size})` : ""} x${i.qty} — ₹${i.price * i.qty}`)
      .join("\n");
    const msg =
`Hi Kumari Fashion, I placed an order.

Order ID: ${orderId}

Order Details:
${productsList}

Subtotal: ₹${subtotal}
Shipping: ₹${shipping}
Total Amount: ₹${grandTotal}

Payment done via UPI.
Transaction ID: ${txn}

Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}`;
    window.open(waLink(msg), "_blank");
    toast.success("Order placed! Redirecting to WhatsApp…");
    if (!isDirect) clear();
    nav(`/order-confirmed?id=${orderId}&total=${grandTotal}`);
  };

  return (
    <div className="container py-12 max-w-5xl">
      <h1 className="font-display text-4xl md:text-5xl mb-8">SECURE <span className="text-gradient-red">CHECKOUT</span></h1>

      <div className="flex gap-2 mb-8 text-xs font-display tracking-widest">
        {[
          { k: "details", n: "1 · DETAILS" },
          { k: "pay", n: "2 · PAYMENT" },
        ].map((s, i) => (
          <div key={s.k} className={`flex-1 py-2.5 text-center border ${step === s.k ? "bg-primary text-primary-foreground border-primary" : i === 0 && step === "pay" ? "border-primary text-primary" : "border-border text-muted-foreground"}`}>{s.n}</div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-8">
        <div>
          {step === "details" && (
            <form onSubmit={submitDetails} className="bg-card border border-border p-6 space-y-4">
              <h2 className="font-display text-2xl tracking-widest mb-2">DELIVERY DETAILS</h2>
              <Field label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Phone Number" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} type="tel" />
              <Field label="Full Address" value={form.address} onChange={(v) => setForm({ ...form, address: v })} multiline />

              {isDirect && buyProduct && (
                <div className="space-y-4 pt-2 border-t border-border">
                  <div>
                    <span className="font-display text-xs tracking-widest text-muted-foreground">PRODUCT</span>
                    <p className="mt-1.5">{buyProduct.name} — ₹{buyProduct.price}</p>
                  </div>
                  {needsSize && (
                    <div>
                      <span className="font-display text-xs tracking-widest text-muted-foreground">SIZE</span>
                      <div className="flex gap-2 mt-2">
                        {SIZES.map((s) => (
                          <button
                            type="button"
                            key={s}
                            onClick={() => setSize(s)}
                            className={`h-10 w-12 border font-display text-sm transition ${size === s ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"}`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  <div>
                    <span className="font-display text-xs tracking-widest text-muted-foreground">QUANTITY</span>
                    <div className="flex items-center border border-border w-fit mt-2">
                      <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-2.5 hover:bg-secondary"><Minus className="h-3.5 w-3.5" /></button>
                      <span className="px-5 font-display">{qty}</span>
                      <button type="button" onClick={() => setQty((q) => q + 1)} className="p-2.5 hover:bg-secondary"><Plus className="h-3.5 w-3.5" /></button>
                    </div>
                  </div>
                </div>
              )}

              <button className="w-full bg-gradient-primary text-primary-foreground font-display tracking-widest py-3.5 shadow-glow hover:opacity-90">CONTINUE TO PAYMENT</button>
            </form>
          )}

          {step === "pay" && (
            <div className="space-y-5">
              <div className="bg-card border border-border p-6 text-center">
                <h2 className="font-display text-2xl tracking-widest mb-1">SCAN & PAY VIA UPI</h2>
                <p className="text-muted-foreground text-sm mb-5">Scan and complete payment of ₹{grandTotal}</p>
                <div className="inline-block bg-white p-4 rounded-sm shadow-elegant">
                  <img src={qr} alt="UPI QR Code" className="w-56 h-56 object-contain" />
                </div>
                <div className="mt-5 inline-flex items-center gap-3 bg-secondary border border-border px-4 py-2.5">
                  <span className="font-mono text-sm">{UPI_ID}</span>
                  <button
                    onClick={() => { navigator.clipboard.writeText(UPI_ID); toast.success("UPI ID copied"); }}
                    className="text-primary hover:opacity-80"
                    aria-label="Copy UPI ID"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-3 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-accent" /> 100% Secure Payment
                </p>
              </div>

              <div className="bg-card border border-border p-6 space-y-4">
                <h3 className="font-display text-xl tracking-widest">CONFIRM YOUR PAYMENT</h3>
                <Field label="Transaction ID / UTR" value={txn} onChange={setTxn} />
                <label className="block">
                  <span className="font-display text-xs tracking-widest text-muted-foreground">PAYMENT SCREENSHOT (OPTIONAL)</span>
                  <div className="mt-2 border-2 border-dashed border-border hover:border-primary transition p-5 text-center cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setScreenshotName(e.target.files?.[0]?.name || "")}
                      className="hidden"
                      id="screenshot"
                    />
                    <label htmlFor="screenshot" className="cursor-pointer flex flex-col items-center gap-1 text-sm text-muted-foreground">
                      <Upload className="h-5 w-5" />
                      {screenshotName || "Click to upload screenshot"}
                    </label>
                  </div>
                </label>
                <button
                  onClick={confirmPaid}
                  className="w-full bg-gradient-primary text-primary-foreground font-display tracking-widest py-3.5 shadow-glow hover:opacity-90"
                >
                  ✓ I HAVE PAID — SEND ON WHATSAPP
                </button>
                <p className="text-xs text-muted-foreground text-center">Your order will be confirmed via WhatsApp instantly.</p>
              </div>
            </div>
          )}
        </div>

        <aside className="bg-card border border-border p-6 h-fit lg:sticky lg:top-24">
          <h2 className="font-display text-xl tracking-widest mb-4">ORDER SUMMARY</h2>
          <div className="space-y-3 max-h-72 overflow-auto pr-1">
            {lineItems.map((i) => (
              <div key={i.id} className="flex gap-3 text-sm">
                <img src={i.image} alt={i.name} loading="lazy" className="h-14 w-12 object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="truncate">{i.name}</p>
                  <p className="text-muted-foreground text-xs">
                    Qty {i.qty}{i.size ? ` · ${i.size}` : ""}
                  </p>
                </div>
                <p className="font-display">₹{i.price * i.qty}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-border my-4" />
          <div className="flex justify-between text-sm mb-1.5"><span className="text-muted-foreground">Subtotal</span><span>₹{subtotal}</span></div>
          <div className="flex justify-between text-sm mb-3"><span className="text-muted-foreground">Shipping</span><span>₹{shipping}</span></div>
          <div className="flex justify-between font-display text-2xl"><span>TOTAL</span><span className="text-primary">₹{grandTotal}</span></div>
          <p className="text-[10px] text-muted-foreground mt-2">Shipping: ₹50 below ₹3000 · ₹100 for ₹3000 and above</p>
        </aside>
      </div>
    </div>
  );
};

const Field = ({
  label, value, onChange, type = "text", multiline = false,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; multiline?: boolean }) => (
  <label className="block">
    <span className="font-display text-xs tracking-widest text-muted-foreground">{label.toUpperCase()}</span>
    {multiline ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className="mt-1.5 w-full bg-input border border-border focus:border-primary outline-none px-3 py-2.5 text-sm transition"
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full bg-input border border-border focus:border-primary outline-none px-3 py-2.5 text-sm transition"
      />
    )}
  </label>
);

export default Checkout;
