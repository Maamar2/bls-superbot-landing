import React, { useContext } from 'react';
import { CheckCircle2, Zap, Crown, Building2, MessageCircle, Activity } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

const WHATSAPP_NUMBER = "213552675571";
const WHATSAPP_MESSAGE = encodeURIComponent("Hello! I am interested in getting a license for BLS SUPERBOT.");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const pricingTranslations = {
  en: {
    nav: { pricing: "Pricing" },
    pricing: {
      badge: "Simple Pricing",
      title: "Choose Your Plan",
      subtitle: "Select the license that fits your needs. All plans include full bot access, automatic updates, and setup support.",
      usdtNote: "Pay via USDT (TRC-20). License key sent automatically after payment.",
      backHome: "Back to Home",
      starter: {
        name: "Starter",
        price: "$120",
        period: "/month",
        description: "Perfect for individuals who need occasional appointment booking.",
        cta: "Get Starter",
        mostPopular: null,
        features: [
          "2 appointments/month",
          "Auto slot detection",
          "Captcha bypass (ReCaptcha V3)",
          "429 proxy rotation",
          "Email support",
        ],
      },
      agency: {
        name: "Agency",
        price: "$1,200",
        period: "/6 months",
        description: "Best value for travel agencies managing multiple clients.",
        cta: "Get Agency",
        mostPopular: "Most Popular",
        features: [
          "Unlimited appointments",
          "Everything in Starter",
          "Multi-seat (5 users)",
          "Priority support",
          "WhatsApp group access",
          "6-month license key",
        ],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For large organizations needing advanced integrations and dedicated support.",
        cta: "Contact Us",
        mostPopular: null,
        features: [
          "Everything in Agency",
          "Unlimited seats",
          "API access",
          "Custom integrations",
          "Dedicated account manager",
          "SLA guarantee",
        ],
      },
    },
  },
  ar: {
    nav: { pricing: "الأسعار" },
    pricing: {
      badge: "تسعير بسيط",
      title: "اختر خطتك",
      subtitle: "اختر الترخيص الذي يناسب احتياجاتك. جميع الخطط تشمل الوصول الكامل للبوت والتحديثات التلقائية والدعم.",
      usdtNote: "الدفع عبر USDT (TRC-20). يتم إرسال مفتاح الترخيص تلقائياً بعد الدفع.",
      backHome: "العودة للرئيسية",
      starter: {
        name: "ستارتر",
        price: "$120",
        period: "/شهرياً",
        description: "مثالي للأفراد الذين يحتاجون حجز مواعيد عرضية.",
        cta: "احصل على ستارتر",
        mostPopular: null,
        features: [
          "2 مواعيد/شهر",
          "اكتشاف تلقائي للمواعيد",
          "تجاوز الكابتشا (ReCaptcha V3)",
          "تدوير البروكسي 429",
          "دعم عبر البريد الإلكتروني",
        ],
      },
      agency: {
        name: "وكالة",
        price: "$1,200",
        period: "/6 أشهر",
        description: "أفضل قيمة لوكالات السفر التي تدير عملاء متعددين.",
        cta: "احصل على وكالة",
        mostPopular: "الأكثر شعبية",
        features: [
          "مواعيد غير محدودة",
          "كل شيء في ستارتر",
          "مقاعد متعددة (5 مستخدمين)",
          "دعم أولوي",
          "الوصول لمجموعة واتساب",
          "ترخيص 6 أشهر",
        ],
      },
      enterprise: {
        name: "مؤسسي",
        price: "مخصص",
        period: "",
        description: "للمنظمات الكبيرة التي تحتاج تكاملات متقدمة ودعم مخصص.",
        cta: "تواصل معنا",
        mostPopular: null,
        features: [
          "كل شيء في وكالة",
          "مقاعد غير محدودة",
          "الوصول عبر API",
          "تكاملات مخصصة",
          "مدير حساب مخصص",
          "ضمان اتفاقية مستوى الخدمة",
        ],
      },
    },
  },
  tr: {
    nav: { pricing: "Fiyatlandırma" },
    pricing: {
      badge: "Basit Fiyatlandırma",
      title: "Planınızı Seçin",
      subtitle: "İhtiyaçlarınıza uygun lisansı seçin. Tüm planlar tam bot erişimi, otomatik güncellemeler ve kurulum desteği içerir.",
      usdtNote: "USDT (TRC-20) ile ödeme yapın. Lisans anahtarı ödeme sonrasında otomatik olarak gönderilir.",
      backHome: "Ana Sayfaya Dön",
      starter: {
        name: "Başlangıç",
        price: "$120",
        period: "/ay",
        description: "Ara sıra randevu rezervasyonu yapması gereken bireyler için mükemmel.",
        cta: "Başlangıç Al",
        mostPopular: null,
        features: [
          "Ayda 2 randevu",
          "Otomatik slot algılama",
          "Captcha atlama (ReCaptcha V3)",
          "429 proxy rotasyonu",
          "E-posta desteği",
        ],
      },
      agency: {
        name: "Acenta",
        price: "$1,200",
        period: "/6 ay",
        description: "Çoklu müşteri yöneten seyahat acenteleri için en iyi değer.",
        cta: "Acenta Al",
        mostPopular: "En Popüler",
        features: [
          "Sınırsız randevu",
          "Başlangıç'taki her şey",
          "Çoklu koltuk (5 kullanıcı)",
          "Öncelikli destek",
          "WhatsApp grubu erişimi",
          "6 aylık lisans anahtarı",
        ],
      },
      enterprise: {
        name: "Kurumsal",
        price: "Özel",
        period: "",
        description: "Gelişmiş entegrasyonlar ve özel destek gerektiren büyük organizasyonlar için.",
        cta: "Bize Ulaşın",
        mostPopular: null,
        features: [
          "Acenta'daki her şey",
          "Sınırsız koltuk",
          "API erişimi",
          "Özel entegrasyonlar",
          "Özel hesap yöneticisi",
          "SLA garantisi",
        ],
      },
    },
  },
};

const usePricingT = () => {
  const { lang } = useContext(LanguageContext);
  return pricingTranslations[lang]?.pricing || pricingTranslations.en.pricing;
};

const PlanCard = ({ plan, isHighlighted, index }) => {
  const { lang } = useContext(LanguageContext);
  const isRTL = lang === 'ar';
  const icons = [<Zap className="w-5 h-5" />, <Crown className="w-5 h-5" />, <Building2 className="w-5 h-5" />];

  return (
    <div
      className={`
        relative flex flex-col rounded-2xl p-8
        bg-zinc-900/60 backdrop-blur-xl border
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]
        group
        ${isHighlighted
          ? 'border-emerald-500/60 shadow-[0_0_40px_rgba(16,185,129,0.15)]'
          : 'border-zinc-800 hover:border-zinc-700 shadow-lg'
        }
      `}
    >
      {isHighlighted && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />
      )}

      {plan.mostPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-emerald-500 text-black text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            {plan.mostPopular}
          </div>
        </div>
      )}

      <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${
          isHighlighted
            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
            : 'bg-zinc-800 border-zinc-700 text-zinc-400 group-hover:border-zinc-600 group-hover:text-zinc-300'
        } transition-all duration-300`}>
          {icons[index]}
        </div>
        <h3 className={`text-xl font-black text-white ${isRTL ? 'text-right' : ''}`}>
          {plan.name}
        </h3>
      </div>

      <div className={`flex items-baseline gap-1 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <span className={`text-4xl font-black text-white ${plan.price === 'Custom' ? 'text-3xl' : ''}`}>
          {plan.price}
        </span>
        <span className="text-zinc-500 font-semibold">{plan.period}</span>
      </div>

      <p className={`text-zinc-400 text-sm leading-relaxed mb-8 ${isRTL ? 'text-right' : ''}`}>
        {plan.description}
      </p>

      <div className={`h-px mb-8 ${isHighlighted ? 'bg-emerald-500/20' : 'bg-zinc-800'}`} />

      <ul className={`space-y-4 flex-1 ${isRTL ? 'text-right' : ''}`}>
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${
              isHighlighted ? 'text-emerald-400' : 'text-zinc-500 group-hover:text-emerald-400'
            } transition-colors duration-300`} />
            <span className="text-sm text-zinc-300 leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          mt-10 w-full py-3.5 rounded-xl font-black text-sm text-center
          transition-all duration-200 flex items-center justify-center gap-2
          ${isHighlighted
            ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]'
            : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-zinc-600'
          }
        `}
      >
        {plan.cta}
      </a>
    </div>
  );
};

const PricingNavbar = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:opacity-80">
            <Activity className="text-emerald-400 h-6 w-6" />
            <span className="text-white font-black text-xl tracking-tighter uppercase">BLS <span className="text-emerald-400">SUPERBOT</span></span>
          </a>
          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-black px-5 py-2.5 rounded-lg text-sm font-black transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] whitespace-nowrap cursor-pointer"
            >
              Get License
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const PricingFooter = () => {
  const { lang } = useContext(LanguageContext);
  const isRTL = lang === 'ar';
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-start">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Activity className="text-emerald-400 h-6 w-6" />
          <span className="text-white font-black text-xl tracking-tighter uppercase">BLS <span className="text-emerald-400">SUPERBOT</span></span>
        </div>
        <p className="text-zinc-600 text-sm">
          © 2026 BLS Superbot Technologies. All rights reserved. Version 7.0.4
        </p>
        <div className={`flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <a href="#" className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm cursor-pointer">Terms</a>
          <a href="#" className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm cursor-pointer">Privacy</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm font-bold flex items-center gap-1 cursor-pointer">
            <MessageCircle className="w-4 h-4" /> Support
          </a>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 end-6 z-50 bg-emerald-500 hover:bg-emerald-400 text-black p-4 rounded-full shadow-[0_4px_14px_0_rgba(16,185,129,0.4)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group cursor-pointer"
    aria-label="Contact on WhatsApp"
  >
    <MessageCircle className="w-8 h-8 stroke-[2.5]" />
    <span className="absolute end-16 whitespace-nowrap bg-black/80 border border-white/10 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-bold">
      Need help? Chat with us
    </span>
  </a>
);

const Pricing = () => {
  const { lang } = useContext(LanguageContext);
  const isRTL = lang === 'ar';
  const t = usePricingT();
  const navT = pricingTranslations[lang]?.nav || pricingTranslations.en.nav;

  return (
    <div className="min-h-screen bg-black text-zinc-200" dir={isRTL ? 'rtl' : 'ltr'}>
      <PricingNavbar />
      <WhatsAppFloat />

      {/* Hero-like header */}
      <section className="pt-40 pb-16 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Back link */}
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <a href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-400 text-sm font-medium transition-colors cursor-pointer">
            <span className="text-lg">←</span>
            {t.backHome}
          </a>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            {t.badge}
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
            {t.title}
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <PlanCard plan={t.starter} isHighlighted={false} index={0} />
            <PlanCard plan={t.agency} isHighlighted={true} index={1} />
            <PlanCard plan={t.enterprise} isHighlighted={false} index={2} />
          </div>

          {/* USDT Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-xl px-6 py-4">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              <p className="text-zinc-400 text-sm font-medium">
                {t.usdtNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <PricingFooter />
    </div>
  );
};

export default Pricing;
