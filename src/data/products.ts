import shirt1 from "@/assets/shirt-1.jpg";
import shirt2 from "@/assets/shirt-2.jpg";
import shirt3 from "@/assets/shirt-3.jpg";
import pants1 from "@/assets/pants-1.jpg";
import pants2 from "@/assets/pants-2.jpg";
import baggy from "@/assets/baggy.jpg";
import tshirt from "@/assets/tshirt.jpg";
import jeans from "@/assets/jeans.jpg";
import track from "@/assets/track.jpg";
import shoe from "@/assets/shoe.jpg";
import momfit from "@/assets/momfit.jpg";
import shorts from "@/assets/shorts.jpg";
import fullhand from "@/assets/fullhand.jpg";
import modernShirt from "@/assets/modern-shirt.jpg";
import m1 from "@/assets/mens/m1.jpeg";
import m2 from "@/assets/mens/m2.jpeg";
import m3 from "@/assets/mens/m3.jpeg";
import m4 from "@/assets/mens/m4.jpeg";
import m5 from "@/assets/mens/m5.jpeg";
import m6 from "@/assets/mens/m6.jpeg";
import m7 from "@/assets/mens/m7.jpeg";
import m8 from "@/assets/mens/m8.jpeg";
import m9 from "@/assets/mens/m9.jpeg";
import m10 from "@/assets/mens/m10.jpeg";
import m11 from "@/assets/mens/m11.jpeg";
import m12 from "@/assets/mens/m12.jpeg";
import m13 from "@/assets/mens/m13.jpeg";
import m14 from "@/assets/mens/m14.jpeg";
import m15 from "@/assets/mens/m15.jpeg";
import m16 from "@/assets/mens/m16.jpeg";
import m17 from "@/assets/mens/m17.jpeg";
import m18 from "@/assets/mens/m18.jpeg";
import m19 from "@/assets/mens/m19.jpeg";
import m20 from "@/assets/mens/m20.jpeg";
import m21 from "@/assets/mens/m21.jpeg";
import m22 from "@/assets/mens/m22.jpeg";
import m23 from "@/assets/mens/m23.jpeg";
import m24 from "@/assets/mens/m24.jpeg";
import m25 from "@/assets/mens/m25.jpeg";
import m26 from "@/assets/mens/m26.jpeg";
import m27 from "@/assets/mens/m27.jpeg";
import m28 from "@/assets/mens/m28.jpeg";
import m29 from "@/assets/mens/m29.jpeg";
import m30 from "@/assets/mens/m30.jpeg";
import m31 from "@/assets/mens/m31.jpeg";
import m32 from "@/assets/mens/m32.jpeg";
import m33 from "@/assets/mens/m33.jpeg";
import m34 from "@/assets/mens/m34.jpeg";
import m35 from "@/assets/mens/m35.jpeg";
import perfKobara from "@/assets/perfumes/kobara.jpeg";
import perf7savl from "@/assets/perfumes/7savl.jpeg";
import perfChocolate from "@/assets/perfumes/chocolate.jpeg";
import perfDone from "@/assets/perfumes/done.jpeg";
import perfDost from "@/assets/perfumes/dost.jpeg";
import perfSabayaMeena from "@/assets/perfumes/sabaya-meena.jpeg";
import perfSabayaAlmas from "@/assets/perfumes/sabaya-almas.jpeg";
import perfBlueLady from "@/assets/perfumes/blue-lady.jpeg";
import perfMorquis from "@/assets/perfumes/morquis.jpeg";
import perfMyDarling from "@/assets/perfumes/my-darling.jpeg";
import perfThunderHeart from "@/assets/perfumes/thunder-heart.jpeg";
import perfIceberg from "@/assets/perfumes/iceberg.jpeg";
import perfSultanOman from "@/assets/perfumes/sultan-oman.jpeg";
import perfDoves from "@/assets/perfumes/doves.jpeg";
import perfLM10 from "@/assets/perfumes/lm10.jpeg";
import perfSolid from "@/assets/perfumes/solid.jpeg";
import perfSKLondon from "@/assets/perfumes/sk-london.jpeg";
import perfElPaso from "@/assets/perfumes/el-paso.jpeg";
import perfAmeerAlOud from "@/assets/perfumes/ameer-al-oud.jpeg";
import perfDirham from "@/assets/perfumes/dirham.jpeg";
import perfP21 from "@/assets/perfumes/p21.jpeg";
import perfP22 from "@/assets/perfumes/p22.jpeg";
import perfP23 from "@/assets/perfumes/p23.jpeg";
import perfP24 from "@/assets/perfumes/p24.jpeg";
import perfP25 from "@/assets/perfumes/p25.jpeg";
import perfP26 from "@/assets/perfumes/p26.jpeg";
import perfP27 from "@/assets/perfumes/p27.jpeg";
import perfP28 from "@/assets/perfumes/p28.jpeg";
import perfP29 from "@/assets/perfumes/p29.jpeg";
import perfP30 from "@/assets/perfumes/p30.jpeg";
import perfP31 from "@/assets/perfumes/p31.jpeg";
import perfP32 from "@/assets/perfumes/p32.jpeg";
import perfP33 from "@/assets/perfumes/p33.jpeg";
import perfP34 from "@/assets/perfumes/p34.jpeg";
import perfP35 from "@/assets/perfumes/p35.jpeg";
import perfP36 from "@/assets/perfumes/p36.jpeg";
import perfP37 from "@/assets/perfumes/p37.jpeg";
import perfP38 from "@/assets/perfumes/p38.jpeg";
import perfP39 from "@/assets/perfumes/p39.jpeg";
import perfP40 from "@/assets/perfumes/p40.jpeg";
import perfP41 from "@/assets/perfumes/p41.jpeg";
import perfP42 from "@/assets/perfumes/p42.jpeg";
import perfP43 from "@/assets/perfumes/p43.jpeg";
import perfP44 from "@/assets/perfumes/p44.jpeg";
import perfP45 from "@/assets/perfumes/p45.jpeg";
import perfP46 from "@/assets/perfumes/p46.jpeg";
import perfP47 from "@/assets/perfumes/p47.jpeg";
import perfP48 from "@/assets/perfumes/p48.jpeg";
import perfP49 from "@/assets/perfumes/p49.jpeg";
import perfP50 from "@/assets/perfumes/p50.jpeg";
import perfP51 from "@/assets/perfumes/p51.jpeg";
import perfP52 from "@/assets/perfumes/p52.jpeg";
import perfP53 from "@/assets/perfumes/p53.jpeg";
import perfP54 from "@/assets/perfumes/p54.jpeg";
import perfP55 from "@/assets/perfumes/p55.jpeg";
import perfP56 from "@/assets/perfumes/p56.jpeg";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "shirt" | "pant" | "tshirt" | "offer" | "perfume";
  pieces?: number;
  badge?: string;
  oldPrice?: number;
  sizes?: string[];
  volume?: string;
};

export const products: Product[] = [
  { id: "m1", name: "Dark Acid-Wash Wide-Leg Jeans", price: 950, image: m1, category: "pant", badge: "NEW", sizes: ["S","M","L","XL"] },
  { id: "m2", name: "Vintage Tinted Baggy Jeans", price: 950, image: m2, category: "pant", sizes: ["S","M","L","XL"] },
  { id: "m3", name: "Light Blue Wide-Leg Jeans", price: 950, image: m3, category: "pant", sizes: ["S","M","L","XL"] },
  { id: "m4", name: "Grey Acid-Wash Straight Jeans", price: 950, image: m4, category: "pant", sizes: ["S","M","L","XL"] },
  { id: "m5", name: "Mid-Blue Relaxed Fit Jeans", price: 950, image: m5, category: "pant", sizes: ["S","M","L","XL"] },
  { id: "m6", name: "Premium Barrel-Leg Jeans", price: 1200, image: m6, category: "pant", badge: "PREMIUM", sizes: ["S","M","L","XL"] },
  { id: "m7", name: "Designer Panelled Baggy Jeans", price: 1200, image: m7, category: "pant", badge: "PREMIUM", sizes: ["S","M","L","XL"] },
  { id: "m8", name: "Juventus Jeep Football Jersey", price: 400, image: m8, category: "tshirt", sizes: ["S","M","L","XL"] },
  { id: "m9", name: "Balenciaga Polo T-Shirt", price: 800, image: m9, category: "tshirt", sizes: ["S","M","L","XL"] },
  { id: "m10", name: "New Balance Raglan Tee", price: 650, image: m10, category: "tshirt", sizes: ["S","M","L","XL"] },
  { id: "m11", name: "Sarf & Guril Purple Floral Shirt", price: 500, image: m11, category: "shirt", sizes: ["S","M","L","XL"], badge: "NEW" },
  { id: "m12", name: "Sarf & Guril Beige Floral Shirt", price: 500, image: m12, category: "shirt", sizes: ["S","M","L","XL"] },
  { id: "m13", name: "Brandy Waistd Defender Black Tee", price: 500, image: m13, category: "tshirt", sizes: ["S","M","L","XL"] },
  { id: "m14", name: "Winitewme Defender Red Tee", price: 500, image: m14, category: "tshirt", sizes: ["S","M","L","XL"] },
  { id: "m15", name: "Ezcoby Hot Wheels Lime Tee", price: 400, image: m15, category: "tshirt", sizes: ["S","M","L","XL"] },
  { id: "m16", name: "E2coby John Cena Champ Tee", price: 400, image: m16, category: "tshirt", sizes: ["S","M","L","XL"], badge: "TRENDING" },
  { id: "m17", name: "Ezcoby Civil War Green Tee", price: 400, image: m17, category: "tshirt", sizes: ["S","M","L","XL"] },
  { id: "m18", name: "Escoby Golf Maroon Tee", price: 400, image: m18, category: "tshirt", sizes: ["S","M","L","XL"] },
  { id: "m19", name: "Civil War Captain America Graphic Tee", price: 950, image: m19, category: "tshirt", sizes: ["S","M","L","XL"], badge: "PREMIUM" },
  { id: "m20", name: "Ezcoby Golf Tyler Oversized Tee", price: 950, image: m20, category: "tshirt", sizes: ["S","M","L","XL"], badge: "PREMIUM" },
  { id: "m21", name: "LSeven Grey Embroidered Floral Shirt", price: 950, image: m21, category: "shirt", sizes: ["S","M","L","XL"], badge: "PREMIUM" },
  { id: "m22", name: "PC United Blue Watercolor Print Shirt", price: 950, image: m22, category: "shirt", sizes: ["S","M","L","XL"], badge: "PREMIUM" },
  { id: "m23", name: "Embroidered Khaki Organic Cotton Shirt", price: 800, image: m23, category: "shirt", sizes: ["S","M","L","XL"] },
  { id: "m24", name: "LSeven Olive Embroidered Floral Shirt", price: 850, image: m24, category: "shirt", sizes: ["S","M","L","XL"] },
  { id: "m25", name: "Black Monochrome Floral Print Shirt", price: 850, image: m25, category: "shirt", sizes: ["S","M","L","XL"] },
  { id: "m26", name: "Brown Bold Floral Studded Shirt", price: 850, image: m26, category: "shirt", sizes: ["S","M","L","XL"] },
  { id: "m27", name: "American Psycho Gingham Half-Sleeve Shirt", price: 600, image: m27, category: "shirt", sizes: ["S","M","L","XL"] },
  { id: "m28", name: "Green Daisy Embroidered Shirt", price: 600, image: m28, category: "shirt", sizes: ["S","M","L","XL"] },
  { id: "m29", name: "Tokyo Man Mid 90's Box Fit Shirt", price: 600, image: m29, category: "shirt", sizes: ["S","M","L","XL"] },
  { id: "m30", name: "Tokyo Man Nippon Art Gingham Shirt", price: 600, image: m30, category: "shirt", sizes: ["S","M","L","XL"] },
  { id: "m31", name: "Saiya Mira Green Gingham Half-Sleeve Shirt", price: 650, image: m31, category: "shirt", sizes: ["S","M","L","XL"], badge: "NEW" },
  { id: "m32", name: "PC United Brown Daisy Embroidered Shirt", price: 950, image: m32, category: "shirt", sizes: ["S","M","L","XL"], badge: "PREMIUM" },
  { id: "m33", name: "L7 Ferrari Maroon Gingham Half-Sleeve Shirt", price: 950, image: m33, category: "shirt", sizes: ["S","M","L","XL"], badge: "PREMIUM" },
  { id: "m34", name: "Tokyo Man Palm Beach Gingham Shirt", price: 950, image: m34, category: "shirt", sizes: ["S","M","L","XL"], badge: "PREMIUM" },
  { id: "m35", name: "Black Botanical Embroidered Half-Sleeve Shirt", price: 950, image: m35, category: "shirt", sizes: ["S","M","L","XL"], badge: "PREMIUM" },
];

export const offers: Product[] = [
  { id: "o1", name: "Casual Shirt Plain", price: 1000, oldPrice: 1995, image: shirt1, category: "offer", pieces: 5, badge: "50% OFF" },
  { id: "o2", name: "Jeans Pant", price: 1000, oldPrice: 2400, image: jeans, category: "offer", pieces: 4, badge: "58% OFF" },
  { id: "o3", name: "Baggy Pant", price: 700, oldPrice: 1199, image: baggy, category: "offer", pieces: 1, badge: "HOT" },
  { id: "o4", name: "Modern Shirt", price: 650, oldPrice: 1199, image: modernShirt, category: "offer", pieces: 1 },
  { id: "o5", name: "Track Pant", price: 1000, oldPrice: 2495, image: track, category: "offer", pieces: 5, badge: "60% OFF" },
  { id: "o6", name: "T-Shirt", price: 1000, oldPrice: 1995, image: tshirt, category: "offer", pieces: 5, badge: "50% OFF" },
  { id: "o7", name: "Modern Shirt", price: 500, oldPrice: 999, image: modernShirt, category: "offer", pieces: 1 },
  { id: "o8", name: "Full Hand T-Shirt", price: 1000, oldPrice: 2196, image: fullhand, category: "offer", pieces: 4, badge: "55% OFF" },
  { id: "o9", name: "Barrel Baggy Pant", price: 600, oldPrice: 1099, image: baggy, category: "offer", pieces: 1 },
  { id: "o10", name: "Baggy Off Short", price: 600, oldPrice: 999, image: shorts, category: "offer", pieces: 1, badge: "TRENDING" },
  { id: "o11", name: "Normal Shoe", price: 300, oldPrice: 699, image: shoe, category: "offer", pieces: 1, badge: "STEAL" },
  { id: "o12", name: "Mom Fit", price: 1000, oldPrice: 2200, image: momfit, category: "offer", pieces: 4, badge: "55% OFF" },
  { id: "o13", name: "Korean Baggy", price: 1000, oldPrice: 2400, image: baggy, category: "offer", pieces: 4, badge: "58% OFF" },
];

export const allProducts = [...products, ...offers];

export const perfumes: Product[] = [
  { id: "pf1", name: "Kobara Apparel Parfum", price: 299, image: perfKobara, category: "perfume", volume: "100ml", badge: "PREMIUM" },
  { id: "pf2", name: "7SAVL Apparel Perfume", price: 299, image: perf7savl, category: "perfume", volume: "100ml" },
  { id: "pf3", name: "SAV Chocolate", price: 299, image: perfChocolate, category: "perfume", volume: "100ml", badge: "BESTSELLER" },
  { id: "pf4", name: "SAV Done", price: 299, image: perfDone, category: "perfume", volume: "100ml" },
  { id: "pf5", name: "SAV Dost High Dost", price: 299, image: perfDost, category: "perfume", volume: "100ml" },
  { id: "pf6", name: "Meena Sabaya Roll On Attar", price: 199, image: perfSabayaMeena, category: "perfume", volume: "8ml" },
  { id: "pf7", name: "Almas Sabaya", price: 149, image: perfSabayaAlmas, category: "perfume", volume: "6ml" },
  { id: "pf8", name: "Al Hiza Blue Lady Roll-On", price: 149, image: perfBlueLady, category: "perfume", volume: "6ml" },
  { id: "pf9", name: "Morquis de Ramés Paris", price: 399, image: perfMorquis, category: "perfume", volume: "100ml", badge: "LUXURY" },
  { id: "pf10", name: "SAV My Darling", price: 299, image: perfMyDarling, category: "perfume", volume: "25ml" },
  { id: "pf11", name: "Riya Thunder Heart EDP", price: 175, image: perfThunderHeart, category: "perfume", volume: "100ml", badge: "NEW" },
  { id: "pf12", name: "Al-Naas Ice Berg Roll-On", price: 100, image: perfIceberg, category: "perfume", volume: "6ml" },
  { id: "pf13", name: "Al-Naas Sultan Oman Roll-On", price: 100, image: perfSultanOman, category: "perfume", volume: "6ml" },
  { id: "pf14", name: "Al-Sas Dove's Roll-On", price: 149, image: perfDoves, category: "perfume", volume: "6ml" },
  { id: "pf15", name: "Al-Sas LM10 Roll-On", price: 100, image: perfLM10, category: "perfume", volume: "6ml" },
  { id: "pf16", name: "Al Alif Solid Roll-On", price: 149, image: perfSolid, category: "perfume", volume: "6ml" },
  { id: "pf17", name: "SK London Apparel Spray", price: 299, image: perfSKLondon, category: "perfume", volume: "100ml" },
  { id: "pf18", name: "El Paso Eau de Toilette", price: 349, image: perfElPaso, category: "perfume", volume: "100ml" },
  { id: "pf19", name: "Ameer Al Oud Original", price: 200, image: perfAmeerAlOud, category: "perfume", volume: "15ml", badge: "PREMIUM" },
  { id: "pf20", name: "Dirham Concentrated Perfume Oil", price: 200, image: perfDirham, category: "perfume", volume: "15ml" },
  { id: "pf21", name: "Signature Cocktail Fragrance Body Spray", price: 299, image: perfP21, category: "perfume", volume: "150ml", badge: "NEW" },
  { id: "pf22", name: "Denim Black DeoMax Deodorant Body Spray", price: 150, image: perfP22, category: "perfume", volume: "150ml" },
  { id: "pf23", name: "Nuroma Infinity Tough Deodorant Body Spray", price: 275, image: perfP23, category: "perfume", volume: "200ml" },
  { id: "pf24", name: "Brut Original Déodorant Spray", price: 190, image: perfP24, category: "perfume", volume: "200ml" },
  { id: "pf25", name: "Park Avenue Cool Blue Fragrance Body Spray", price: 225, image: perfP25, category: "perfume", volume: "150ml" },
  { id: "pf26", name: "Estiara Luxe Western Perfume Spray", price: 200, image: perfP26, category: "perfume", volume: "200ml" },
  { id: "pf27", name: "Beauté Infinity Deodorant Body Spray", price: 250, image: perfP27, category: "perfume", volume: "200ml" },
  { id: "pf28", name: "Just Herbs Oud Green Eau de Parfum", price: 649, image: perfP28, category: "perfume", volume: "50ml", badge: "LUXURY" },
  { id: "pf29", name: "Just Herbs Oud Red Eau de Parfum", price: 649, image: perfP29, category: "perfume", volume: "50ml", badge: "LUXURY" },
  { id: "pf30", name: "Just Herbs Oud Amber Eau de Parfum", price: 649, image: perfP30, category: "perfume", volume: "50ml", badge: "LUXURY" },
  { id: "pf31", name: "CFS Cargo Deodorant Body Spray", price: 220, image: perfP31, category: "perfume", volume: "200ml" },
  { id: "pf32", name: "Bellavita Luxury Perfume Gift Set (4x20ml)", price: 800, image: perfP32, category: "perfume", volume: "4x20ml", badge: "LUXURY" },
  { id: "pf33", name: "DJOKR Every Fragrance Serves A Purpose Set", price: 849, image: perfP33, category: "perfume", volume: "4x20ml", badge: "PREMIUM" },
  { id: "pf34", name: "Set Wet AM/PM Eau de Parfum Gift Set", price: 899, image: perfP34, category: "perfume", volume: "4x20ml", badge: "LUXURY" },
  { id: "pf35", name: "Bellavita Narco & Devil Luxury Combo", price: 798, image: perfP35, category: "perfume", volume: "2x20ml", badge: "COMBO" },
  { id: "pf36", name: "Bellavita CEO Man & White Oud Gift Set", price: 748, image: perfP36, category: "perfume", volume: "2x20ml" },
  { id: "pf37", name: "Bellavita White Oud & Honey Oud Gift Set", price: 890, image: perfP37, category: "perfume", volume: "2x20ml", badge: "PREMIUM" },
  { id: "pf38", name: "Seasons Eau de Parfum Collection (4 Bottles)", price: 1299, image: perfP38, category: "perfume", volume: "4x20ml", badge: "LUXURY" },
  { id: "pf39", name: "Bellavita Skai Aquatic Eau de Cologne", price: 349, image: perfP39, category: "perfume", volume: "20ml" },
  { id: "pf40", name: "Bellavita Date Woman Eau de Parfum", price: 399, image: perfP40, category: "perfume", volume: "20ml", badge: "NEW" },
  { id: "pf41", name: "Bellavita Oud Parfum", price: 449, image: perfP41, category: "perfume", volume: "20ml", badge: "PREMIUM" },
  { id: "pf42", name: "Cobra Attar Free From Alcohol", price: 100, image: perfP42, category: "perfume", volume: "8ml" },
  { id: "pf43", name: "Al-Naas Chocolate Roll On Perfume", price: 100, image: perfP43, category: "perfume", volume: "6ml" },
  { id: "pf44", name: "Al-Naas Faz Roll On Perfume", price: 100, image: perfP44, category: "perfume", volume: "6ml" },
  { id: "pf45", name: "Al-Naas Jaguar Roll On Perfume", price: 100, image: perfP45, category: "perfume", volume: "6ml" },
  { id: "pf46", name: "Al-Naas White Oodh Roll On Perfume", price: 100, image: perfP46, category: "perfume", volume: "6ml" },
  { id: "pf47", name: "Al-Naas Lichi Girl Roll On Perfume", price: 100, image: perfP47, category: "perfume", volume: "6ml" },
  { id: "pf48", name: "Al-Naas Boss Man Roll On Perfume", price: 100, image: perfP48, category: "perfume", volume: "6ml" },
  { id: "pf49", name: "Al-Naas Fog Roll On Perfume", price: 100, image: perfP49, category: "perfume", volume: "6ml" },
  { id: "pf50", name: "Al-Naas CRZ 7 Roll On Perfume", price: 100, image: perfP50, category: "perfume", volume: "6ml" },
  { id: "pf51", name: "Al-Naas Soft Touch Roll On Perfume", price: 100, image: perfP51, category: "perfume", volume: "6ml" },
  { id: "pf52", name: "ALM Strawberry Roll On Perfume", price: 100, image: perfP52, category: "perfume", volume: "25ml" },
  { id: "pf53", name: "Bellavita Skai Aquatic & Fresh Unisex Combo", price: 748, image: perfP53, category: "perfume", volume: "2x", badge: "COMBO" },
  { id: "pf54", name: "TFZ White Oud Apparel Perfume", price: 499, image: perfP54, category: "perfume", volume: "100ml", badge: "PREMIUM" },
  { id: "pf55", name: "Ajmas Perfumed Body Cream Collection", price: 60, image: perfP55, category: "perfume", badge: "NEW" },
  { id: "pf56", name: "Ajmas Roll On Attar Collection (Per Piece)", price: 100, image: perfP56, category: "perfume", volume: "6ml" },
];