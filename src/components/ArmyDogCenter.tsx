import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MapPin, 
  MessageCircle,
  ChevronRight,
  Menu,
  X,
  Globe,
  Radar,
  Target,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const CONTACT_NUMBERS = [
  { label: "Emergency", number: "0300-6716508", wa: "923006716508" },
  { label: "Support", number: "0333-7413080", wa: "923337413080" },
  { label: "Support", number: "0301-3838725", wa: "923013838725" },
  { label: "Support", number: "0342-8864416", wa: "923428864416" }
];

const ADDRESS_LINK = "https://maps.app.goo.gl/1SPeqpaMJCeCqCZHA";
const ADDRESS_COORDS = "28.302475, 70.092636";
const CEO_NAME = "Commanding Officer Yaseen";

const LANGUAGES = [
  { id: 'en', name: 'English', native: 'English', dir: 'ltr' as const },
  { id: 'ur', name: 'Urdu', native: 'اردو', dir: 'rtl' as const },
  { id: 'sd', name: 'Sindhi', native: 'سنڌي', dir: 'rtl' as const },
  { id: 'ps', name: 'Pashto', native: 'پښتو', dir: 'rtl' as const }
];

const translations = {
  en: {
    heroTitle: "Real Dogs. Real Results.",
    heroDesc: "Army Dog Center specializes in theft recovery, tracking, and crime support. Operating across Sindh, KPK, Balochistan, and Punjab with unmatched precision.",
    startTracking: "Start Tracking",
    emergencyCall: "Emergency Call",
    servicesTitle: "Strategic K9 Services",
    servicesBadge: "SPECIALIZED COMMAND",
    aboutTitle: "Serving the Nation's Security Needs.",
    aboutDesc: '"At Army Dog Center, our priority is your safety and recovery. We have built a legacy of trust and effectiveness through years of service across Pakistan. Our dogs are more than partners; they are precision tools for justice."',
    contactTitle: "Secure Your Recovery",
    branchOffice: "HQ Command Center",
    instantSupport: "Direct Deployment",
    officialWA: "Official WhatsApp Portal",
    galleryTitle: "Active Duty Force",
    locationsTitle: "Strategic Presence",
    locationsDesc: "Operational Across Key Sectors",
    nav: {
      services: "Services",
      locations: "Sectors",
      about: "Command",
      contact: "Engage"
    },
    serviceList: [
      { id: "recovery", title: "Theft Recovery", img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=200", code: "RECOVERY_OPS" },
      { id: "rescue", title: "Search & Rescue", img: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=200", code: "RESCUE_FORCE" },
      { id: "evidence", title: "Evidence Dogs", img: "https://images.unsplash.com/photo-1628153322122-550998b3c990?auto=format&fit=crop&q=80&w=200", code: "LEGAL_SUPPORT" },
      { id: "prevention", title: "Theft Prevention", img: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?auto=format&fit=crop&q=80&w=200", code: "ASSET_PROTECT" },
      { id: "tracking", title: "Dog Tracking", img: "https://images.unsplash.com/photo-1589307730440-6902264c7606?auto=format&fit=crop&q=80&w=200", code: "TRACE_MASTER" },
      { id: "crime", title: "Crime Support", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=200", code: "CIVIL_AID" },
      { id: "patrol", title: "Security Patrols", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=200", code: "AREA_WATCH" },
      { id: "search", title: "Target Search", img: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&q=80&w=200", code: "TARGET_FIND" }
    ]
  },
  ur: {
    heroTitle: "اصلی کتے۔ یقینی نتائج۔",
    heroDesc: "آرمی ڈاگ سینٹر چوری کی ریکوری، ٹریکنگ اور کرائم سپورٹ میں مہارت رکھتا ہے۔ سندھ، کے پی کے، بلوچستان اور پنجاب میں بے مثال درستگی کے ساتھ کام کر رہا ہے۔",
    startTracking: "ٹریکنگ شروع کریں",
    emergencyCall: "ایمرجنسی کال",
    servicesTitle: "اسٹریٹجک کینائن سروسز",
    servicesBadge: "خصوصی کمانڈ",
    aboutTitle: "ملک کی سیکیورٹی کی ضروریات کو پورا کرنا۔",
    aboutDesc: '"آرمی ڈاگ سینٹر میں، ہماری ترجیح آپ کی حفاظت اور ریکوری ہے۔ ہم نے پورے پاکستان میں برسوں کی خدمات کے ذریعے اعتماد اور تاثیر کی میراث قائم کی ہے۔ ہمارے کتے شراکت داروں سے بڑھ کر ہیں؛ وہ انصاف کے لیے درست اوزار ہیں۔"',
    contactTitle: "اپنی ریکوری کو محفوظ بنائیں",
    branchOffice: "ہیڈ کوارٹر کمانڈ سنٹر",
    instantSupport: "براہ راست تعیناتی",
    officialWA: "آفیشل واٹس ایپ پورٹل",
    galleryTitle: "ایکٹو ڈیوٹی فورس",
    locationsTitle: "اسٹریٹجک موجودگی",
    locationsDesc: "اہم سیکٹرز میں آپریشنل",
    nav: {
      services: "خدمات",
      locations: "سیکٹرز",
      about: "کمانڈ",
      contact: "رابطہ"
    },
    serviceList: [
      { id: "recovery", title: "چوری کی واپسی", img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=200", code: "RECOVERY_OPS" },
      { id: "rescue", title: "تلاش اور بچاؤ", img: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=200", code: "RESCUE_FORCE" },
      { id: "evidence", title: "شواہد کتے", img: "https://images.unsplash.com/photo-1628153322122-550998b3c990?auto=format&fit=crop&q=80&w=200", code: "LEGAL_SUPPORT" },
      { id: "prevention", title: "چوری کی روک تھام", img: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?auto=format&fit=crop&q=80&w=200", code: "ASSET_PROTECT" },
      { id: "tracking", title: "ڈاگ ٹریکنگ", img: "https://images.unsplash.com/photo-1589307730440-6902264c7606?auto=format&fit=crop&q=80&w=200", code: "TRACE_MASTER" },
      { id: "crime", title: "کرائم سپورٹ", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=200", code: "CIVIL_AID" },
      { id: "patrol", title: "سیکورٹی گشت", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=200", code: "AREA_WATCH" },
      { id: "search", title: "ٹارگٹ سرچ", img: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&q=80&w=200", code: "TARGET_FIND" }
    ]
  },
  sd: {
    heroTitle: "اصلي ڪتا. پڪا نتيجا.",
    heroDesc: "آرمي ڊاگ سينٽر چوري جي ريڪوري، ٽريڪنگ ۽ ڪرائم سپورٽ ۾ مهارت رکي ٿو. سنڌ، ڪي پي ڪي، بلوچستان ۽ پنجاب ۾ بي مثال درستگي سان ڪم ڪري رهيو آهي.",
    startTracking: "ٽريڪنگ شروع ڪريو",
    emergencyCall: "ايمرجنسي ڪال",
    servicesTitle: "اسٽريٽجڪ ڪينائن سروسز",
    servicesBadge: "خاص ڪمانڊ",
    aboutTitle: "ملڪ جي سيڪيورٽي ضرورتن کي پورو ڪرڻ.",
    aboutDesc: '"آرمي ڊاگ سينٽر ۾، اسان جي ترجيح توهان جي حفاظت ۽ ريڪوري آهي. اسان سڄي پاڪستان ۾ سالن جي خدمتن ذريعي اعتماد ۽ تاثير جي ميراث قائم ڪئي آهي. اسان جا ڪتا ڀائيوارن کان وڌيڪ آهن؛ اهي انصاف لاءِ درست اوزار آهن."',
    contactTitle: "پنهنجي ريڪوري کي محفوظ بڻايون",
    branchOffice: "هيڊ ڪوارٽر ڪمانڊ سينٽر",
    instantSupport: "سڌي طرح تعیناتي",
    officialWA: "سرڪاري واٽس ایپ پورٽل",
    galleryTitle: "ايڪٽيو ڊيوٽي فورس",
    locationsTitle: "اسٽريٽجڪ موجودگي",
    locationsDesc: "اهم سيڪٽرز ۾ آپريشنل",
    nav: {
      services: "خدمتون",
      locations: "سیکٹر",
      about: "ڪمانڊ",
      contact: "رابطو"
    },
    serviceList: [
      { id: "recovery", title: "چوري جي واپسي", img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=200", code: "RECOVERY_OPS" },
      { id: "rescue", title: "ڳولا ۽ بچاءُ", img: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=200", code: "RESCUE_FORCE" },
      { id: "evidence", title: "ثبوت ڪتا", img: "https://images.unsplash.com/photo-1628153322122-550998b3c990?auto=format&fit=crop&q=80&w=200", code: "LEGAL_SUPPORT" },
      { id: "prevention", title: "چوري روڪڻ", img: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?auto=format&fit=crop&q=80&w=200", code: "ASSET_PROTECT" },
      { id: "tracking", title: "ڊاگ ٽريڪنگ", img: "https://images.unsplash.com/photo-1589307730440-6902264c7606?auto=format&fit=crop&q=80&w=200", code: "TRACE_MASTER" },
      { id: "crime", title: "ڏوهن جي مدد", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=200", code: "CIVIL_AID" },
      { id: "patrol", title: "سيڪيورٽي گشت", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=200", code: "AREA_WATCH" },
      { id: "search", title: "ٽارگيٽ ڳولا", img: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&q=80&w=200", code: "TARGET_FIND" }
    ]
  },
  ps: {
    heroTitle: "اصلي سپي. رښتیني پایلې.",
    heroDesc: "آرمي ډاګ سنټر د غلا ریکووري ، ټریکینګ او جرمونو ملاتړ کې تخصص لري. په سیند ، KPK ، بلوچستان او پنجاب کې د بې ساري دقت سره کار کوي.",
    startTracking: "تعقیب پیل کړئ",
    emergencyCall: "بېړنۍ اړیکه",
    servicesTitle: "ستراتیژیک کینائن خدمات",
    servicesBadge: "ځانګړې قومانده",
    aboutTitle: "د هیواد امنیتي اړتیاوو ته خدمت کول.",
    aboutDesc: '"په آرمي ډاګ سنټر کې ، زموږ لومړیتوب ستاسو خوندیتوب او ریکووري ده. موږ په ټول پاکستان کې د کلونو خدمتونو له لارې د باور او اغیزمنتوب میراث جوړ کړی دی. زموږ سپي یوازې ملګري نه دي؛ دوی د عدالت لپاره دقیق اوزار دي."',
    contactTitle: "خپله ریکووري خوندي کړئ",
    branchOffice: "مرکزي قومانده",
    instantSupport: "مستقیم ځای پرځای کول",
    officialWA: "رسمي واټس اپ پورټل",
    galleryTitle: "د فعالې دندې ځواک",
    locationsTitle: "ستراتیژیک شتون",
    locationsDesc: "په کلیدي سکتورونو کې عملیاتي",
    nav: {
      services: "خدمتونه",
      locations: "سکتورونه",
      about: "قومانده",
      contact: "اړیکه"
    },
    serviceList: [
      { id: "recovery", title: "د غلا ریکووري", img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=200", code: "RECOVERY_OPS" },
      { id: "rescue", title: "لټون او ژغورنه", img: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=200", code: "RESCUE_FORCE" },
      { id: "evidence", title: "د شواهدو سپي", img: "https://images.unsplash.com/photo-1628153322122-550998b3c990?auto=format&fit=crop&q=80&w=200", code: "LEGAL_SUPPORT" },
      { id: "prevention", title: "د غلا مخنیوی", img: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?auto=format&fit=crop&q=80&w=200", code: "ASSET_PROTECT" },
      { id: "tracking", title: "د سپو تعقیب", img: "https://images.unsplash.com/photo-1589307730440-6902264c7606?auto=format&fit=crop&q=80&w=200", code: "TRACE_MASTER" },
      { id: "crime", title: "د جرم ملاتړ", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=200", code: "CIVIL_AID" },
      { id: "patrol", title: "امنیتي ګزمې", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=200", code: "AREA_WATCH" },
      { id: "search", title: "هدف لټون", img: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&q=80&w=200", code: "TARGET_FIND" }
    ]
  }
};

export default function ArmyDogCenter() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(true);
  const [selectedLang, setSelectedLang] = useState('en');

  const t = translations[selectedLang as keyof typeof translations] || translations.en;
  const currentLang = LANGUAGES.find(l => l.id === selectedLang) || LANGUAGES[0];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const openWhatsApp = (number = CONTACT_NUMBERS[0].wa) => {
    window.open(`https://wa.me/${number}?text=Support Request from Website`, '_blank');
  };

  return (
    <div className={`min-h-screen bg-[#0F0F0F] font-sans text-white selection:bg-[#D4AF37]/30 transition-all duration-500`} dir={currentLang.dir}>
      {/* Language Modal */}
      <AnimatePresence>
        {showLanguageModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full max-w-md rounded-[24px] border border-white/10 bg-[#1A1A1A] p-8 shadow-2xl"
            >
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37] text-3xl text-black shadow-lg">
                  🌍
                </div>
              </div>
              <h2 className="mb-2 text-center text-3xl font-bold uppercase tracking-tighter">Select Language</h2>
              <p className="mb-8 text-center text-sm font-medium text-white/40 italic">Choose your preferred language for the mission</p>
              
              <div className="grid grid-cols-2 gap-3">
                {LANGUAGES.map((lang) => (
                  <Button 
                    key={lang.id}
                    onClick={() => {
                      setSelectedLang(lang.id);
                      setShowLanguageModal(false);
                    }}
                    className="h-16 rounded-xl border border-white/5 bg-white/5 text-lg font-bold text-white transition-all hover:bg-white/10 hover:border-[#D4AF37] group"
                  >
                    <div className="flex flex-col leading-tight items-start">
                      <span className="group-hover:text-[#D4AF37] transition-colors">{lang.native}</span>
                      <span className="text-[10px] opacity-40 font-medium uppercase tracking-[0.2em]">{lang.name}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div 
            className="flex cursor-pointer items-center gap-3" 
            onClick={() => scrollTo('hero')}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D4AF37] text-black">
              <Radar size={22} />
            </div>
            <span className="text-xl font-black tracking-tighter text-white uppercase">
              ARMY <span className="text-[#D4AF37]">DOG CENTER</span>
            </span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {[
              { id: 'services', label: t.nav.services },
              { id: 'locations', label: t.nav.locations },
              { id: 'about', label: t.nav.about },
              { id: 'contact', label: t.nav.contact }
            ].map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollTo(item.id)}
                className="text-xs font-bold uppercase tracking-[0.3em] text-white/50 transition-colors hover:text-[#D4AF37]"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => setShowLanguageModal(true)}
              variant="outline"
              className="border-white/10 bg-white/5 text-[10px] uppercase font-bold tracking-widest hover:bg-white/10 text-[#D4AF37]"
            >
              <Globe size={14} className="mr-2" /> {currentLang.name}
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full w-full border-b border-white/5 bg-[#0F0F0F] p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-6">
               {[
                { id: 'services', label: t.nav.services },
                { id: 'locations', label: t.nav.locations },
                { id: 'about', label: t.nav.about },
                { id: 'contact', label: t.nav.contact }
              ].map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-lg font-bold uppercase tracking-widest text-white"
                >
                  {item.label}
                </button>
              ))}
              <Button onClick={() => setShowLanguageModal(true)} className="bg-white/5 text-white border-white/10">
                Change Language
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative flex min-h-screen w-full items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0F0F0F]/90 to-[#0F0F0F] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?auto=format&fit=crop&q=80&w=1600" 
            alt="Operational K9"
            className="h-full w-full object-cover opacity-50 grayscale contrast-125"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 py-20">
          <div className="w-full flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-8 border-white/10 bg-white/5 px-6 py-2 text-[10px] font-black tracking-[0.4em] text-[#D4AF37]">
                PAKISTAN'S CANINE INTELLIGENCE ELITE
              </Badge>
              <h1 className="mb-10 text-6xl font-black leading-[0.85] text-white md:text-[120px] tracking-tighter uppercase whitespace-pre-line">
                {t.heroTitle}
              </h1>
              <p className="mb-12 max-w-3xl mx-auto text-lg md:text-2xl font-medium leading-relaxed text-white/40 italic">
                {t.heroDesc}
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button 
                  onClick={() => scrollTo('contact')}
                  size="lg" 
                  className="h-20 rounded-full bg-[#D4AF37] px-12 text-xl font-black text-black shadow-[0_0_50px_-10px_rgba(212,175,55,0.5)] transition-all hover:scale-105 active:scale-95 uppercase tracking-tighter"
                >
                  <Target className="mr-3" /> {t.startTracking}
                </Button>
                <div className="flex flex-col items-center justify-center rounded-[32px] border border-white/10 bg-white/5 px-10 py-4 backdrop-blur-md">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37]/60 mb-1">{t.emergencyCall}</span>
                   <span className="text-2xl font-black tracking-tighter text-white">{CONTACT_NUMBERS[0].number}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <span className="text-xs font-black uppercase tracking-[0.6em] text-[#D4AF37]">{t.servicesBadge}</span>
            <h2 className="mt-6 text-4xl font-black md:text-7xl tracking-tighter uppercase">{t.servicesTitle}</h2>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {t.serviceList.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-72 overflow-hidden rounded-[24px] border border-white/5 bg-[#141414] p-8 transition-all hover:border-[#D4AF37]/30 hover:bg-[#1A1A1A] hover:shadow-[0_20px_50px_-20px_rgba(212,175,55,0.2)]"
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 overflow-hidden rounded-lg border border-[#D4AF37]/30">
                       <img src={s.img} alt={s.title} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <span className="text-[8px] font-black tracking-[0.2em] text-[#D4AF37]/50 uppercase">{s.code}</span>
                   </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight group-hover:text-[#D4AF37] transition-colors">{s.title}</h3>
                    <div className="mt-4 h-1 w-0 bg-[#D4AF37] group-hover:w-10 transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex items-end justify-between">
            <h3 className="text-4xl font-black uppercase tracking-tighter md:text-7xl">{t.galleryTitle}</h3>
            <div className="hidden md:block h-px flex-1 mx-12 bg-white/10" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
             <div className="grid gap-6">
                <div className="overflow-hidden rounded-[32px] border border-white/5 group relative h-[300px]">
                   <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" alt="Operational Search" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                      <span className="text-xs font-black uppercase tracking-widest text-[#D4AF37]">Tactical Scent Find</span>
                   </div>
                </div>
                <div className="overflow-hidden rounded-[32px] border border-white/5 group relative h-[400px]">
                   <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800" alt="Tracking Ops" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                      <span className="text-xs font-black uppercase tracking-widest text-[#FF6B6B]">Field Track Command</span>
                   </div>
                </div>
             </div>
             <div className="overflow-hidden rounded-[32px] border border-white/5 group relative h-[724px]">
                <img src="https://images.unsplash.com/photo-1628153322122-550998b3c990?auto=format&fit=crop&q=80&w=800" alt="Operational German Shepherd" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                   <span className="text-sm font-black uppercase tracking-widest text-[#4D96FF]">Elite Rescue Response</span>
                </div>
             </div>
             <div className="grid gap-6">
                <div className="overflow-hidden rounded-[32px] border border-white/5 group relative h-[400px]">
                   <img src="https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&q=80&w=800" alt="Bloodhound Tracker" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                      <span className="text-xs font-black uppercase tracking-widest text-[#6BCB77]">Assault & Search Ops</span>
                   </div>
                </div>
                <div className="overflow-hidden rounded-[32px] border border-white/5 group relative h-[300px]">
                   <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800" alt="Belgian Malinois Search" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                      <span className="text-xs font-black uppercase tracking-widest text-[#D4AF37]">Instant Alert Status</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-24 bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="text-xs font-black uppercase tracking-[0.8em] text-[#D4AF37]">{t.locationsTitle}</h2>
            <h3 className="mt-8 text-4xl font-black md:text-7xl tracking-tighter uppercase">{t.locationsDesc}</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {['Sindh', 'KPK', 'Balochistan', 'Punjab', 'Sadiqabad', 'Sukkur', 'Panu Aqil'].map((province) => (
              <div 
                key={province}
                className="group relative rounded-[32px] border border-white/5 bg-[#141414] p-10 transition-all hover:bg-[#1A1A1A] hover:border-[#D4AF37]/20"
              >
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#D4AF37] text-black">
                  <MapPin size={24} />
                </div>
                <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 mb-2">Sector Command</h4>
                <p className="text-3xl font-black text-white tracking-widest uppercase">{province}</p>
                <div className="mt-10 flex items-center text-[#D4AF37] font-black text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Ready for Dispatch <ChevronRight className="ml-1" size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section id="about" className="py-24 bg-black overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D4AF37]/5 -skew-x-12 translate-x-1/2" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
             <div>
               <Badge className="mb-10 border-[#D4AF37]/30 bg-[#D4AF37]/10 px-6 py-2 text-[10px] font-black text-[#D4AF37] tracking-[0.3em]">CHIEF OPERATIONS COMMANDER</Badge>
               <h3 className="mb-10 text-5xl font-black leading-[0.9] md:text-8xl tracking-tighter uppercase whitespace-pre-line">{t.aboutTitle}</h3>
               <p className="mb-12 text-2xl font-light italic leading-relaxed text-white/40 border-l-4 border-[#D4AF37] pl-8 py-2">
                  {t.aboutDesc}
               </p>
               <div className="flex items-center gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37] text-2xl font-black text-black border-4 border-black/20 shadow-xl">MY</div>
                  <div>
                    <p className="text-2xl font-black uppercase tracking-tighter leading-none mb-1">{CEO_NAME}</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[#D4AF37]">Founder & Strategic Lead</p>
                  </div>
               </div>
             </div>
             <div className="relative group">
                <div className="absolute -inset-4 rounded-[48px] border border-[#D4AF37]/20 blur-xl group-hover:blur-3xl transition-all duration-700 opacity-30" />
                <img 
                  src="https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?auto=format&fit=crop&q=80&w=800" 
                  alt="Specialized K9 Trainer"
                  className="relative z-10 w-full rounded-[32px] grayscale contrast-125 brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 border border-white/10"
                />
             </div>
          </div>
        </div>
      </section>

      {/* HQ & Map */}
      <section className="py-40 bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
             <div className="lg:col-span-8 overflow-hidden rounded-[40px] border border-white/10 bg-[#141414] h-[600px] relative group">
                <div className="absolute inset-0 bg-black flex flex-col items-center justify-center p-20 text-center">
                   <div className="relative z-20">
                     <div className="mb-10 inline-flex h-24 w-24 items-center justify-center rounded-[32px] bg-white/5 border border-white/10 text-[#D4AF37] shadow-2xl">
                        <MapPin size={48} />
                     </div>
                     <h3 className="text-5xl font-bold uppercase mb-4 tracking-tighter italic">Sadiqabad HQ</h3>
                     <p className="text-white/30 text-xl font-medium tracking-widest mb-12">{ADDRESS_COORDS}</p>
                     <Button 
                       onClick={() => window.open(ADDRESS_LINK, '_blank')}
                       className="bg-[#D4AF37] text-black font-bold h-16 rounded-full px-12 text-lg hover:scale-110 active:scale-95 transition-all shadow-xl shadow-[#D4AF37]/20"
                     >
                       Engage Google Maps Command
                     </Button>
                   </div>
                   <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:40px_40px] opacity-10" />
                </div>
             </div>
             <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="flex-1 rounded-[40px] border border-white/5 bg-[#1A1A1A] p-12 flex flex-col justify-center">
                   <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4AF37] mb-4">GPRS Coordinates</h4>
                   <p className="text-3xl font-bold text-white tracking-widest leading-none mb-4">{ADDRESS_COORDS}</p>
                   <p className="text-sm font-bold text-white/30 uppercase tracking-widest">Main Sadiqabad City, District Rahim Yar Khan, Punjab.</p>
                </div>
                <div className="flex-1 rounded-[40px] border border-white/5 bg-[#D4AF37] p-12 flex flex-col justify-center text-black">
                   <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/40 mb-6">Readiness Level</h4>
                   <div className="flex items-center gap-6">
                      <div className="h-4 w-4 rounded-full bg-black animate-pulse" />
                      <span className="text-3xl font-bold tracking-tighter uppercase">Fully Operational</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contact" className="py-40 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-24 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.8em] text-[#D4AF37]">{t.emergencyCall}</span>
              <h2 className="mt-8 text-5xl font-bold leading-[0.9] md:text-9xl tracking-tighter">{t.contactTitle}</h2>
              
              <div className="mt-20 grid gap-4">
                {CONTACT_NUMBERS.map((contact, i) => (
                  <button 
                    key={i}
                    onClick={() => openWhatsApp(contact.wa)}
                    className="flex items-center justify-between group rounded-[32px] border border-white/5 bg-[#141414] p-10 transition-all hover:bg-[#1A1A1A] hover:border-[#25D366]/40"
                  >
                    <div className="flex items-center gap-8">
                       <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#25D366] transition-all group-hover:rotate-6">
                          <MessageCircle size={28} className="text-white group-hover:text-black" />
                       </div>
                       <div className="text-left">
                          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-1">{contact.label}</p>
                          <p className="text-3xl font-bold tracking-tighter leading-none group-hover:text-[#25D366] transition-colors">{contact.number}</p>
                       </div>
                    </div>
                    <ChevronRight size={28} className="text-white/10 group-hover:text-[#25D366] group-hover:translate-x-2 transition-all" />
                  </button>
                ))}
              </div>
            </div>

            <div className="sticky top-40 h-fit">
              <Card className="rounded-[64px] border border-white/5 bg-[#141414] p-12 overflow-hidden relative">
                <div className="relative z-10">
                   <div className="flex items-center justify-between mb-12">
                      <h4 className="text-4xl font-bold uppercase tracking-tighter italic">{t.instantSupport}</h4>
                      <div className="flex items-center gap-2 bg-[#25D366]/20 border border-[#25D366]/30 px-4 py-1 rounded-full">
                         <div className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                         <span className="text-[10px] font-bold uppercase tracking-widest text-[#25D366]">Strategic Readiness</span>
                      </div>
                   </div>
                   <div className="aspect-[4/3] w-full rounded-[48px] bg-black border border-white/10 flex items-center justify-center group">
                      <div className="text-center group-hover:scale-110 transition-transform duration-700">
                        <Radar size={100} className="mx-auto mb-8 text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/20">{t.officialWA}</p>
                      </div>
                   </div>
                   <Button 
                    onClick={() => openWhatsApp()} 
                    className="mt-12 h-24 w-full rounded-[32px] bg-[#D4AF37] text-3xl font-bold text-black border-4 border-black/10 hover:translate-y-[-4px] active:translate-y-2 transition-all shadow-[0_20px_40px_-5px_rgba(212,175,55,0.3)]"
                   >
                    LAUNCH PORTAL
                   </Button>
                </div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[100px]" />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-24 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37] text-black">
                  <Radar size={22} />
                </div>
                <span className="text-2xl font-black uppercase tracking-tighter text-white">Army Dog <span className="text-[#D4AF37]">Center</span></span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] leading-relaxed text-white/20 mb-12">
                Pakistan's elite canine agency since 2010. Specialist trackers. Professional recovery. Operational excellence.
              </p>
              <div className="flex gap-4">
                 {[1,2,3,4].map(i => <div key={i} className="h-12 w-12 border border-white/5 rounded-2xl flex items-center justify-center hover:border-[#D4AF37] hover:bg-white/5 transition-all cursor-pointer text-white/20 group"><Radar size={18} className="group-hover:text-[#D4AF37]" /></div>)}
              </div>
            </div>

            <div className="lg:pl-10">
               <h4 className="mb-12 text-[11px] font-bold uppercase tracking-[0.6em] text-[#D4AF37]">Protocol Registry</h4>
               <ul className="space-y-6 text-sm font-bold uppercase tracking-widest text-white/40">
                 <li><a href="#" className="hover:text-white transition-all">Helpful Links</a></li>
                 <li><a href="#" className="hover:text-white transition-all">Official Blog</a></li>
                 <li><a href="#" className="hover:text-white transition-all">Executive Office</a></li>
                 <li><a href="#" className="hover:text-[#FF4B2B] transition-all">Emergency Contact</a></li>
               </ul>
            </div>

            <div className="lg:pl-10">
              <h4 className="mb-12 text-[11px] font-bold uppercase tracking-[0.6em] text-[#D4AF37]">Active Sectors</h4>
               <ul className="space-y-6 text-sm font-bold uppercase tracking-widest text-white/20">
                 <li className="hover:text-white/60 transition-colors">Sector Sadiqabad HQ</li>
                 <li className="hover:text-white/60 transition-colors">Sector Sukkur Command</li>
                 <li className="hover:text-white/60 transition-colors">Sector Panu Aqil Cantt</li>
                 <li className="hover:text-white/60 transition-colors">Sector Sindh & Punjab Command</li>
               </ul>
            </div>

            <div className="rounded-[40px] border border-white/5 bg-[#141414] p-10">
               <h4 className="mb-8 text-[10px] font-bold uppercase tracking-[0.6em] text-[#D4AF37]">Intelligence Desk</h4>
               <p className="text-[10px] font-bold uppercase text-white/20 mb-2 tracking-widest">Built By</p>
               <p className="text-2xl font-bold mb-10 tracking-tighter">Sike Ali</p>
               <p className="text-[10px] font-bold uppercase text-white/20 mb-3 tracking-widest">Request Development</p>
               <a href="mailto:sikeji415@gmail.com" className="group flex items-center text-sm font-bold text-[#D4AF37] hover:tracking-widest transition-all">
                  sikeji415@gmail.com <ChevronRight size={14} className="ml-2" />
               </a>
            </div>
          </div>

          <Separator className="my-32 bg-white/5" />

          <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
            <p className="text-[10px] font-bold uppercase tracking-[0.8em] text-white/10">
              © 2010—2026 Army Dog Center • National Security Canine Agency
            </p>
            <div className="flex items-center gap-10">
               <span className="text-[10px] font-bold tracking-[0.8em] text-white/30 uppercase italic leading-none">Honor • Loyalty • Justice</span>
               <div className="h-2 w-2 rounded-full bg-[#D4AF37]/20" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
