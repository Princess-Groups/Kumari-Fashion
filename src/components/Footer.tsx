import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react";
import { ADDRESS, INSTAGRAM_URL, WA_DISPLAY, waLink } from "@/lib/whatsapp";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border/60 bg-secondary/30 mt-20">
    <div className="container py-14 grid md:grid-cols-3 gap-10">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="Kumari Fashion" className="h-14 w-auto" />
          <div>
            <div className="font-display text-2xl text-gradient-red">KUMARI FASHION</div>
            <div className="font-luxury text-xs text-accent">ONE WORLD · ONE FASHION</div>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">Premium men's wear that turns ordinary into iconic.</p>
      </div>
      <div>
        <h4 className="font-display text-xl mb-4 tracking-widest">VISIT US</h4>
        <p className="flex items-start gap-3 text-sm text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
          {ADDRESS}
        </p>
        <p className="flex items-center gap-3 text-sm text-muted-foreground">
          <Phone className="h-4 w-4 text-primary" />
          {WA_DISPLAY}
        </p>
      </div>
      <div>
        <h4 className="font-display text-xl mb-4 tracking-widest">CONNECT</h4>
        <div className="flex flex-col gap-3">
          <a href={waLink("Hi Kumari Fashion, I want to know more about your collections.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-sm hover:text-primary transition-colors">
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-sm hover:text-primary transition-colors">
            <Instagram className="h-4 w-4" /> @kumari__fashion
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} KUMARI FASHION · Designed for the bold.
    </div>
  </footer>
);

export default Footer;