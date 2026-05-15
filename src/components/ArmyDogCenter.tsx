import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Dog, 
  Scissors, 
  ShieldCheck, 
  Search, 
  MessageCircle,
  Award,
  ChevronRight,
  Menu,
  X,
  Globe,
  Settings,
  Radar,
  Zap,
  Target,
  Siren,
  Contact
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const CONTACT_NUMBERS = [
  "0300-6716508",
  "0333-7413080",
  "0301-3838725",
  "0342-8864416"
];

const WHATSAPP_PRIMARY = "03006716508";
const ADDRESS = "Main Branch: Sadiqabad City Center, Pakistan. Services available in Sindh, KPK, Balochistan, and Punjab.";
const CEO_NAME = "Malik Yaseen";

const LANGUAGES = [
  { id: 'en', name: 'English', native: 'English' },
  { id: 'ur', name: 'Urdu', native: 'اردو' },
  { id: 'sd', name: 'Sindhi', native: 'سنڌي' },
  { id: 'ps', name: 'Pashto', native: 'پښتو' }
];

export default function ArmyDogCenter() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(true);
  const [selectedLang, setSelectedLang] = useState('en');

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_PRIMARY}?text=Hi Malik Army Dog Center, I need assistance.`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5] font-sans text-[#2D2D2D] selection:bg-[#FFD93D]/30">
      {/* Language Modal */}
      <AnimatePresence>
        {showLanguageModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2D2D2D]/90 p-6 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full max-w-md rounded-[40px] border-4 border-[#2D2D2D] bg-white p-8 shadow-[12px_12px_0px_0px_#FF6B6B]"
            >
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD93D] text-3xl shadow-[4px_4px_0px_0px_#2D2D2D]">
                  🌍
                </div>
              </div>
              <h2 className="mb-2 text-center text-3xl font-black uppercase text-[#2D2D2D]">Select Language</h2>
              <p className="mb-8 text-center font-bold text-gray-500 italic">Please choose your preferred language</p>
              
              <div className="grid grid-cols-2 gap-4">
                {LANGUAGES.map((lang) => (
                  <Button 
                    key={lang.id}
                    onClick={() => {
                      setSelectedLang(lang.id);
                      setShowLanguageModal(false);
                    }}
                    className="h-16 rounded-2xl border-4 border-[#2D2D2D] bg-white text-lg font-black text-[#2D2D2D] hover:bg-[#FFD93D] hover:translate-y-1 transition-all"
                  >
                    <div className="flex flex-col leading-none">
                      <span>{lang.native}</span>
                      <span className="text-[10px] opacity-60 font-bold">{lang.name}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b-4 border-[#FF6B6B] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div 
            className="flex cursor-pointer items-center gap-3" 
            onClick={() => scrollTo('hero')}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD93D] text-2xl shadow-[2px_2px_0px_0px_#2D2D2D]">
              🐾
            </div>
            <span className="text-xl font-black tracking-tight text-[#FF6B6B] md:text-2xl">
              MALIK ARMY <span className="text-[#4D96FF]">DOG CENTER</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {['Services', 'Locations', 'About', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-bold uppercase tracking-wider text-[#2D2D2D] transition-colors hover:text-[#4D96FF]"
              >
                {item}
              </button>
            ))}
            <Button 
              onClick={openWhatsApp} 
              className="bg-[#6BCB77] px-6 py-2 font-black text-white shadow-[4px_4px_0px_0px_#4ca658] transition-all hover:translate-y-1 hover:shadow-none"
            >
              BOOK NOW
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full w-full border-b-4 border-[#FF6B6B] bg-white p-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {['Services', 'Locations', 'About', 'Contact'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-left text-lg font-black uppercase text-[#2D2D2D]"
                >
                  {item}
                </button>
              ))}
              <Button onClick={openWhatsApp} className="bg-[#6BCB77] py-6 text-lg font-black">
                BOOK VIA WHATSAPP
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative flex min-h-screen w-full items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(#FF6B6B_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

        <div className="mx-auto flex h-full max-w-7xl items-center gap-12 px-6 py-20">
          <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <div className="mb-4 inline-block w-fit rounded-lg bg-[#FFD93D] px-4 py-1 text-sm font-black text-[#2D2D2D]">
                PAKISTAN'S #1 RECOVERY & SUPPORT SERVICE
              </div>
              <h1 className="mb-6 text-5xl font-black leading-tight text-[#2D2D2D] md:text-8xl">
                Real Dogs. <br />
                <span className="text-[#FF6B6B]">Real</span> Results.
              </h1>
              <p className="mb-8 max-w-lg text-lg font-medium leading-relaxed text-gray-600">
                Malik Army Dog Center specializes in theft recovery, tracking, and crime support. Operating across Sindh, KPK, Balochistan, and Punjab with unmatched precision.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={openWhatsApp} 
                  size="lg" 
                  className="h-16 rounded-2xl bg-[#25D366] px-8 text-xl font-black text-white shadow-lg transition-all hover:brightness-110"
                >
                  <MessageCircle className="mr-2" /> Start Tracking
                </Button>
                <div className="flex items-center gap-3 border-l-4 border-[#4D96FF] pl-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#4D96FF]">Emergency Call</span>
                    <span className="text-xl font-black text-[#2D2D2D]">{CONTACT_NUMBERS[0]}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="relative lg:col-span-5 hidden lg:block">
               <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[40px] bg-[#4D96FF] rotate-3" />
               <Card className="relative h-[600px] overflow-hidden rounded-[40px] border-4 border-[#2D2D2D] bg-white p-6 shadow-none">
                 <div className="relative flex h-full flex-col overflow-hidden rounded-[24px] bg-[#f0f0f0]">
                   <img 
                    src="https://images.unsplash.com/photo-1589944172352-83711d7a9c78?auto=format&fit=crop&q=80&w=800" 
                    alt="Tracking Dog"
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 w-full bg-white/95 p-6 backdrop-blur-md">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#6BCB77] animate-pulse" />
                      <span className="text-[10px] font-black uppercase text-[#6BCB77]">Active Deployment</span>
                    </div>
                    <h3 className="text-2xl font-black text-[#2D2D2D]">Specialized German Shepherd</h3>
                    <p className="font-bold text-[#FF6B6B]">Tracking • Recovery • Intelligence</p>
                  </div>
                 </div>
               </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Badge className="mb-6 bg-[#4D96FF] px-4 py-1 text-sm font-black text-white shadow-[2px_2px_0px_0px_#2D2D2D]">SPECIALIZED SERVICES</Badge>
          <h2 className="mb-16 text-5xl font-black text-[#2D2D2D] md:text-7xl">What Our Dogs Do</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Theft Recovery", icon: "💰", color: "#FFD93D" },
              { title: "Search & Rescue", icon: "🚁", color: "#FF6B6B" },
              { title: "Evidence Dogs", icon: "🏛️", color: "#4D96FF" },
              { title: "Theft Prevention", icon: "🛡️", color: "#6BCB77" },
              { title: "Dog Tracking", icon: "🐾", color: "#FFD93D" },
              { title: "Crime Support", icon: "🚔", color: "#FF6B6B" },
              { title: "Dog Patrols", icon: "💂", color: "#4D96FF" },
              { title: "Dog Search", icon: "🔍", color: "#6BCB77" }
            ].map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, rotate: i % 2 === 0 ? 1 : -1 }}
                className="group relative rounded-3xl border-4 border-[#2D2D2D] bg-white p-8 transition-all hover:shadow-[4px_4px_0px_0px_#2D2D2D]"
              >
                <div 
                  className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-sm border-2 border-[#2D2D2D]"
                  style={{ backgroundColor: s.color + '20' }}
                >
                  {s.icon}
                </div>
                <h3 className="text-xl font-black uppercase text-[#2D2D2D]">{s.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="bg-[#2D2D2D] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-sm font-black uppercase tracking-[0.4em] text-[#FFD93D]">Nationwide Presence</h2>
            <h3 className="text-4xl font-black md:text-6xl">Across Every <span className="text-[#FF6B6B]">Province</span></h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {['Sindh', 'KPK', 'Balochistan', 'Punjab'].map((province) => (
              <div 
                key={province}
                className="group relative overflow-hidden rounded-[32px] border-2 border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFD93D] text-3xl shadow-[4px_4px_0px_0px_white]">
                  🏢
                </div>
                <h4 className="text-2xl font-black uppercase leading-none">Army Dog Center</h4>
                <p className="mt-2 text-xl font-bold text-[#FF6B6B]">{province}</p>
                <button className="mt-6 flex items-center font-black uppercase tracking-widest text-[#4D96FF] hover:underline">
                  Our Units <ChevronRight className="ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (CEO Message) */}
      <section id="about" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative rounded-[50px] border-4 border-[#2D2D2D] bg-[#FFF9F0] p-8 md:p-20 shadow-[16px_16px_0px_0px_#2D2D2D]">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center text-[#2D2D2D]">
               <div className="order-2 lg:order-1">
                 <Badge className="mb-6 bg-[#FF6B6B] px-4 py-1 text-sm font-black text-white">CHIEF OFFICER</Badge>
                 <h3 className="mb-8 text-4xl font-black md:text-6xl leading-tight">Serving the Nation's <span className="text-[#4D96FF]">Security</span> Needs.</h3>
                 <p className="mb-8 text-xl font-medium leading-relaxed text-gray-600">
                    "At Malik Army Dog Center, our priority is your safety and recovery. We have built a legacy of trust and effectiveness through years of service across Pakistan. Our dogs are more than partners; they are precision tools for justice."
                 </p>
                 <div className="border-t-4 border-[#2D2D2D] pt-8">
                    <p className="text-3xl font-black">{CEO_NAME}</p>
                    <p className="text-lg font-bold text-[#FF6B6B] uppercase tracking-widest">Founder & CEO</p>
                 </div>
               </div>
               <div className="order-1 lg:order-2 flex justify-center">
                  <div className="relative h-[400px] w-full max-w-sm rounded-[40px] border-4 border-[#2D2D2D] bg-[#f0f0f0] shadow-[8px_8px_0px_0px_#FFD93D] flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800" 
                      alt="Dog in action"
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 inline-block bg-[#6BCB77] px-4 py-1 text-sm font-black uppercase text-white shadow-[2px_2px_0px_0px_#2D2D2D]">Contact Us</h2>
              <h3 className="mb-8 text-5xl font-black text-[#2D2D2D] md:text-7xl">Let's Secure Your Recovery</h3>
              
              <div className="grid gap-4 md:grid-cols-2">
                {CONTACT_NUMBERS.map((num, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-4 rounded-2xl border-4 border-[#2D2D2D] bg-white p-6 shadow-[4px_4px_0px_0px_#4D96FF]"
                  >
                    <Phone className="text-[#FF6B6B]" size={24} />
                    <span className="text-lg font-black">{num}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex items-center gap-4 rounded-[32px] border-4 border-[#2D2D2D] bg-[#FFFBF5] p-6 lg:p-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFD93D] shadow-[2px_2px_0px_0px_#2D2D2D]">
                  📍
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-black uppercase tracking-widest leading-none mb-1">Branch Office</h4>
                  <p className="font-bold text-gray-500">{ADDRESS}</p>
                </div>
              </div>
            </div>

            <Card className="rounded-[50px] border-4 border-[#2D2D2D] bg-white p-8 shadow-[16px_16px_0px_0px_#4D96FF]">
              <CardContent className="p-0">
                <h4 className="mb-6 text-4xl font-black uppercase italic tracking-tighter">Instant Support</h4>
                <div className="space-y-6">
                   <div className="aspect-video w-full rounded-[30px] border-4 border-dashed border-[#25D366] bg-[#25D366]/5 flex items-center justify-center">
                      <div className="text-center">
                        <MessageCircle size={80} className="mx-auto mb-2 text-[#25D366]" />
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#25D366]">Official WhatsApp Portal</p>
                      </div>
                   </div>
                   <Button onClick={openWhatsApp} className="h-20 w-full rounded-[20px] bg-[#25D366] text-2xl font-black text-white hover:scale-[1.02] transition-all">
                    START TRACKING NOW
                   </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] pt-24 pb-12 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD93D] text-lg">🐾</div>
                <span className="text-xl font-black uppercase">Malik Army <span className="text-[#FF6B6B]">Dog Center</span></span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 leading-relaxed mb-6">
                Pakistan's most trusted canine intelligence agency since 2010. Specialist in crime support and asset recovery.
              </p>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#4D96FF] transition-colors cursor-pointer">f</div>
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#FF6B6B] transition-colors cursor-pointer">ig</div>
              </div>
            </div>

            <div>
               <h4 className="mb-8 text-[10px] font-black uppercase tracking-[0.4em] text-[#FFD93D]">Legal Links</h4>
               <ul className="space-y-4 text-sm font-bold uppercase">
                 <li><a href="#" className="hover:text-[#FF6B6B]">Helpful Links</a></li>
                 <li><a href="#" className="hover:text-[#4D96FF]">Our Blog</a></li>
                 <li><a href="#" className="hover:text-[#6BCB77]">About us</a></li>
                 <li><a href="#" className="hover:text-[#FF6B6B]">Contact Us</a></li>
               </ul>
            </div>

            <div>
              <h4 className="mb-8 text-[10px] font-black uppercase tracking-[0.4em] text-[#FFD93D]">Locations</h4>
              <ul className="space-y-4 text-sm font-bold uppercase text-gray-400">
                <li>Army Dog Center Sindh</li>
                <li>Army Dog Center KPK</li>
                <li>Army Dog Center Balochistan</li>
                <li>Army Dog Center Punjab</li>
              </ul>
            </div>

            <div>
               <h4 className="mb-8 text-[10px] font-black uppercase tracking-[0.4em] text-[#FFD93D]">Developer Desk</h4>
               <div className="rounded-2xl border-2 border-white/10 bg-white/5 p-6">
                  <p className="text-[10px] font-black uppercase text-gray-500 mb-2">Web Design By</p>
                  <p className="text-lg font-black leading-none mb-4">Sike Ali</p>
                  <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Development Contact</p>
                  <a href="mailto:sikeji415@gmail.com" className="text-xs font-bold text-[#FF6B6B] hover:underline">sikeji415@gmail.com</a>
               </div>
            </div>
          </div>

          <Separator className="my-20 bg-white/10" />

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-600">
              © 2010-2026 Malik Army Dog Center · All rights reserved
            </p>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Established with Honor</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
