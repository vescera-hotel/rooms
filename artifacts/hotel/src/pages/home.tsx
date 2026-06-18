import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

function GoldDivider() {
  return (
    <div className="flex items-center justify-center w-full py-6 px-8">
      <svg width="240" height="16" viewBox="0 0 240 16">
        <line x1="0" y1="8" x2="100" y2="8" stroke="#c9a84c" strokeWidth="0.5" opacity="0.6"/>
        <polygon points="120,2 127,8 120,14 113,8" fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.8"/>
        <line x1="140" y1="8" x2="240" y2="8" stroke="#c9a84c" strokeWidth="0.5" opacity="0.6"/>
      </svg>
    </div>
  );
}

const ROOMS = [
  {
    id: "deluxe",
    num: "01",
    name: "Deluxe Room",
    nameAr: "غرفة ديلوكس",
    size: "45m²",
    guests: 2,
    bed: "King",
    price: "1,200",
    desc: "ملاذ هادئ بتصميم عصري وأناقة لا مثيل لها.",
    img: "/images/room-deluxe.png"
  },
  {
    id: "junior",
    num: "02",
    name: "Junior Suite",
    nameAr: "جونيور سويت",
    size: "70m²",
    guests: 2,
    bed: "King",
    price: "2,400",
    desc: "مساحة رحبة تدمج بين الرفاهية والراحة المطلقة.",
    img: "/images/room-junior.png"
  },
  {
    id: "executive",
    num: "03",
    name: "Executive Suite",
    nameAr: "سويت تنفيذية",
    size: "110m²",
    guests: 4,
    bed: "King + Sofa",
    price: "4,800",
    desc: "أجنحة فاخرة مصممة خصيصاً لتلبية تطلعات ضيوفنا النخبة.",
    img: "/images/room-executive.png"
  },
  {
    id: "royal",
    num: "04",
    name: "Royal Suite",
    nameAr: "السويت الملكي",
    size: "220m²",
    guests: 6,
    bed: "2 King",
    price: "12,000",
    desc: "فخامة ملكية وتفاصيل استثنائية لإقامة لا تُنسى.",
    img: "/images/room-royal.png"
  },
  {
    id: "presidential",
    num: "05",
    name: "Presidential Suite",
    nameAr: "السويت الرئاسي",
    size: "400m²",
    guests: 8,
    bed: "Full Floor",
    price: "25,000",
    desc: "ذروة الرفاهية في مساحة بانورامية تعانق السحاب.",
    img: "/images/room-presidential.png"
  }
];

const EXPERIENCES = [
  { num: "01", en: "The Spa", ar: "المنتجع الصحي" },
  { num: "02", en: "Fine Dining", ar: "المطبخ العالمي" },
  { num: "03", en: "Private Butler", ar: "الخدمة الشخصية" },
  { num: "04", en: "Rooftop Lounge", ar: "جلسات السطح" },
  { num: "05", en: "Curated Journeys", ar: "رحلات مميزة" },
  { num: "06", en: "In-Suite Wellness", ar: "عافية الأجنحة" }
];

export default function Home() {
  const { toast } = useToast();

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent / تم الإرسال",
      description: "Our concierge will contact you shortly.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-[100dvh] w-full max-w-[430px] mx-auto overflow-x-hidden selection:bg-primary/30 relative shadow-2xl" style={{ background: "radial-gradient(ellipse at top, #1a1208 0%, #0a0905 40%, #050300 100%)" }}>
      
      {/* SECTION 1 — HERO */}
      <section className="relative h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-building.png" 
            alt="VESCERA HOTEL" 
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
          {/* Layered effects */}
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at center, transparent 20%, #050300 100%)" }} />
          <div className="absolute h-[200%] w-[1px] bg-primary opacity-15" style={{ animation: "shimmer-scan 8s infinite linear" }} />
          
          {/* Particles */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-[2px] h-[2px] bg-primary rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-particle ${5 + Math.random() * 7}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-6 w-full">
          <motion.img
            src="/images/logo.png"
            alt="VESCERA HOTEL"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-[220px] mb-4 drop-shadow-[0_0_40px_rgba(201,168,76,0.35)]"
          />

          <motion.div
             initial={{ opacity: 0, scaleX: 0 }}
             animate={{ opacity: 1, scaleX: 1 }}
             transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
             className="w-full"
          >
            <GoldDivider />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-arabic text-[22px] text-[#b8aa88] mb-5"
            dir="rtl"
          >
            فخامة تتجاوز التوقعات
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="text-[9px] tracking-[0.4em] uppercase text-[#c9a84c]"
          >
            Where every moment is a memory
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center h-[60px] overflow-hidden"
        >
          <div className="w-[1px] h-full border-l border-dashed border-[#c9a84c]/30 relative">
            <div className="absolute top-0 left-[-2px] w-[3px] h-[3px] bg-[#e8d090] rounded-full" style={{ animation: "drip 2s infinite" }} />
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — INTRODUCTION STRIP */}
      <section className="w-full relative overflow-hidden bg-[#080604] py-14">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, #c9a84c 1px, #c9a84c 2px)", backgroundSize: "100% 4px" }} />
        
        <div className="px-8 text-center relative z-10">
          <p className="font-serif italic text-[#e8d090] text-[20px] leading-relaxed mb-4 normal-case tracking-normal">
            "Since 2024, VESCERA HOTEL has defined the new language of luxury hospitality across the Middle East."
          </p>
          <p className="font-arabic text-[#b8aa88] text-[16px] leading-relaxed mb-10" dir="rtl">
            منذ عام ٢٠٢٤، رسم فندق فسيرة لغة جديدة لضيافة الرفاهية في جميع أنحاء الشرق الأوسط.
          </p>

          <div className="flex justify-center items-center gap-4">
            <div className="px-3 py-1 border border-[#c9a84c]/20 text-[10px] uppercase tracking-widest text-[#e8d090]">5 Suites</div>
            <div className="px-3 py-1 border border-[#c9a84c]/20 text-[10px] uppercase tracking-widest text-[#e8d090]">24/7 Butler</div>
            <div className="px-3 py-1 border border-[#c9a84c]/20 text-[10px] uppercase tracking-widest text-[#e8d090]">100% Private</div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ROOM CARDS */}
      <section className="w-full flex flex-col" id="rooms">
        {ROOMS.map((room, i) => (
          <div key={room.id} className="flex flex-col">
            <div className="relative h-[70vh] w-[calc(100%+32px)] -ml-4 overflow-hidden mb-6 mt-4">
              <img 
                src={room.img} 
                alt={room.name}
                className="w-full h-full object-cover"
              />
              {/* FIVE gradient overlays stacked */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050300] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050300] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-l from-[#050300] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#050300]/40 to-transparent" />
              <div className="absolute inset-0 bg-white/5 mix-blend-overlay" />
              
              {/* Giant number */}
              <div className="absolute -top-10 -right-4 text-[180px] font-serif leading-none tracking-tighter" style={{ color: "#c9a84c", opacity: 0.04 }}>
                {room.num}
              </div>

              {/* Room name pill */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] backdrop-blur-md border border-[#c9a84c]/20 bg-[#050300]/40 py-3 px-6 text-center">
                <h3 className="text-[#e8d090] text-lg tracking-[0.2em] uppercase mb-1">{room.name}</h3>
                <p className="font-arabic text-[#b8aa88] text-md">{room.nameAr}</p>
              </div>
            </div>

            <div className="px-6 relative z-10 -mt-2">
              <div className="bg-[#080604] border border-[#c9a84c]/20 p-4 mb-6">
                <div className="grid grid-cols-3">
                  <div className="flex flex-col items-center justify-center text-center">
                    <span className="text-[10px] text-[#8a6a1f] uppercase tracking-widest mb-1">Size</span>
                    <span className="text-xs text-[#e8d090] uppercase tracking-wider">{room.size}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center border-x border-[#c9a84c]/20">
                    <span className="text-[10px] text-[#8a6a1f] uppercase tracking-widest mb-1">Guests</span>
                    <span className="text-xs text-[#e8d090] uppercase tracking-wider">{room.guests}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center">
                    <span className="text-[10px] text-[#8a6a1f] uppercase tracking-widest mb-1">Bed</span>
                    <span className="text-xs text-[#e8d090] uppercase tracking-wider truncate w-full px-1">{room.bed}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-end mb-6">
                <p className="font-arabic text-[15px] text-[#b8aa88] leading-relaxed w-2/3" dir="rtl">
                  {room.desc}
                </p>
                <div className="text-right">
                  <div className="text-[36px] font-serif leading-none text-[#c9a84c] tracking-normal normal-case">{room.price}</div>
                  <div className="text-[9px] uppercase tracking-widest text-[#8a6a1f]">DA / الليلة</div>
                </div>
              </div>

              <Button 
                className="w-full rounded-none h-[56px] text-black font-semibold text-[11px]"
                style={{ 
                  background: "linear-gradient(90deg, #8a6a1f, #c9a84c, #8a6a1f)",
                  backgroundSize: "200%",
                  animation: "shimmer-btn 3s infinite",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase"
                }}
                onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Inquire — استعلام
              </Button>
            </div>
            
            {i !== ROOMS.length - 1 && <GoldDivider />}
          </div>
        ))}
        <GoldDivider />
      </section>

      {/* SECTION 4 — EXPERIENCE PILLARS */}
      <section className="w-full py-12 px-8">
        <h2 className="text-center mb-10 text-[18px]">Curated Experiences</h2>
        
        <div className="flex flex-col gap-6">
          {EXPERIENCES.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex items-center gap-6"
            >
              <span className="text-[12px] tracking-[0.2em] text-[#8a6a1f] font-serif">{exp.num}</span>
              <div className="w-[1px] h-8 bg-[#c9a84c]/30" />
              <div className="flex flex-col">
                <span className="text-[14px] uppercase tracking-widest text-[#e8d090] font-serif">{exp.en}</span>
                <span className="font-arabic text-[14px] text-[#b8aa88]">{exp.ar}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <GoldDivider />

      {/* SECTION 5 — INQUIRY FORM */}
      <section id="inquiry" className="w-full px-6 py-12">
        <div className="text-center mb-10">
          <h2 
            className="text-[24px] mb-2"
            style={{ 
              background: "linear-gradient(180deg, #e8d090 0%, #c9a84c 50%, #8a6a1f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Reserve Your Suite
          </h2>
          <p className="font-arabic text-[20px] text-[#c9a84c]">احجز جناحك الآن</p>
        </div>

        <div className="bg-[#080604] border border-[#c9a84c]/15 p-8 relative">
          <form onSubmit={handleInquiry} className="flex flex-col gap-8 relative z-10">
            <div className="flex flex-col gap-2">
              <Label className="text-[9px] uppercase tracking-[0.3em] text-[#8a6a1f]">Full Name</Label>
              <Input required className="border-0 border-b border-[#c9a84c]/30 bg-transparent rounded-none h-[52px] px-0 focus-visible:ring-0 focus-visible:border-[#c9a84c] text-[#f4f0e6] placeholder:text-[#c9a84c]/30" placeholder="Your name" />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-[9px] uppercase tracking-[0.3em] text-[#8a6a1f]">Select Room</Label>
              <Select required>
                <SelectTrigger className="border-0 border-b border-[#c9a84c]/30 bg-transparent rounded-none h-[52px] px-0 focus:ring-0 focus:border-[#c9a84c] text-[#f4f0e6] shadow-none">
                  <SelectValue placeholder="Choose a suite" />
                </SelectTrigger>
                <SelectContent className="rounded-none border-[#c9a84c]/20 bg-[#080604] text-[#f4f0e6]">
                  {ROOMS.map(r => (
                    <SelectItem key={r.id} value={r.id} className="cursor-pointer focus:bg-[#c9a84c]/20 focus:text-[#e8d090] rounded-none">
                      {r.name} - {r.price} DA
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-[9px] uppercase tracking-[0.3em] text-[#8a6a1f]">Dates</Label>
              <Input required type="text" placeholder="Check-in / Check-out" className="border-0 border-b border-[#c9a84c]/30 bg-transparent rounded-none h-[52px] px-0 focus-visible:ring-0 focus-visible:border-[#c9a84c] text-[#f4f0e6] placeholder:text-[#c9a84c]/30" />
            </div>

            <Button 
              type="submit" 
              className="w-full rounded-none h-[56px] text-black font-semibold text-[11px] mt-4"
              style={{ 
                background: "linear-gradient(90deg, #8a6a1f, #c9a84c, #8a6a1f)",
                backgroundSize: "200%",
                animation: "shimmer-btn 3s infinite",
                letterSpacing: "0.3em",
                textTransform: "uppercase"
              }}
            >
              Submit Request
            </Button>
          </form>

          <div className="mt-10 pt-8 border-t border-[#c9a84c]/10 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-left">
              <Phone className="w-4 h-4 text-[#c9a84c] shrink-0" />
              <div className="flex flex-col">
                <a href="tel:0770574728" className="text-[12px] text-[#e8d090] tracking-wider">07 70574728</a>
                <a href="tel:0770574768" className="text-[12px] text-[#e8d090] tracking-wider">07 70574768</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#c9a84c] shrink-0" />
              <a href="tel:033530303" className="text-[12px] text-[#e8d090] tracking-wider">033 530303</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#c9a84c] shrink-0" />
              <a href="mailto:vescerahotelsud07@gmail.com" className="text-[12px] text-[#e8d090] tracking-wider break-all">vescerahotelsud07@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#c9a84c] shrink-0" />
              <a href="https://maps.app.goo.gl/HT2X2rJ6KDD8ZXuM9" target="_blank" rel="noreferrer" className="text-[12px] text-[#e8d090] tracking-wider">View on Google Maps</a>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <a href="tel:0770574728" className="flex items-center justify-center w-12 h-12 rounded-full border border-[#c9a84c]/30 text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <a href="https://wa.me/0770574728" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full border border-[#c9a84c]/30 text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors">
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/hotel_vescera_sud/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full border border-[#c9a84c]/30 text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/p/H%C3%B4tel-Vescera-SUD-100063634865615/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full border border-[#c9a84c]/30 text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors">
              <FaFacebookF className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FOOTER */}
      <footer className="w-full py-16 px-6 flex flex-col items-center text-center relative">
        <img src="/images/logo.png" alt="VESCERA HOTEL" className="w-[160px] mb-2 opacity-90" />
        <div className="w-1/2 -my-2"><GoldDivider /></div>
        <p className="font-arabic text-[18px] text-[#b8aa88] mb-10">فخامة تتجاوز التوقعات</p>
        
        <div className="flex flex-col gap-2 mb-8">
          <p className="text-[10px] text-[#8a6a1f] tracking-widest">07 70574728 &nbsp;|&nbsp; 07 70574768</p>
          <p className="text-[10px] text-[#8a6a1f] tracking-widest">033 530303</p>
          <p className="text-[10px] text-[#8a6a1f] tracking-widest">vescerahotelsud07@gmail.com</p>
        </div>

        <div className="flex justify-center gap-5 mb-10">
          <a href="tel:0770574728" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#c9a84c]/25 text-[#c9a84c]/70 hover:text-[#c9a84c] hover:border-[#c9a84c]/50 transition-colors">
            <Phone className="w-4 h-4" />
          </a>
          <a href="https://wa.me/0770574728" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#c9a84c]/25 text-[#c9a84c]/70 hover:text-[#c9a84c] hover:border-[#c9a84c]/50 transition-colors">
            <FaWhatsapp className="w-4 h-4" />
          </a>
          <a href="https://www.instagram.com/hotel_vescera_sud/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#c9a84c]/25 text-[#c9a84c]/70 hover:text-[#c9a84c] hover:border-[#c9a84c]/50 transition-colors">
            <FaInstagram className="w-4 h-4" />
          </a>
          <a href="https://www.facebook.com/p/H%C3%B4tel-Vescera-SUD-100063634865615/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#c9a84c]/25 text-[#c9a84c]/70 hover:text-[#c9a84c] hover:border-[#c9a84c]/50 transition-colors">
            <FaFacebookF className="w-4 h-4" />
          </a>
          <a href="https://maps.app.goo.gl/HT2X2rJ6KDD8ZXuM9" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#c9a84c]/25 text-[#c9a84c]/70 hover:text-[#c9a84c] hover:border-[#c9a84c]/50 transition-colors">
            <MapPin className="w-4 h-4" />
          </a>
        </div>

        <div className="w-full border-t border-[#c9a84c]/10 pt-8 flex flex-col gap-2">
          <p className="text-[9px] text-[#8a6a1f]/60 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} VESCERA HOTEL. All Rights Reserved.
          </p>
          <p className="text-[9px] text-[#8a6a1f]/60 uppercase tracking-[0.3em] font-serif italic normal-case">
            Crafted with devotion
          </p>
        </div>
      </footer>
    </div>
  );
}
