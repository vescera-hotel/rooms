import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Waves, Wine, UtensilsCrossed, ConciergeBell, Phone, MessageCircle, BedDouble, Users, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ROOMS = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    nameAr: "غرفة ديلوكس",
    size: "45m²",
    guests: 2,
    bed: "King bed",
    price: "1,200",
    desc: "ملاذ هادئ بتصميم عصري وأناقة لا مثيل لها.",
    img: "/images/room-deluxe.png"
  },
  {
    id: "junior",
    name: "Junior Suite",
    nameAr: "جونيور سويت",
    size: "70m²",
    guests: 2,
    bed: "King bed",
    price: "2,400",
    desc: "مساحة رحبة تدمج بين الرفاهية والراحة المطلقة.",
    img: "/images/room-junior.png"
  },
  {
    id: "executive",
    name: "Executive Suite",
    nameAr: "سويت تنفيذية",
    size: "110m²",
    guests: 4,
    bed: "King + sofa bed",
    price: "4,800",
    desc: "أجنحة فاخرة مصممة خصيصاً لتلبية تطلعات ضيوفنا النخبة.",
    img: "/images/room-executive.png"
  },
  {
    id: "royal",
    name: "Royal Suite",
    nameAr: "السويت الملكي",
    size: "220m²",
    guests: 6,
    bed: "2 King beds",
    price: "12,000",
    desc: "فخامة ملكية وتفاصيل استثنائية لإقامة لا تُنسى.",
    img: "/images/room-royal.png"
  },
  {
    id: "presidential",
    name: "Presidential Suite",
    nameAr: "السويت الرئاسي",
    size: "400m²",
    guests: 8,
    bed: "Full floor",
    price: "25,000",
    desc: "ذروة الرفاهية في مساحة بانورامية تعانق السحاب.",
    img: "/images/room-presidential.png"
  }
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
    <div className="min-h-[100dvh] w-full max-w-[430px] mx-auto bg-background overflow-x-hidden text-foreground selection:bg-primary/30 relative shadow-2xl">
      
      {/* HERO SECTION */}
      <section className="relative h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Maison Élite Lobby" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center text-center px-6 mt-16"
        >
          <div className="w-12 h-12 mb-8 border border-primary/40 rounded-full flex items-center justify-center">
             {/* Fake QR code representation for aesthetic */}
             <div className="w-6 h-6 bg-primary/20 border border-primary/50" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif font-semibold tracking-wider text-primary mb-4 drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]">
            Maison Élite
          </h1>
          <p className="font-arabic text-xl text-primary/80 mb-2 font-medium tracking-wide">
            فخامة لا تُضاهى
          </p>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            A Palace-Grade Experience
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary/60">Discover</span>
          <ChevronDown className="w-4 h-4 text-primary/60 animate-bounce" />
        </motion.div>
      </section>

      {/* ROOMS SECTION */}
      <section className="w-full px-4 py-16 flex flex-col gap-12" id="rooms">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-serif text-primary mb-2">Our Suites</h2>
          <p className="font-arabic text-muted-foreground text-sm">مجموعة الأجنحة والغرف</p>
          <div className="w-12 h-[1px] bg-primary/30 mx-auto mt-6" />
        </div>

        {ROOMS.map((room, i) => (
          <motion.div 
            key={room.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group relative flex flex-col bg-card border border-card-border overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img 
                src={room.img} 
                alt={room.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md border border-primary/30 px-3 py-1 text-xs tracking-wider text-primary">
                {room.price} SAR / Night
              </div>
            </div>

            <div className="p-6 relative z-10 -mt-16">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h3 className="text-xl font-serif text-foreground mb-1">{room.name}</h3>
                  <p className="font-arabic text-primary/80 text-lg">{room.nameAr}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-6 py-4 border-y border-primary/10">
                <div className="flex flex-col items-center justify-center gap-1.5 text-center">
                  <Maximize className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{room.size}</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1.5 text-center border-x border-primary/10">
                  <Users className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{room.guests} Guests</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1.5 text-center">
                  <BedDouble className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider truncate w-full px-1">{room.bed}</span>
                </div>
              </div>

              <p className="font-arabic text-sm text-muted-foreground leading-relaxed text-right mb-6" dir="rtl">
                {room.desc}
              </p>

              <Button 
                className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-background border border-primary/30 transition-all duration-300 rounded-none h-12 uppercase tracking-widest text-xs"
                onClick={() => {
                  document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Inquire / استعلام
              </Button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* AMENITIES */}
      <section className="w-full py-16 bg-secondary/30 border-y border-primary/10">
        <div className="px-6 flex flex-wrap gap-4 justify-center">
          <div className="flex flex-col items-center gap-2 p-4 min-w-[80px]">
            <Waves className="w-6 h-6 text-primary/80" strokeWidth={1} />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Spa</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 min-w-[80px]">
            <UtensilsCrossed className="w-6 h-6 text-primary/80" strokeWidth={1} />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Dining</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 min-w-[80px]">
            <ConciergeBell className="w-6 h-6 text-primary/80" strokeWidth={1} />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Butler</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 min-w-[80px]">
            <Wine className="w-6 h-6 text-primary/80" strokeWidth={1} />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Lounge</span>
          </div>
        </div>
      </section>

      {/* INQUIRY SECTION */}
      <section id="inquiry" className="w-full px-4 py-20">
        <div className="bg-card border border-primary/20 p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
          
          <h2 className="text-2xl font-serif text-foreground mb-2">Request a Reservation</h2>
          <p className="font-arabic text-sm text-muted-foreground mb-8">طلب حجز</p>

          <form onSubmit={handleInquiry} className="flex flex-col gap-5 relative z-10">
            <div className="space-y-2">
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">Full Name</Label>
              <Input required className="rounded-none border-primary/20 bg-background/50 h-12 focus-visible:ring-primary/50 text-foreground" placeholder="Your name" />
            </div>

            <div className="space-y-2">
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">Select Room</Label>
              <Select required>
                <SelectTrigger className="rounded-none border-primary/20 bg-background/50 h-12 focus:ring-primary/50">
                  <SelectValue placeholder="Choose a suite" />
                </SelectTrigger>
                <SelectContent className="rounded-none border-primary/20 bg-card text-foreground">
                  {ROOMS.map(r => (
                    <SelectItem key={r.id} value={r.id} className="cursor-pointer focus:bg-primary/20 focus:text-primary">
                      {r.name} - {r.price} SAR
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">Dates</Label>
              <Input required type="text" placeholder="Check-in / Check-out" className="rounded-none border-primary/20 bg-background/50 h-12 focus-visible:ring-primary/50 text-foreground" />
            </div>

            <div className="space-y-2">
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">Special Requests</Label>
              <Textarea className="rounded-none border-primary/20 bg-background/50 min-h-[100px] resize-none focus-visible:ring-primary/50 text-foreground" placeholder="Any special requirements..." />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-background rounded-none h-14 mt-4 uppercase tracking-widest text-xs font-semibold">
              Submit Request
            </Button>
          </form>

          <div className="mt-10 pt-8 border-t border-primary/10 flex flex-col items-center gap-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Direct Contact</p>
            <div className="flex gap-4">
              <a href="tel:+966500000000" className="flex items-center justify-center w-12 h-12 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-background transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-background transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-12 px-6 flex flex-col items-center text-center border-t border-primary/10 bg-background">
        <h2 className="text-2xl font-serif text-primary mb-2">Maison Élite</h2>
        <p className="font-arabic text-sm text-muted-foreground mb-8">فخامة لا تُضاهى</p>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
          © {new Date().getFullYear()} Maison Élite Hotel. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
