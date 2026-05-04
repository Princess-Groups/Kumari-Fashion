import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const WhatsAppFloat = () => (
  <a
    href={waLink("Hi Kumari Fashion, I want to order your products.")}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-glow hover:scale-110 transition-transform animate-glow-pulse"
  >
    <MessageCircle className="h-7 w-7" fill="white" />
  </a>
);

export default WhatsAppFloat;