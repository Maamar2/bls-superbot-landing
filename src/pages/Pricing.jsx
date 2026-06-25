import React, { useContext } from 'react';
import { CheckCircle2, Zap, Crown, Building2 } from 'lucide-react';
import { LanguageContext } from '../App';

const WHATSAPP_NUMBER = "213552675571";
const WHATSAPP_MESSAGE = encodeURIComponent("Hello! I am interested in getting a license for BLS SUPERBOT.");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const pricingTranslations = {
  en: {
    pricing: {
      badge: "Simple Pricing",
      title: "Choose Your Plan",
      subtitle: "Select the license that fits your needs. All plans include full bot access, automatic updates, and setup support.",
      usdtNote: "Pay via USDT (TRC-20). License key sent automatically after payment.",
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
    pricing: {
      badge: "تسعير بسيط",
      title: "اختر خطتك",
      subtitle: "اختر الترخيص الذي يناسب احتياجاتك. جميع الخطط تشمل الوصول الكامل للبوت والتحديثات التلقائية والدعم.",
      usdtNote: "الدفع عبر USDT (TRC-20). يتم إرسال مفتاح الترخيص تلقائياً بعد الدفع.",
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
    pricing: {
      badge: "Basit Fiyatlandırma",
      title: "Planınızı Seçin",
      subtitle: "İhtiyaçlarınıza uygun lisansı seçin. Tüm planlar tam bot erişimi, otomatik güncellemeler ve kurulum desteği içerir.",
      usdtNote: "USDT (TRC-20) ile ödeme yapın. Lisans anahtarı ödeme sonrasında otomatik olarak gönderilir.",
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
          " öncelikli destek",
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

// Helper to get pricing translation
const usePricingT = () => {
  const { lang } = useContext(LanguageContext);
  return pricingTranslations[lang]?.pricing || pricingTranslations.en.pricing;
};

const PlanCard = ({ plan, isHighlighted, badge, index }) => {
  const { lang } = useContext(LanguageContext);
  const isRTL = lang === 'ar';

  const icons = [<Zap className="w-6 h-6" />, <Crown className="w-6 h-6" />, <Building2 className="w-6 h-6" />];

  return (
    <div
      className={`
        relative flex flex-col rounded-2xl p-8
        bg-zinc-900/60 backdrop-blur-xl border
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]
        group
        ${isHighlighted
          ? 'border-emerald-500/60 shadow-[0_0_40px_rgba(16,185,129,0.15),inset_0_1px_0_rgba(16,185,129,0.2)]'
          : 'border-zinc-800 hover:border-zinc-700 shadow-lg hover:shadow-zinc-900/50'
        }
        ${index === 0 ? 'col-span:md:col-span-1' : ''}
      `}
    >
      {/* Background glow for highlighted */}
      {isHighlighted && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />
      )}

      {/* Most Popular badge */}
      {plan.mostPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-emerald-500 text-black text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            {plan.mostPopular}
          </div>
        </div>
      )}

      {/* Icon */}
      <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
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

      {/* Price */}
      <div className={`flex items-baseline gap-1 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <span className={`text-4xl font-black text-white ${plan.price === 'Custom' ? 'text-3xl' : ''}`}>
          {plan.price}
        </span>
        <span className="text-zinc-500 font-semibold">{plan.period}</span>
      </div>

      {/* Description */}
      <p className={`text-zinc-400 text-sm leading-relaxed mb-8 ${isRTL ? 'text-right' : ''}`}>
        {plan.description}
      </p>

      {/* Divider */}
      <div className={`h-px bg-zinc-800 mb-8 ${isHighlighted ? 'bg-emerald-500/20' : ''}`} />

      {/* Features */}
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

      {/* CTA Button */}
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

const Pricing = () => {
  const { lang } = useContext(LanguageContext);
  const isRTL = lang === 'ar';
  const t = usePricingT();

  return (
    <section
      id="pricing"
      className="relative py-24 overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d1117] to-[#0a0a0a]" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(16,185,129,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(16,185,129,0.06) 0%, transparent 50%)',
      }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            {t.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            {t.title}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <PlanCard plan={t.starter} isHighlighted={false} badge={t.starter.mostPopular} index={0} />
          <PlanCard plan={t.agency} isHighlighted={true} badge={t.agency.mostPopular} index={1} />
          <PlanCard plan={t.enterprise} isHighlighted={false} badge={t.enterprise.mostPopular} index={2} />
        </div>

        {/* USDT Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 rounded-xl px-6 py-4">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            <p className="text-zinc-400 text-sm font-medium">
              {t.usdtNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
