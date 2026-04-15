// Forced re-compile to resolve environment build cache (Retry 4)
import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { 
  Bot, 
  CalendarDays, 
  Puzzle, 
  RefreshCw, 
  Zap, 
  ScanFace, 
  ChevronRight, 
  CheckCircle2,
  Shield,
  Lock,
  Terminal,
  Activity,
  Layers,
  Cpu,
  Crosshair,
  Wifi,
  Globe,
  Download,
  MessageCircle,
  ServerOff,
  Server,
  BrainCircuit,
  ShieldAlert,
  ArrowRight,
  Ticket,
  QrCode,
  MousePointer2,
  Timer,
  User,
  Trophy
} from 'lucide-react';

// --- Configuration ---
const WHATSAPP_NUMBER = "213552675571";
const WHATSAPP_MESSAGE = encodeURIComponent("Hello! I am interested in getting a license for BLS SUPERBOT.");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
// Replace the placeholder below with your Azure Blob Storage URL once you've uploaded your .exe.
// Example: "https://youraccount.blob.core.windows.net/downloads/bls-superbot-setup-v7.0.4.exe"
const DOWNLOAD_LINK = "https://youraccount.blob.core.windows.net/downloads/bls-superbot-setup-v7.0.4.exe"; 

// --- Translation Dictionary ---
const translations = {
  en: {
    seo: {
      title: "BLS Superbot | Ultimate Auto Appointment Booking Bot & WAF Bypass",
      description: "Automate your BLS Spain appointment bookings. BLS Superbot features auto mode, zero-click captcha bypass, 429 proxy rotation, and liveness biometric defeat.",
      keywords: "bls bot, bls appointment bot, bls spain bot, bls algeria bot, auto booking bot, bls visa bot, captcha bypass, playwright bot"
    },
    nav: { features: "Features", stealth: "Stealth System", performance: "Performance", speed: "Benchmark", workflows: "Workflows", proof: "Live Results", biometrics: "Biometrics", license: "Get License" },
    hero: {
      badge: "v7.0.4 with TurboPulse™ Engine",
      title1: "Automate Your",
      phrases: [
        "WAF & Captcha",
        "Slot Hunting 24/7.",
        "Biometric Verifications.",
        "BLS Visa Appointments."
      ],
      sub: "The ultimate infrastructure for BLS appointment automation. Dominate waitlists with Dual-Mode API hunting, bypass WAF seamlessly, and secure slots with unprecedented speed.",
      btnDownload: "Download Setup (.exe)",
      btnWhatsapp: "Contact on WhatsApp"
    },
    stats: {
      stat1: "Dual-Mode Pulse", stat1Sub: "API+DOM",
      stat2: "Stealth Defense", stat2Sub: "4-Layer",
      stat3: "429 Recovery Loop", stat3Sub: "Auto",
      stat4: "Self-Healing Config", stat4Sub: "100%"
    },
    features: {
      title: "Production-Grade Infrastructure",
      sub: "Every module is engineered for maximum success rate and absolute stealth against advanced BLS security measures.",
      f1: "🤖 Complete Auto Mode",
      f1_1: "Session State Persistence", f1_2: "Automatic Login & Recovery", f1_3: "Cascade Dropdown Waiters",
      f2: "🎯 TurboPulse™ Slot Hunting",
      f2_1: "Dual-Mode Detection", f2_2: "Caesar Cipher Payload Injection", f2_3: "Category Swap Protocol",
      f3: "🛡️ Multi-Layer Stealth",
      f3_1: "CloudFront WAF Bypass", f3_2: "Automated 429 Recovery", f3_3: "Passive Modal Killer",
      f4: "🧩 Advanced Captcha Handling",
      f4_1: "Zero-interaction v3 bypassing", f4_2: "Paid NoCaptcha Integration", f4_3: "Token Injection & Submission",
      f5: "🚀 Extreme Performance",
      f5_1: "BLS Core Speed Boost", f5_2: "Fast-Inject Date Selection", f5_3: "Auto Doorstep V3 Integration",
      f6: "🤳 Biometric Mission Control",
      f6_1: "Liveness Bypass via Fake Stream", f6_2: "Advanced Video Selfie (Y4M)", f6_3: "Auto-Intelligence Mode"
    },
    stealth: {
      badge: "Anti-Detection System",
      title: "Multi-Layer Defense Architecture",
      sub: "BLS SUPERBOT operates undetectably. Our proprietary 4-layer architecture ensures you stay completely hidden from fingerprinting and rate limits.",
      l1_title: "Browser Level", l1_desc: "Removes automation flags, randomizes WebGL renderers, and spoofs hardware concurrency to look completely human.",
      l2_title: "Network Level", l2_desc: "Dynamic proxy rotation with User-Agent spoofing. Automatically shifts IP addresses to completely bypass 429 and 403 API rate limits.",
      l3_title: "Behavioral Level", l3_desc: "Human-like timing logic. Incorporates mathematical Jitter delays, log-normal distributions, and Bezier curve mouse movements.",
      l4_title: "Session Level", l4_desc: "Identity reset protocols and cookie persistence. If blocked, the bot clears storage, regenerates ID, and resumes the hunt state."
    },
    performance: {
      badge: "Performance Engine",
      title: "Engineered for Absolute Speed.",
      sub: "When milliseconds matter, the TurboPulse™ engine delivers. Our custom API-based checking mechanism extracts hidden tokens and hits the endpoints faster than any human.",
      f1_title: "Fast-Inject Slot Selection", f1_desc: "Eliminates race conditions. Collects all available dates and retries automatically if a slot is taken by another user.",
      f2_title: "Category Swap Protocol", f2_desc: "Self-healing mechanism that automatically rotates categories (Normal → Prime Time) when no slots are found."
    },
    speedRace: {
      badge: "Performance Benchmark",
      title: "Human vs. Machine",
      sub: "Watch a live interactive simulation of a human applicant competing against the TurboPulse™ engine for the exact same appointment slot.",
      btnStart: "Start Simulation",
      btnReset: "Reset Systems",
      human: "Human Applicant",
      bot: "TurboPulse™ Bot",
      h_wait: "Waiting for slot...",
      h_type: "Typing details...",
      h_cap: "Solving Captcha...",
      h_fail: "Slot taken! Failed.",
      b_wait: "Awaiting trigger...",
      b_api: "API Intercept...",
      b_win: "Secured in 0.8s!",
      sim_browser: "bls-spain-visa.com/book",
      sim_loc: "Select Location",
      sim_pass: "Passport Number",
      sim_cap: "I'm not a robot",
      sim_btn: "Book Appointment",
      sim_err: "ERROR: SLOT TAKEN",
      sim_suc: "SUCCESS: 0.8s"
    },
    workflows: {
      badge: "Interactive Operations",
      title: "Visualizing the Engine",
      sub: "See exactly how our automated workforce bypasses the toughest security measures in real-time.",
      w429_title: "Automated 429 Recovery Loop",
      w429_desc: "When the target server triggers a rate limit (HTTP 429), the bot halts, swaps to a clean proxy, and regenerates a new fingerprint to resume hunting seamlessly.",
      w429_step0: "429 Target Blocked",
      w429_step1: "Proxy & ID Rotation",
      w429_step2: "Connection Restored",
      wcap_title: "Zero-Click Captcha Bypass",
      wcap_desc: "Intercepts ReCaptcha V3 scripts, offloads the challenge to our AI servers, and injects the valid token directly into the form—all in under 0.8 seconds.",
      wcap_step0: "V3 Script Intercepted",
      wcap_step1: "AI Solver Processing",
      wcap_step2: "Token Auto-Injected",
      wcal_title: "Fast-Inject Date Selection",
      wcal_desc: "Instantly scans Kendo UI calendars, detects DOM changes in milliseconds, and snaps to the first available green slot to beat human reaction times.",
      wcal_step0: "Polling API...",
      wcal_step1: "Slots Detected",
      wcal_step2: "Auto-Injected"
    },
    proof: {
      badge: "Live Telemetry",
      title: "Real-Time Secures",
      sub: "A live look at actual appointment confirmations secured recently across Turkey, Algeria, and Morocco using the TurboPulse™ Engine.",
      ticketHeader: "Appointment Letter - BLS Spain",
      applicant: "Applicant",
      passport: "Passport",
      route: "Route",
      securedIn: "Secured in",
      orderNo: "Order No."
    },
    biometrics: {
      badge: "Biometric Solutions",
      title: "Defeat Liveness Checks Automatically.",
      sub: "The Biometric Mission Control acts as a centralized hub for applicant media. Forget manual verifications. Our advanced liveness bypass injects fake video streams natively into the browser's media API.",
      f1_title: "Fake Media Device Injection", f1_desc: "Overrides navigator.mediaDevices to supply Y4M video streams, bypassing algorithmic face detection.",
      f2_title: "Auto Payment Validation", f2_desc: "Automated processing for Satim gateways with encrypted local credential storage."
    },
    cta: {
      title: "Ready to dominate the queue?",
      sub: "Download the bot now or contact us directly to purchase a license and deploy your automated workforce today.",
      btnDownload: "Download Installer",
      btnWhatsapp: "Buy License via WhatsApp"
    }
  },
  ar: {
    seo: {
      title: "BLS Superbot | أقوى بوت حجز مواعيد BLS تلقائي",
      description: "احجز مواعيد فيزا إسبانيا BLS تلقائياً. بوت BLS متقدم يدعم تجاوز الكابتشا، تدوير البروكسي لتخطي حظر 429، وتخطي فحص الحيوية (البيومتري) للجزائر والدول الأخرى.",
      keywords: "بوت bls, حجز مواعيد bls, بوت فيزا اسبانيا, سكربت مواعيد bls, بوت مواعيد الجزائر, تخطي كابتشا bls, حجز تلقائي"
    },
    nav: { features: "المميزات", stealth: "نظام التخفي", performance: "الأداء", speed: "مقارنة السرعة", workflows: "آلية العمل", proof: "النتائج الحية", biometrics: "البيومتري", license: "احصل على الترخيص" },
    hero: {
      badge: "الإصدار 7.0.4 مع محرك TurboPulse™",
      title1: "أتمت بالكامل",
      phrases: [
        "حجوزات تأشيرة BLS.",
        "تخطي الكابتشا والحظر.",
        "صيد المواعيد 24/7.",
        "تجاوز الفحص البيومتري."
      ],
      sub: "البنية التحتية المطلقة لأتمتة مواعيد BLS. سيطر على قوائم الانتظار باستخدام صيد API المزدوج، وتخطى حماية WAF بسلاسة، واحجز المواعيد بسرعة غير مسبوقة.",
      btnDownload: "تحميل التثبيت (.exe)",
      btnWhatsapp: "تواصل عبر واتساب"
    },
    stats: {
      stat1: "صيد مزدوج (API+DOM)", stat1Sub: "النمط",
      stat2: "دفاع وحماية 4 طبقات", stat2Sub: "التخفي",
      stat3: "تخطي حظر 429 تلقائياً", stat3Sub: "التعافي",
      stat4: "إصلاح ذاتي للأخطاء", stat4Sub: "100%"
    },
    features: {
      title: "بنية تحتية بمستوى احترافي",
      sub: "تم هندسة كل وحدة لتحقيق أقصى معدل نجاح وتخفٍ مطلق ضد إجراءات أمان BLS المتقدمة.",
      f1: "🤖 الوضع التلقائي الكامل",
      f1_1: "استمرارية حالة الجلسة", f1_2: "تسجيل الدخول والتعافي التلقائي", f1_3: "تجاوز القوائم المنسدلة المعقدة",
      f2: "🎯 صيد المواعيد TurboPulse™",
      f2_1: "اكتشاف مزدوج (API + DOM)", f2_2: "تشفير وحقن البيانات القياسية", f2_3: "بروتوكول التبديل التلقائي للفئات",
      f3: "🛡️ تخفي متعدد الطبقات",
      f3_1: "تخطي حماية CloudFront WAF", f3_2: "تعافي تلقائي من حظر 429", f3_3: "القاتل الصامت للنوافذ المنبثقة",
      f4: "🧩 التعامل المتقدم مع الكابتشا",
      f4_1: "تخطي V3 بدون تدخل بشري", f4_2: "دمج مع واجهة NoCaptcha", f4_3: "حقن التوكن والإرسال التلقائي",
      f5: "🚀 أداء فائق السرعة",
      f5_1: "معزز سرعة نواة BLS", f5_2: "اختيار سريع للتواريخ لمنع التضارب", f5_3: "دمج تلقائي لخدمة الباب (Doorstep)",
      f6: "🤳 مركز التحكم البيومتري",
      f6_1: "تخطي الحيوية عبر فيديو وهمي", f6_2: "دعم فيديو السيلفي (Y4M)", f6_3: "وضع الذكاء التلقائي لربط الوجوه"
    },
    stealth: {
      badge: "نظام منع الاكتشاف",
      title: "هيكلية دفاعية متعددة الطبقات",
      sub: "يعمل BLS SUPERBOT بشكل غير قابل للكشف. تضمن هيكليتنا المكونة من 4 طبقات بقاءك مخفياً تماماً عن أنظمة البصمة الرقمية وحدود الطلبات.",
      l1_title: "مستوى المتصفح", l1_desc: "يزيل علامات الأتمتة، يعشوئ عارضات WebGL، ويحاكي الأجهزة ليبدو بشرياً تماماً.",
      l2_title: "مستوى الشبكة", l2_desc: "دوران ديناميكي للبروكسي وتغيير وكيل المستخدم لتخطي حظر 429 و 403 فوراً.",
      l3_title: "مستوى السلوك", l3_desc: "منطق توقيت بشري يدمج تأخيرات رياضية ومنحنيات بيزيه لحركة الماوس.",
      l4_title: "مستوى الجلسة", l4_desc: "بروتوكولات إعادة تعيين الهوية. عند الحظر، يمسح التخزين ويولد هوية جديدة ويستأنف الصيد."
    },
    performance: {
      badge: "محرك الأداء",
      title: "مُصمم للسرعة المطلقة.",
      sub: "عندما تُحدث الأجزاء من الثانية فرقاً، يتدخل محرك TurboPulse™. آلية الفحص المخصصة عبر API تستخرج الرموز المخفية وتضرب الخوادم أسرع من أي إنسان.",
      f1_title: "الحقن السريع للمقاعد", f1_desc: "يقضي على مشكلة السباق. يجمع كل التواريخ المتاحة ويحاول تلقائياً إذا أُخذ المقعد.",
      f2_title: "بروتوكول تبديل الفئة", f2_desc: "آلية علاج ذاتي تقوم بتدوير الفئات (عادي → وقت الذروة) عند عدم توفر مقاعد."
    },
    speedRace: {
      badge: "مقارنة الأداء",
      title: "الإنسان ضد الآلة",
      sub: "شاهد محاكاة تفاعلية حية لمتقدم بشري يتنافس ضد محرك TurboPulse™ للحصول على نفس موعد الحجز تماماً.",
      btnStart: "بدء المحاكاة",
      btnReset: "إعادة الضبط",
      human: "المتقدم البشري",
      bot: "بوت TurboPulse™",
      h_wait: "ينتظر ظهور الموعد...",
      h_type: "يكتب البيانات يدوياً...",
      h_cap: "يحاول حل الكابتشا...",
      h_fail: "طااار الموعد! فشل الحجز.",
      b_wait: "في وضع الاستعداد...",
      b_api: "اعتراض بيانات API...",
      b_win: "تم الحجز في 0.8 ثانية!",
      sim_browser: "bls-spain-visa.com/book",
      sim_loc: "اختر المركز",
      sim_pass: "رقم جواز السفر",
      sim_cap: "أنا لست برنامج روبوت",
      sim_btn: "تأكيد الحجز",
      sim_err: "خطأ: الموعد محجوز مسبقاً",
      sim_suc: "نجاح: تم الحجز (0.8s)"
    },
    workflows: {
      badge: "عمليات تفاعلية",
      title: "تصور بصري للمحرك",
      sub: "شاهد كيف يقوم نظامنا بتخطي أعقد الإجراءات الأمنية في الوقت الفعلي.",
      w429_title: "حلقة التعافي التلقائي 429",
      w429_desc: "عند اكتشاف حظر (HTTP 429)، يتوقف البوت فوراً، ويقوم بتبديل البروكسي، ومسح التخزين المحلي، وتوليد بصمة جديدة لاستئناف الصيد دون تدخل بشري.",
      w429_step0: "تم حظر الاتصال (429)",
      w429_step1: "تدوير البروكسي والهوية",
      w429_step2: "تمت استعادة الاتصال",
      wcap_title: "تخطي الكابتشا الآلي",
      wcap_desc: "يعترض سكريبتات ReCaptcha V3، ويرسل التحدي إلى خوادم الذكاء الاصطناعي، ثم يحقن التوكن الصالح مباشرة في النموذج في أقل من 0.8 ثانية.",
      wcap_step0: "اعتراض سكريبت V3",
      wcap_step1: "معالجة الذكاء الاصطناعي",
      wcap_step2: "تم حقن التوكن تلقائياً",
      wcal_title: "الحقن السريع لتواريخ الحجز",
      wcal_desc: "يقوم بمسح تقويم Kendo UI لحظياً، ويكتشف التغييرات في أجزاء من الثانية، ثم يصوب نحو أول مقعد أخضر متاح متفوقاً على سرعة الاستجابة البشرية.",
      wcal_step0: "جاري فحص الواجهة...",
      wcal_step1: "تم رصد مقاعد (أخضر)",
      wcal_step2: "تم الحقن والسيطرة"
    },
    proof: {
      badge: "تتبع العمليات الحية",
      title: "حجوزات تم تأمينها للتو",
      sub: "نظرة حية على المواعيد الحقيقية التي تم تأمينها مؤخراً بنجاح في تركيا والجزائر والمغرب باستخدام محرك TurboPulse™.",
      ticketHeader: "رسالة حجز - مركز BLS",
      applicant: "المتقدم",
      passport: "جواز السفر",
      route: "المسار",
      securedIn: "تم الحجز في",
      orderNo: "رقم الطلب"
    },
    biometrics: {
      badge: "الحلول البيومترية",
      title: "اهزم فحوصات الحيوية تلقائياً.",
      sub: "يعمل مركز التحكم كمحور مركزي لوسائط المتقدم. انسَ التحقق اليدوي. يقوم نظامنا المتقدم بحقن تدفقات فيديو وهمية مباشرة في واجهة المتصفح.",
      f1_title: "حقن أجهزة وسائط وهمية", f1_desc: "يتجاوز navigator.mediaDevices لتوفير فيديو Y4M، وتخطي اكتشاف الوجه الخوارزمي.",
      f2_title: "التحقق التلقائي من الدفع", f2_desc: "معالجة تلقائية لبوابات الدفع (Satim) مع تخزين محلي مشفر لبيانات الاعتماد."
    },
    cta: {
      title: "هل أنت مستعد للسيطرة على الطابور؟",
      sub: "قم بتحميل البوت الآن أو تواصل معنا مباشرة عبر واتساب لشراء الترخيص والبدء اليوم.",
      btnDownload: "تحميل المُثبّت",
      btnWhatsapp: "شراء ترخيص عبر واتساب"
    }
  },
  tr: {
    seo: {
      title: "BLS Superbot | En İyi Otomatik BLS Randevu Botu",
      description: "BLS İspanya vize randevularınızı otomatikleştirin. Captcha atlama, 429 proxy rotasyonu ve biyometrik canlılık doğrulamasını geçen gelişmiş BLS botu.",
      keywords: "bls botu, bls randevu botu, ispanya vizesi botu, otomatik randevu, bls türkiye botu, bls randevu scripti, captcha geçme"
    },
    nav: { features: "Özellikler", stealth: "Gizlilik Sistemi", performance: "Performans", speed: "Karşılaştırma", workflows: "İş Akışları", proof: "Canlı Sonuçlar", biometrics: "Biyometri", license: "Lisans Al" },
    hero: {
      badge: "TurboPulse™ Motoru ile v7.0.4",
      title1: "Otomatikleştirin:",
      phrases: [
        "BLS Vize Randevularınızı.",
        "WAF ve Captcha Atlamayı.",
        "7/24 Slot Avcılığını.",
        "Biyometrik Doğrulamayı."
      ],
      sub: "BLS randevu otomasyonu için en üst düzey altyapı. Çift Modlu API avcılığı ile bekleme listelerine hükmedin, WAF'ı atlatın ve benzersiz bir hızla yerinizi alın.",
      btnDownload: "Kurulumu İndir (.exe)",
      btnWhatsapp: "WhatsApp'tan Ulaşın"
    },
    stats: {
      stat1: "Çift Modlu Av", stat1Sub: "API+DOM",
      stat2: "Gizlilik Savunması", stat2Sub: "4-Katman",
      stat3: "429 Kurtarma Döngüsü", stat3Sub: "Otomatik",
      stat4: "Kendi Kendini Onarma", stat4Sub: "100%"
    },
    features: {
      title: "Üretim Düzeyinde Altyapı",
      sub: "Her modül, gelişmiş BLS güvenlik önlemlerine karşı maksimum başarı oranı ve mutlak gizlilik için tasarlanmıştır.",
      f1: "🤖 Tam Otomatik Mod",
      f1_1: "Oturum Durumu Kalıcılığı", f1_2: "Otomatik Giriş ve Kurtarma", f1_3: "Kademeli Açılır Liste Bekleticileri",
      f2: "🎯 TurboPulse™ Slot Avı",
      f2_1: "Çift Modlu Algılama", f2_2: "Caesar Şifreli Yük Enjeksiyonu", f2_3: "Kategori Değiştirme Protokolü",
      f3: "🛡️ Çok Katmanlı Gizlilik",
      f3_1: "CloudFront WAF Atlama", f3_2: "Otomatik 429 Kurtarma", f3_3: "Pasif Modal Öldürücü",
      f4: "🧩 Gelişmiş Captcha İşleme",
      f4_1: "Etkileşimsiz v3 atlatma", f4_2: "Ücretli NoCaptcha Entegrasyonu", f4_3: "Token Enjeksiyonu",
      f5: "🚀 Olağanüstü Performans",
      f5_1: "BLS Çekirdek Hızlandırıcı", f5_2: "Hızlı Enjeksiyon Tarih Seçimi", f5_3: "Auto Doorstep V3 Entegrasyonu",
      f6: "🤳 Biyometrik Görev Kontrolü",
      f6_1: "Sahte Yayın ile Canlılık Atlama", f6_2: "Gelişmiş Video Selfie (Y4M)", f6_3: "Otomatik Zeka Modu"
    },
    stealth: {
      badge: "Algılama Önleyici Sistem",
      title: "Çok Katmanlı Savunma Mimarisi",
      sub: "BLS SUPERBOT tespit edilemez şekilde çalışır. Özel 4 katmanlı mimarimiz, parmak izi ve hız sınırlarından tamamen gizlenmenizi sağlar.",
      l1_title: "Tarayıcı Düzeyi", l1_desc: "Otomasyon bayraklarını kaldırır, WebGL oluşturucularını rastgele hale getirir ve tamamen insan gibi görünür.",
      l2_title: "Ağ Düzeyi", l2_desc: "Kullanıcı Aracısı sahtekarlığı ile dinamik proxy rotasyonu. 429 ve 403 oran sınırlarını atlatır.",
      l3_title: "Davranış Düzeyi", l3_desc: "İnsan benzeri zamanlama mantığı. Gecikmeler ve Bezier eğrisi fare hareketleri içerir.",
      l4_title: "Oturum Düzeyi", l4_desc: "Kimlik sıfırlama protokolleri. Engellenirse depolamayı temizler ve yeni kimlik oluşturur."
    },
    performance: {
      badge: "Performans Motoru",
      title: "Mutlak Hız İçin Tasarlandı.",
      sub: "Milisaniyeler önemli olduğunda TurboPulse™ motoru devreye girer. API tabanlı mekanizmamız, sunuculara herhangi bir insandan daha hızlı vurur.",
      f1_title: "Hızlı Enjeksiyon Slot Seçimi", f1_desc: "Yarış koşullarını ortadan kaldırır. Uygun tarihleri toplar ve slot başkası tarafından alınırsa otomatik olarak tekrar dener.",
      f2_title: "Kategori Değiştirme Protokolü", f2_desc: "Slot bulunamadığında kategorileri (Normal → Prime Time) otomatik olarak döndüren kendi kendini iyileştirme mekanizması."
    },
    speedRace: {
      badge: "Performans Karşılaştırması",
      title: "İnsan vs. Makine",
      sub: "Bir insan başvuranın TurboPulse™ motoruna karşı tam olarak aynı randevu yuvası için yarıştığı canlı ve etkileşimli bir simülasyonu izleyin.",
      btnStart: "Simülasyonu Başlat",
      btnReset: "Sistemleri Sıfırla",
      human: "İnsan Başvuran",
      bot: "TurboPulse™ Bot",
      h_wait: "Slot bekleniyor...",
      h_type: "Ayrıntılar yazılıyor...",
      h_cap: "Captcha çözülüyor...",
      h_fail: "Slot alındı! Başarısız.",
      b_wait: "Tetikleyici bekleniyor...",
      b_api: "API Yakalanıyor...",
      b_win: "0.8 saniyede alındı!",
      sim_browser: "bls-spain-visa.com/book",
      sim_loc: "Konum Seçin",
      sim_pass: "Pasaport Numarası",
      sim_cap: "Ben robot değilim",
      sim_btn: "Randevu Al",
      sim_err: "HATA: SLOT ALINDI",
      sim_suc: "BAŞARILI: 0.8s"
    },
    workflows: {
      badge: "Etkileşimli Operasyonlar",
      title: "Motoru Görselleştirin",
      sub: "Otomatik sistemimizin en zorlu güvenlik önlemlerini gerçek zamanlı olarak nasıl aştığını görün.",
      w429_title: "Otomatik 429 Kurtarma Döngüsü",
      w429_desc: "Sunucu oran sınırına ulaştığında (HTTP 429), bot anında durur, temiz bir proxy'ye geçer ve avlanmaya sorunsuz bir şekilde devam etmek için yeni bir parmak izi oluşturur.",
      w429_step0: "Hedef Engellendi (429)",
      w429_step1: "Proxy ve Kimlik Döngüsü",
      w429_step2: "Bağlantı Geri Yüklendi",
      wcap_title: "Sıfır Tıklama Captcha Atlama",
      wcap_desc: "ReCaptcha V3'ü yakalar, NoCaptcha AI sunucularımıza gönderir ve geçerli token'ı 0.8 saniyenin altında doğrudan forma enjekte eder.",
      wcap_step0: "V3 Komut Dosyası Yakalandı",
      wcap_step1: "Yapay Zeka Çözümlüyor",
      wcap_step2: "Token Otomatik Eklendi",
      wcal_title: "Hızlı Enjeksiyon Tarih Seçimi",
      wcal_desc: "Kendo UI takvimlerini anında tarar, DOM değişikliklerini milisaniyeler içinde algılar ve insan tepki sürelerini aşarak mevcut ilk yeşil slota kilitlenir.",
      wcal_step0: "API Taranıyor...",
      wcal_step1: "Slotlar Algılandı",
      wcal_step2: "Otomatik Enjekte"
    },
    proof: {
      badge: "Canlı Telemetri",
      title: "Gerçek Zamanlı Randevular",
      sub: "Türkiye, Cezayir ve Fas genelinde yakın zamanda başarıyla alınan randevu onaylarına canlı bir bakış.",
      ticketHeader: "Randevu Mektubu - BLS",
      applicant: "Başvuran",
      passport: "Pasaport",
      route: "Rota",
      securedIn: "Sürede Alındı",
      orderNo: "Sipariş No."
    },
    biometrics: {
      badge: "Biyometrik Çözümler",
      title: "Canlılık Kontrollerini Otomatik Yenin.",
      sub: "Biyometrik Görev Kontrolü, medya için merkezi bir merkez görevi görür. Gelişmiş canlılık atlamamız, sahte video akışlarını tarayıcının medya API'sine yerleştirir.",
      f1_title: "Sahte Medya Cihazı Enjeksiyonu", f1_desc: "Y4M video akışları sağlamak ve algoritmik yüz algılamayı atlamak için navigator.mediaDevices'i geçersiz kılar.",
      f2_title: "Otomatik Ödeme Doğrulaması", f2_desc: "Şifrelenmiş yerel kimlik bilgisi deposuyla Satim ağ geçitleri için otomatik işleme."
    },
    cta: {
      title: "Sıraya hükmetmeye hazır mısınız?",
      sub: "Botu şimdi indirin veya lisans satın almak ve otomatik iş gücünüzü bugün kurmak için WhatsApp'tan bizimle iletişime geçin.",
      btnDownload: "Kurulum Dosyasını İndir",
      btnWhatsapp: "WhatsApp Üzerinden Lisans Alın"
    }
  }
};

// --- Mock Data for Tickets ---
const mockBookings = [
  { id: 'ORD-YD1', name: 'WAL***** BEN*****', pass: '08******41', route: 'Algiers ➔ Spain', time: '0.8s', date: 'Just now', flag: '🇩🇿' },
  { id: 'ORD-TR9', name: 'CAN***** YIL*****', pass: 'U1******88', route: 'Istanbul ➔ Spain', time: '1.2s', date: '2 min ago', flag: '🇹🇷' },
  { id: 'ORD-MA4', name: 'MOH***** ELA*****', pass: 'AE******12', route: 'Casablanca ➔ Spain', time: '0.9s', date: '5 min ago', flag: '🇲🇦' },
  { id: 'ORD-YD2', name: 'YAS***** BOU*****', pass: '08******99', route: 'Oran ➔ Spain', time: '1.1s', date: '12 min ago', flag: '🇩🇿' },
  { id: 'ORD-TR2', name: 'MUR***** DEM*****', pass: 'U1******45', route: 'Ankara ➔ Spain', time: '0.7s', date: '15 min ago', flag: '🇹🇷' },
  { id: 'ORD-MA8', name: 'FOU***** TAH*****', pass: 'AE******77', route: 'Rabat ➔ Spain', time: '1.0s', date: '21 min ago', flag: '🇲🇦' },
];

const LanguageContext = createContext();

// --- Components ---

const SEOManager = () => {
  const { lang, t } = useContext(LanguageContext);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = t('seo.title');

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = t('seo.description');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = t('seo.keywords');

    let structuredData = document.querySelector('#bls-schema');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.type = 'application/ld+json';
      structuredData.id = 'bls-schema';
      document.head.appendChild(structuredData);
    }
    
    const schemaJSON = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "BLS SUPERBOT",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Windows, Linux, macOS",
      "description": t('seo.description'),
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "softwareVersion": "7.0.4",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "184"
      }
    };
    structuredData.innerHTML = JSON.stringify(schemaJSON);
  }, [lang, t]);

  return null; 
};

const TypewriterText = ({ phrases }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    let timer;
    if (!phrases || phrases.length === 0) return;

    const current = loopNum % phrases.length;
    const fullText = phrases[current];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(30); 
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(80); 
      }, typingSpeed);
    }

    if (!isDeleting && text === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2500); 
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(80);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, typingSpeed]);

  return (
    <span className="relative inline-flex items-center min-h-[1.2em]">
      <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">{text}</span>
      <span className="animate-[cursor-blink_1s_step-end_infinite] bg-emerald-400 inline-block w-[4px] h-[0.9em] ms-2 align-middle shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
    </span>
  );
};

const AnimatedBiometricScan = () => {
  const [scanState, setScanState] = useState(0); 
  const [logText, setLogText] = useState("");

  useEffect(() => {
    let timeout1, timeout2, timeout3;
    const runCycle = () => {
      setScanState(0);
      setLogText("[SYSTEM] Loading assets/fake_video.y4m...");
      
      timeout1 = setTimeout(() => {
        setScanState(1);
        setLogText("[WEBRTC] Intercepting camera... Analyzing liveness...");
      }, 1500);

      timeout2 = setTimeout(() => {
        setScanState(2);
        setLogText("[BYPASS] Liveness defeated. Payload accepted.");
      }, 4500);

      timeout3 = setTimeout(runCycle, 7500);
    };

    runCycle();

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <div dir="ltr" className="bg-[#0d0d0d] rounded-xl border border-zinc-800 overflow-hidden shadow-2xl p-6 relative w-full text-left flex flex-col h-full min-h-[380px]">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none"></div>
      
      <h3 className="text-xl font-bold text-white mb-6 flex items-center shrink-0">
        <span className="text-pink-500 mr-2">🚀</span> BIOMETRIC MISSION CONTROL
      </h3>
      
      <div className="relative flex-grow flex items-center justify-center bg-[#0a0a0a] border border-zinc-800 rounded-lg overflow-hidden mb-4 p-8 group">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#3f3f46 1px, transparent 1px), linear-gradient(90deg, #3f3f46 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="relative z-10">
          <ScanFace 
            className={`w-32 h-32 transition-all duration-500 ${
              scanState === 0 ? 'text-zinc-600' : 
              scanState === 1 ? 'text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 
              'text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.8)] scale-105'
            }`} 
            strokeWidth={scanState === 2 ? 2.5 : 1.5}
          />
          
          {scanState === 1 && (
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-full pointer-events-none">
              <div className="w-full h-1 bg-cyan-400 shadow-[0_0_15px_3px_rgba(34,211,238,0.8)] absolute animate-scanline"></div>
            </div>
          )}

          {scanState === 2 && (
            <div className="absolute -bottom-2 -right-2 bg-[#0a0a0a] rounded-full p-1 border border-zinc-800 animate-[fadeIn_0.3s_ease-out_forwards]">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 bg-[#0a0a0a] rounded-full" />
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#141414] border border-zinc-800 rounded-lg p-4 shrink-0">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Target Image Path</span>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
            scanState === 0 ? 'bg-zinc-800 text-zinc-400' :
            scanState === 1 ? 'bg-cyan-500/20 text-cyan-400 animate-pulse' :
            'bg-emerald-500/20 text-emerald-400'
          }`}>
            {scanState === 0 ? 'Idle' : scanState === 1 ? 'Scanning' : 'Bypassed'}
          </span>
        </div>
        <div className="font-mono text-sm text-zinc-300 h-6 flex items-center">
          <span className="text-emerald-500 mr-2">{'>'}</span>
          <span className={`${scanState === 1 ? 'text-cyan-400' : scanState === 2 ? 'text-emerald-400' : 'text-zinc-400'} transition-colors`}>
            {logText}
          </span>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const { lang, setLang, t } = useContext(LanguageContext);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Activity className="text-emerald-400 h-6 w-6" />
            <span className="text-white font-black text-xl tracking-tighter uppercase">BLS <span className="text-emerald-400">SUPERBOT</span></span>
          </div>
          <div className="hidden md:flex items-center">
            <div className="flex items-baseline space-x-6 rtl:space-x-reverse me-8 font-semibold">
              <a href="#features" className="text-zinc-400 hover:text-white transition-colors px-1 py-2 text-[13px] tracking-tight">{t('nav.features')}</a>
              <a href="#stealth" className="text-zinc-400 hover:text-white transition-colors px-1 py-2 text-[13px] tracking-tight">{t('nav.stealth')}</a>
              <a href="#performance" className="text-zinc-400 hover:text-white transition-colors px-1 py-2 text-[13px] tracking-tight">{t('nav.performance')}</a>
              <a href="#speed" className="text-zinc-400 hover:text-white transition-colors px-1 py-2 text-[13px] tracking-tight">{t('nav.speed')}</a>
              <a href="#workflows" className="text-zinc-400 hover:text-white transition-colors px-1 py-2 text-[13px] tracking-tight">{t('nav.workflows')}</a>
              <a href="#proof" className="text-zinc-400 hover:text-white transition-colors px-1 py-2 text-[13px] tracking-tight">{t('nav.proof')}</a>
              <a href="#biometrics" className="text-zinc-400 hover:text-white transition-colors px-1 py-2 text-[13px] tracking-tight">{t('nav.biometrics')}</a>
            </div>
            
            <div className="relative me-4">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors p-2 rounded-lg border border-zinc-800 bg-[#141414] hover:bg-[#1a1a1a]"
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-black">{lang.toUpperCase()}</span>
              </button>
              {showDropdown && (
                <div className="absolute top-full mt-2 right-0 w-32 bg-[#141414] border border-zinc-800 rounded-md shadow-xl py-1 z-50">
                  <button onClick={() => {setLang('en'); setShowDropdown(false);}} className={`w-full text-start px-4 py-2 text-sm hover:bg-zinc-800 ${lang === 'en' ? 'text-emerald-400 font-bold' : 'text-zinc-300'}`}>English (EN)</button>
                  <button onClick={() => {setLang('ar'); setShowDropdown(false);}} className={`w-full text-start px-4 py-2 text-sm hover:bg-zinc-800 ${lang === 'ar' ? 'text-emerald-400 font-bold' : 'text-zinc-300'}`}>العربية (AR)</button>
                  <button onClick={() => {setLang('tr'); setShowDropdown(false);}} className={`w-full text-start px-4 py-2 text-sm hover:bg-zinc-800 ${lang === 'tr' ? 'text-emerald-400 font-bold' : 'text-zinc-300'}`}>Türkçe (TR)</button>
                </div>
              )}
            </div>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 text-black px-5 py-2.5 rounded-lg text-sm font-black transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] whitespace-nowrap">
              {t('nav.license')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HeroTerminal = () => {
  const [logs, setLogs] = useState([
    "[16:06:27] 🔑 License Valid! 20d 6h remaining.",
  ]);

  useEffect(() => {
    setLogs(["[16:06:27] 🔑 License Valid! 20d 6h remaining."]); 
    const sequence = [
      { text: "[16:06:28] 🛡️ Multi-Layer Stealth Init. Bypassing CloudFront WAF...", delay: 1000 },
      { text: "[16:06:29] 🔄 Proxy Rotation & Identity Reset Complete.", delay: 2000 },
      { text: "[16:06:30] ⚡ TurboPulse™ API Engaged (Dual-Mode Detection).", delay: 3500 },
      { text: "[16:06:31] 🎯 Modal Killer passive defense active.", delay: 4500 },
      { text: "[16:06:32] 🧩 Validating __RequestVerificationToken & _yxzfp cipher...", delay: 5500 },
      { text: "[16:06:33] ✅ Slot secured in 8ms. Injecting Biometric payload...", delay: 6500 }
    ];

    let timeouts = [];
    sequence.forEach(({ text, delay }) => {
      const timeoutId = setTimeout(() => {
        setLogs(prev => [...prev, text]);
      }, delay);
      timeouts.push(timeoutId);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div dir="ltr" className="w-full max-w-2xl mx-auto mt-12 bg-[#0d0d0d] rounded-lg border border-zinc-800 overflow-hidden shadow-2xl text-left">
      <div className="flex items-center px-4 py-2 bg-[#141414] border-b border-zinc-800">
        <Terminal className="text-zinc-400 w-4 h-4 mr-2" />
        <span className="text-xs text-zinc-400 font-mono tracking-widest uppercase">TurboPulse™ Engine Log</span>
        <div className="ml-auto flex space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
        </div>
      </div>
      <div className="p-4 font-mono text-sm h-56 overflow-y-auto flex flex-col gap-2">
        {logs.map((log, i) => (
          <div key={i} className={`${i === 0 || i === 6 ? 'text-emerald-400' : 'text-zinc-300'} opacity-0 animate-[fadeIn_0.3s_ease-in_forwards]`}>
            {log}
          </div>
        ))}
        <div className="flex items-center text-emerald-400 animate-pulse mt-2">
          <span className="mr-2">_</span>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, items, highlight }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [transformStyle, setTransformStyle] = useState('');

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5; 
    const rotateY = ((x - centerX) / centerX) * 5;
    
    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle, transition: isHovered ? 'none' : 'transform 0.5s ease' }}
      className={`p-6 rounded-xl bg-zinc-900 border border-zinc-800 relative group z-10 ${highlight ? 'shadow-[0_0_30px_rgba(16,185,129,0.05)]' : ''}`}
    >
      <div 
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16,185,129, 0.1), transparent 40%)`
        }}
      />

      <div className="relative z-10">
        {highlight && (
          <div className="absolute top-0 end-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Icon className="w-24 h-24 text-emerald-500" />
          </div>
        )}
        <div className="w-12 h-12 bg-[#141414] border border-zinc-700 rounded-lg flex items-center justify-center mb-6 group-hover:border-emerald-500/50 transition-colors shadow-inner">
          <Icon className="w-6 h-6 text-emerald-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <ul className="space-y-3">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start text-zinc-400 group-hover:text-zinc-300 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 me-3 shrink-0" />
              <span className="text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const BrowserFrame = ({ children, isBot, bStep, t }) => (
  <div dir="ltr" className={`flex-1 bg-[#141414] rounded-xl border flex flex-col overflow-hidden relative transition-colors duration-300 ${isBot && bStep > 0 ? 'border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]' : 'border-zinc-800 shadow-2xl'}`}>
    <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center gap-3">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="flex-1 bg-zinc-800 rounded text-[10px] text-center py-1 text-zinc-400 font-mono flex items-center justify-center gap-2">
        <Lock className="w-3 h-3 text-emerald-500" />
        {t('speedRace.sim_browser')}
      </div>
    </div>
    <div className="flex-1 p-6 relative bg-[#0a0a0a]">
      {children}
    </div>
  </div>
);

const AnimatedSpeedRace = () => {
  const { t } = useContext(LanguageContext);
  const [simState, setSimState] = useState(0); 
  
  const [hCursor, setHCursor] = useState({ x: '80%', y: '80%' });
  const [hInput1, setHInput1] = useState('');
  const [hInput2, setHInput2] = useState('');
  const [hStep, setHStep] = useState(0); 

  const [bStep, setBStep] = useState(0); 

  const startSimulation = () => {
    if (simState === 1) return;
    setSimState(1);
    
    setHCursor({ x: '80%', y: '80%' });
    setHInput1(''); setHInput2('');
    setHStep(0); setBStep(0);

    setTimeout(() => setBStep(1), 200); 
    setTimeout(() => setBStep(2), 800); 

    setTimeout(() => { setHCursor({ x: '50%', y: '25%' }); }, 500);
    setTimeout(() => { setHStep(1); setHInput1('A'); }, 1200);
    setTimeout(() => { setHInput1('Alg'); }, 1400);
    setTimeout(() => { setHInput1('Algiers'); }, 1700);

    setTimeout(() => { setHCursor({ x: '50%', y: '45%' }); }, 2000);
    setTimeout(() => { setHStep(2); setHInput2('0'); }, 2600);
    setTimeout(() => { setHInput2('085'); }, 2900);
    setTimeout(() => { setHInput2('08534'); }, 3300);
    setTimeout(() => { setHInput2('08534882'); }, 3800);

    setTimeout(() => { setHCursor({ x: '15%', y: '65%' }); }, 4200);
    setTimeout(() => { setHStep(3); }, 5000); 

    setTimeout(() => { setHCursor({ x: '50%', y: '85%' }); }, 5800);
    setTimeout(() => { setHStep(4); setSimState(2); }, 6500); 
  };

  const resetSimulation = () => {
    setSimState(0);
    setHCursor({ x: '80%', y: '80%' });
    setHInput1(''); setHInput2('');
    setHStep(0); setBStep(0);
  };

  return (
    <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] pointer-events-none"></div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 relative z-10">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <Timer className="w-6 h-6 text-emerald-400" />
            {t('speedRace.title')}
          </h3>
          <p className="text-zinc-400 text-sm max-w-lg">{t('speedRace.sub')}</p>
        </div>
        <button 
          onClick={simState === 2 ? resetSimulation : startSimulation}
          disabled={simState === 1}
          className={`px-6 py-3 rounded-lg font-bold text-sm transition-all flex items-center gap-2 shrink-0 ${
            simState === 1 ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' :
            simState === 2 ? 'bg-[#1a1a1a] text-white border border-zinc-700 hover:border-zinc-500' :
            'bg-emerald-500 text-black hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]'
          }`}
        >
          {simState === 2 ? <RefreshCw className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
          {simState === 2 ? t('speedRace.btnReset') : t('speedRace.btnStart')}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 relative z-10 min-h-[350px]">
        
        <BrowserFrame isBot={false} bStep={0} t={t}>
          <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-2">
            <User className="w-5 h-5 text-zinc-500" />
            <span className="font-bold text-zinc-300 text-sm">{t('speedRace.human')}</span>
            {simState === 1 && <span className="ml-auto text-[10px] text-yellow-500 animate-pulse">{t('speedRace.h_type')}</span>}
          </div>

          <div className="space-y-4 max-w-xs mx-auto">
            <div className="h-10 bg-zinc-900 border border-zinc-800 rounded px-3 flex items-center text-sm text-zinc-300">
              {hInput1 || <span className="text-zinc-600">{t('speedRace.sim_loc')}</span>}
              {hStep === 1 && <span className="w-1 h-4 bg-zinc-400 animate-pulse ml-1"></span>}
            </div>
            <div className="h-10 bg-zinc-900 border border-zinc-800 rounded px-3 flex items-center text-sm text-zinc-300">
              {hInput2 || <span className="text-zinc-600">{t('speedRace.sim_pass')}</span>}
              {hStep === 2 && <span className="w-1 h-4 bg-zinc-400 animate-pulse ml-1"></span>}
            </div>
            
            <div className={`h-14 bg-zinc-100 rounded border flex items-center px-3 gap-3 transition-colors ${hStep >= 3 ? 'border-emerald-500' : 'border-gray-300'}`}>
              <div className={`w-6 h-6 border rounded flex items-center justify-center bg-white ${hStep >= 3 ? 'border-emerald-500' : 'border-gray-400'}`}>
                {hStep >= 3 && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
              </div>
              <span className="text-sm text-gray-700 font-medium">{t('speedRace.sim_cap')}</span>
              <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="h-8 ml-auto opacity-50" />
            </div>

            <div className="h-10 bg-emerald-600/50 rounded flex items-center justify-center text-sm font-bold text-white/50 border border-emerald-500/20">
              {t('speedRace.sim_btn')}
            </div>
          </div>

          <div 
            className="absolute z-50 transition-all ease-out pointer-events-none"
            style={{ top: hCursor.y, left: hCursor.x, transitionDuration: simState === 1 ? '1000ms' : '0ms' }}
          >
            <MousePointer2 className="w-6 h-6 text-black fill-white drop-shadow-md" />
            {hStep === 3 && <div className="absolute -top-2 -left-2 w-10 h-10 bg-black/20 rounded-full animate-ping"></div>}
          </div>

          {hStep === 4 && (
            <div className="absolute inset-0 bg-red-950/80 backdrop-blur-sm flex flex-col items-center justify-center animate-[fadeIn_0.2s_ease-out_forwards] z-40">
              <ServerOff className="w-12 h-12 text-red-500 mb-2" />
              <span className="font-bold text-red-400 tracking-wider uppercase">{t('speedRace.sim_err')}</span>
            </div>
          )}
        </BrowserFrame>

        <BrowserFrame isBot={true} bStep={bStep} t={t}>
          <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-2">
            <Bot className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-emerald-400 text-sm">{t('speedRace.bot')}</span>
            {bStep === 1 && <span className="ml-auto text-[10px] text-emerald-400 animate-pulse">[DOM_INJECTING...]</span>}
          </div>

          <div className="space-y-4 max-w-xs mx-auto">
            <div className={`h-10 rounded px-3 flex items-center text-sm font-mono font-bold transition-colors ${bStep >= 1 ? 'bg-emerald-500/20 border border-emerald-500 text-emerald-400' : 'bg-zinc-900 border border-zinc-800 text-zinc-600'}`}>
              {bStep >= 1 ? 'ALGIERS_TARGET_LOCKED' : t('speedRace.sim_loc')}
            </div>
            <div className={`h-10 rounded px-3 flex items-center text-sm font-mono font-bold transition-colors ${bStep >= 1 ? 'bg-emerald-500/20 border border-emerald-500 text-emerald-400' : 'bg-zinc-900 border border-zinc-800 text-zinc-600'}`}>
              {bStep >= 1 ? '08534882_INJECTED' : t('speedRace.sim_pass')}
            </div>
            
            <div className={`h-14 rounded border flex items-center px-3 gap-3 transition-colors ${bStep >= 1 ? 'bg-emerald-500/10 border-emerald-500' : 'bg-zinc-100 border-gray-300'}`}>
              <div className={`w-6 h-6 border rounded flex items-center justify-center ${bStep >= 1 ? 'bg-emerald-500 border-emerald-500' : 'bg-white border-gray-400'}`}>
                {bStep >= 1 && <CheckCircle2 className="w-4 h-4 text-white" />}
              </div>
              <span className={`text-sm font-medium ${bStep >= 1 ? 'text-emerald-400 font-mono' : 'text-gray-700'}`}>
                {bStep >= 1 ? 'TOKEN_ACCEPTED' : t('speedRace.sim_cap')}
              </span>
            </div>

            <div className={`h-10 rounded flex items-center justify-center text-sm font-bold transition-colors ${bStep >= 1 ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-emerald-600/50 text-white/50 border border-emerald-500/20'}`}>
              {bStep >= 1 ? 'POST /dza/appointment' : t('speedRace.sim_btn')}
            </div>
          </div>

          {bStep === 2 && (
            <div className="absolute inset-0 bg-emerald-950/90 backdrop-blur-md flex flex-col items-center justify-center animate-[fadeIn_0.2s_ease-out_forwards] z-40 p-6 text-center">
              <Trophy className="w-16 h-16 text-emerald-400 mb-4 animate-[bounce_1s_ease-in-out_infinite]" />
              <span className="font-bold text-emerald-300 text-xl mb-2 uppercase tracking-widest">{t('speedRace.sim_suc')}</span>
              
              <div className="mt-4 bg-black/50 border border-emerald-500/30 rounded p-3 text-[9px] font-mono text-emerald-500 text-left w-full">
                <div>{'>'} payload_injected: true</div>
                <div>{'>'} captcha_bypass: 112ms</div>
                <div>{'>'} slot_secured: [24/04/2026]</div>
                <div>{'>'} status: 200 OK</div>
              </div>
            </div>
          )}
        </BrowserFrame>

      </div>
    </div>
  );
};

const AnimatedWorkflow429 = () => {
  const { t } = useContext(LanguageContext);
  const [step, setStep] = useState(0); 
  const [proxy, setProxy] = useState("185.12.44.101");
  const [id, setId] = useState("SESS_827361");

  useEffect(() => {
    let timer;
    const runCycle = () => {
      setStep(0); 
      
      timer = setTimeout(() => {
        setStep(1); 
        
        setTimeout(() => {
          setProxy(`${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`);
          setId(`SESS_${Math.floor(100000 + Math.random() * 900000)}`);
          setStep(2); 
        }, 2000);

        setTimeout(runCycle, 6000);
      }, 3000);
    };

    runCycle();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#141414] border border-zinc-800 rounded-xl p-6 relative overflow-hidden h-full flex flex-col group">
      <div className="mb-6 relative z-10">
        <h4 className="text-xl font-bold text-white mb-2">{t('workflows.w429_title')}</h4>
        <p className="text-sm text-zinc-400 leading-relaxed">{t('workflows.w429_desc')}</p>
      </div>

      <div dir="ltr" className="flex-1 flex flex-col items-center justify-center mt-auto relative min-h-[280px]">
        {/* Browser Shell */}
        <div className={`w-full max-w-[280px] rounded-lg border bg-[#0a0a0a] overflow-hidden transition-all duration-500 ${step === 1 ? 'scale-95 opacity-50 blur-[2px] border-red-500/50' : 'border-zinc-800 shadow-2xl'}`}>
          <div className="bg-zinc-900 border-b border-zinc-800 px-3 py-2 flex items-center justify-between">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
              <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
              <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
            </div>
            <div className="text-[8px] font-mono text-zinc-500 uppercase tracking-tighter">Instance_{id}</div>
          </div>
          
          <div className="p-4 flex flex-col items-center justify-center min-h-[140px] relative">
            {step === 0 && (
              <div className="text-center animate-[fadeIn_0.3s_ease-out_forwards]">
                <ShieldAlert className="w-12 h-12 text-red-500 mx-auto mb-3" />
                <div className="text-red-500 font-black text-xl leading-none">429</div>
                <div className="text-zinc-500 text-[10px] uppercase font-bold mt-1 tracking-widest">Rate Limit Hit</div>
              </div>
            )}

            {step === 1 && (
              <div className="text-center">
                <RefreshCw className="w-10 h-10 text-cyan-400 mx-auto mb-3 animate-spin" />
                <div className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">Resetting...</div>
              </div>
            )}

            {step === 2 && (
              <div className="text-center animate-[fadeIn_0.3s_ease-out_forwards]">
                <Server className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                <div className="text-emerald-500 font-black text-xl leading-none">200 OK</div>
                <div className="text-zinc-500 text-[10px] uppercase font-bold mt-1 tracking-widest">Hunting Resumed</div>
              </div>
            )}
          </div>

          <div className="bg-zinc-900/50 border-t border-zinc-800 px-3 py-2">
            <div className="flex justify-between items-center">
              <span className="text-[9px] text-zinc-600 uppercase font-bold">Proxy IP</span>
              <span className={`text-[9px] font-mono transition-colors ${step === 2 ? 'text-emerald-400' : 'text-zinc-400'}`}>{proxy}</span>
            </div>
          </div>
        </div>

        {/* Floating AI Status Overlay */}
        {step === 1 && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
             <div className="bg-black/80 border border-cyan-500/30 rounded-lg p-4 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.2)] animate-[scaleIn_0.2s_ease-out_forwards]">
                <div className="flex items-center gap-2 mb-3">
                  <Bot className="w-4 h-4 text-cyan-400" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Auto_Recovery_Protocol</span>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-48 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 animate-[progress_2s_ease-in-out_infinite]"></div>
                  </div>
                  <div className="font-mono text-[9px] text-cyan-400/80 space-y-1">
                    <div>{'>'} wiping_browser_context... [OK]</div>
                    <div>{'>'} generating_fingerprint... [OK]</div>
                    <div>{'>'} rotating_to_new_proxy... [OK]</div>
                  </div>
                </div>
             </div>
          </div>
        )}

        {/* Step Indicators */}
        <div className="mt-8 flex gap-8 items-center justify-center opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
          <div className={`flex flex-col items-center gap-1 transition-all ${step === 0 ? 'text-red-500 scale-110 opacity-100' : 'text-zinc-600'}`}>
            <ServerOff className="w-4 h-4" />
            <span className="text-[8px] font-bold uppercase">{t('workflows.w429_step0')}</span>
          </div>
          <div className="w-4 h-px bg-zinc-800"></div>
          <div className={`flex flex-col items-center gap-1 transition-all ${step === 1 ? 'text-cyan-400 scale-110 opacity-100' : 'text-zinc-600'}`}>
            <RefreshCw className={`w-4 h-4 ${step === 1 ? 'animate-spin' : ''}`} />
            <span className="text-[8px] font-bold uppercase">{t('workflows.w429_step1')}</span>
          </div>
          <div className="w-4 h-px bg-zinc-800"></div>
          <div className={`flex flex-col items-center gap-1 transition-all ${step === 2 ? 'text-emerald-400 scale-110 opacity-100' : 'text-zinc-600'}`}>
            <Server className="w-4 h-4" />
            <span className="text-[8px] font-bold uppercase">{t('workflows.w429_step2')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnimatedWorkflowCaptcha = () => {
  const { t } = useContext(LanguageContext);
  const [step, setStep] = useState(0); 
  const [selected, setSelected] = useState([]);

  const targetSquares = [1, 3, 4, 7]; 

  useEffect(() => {
    let timer;
    const runCycle = () => {
      setStep(0);
      setSelected([]);
      
      timer = setTimeout(() => {
        setStep(1); 
        
        let selectTimers = [];
        targetSquares.forEach((sq, i) => {
          selectTimers.push(setTimeout(() => {
            setSelected(prev => [...prev, sq]);
          }, 400 * (i + 1)));
        });

        setTimeout(() => {
          setStep(2); 
        }, 400 * (targetSquares.length + 1) + 500);

        setTimeout(runCycle, 400 * (targetSquares.length + 1) + 3500);
      }, 1500);
    };

    runCycle();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#141414] border border-zinc-800 rounded-xl p-6 relative overflow-hidden h-full flex flex-col group">
      <div className="mb-6 relative z-10">
        <h4 className="text-xl font-bold text-white mb-2">{t('workflows.wcap_title')}</h4>
        <p className="text-sm text-zinc-400 leading-relaxed">{t('workflows.wcap_desc')}</p>
      </div>

      <div dir="ltr" className="flex-1 flex flex-col items-center justify-center mt-auto relative min-h-[280px]">
        <div className="bg-white rounded-sm shadow-xl w-[240px] overflow-hidden flex flex-col border border-zinc-700">
          <div className="bg-[#4a90e2] p-4 text-white text-left">
            <div className="text-[10px] uppercase font-bold opacity-80 mb-0.5">Select all squares with</div>
            <div className="text-lg font-black leading-tight">Traffic Lights</div>
            <div className="text-[9px] mt-1 opacity-70">If there are none, click skip</div>
          </div>
          
          <div className="p-1 grid grid-cols-3 gap-1 bg-[#ccc]">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="relative aspect-square bg-zinc-200 overflow-hidden group/tile">
                <img 
                  src={`https://picsum.photos/seed/captcha${i + 10}/150/150`} 
                  alt="captcha tile" 
                  className={`w-full h-full object-cover transition-transform duration-700 ${selected.includes(i) ? 'scale-90 opacity-80' : 'scale-100'}`}
                />
                {selected.includes(i) && (
                  <div className="absolute inset-0 bg-blue-500/40 flex items-center justify-center animate-[fadeIn_0.2s_ease-out_forwards]">
                    <div className="w-5 h-5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                  </div>
                )}
                {step === 1 && !selected.includes(i) && (
                   <div className="absolute inset-0 border-2 border-emerald-500/0 group-hover/tile:border-emerald-500/30 transition-colors"></div>
                )}
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-zinc-200 flex justify-between items-center bg-white">
            <div className="flex gap-3">
              <RefreshCw className="w-5 h-5 text-zinc-400" />
              <Activity className="w-5 h-5 text-zinc-400" />
              <Globe className="w-5 h-5 text-zinc-400" />
            </div>
            <button className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all ${
              step === 2 ? 'bg-emerald-500 text-black shadow-lg scale-105' : 'bg-[#4a90e2] text-white'
            }`}>
              {step === 2 ? 'Verified' : 'Verify'}
            </button>
          </div>
        </div>

        {step === 1 && (
          <div className="absolute -top-4 -right-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3 backdrop-blur-md animate-[fadeIn_0.3s_ease-out_forwards] z-20">
             <div className="flex items-center gap-2 mb-1">
               <Bot className="w-4 h-4 text-emerald-400 animate-pulse" />
               <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">AI_SOLVER_ACTIVE</span>
             </div>
             <div className="font-mono text-[9px] text-zinc-400">
               {'>'} analyzing_tiles... [DONE]<br/>
               {'>'} confidence_score: 98.4%<br/>
               {'>'} injecting_token...
             </div>
          </div>
        )}

        {step === 2 && (
          <div className="absolute inset-0 bg-emerald-950/40 backdrop-blur-[2px] flex items-center justify-center z-30 animate-[fadeIn_0.3s_ease-out_forwards]">
            <div className="bg-emerald-500 text-black p-3 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.5)] animate-[bounce_1s_ease-in-out_infinite]">
              <CheckCircle2 className="w-10 h-10" strokeWidth={3} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AnimatedWorkflowCalendar = () => {
  const { t } = useContext(LanguageContext);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 1500); 
    return () => clearInterval(timer);
  }, []);

  const calendarGrid = [
    [ {d: '', t: 0}, {d: '', t: 0}, {d: 3, t: 1}, {d: 4, t: 1}, {d: 5, t: 1}, {d: 6, t: 1}, {d: 7, t: 0} ],
    [ {d: 8, t: 0}, {d: 9, t: 1}, {d: 10, t: 1}, {d: 11, t: 1}, {d: 12, t: 1}, {d: 13, t: 2}, {d: 14, t: 0} ],
    [ {d: 15, t: 0}, {d: 16, t: 2}, {d: 17, t: 2}, {d: 18, t: 2}, {d: 19, t: 2}, {d: 20, t: 2}, {d: 21, t: 0} ],
    [ {d: 22, t: 0}, {d: 23, t: 2}, {d: 24, t: 2}, {d: 25, t: 2}, {d: 26, t: 2}, {d: 27, t: 2}, {d: 28, t: 0} ]
  ];

  return (
    <div className="bg-[#141414] border border-zinc-800 rounded-xl p-6 relative overflow-hidden h-full flex flex-col justify-between group">
      
      <div className="mb-6 relative z-10">
        <h4 className="text-xl font-bold text-white mb-2">{t('workflows.wcal_title')}</h4>
        <p className="text-sm text-zinc-400 leading-relaxed">{t('workflows.wcal_desc')}</p>
      </div>

      <div className="flex flex-col items-center mt-auto relative">
        
        <div dir="ltr" className="bg-white rounded-lg p-3 shadow-lg w-[220px] relative select-none">
          <div className="flex justify-between items-center text-gray-700 text-xs font-bold mb-2 pb-2 border-b border-gray-200">
            <span>◀</span>
            <span>June 2025</span>
            <span>▶</span>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[9px] text-gray-500 mb-1">
            <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {calendarGrid.map((row, rIdx) => (
              row.map((cell, cIdx) => {
                const isGreenTarget = cell.t === 2;
                const isRedTarget = cell.t === 1;
                
                let cellColor = "bg-gray-400 text-white"; 
                if (cell.d === '') cellColor = "bg-transparent";
                else if (isRedTarget) cellColor = "bg-red-600 text-white"; 
                else if (isGreenTarget) {
                  if (step === 0) cellColor = "bg-red-600 text-white"; 
                  else if (step >= 1) cellColor = "bg-emerald-500 text-white"; 
                }

                const isFirstTarget = rIdx === 1 && cIdx === 5;

                return (
                  <div key={`${rIdx}-${cIdx}`} className={`relative h-6 rounded flex items-center justify-center text-[10px] font-bold ${cellColor} transition-colors duration-300`}>
                    {cell.d}
                    
                    {isFirstTarget && step >= 2 && (
                      <>
                        <span className="absolute inset-0 rounded bg-emerald-400 animate-ping opacity-75"></span>
                        <MousePointer2 className="absolute -bottom-4 -right-3 w-6 h-6 text-black fill-white z-20 animate-[fadeIn_0.1s_ease-out_forwards]" strokeWidth={1.5} />
                      </>
                    )}
                  </div>
                )
              })
            ))}
          </div>
          
          {step === 0 && (
             <div className="absolute inset-0 bg-red-500/10 rounded-lg pointer-events-none">
               <div className="w-full h-1 bg-red-500/50 absolute animate-scanline shadow-[0_0_10px_2px_rgba(239,68,68,0.5)]"></div>
             </div>
          )}
        </div>

        <div className="mt-4 flex items-center gap-2">
           <div className={`w-3 h-3 rounded-full ${step === 0 ? 'bg-red-500 animate-pulse' : 'bg-emerald-500'}`}></div>
           <span className="text-xs font-bold font-mono text-zinc-300 uppercase tracking-widest">
             {step === 0 ? t('workflows.wcal_step0') : step === 1 ? t('workflows.wcal_step1') : t('workflows.wcal_step2')}
           </span>
        </div>
      </div>
    </div>
  );
};

const SuccessTicket = ({ data, t }) => {
  return (
    <div className="min-w-[320px] max-w-[320px] bg-zinc-900 border border-emerald-500/20 rounded-lg p-5 flex flex-col shadow-[0_0_15px_rgba(16,185,129,0.05)] mx-3 group relative overflow-hidden shrink-0">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[40px] rounded-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>
      
      <div className="flex justify-between items-start mb-4 border-b border-zinc-800 pb-3">
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1">
            <Ticket className="w-3 h-3" /> {t('proof.ticketHeader')}
          </span>
          <span className="text-xs text-zinc-500 mt-1">{data.date} • {data.flag}</span>
        </div>
        <QrCode className="w-8 h-8 text-zinc-600" strokeWidth={1.5} />
      </div>

      <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-left mb-4">
        <div>
          <span className="block text-[10px] text-zinc-500 uppercase">{t('proof.applicant')}</span>
          <span className="block text-sm font-bold text-zinc-200">{data.name}</span>
        </div>
        <div>
          <span className="block text-[10px] text-zinc-500 uppercase">{t('proof.passport')}</span>
          <span className="block text-sm font-bold text-zinc-200">{data.pass}</span>
        </div>
        <div className="col-span-2">
          <span className="block text-[10px] text-zinc-500 uppercase">{t('proof.route')}</span>
          <span className="block text-sm font-bold text-emerald-400">{data.route}</span>
        </div>
      </div>

      <div className="mt-auto pt-3 border-t border-zinc-800 flex items-center justify-between text-left">
        <div className="flex flex-col">
          <span className="text-[10px] text-zinc-500 uppercase">{t('proof.orderNo')}</span>
          <span className="text-xs font-mono text-zinc-400">{data.id}</span>
        </div>
        <div className="flex flex-col items-end">
           <span className="text-[10px] text-zinc-500 uppercase">{t('proof.securedIn')}</span>
           <span className="text-xs font-bold text-emerald-400">{data.time}</span>
        </div>
      </div>
    </div>
  );
};

const WhatsAppFloat = () => {
  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 end-6 z-50 bg-emerald-500 hover:bg-emerald-400 text-black p-4 rounded-full shadow-[0_4px_14px_0_rgba(16,185,129,0.4)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 stroke-[2.5]" />
      <span className="absolute end-16 whitespace-nowrap bg-[#141414] border border-zinc-800 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-bold">
        Need help? Chat with us
      </span>
    </a>
  );
};

const App = () => {
  const [lang, setLang] = useState('en');

  const t = (path) => {
    return path.split('.').reduce((obj, key) => (obj && obj[key] !== undefined) ? obj[key] : '', translations[lang]);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <SEOManager />
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen bg-[#080808] text-zinc-200 font-sans selection:bg-emerald-500/30 relative">
        <Navbar />
        
        <WhatsAppFloat />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-10 tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {t('hero.badge')}
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight mb-8 leading-tight flex flex-col items-center justify-center">
              <span className="opacity-95">{t('hero.title1')}</span>
              <span className="glow-text mt-2 block">
                <TypewriterText phrases={t('hero.phrases')} />
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-12 leading-relaxed font-medium">
              {t('hero.sub')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <a 
                href={DOWNLOAD_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-black rounded-xl font-black text-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] flex items-center justify-center gap-3 transform hover:-translate-y-1"
              >
                <Download className="w-6 h-6 stroke-[3]" />
                {t('hero.btnDownload')}
              </a>
              
              <a 
                href={WHATSAPP_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-black rounded-xl font-black text-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] flex items-center justify-center gap-3 transform hover:-translate-y-1"
              >
                <MessageCircle className="w-6 h-6 stroke-[3]" />
                {t('hero.btnWhatsapp')}
              </a>
            </div>
          </div>
        </section>

        {/* Hero Terminal (Moved lower to maintain clean hero as per screenshot) */}
        <section className="bg-black pb-24">
           <div className="max-w-4xl mx-auto px-4">
              <HeroTerminal />
           </div>
        </section>

        {/* Stats Bar */}
        <section className="border-y border-zinc-800 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-zinc-800 ${lang === 'ar' ? 'divide-x-reverse divide-x' : 'divide-x'}`}>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{t('stats.stat1Sub')}</div>
                <div className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider">{t('stats.stat1')}</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{t('stats.stat2Sub')}</div>
                <div className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider">{t('stats.stat2')}</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-1">{t('stats.stat3Sub')}</div>
                <div className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider">{t('stats.stat3')}</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{t('stats.stat4Sub')}</div>
                <div className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider">{t('stats.stat4')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24 bg-[#080808]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t('features.title')}</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">{t('features.sub')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-start">
              <FeatureCard 
                icon={Bot}
                title={t('features.f1')}
                highlight={true}
                items={[t('features.f1_1'), t('features.f1_2'), t('features.f1_3')]}
              />
              <FeatureCard 
                icon={Crosshair}
                title={t('features.f2')}
                items={[t('features.f2_1'), t('features.f2_2'), t('features.f2_3')]}
              />
              <FeatureCard 
                icon={Layers}
                title={t('features.f3')}
                items={[t('features.f3_1'), t('features.f3_2'), t('features.f3_3')]}
              />
              <FeatureCard 
                icon={Puzzle}
                title={t('features.f4')}
                items={[t('features.f4_1'), t('features.f4_2'), t('features.f4_3')]}
              />
              <FeatureCard 
                icon={Zap}
                title={t('features.f5')}
                highlight={true}
                items={[t('features.f5_1'), t('features.f5_2'), t('features.f5_3')]}
              />
              <FeatureCard 
                icon={ScanFace}
                title={t('features.f6')}
                items={[t('features.f6_1'), t('features.f6_2'), t('features.f6_3')]}
              />
            </div>
          </div>
        </section>

        {/* Stealth */}
        <section id="stealth" className="py-24 bg-[#0d0d0d] border-t border-zinc-800 text-start">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                {t('stealth.badge')}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t('stealth.title')}</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">{t('stealth.sub')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg relative overflow-hidden group">
                <div className="absolute top-0 start-0 w-full h-1 bg-cyan-500/50"></div>
                <Cpu className="w-8 h-8 text-cyan-400 mb-4" />
                <h4 className="text-white font-bold text-lg mb-3">{t('stealth.l1_title')}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{t('stealth.l1_desc')}</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 start-0 w-full h-1 bg-emerald-500/50"></div>
                <Wifi className="w-8 h-8 text-emerald-400 mb-4" />
                <h4 className="text-white font-bold text-lg mb-3">{t('stealth.l2_title')}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{t('stealth.l2_desc')}</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 start-0 w-full h-1 bg-pink-500/50"></div>
                <Activity className="w-8 h-8 text-pink-400 mb-4" />
                <h4 className="text-white font-bold text-lg mb-3">{t('stealth.l3_title')}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{t('stealth.l3_desc')}</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 start-0 w-full h-1 bg-purple-500/50"></div>
                <RefreshCw className="w-8 h-8 text-purple-400 mb-4" />
                <h4 className="text-white font-bold text-lg mb-3">{t('stealth.l4_title')}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{t('stealth.l4_desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Performance */}
        <section id="performance" className="py-24 bg-[#080808] border-t border-zinc-800 text-start">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                  <Zap className="w-4 h-4" />
                  {t('performance.badge')}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{t('performance.title')}</h2>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  {t('performance.sub')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-cyan-500/30 transition-colors">
                    <Crosshair className="text-cyan-400 w-6 h-6 me-4 shrink-0" />
                    <div>
                      <h4 className="text-white font-bold">{t('performance.f1_title')}</h4>
                      <p className="text-zinc-500 text-sm mt-1 leading-relaxed">{t('performance.f1_desc')}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-cyan-500/30 transition-colors">
                    <RefreshCw className="text-cyan-400 w-6 h-6 me-4 shrink-0" />
                    <div>
                      <h4 className="text-white font-bold">{t('performance.f2_title')}</h4>
                      <p className="text-zinc-500 text-sm mt-1 leading-relaxed">{t('performance.f2_desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div dir="ltr" className="lg:w-1/2 w-full text-left">
                <div className="bg-[#0d0d0d] rounded-xl border border-zinc-800 overflow-hidden shadow-2xl p-6 relative">
                   <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full"></div>
                   <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <span className="text-cyan-500 mr-2">🌐</span> PROXY ROTATION & CONFIG
                   </h3>
                   
                   <div className="space-y-4">
                     <div className="bg-[#141414] border border-zinc-800 rounded-lg p-4 flex justify-between items-center">
                       <div>
                         <div className="text-xs font-bold text-zinc-300 uppercase mb-1">Browser Engine</div>
                         <div className="text-emerald-400 text-sm">Playwright (Chromium) - Headless Optimized</div>
                       </div>
                       <ChevronRight className="w-4 h-4 text-zinc-600" />
                     </div>
                     
                     <div className="bg-[#141414] border border-zinc-800 rounded-lg p-4">
                       <div className="flex justify-between items-center mb-3">
                         <span className="text-xs font-bold text-zinc-300 uppercase">Active Proxies (429 Bypass)</span>
                         <span className="flex items-center text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></div>
                           Live Rotation ON
                         </span>
                       </div>
                       <div className="font-mono text-xs text-zinc-500 space-y-1 bg-[#0a0a0a] p-3 rounded border border-zinc-800/50">
                         <div>proxy1.algeria.net:8080 <span className="text-emerald-500 ml-2">24ms</span></div>
                         <div>proxy2.algeria.net:8080 <span className="text-emerald-500 ml-2">31ms</span></div>
                         <div className="opacity-50">proxy3.algeria.net:8080 <span className="text-zinc-600 ml-2">Rotating on 429...</span></div>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speed Benchmark Simulation */}
        <section id="speed" className="py-24 bg-[#0a0a0a] border-t border-zinc-800 text-start">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                 <Zap className="w-4 h-4" />
                 {t('speedRace.badge')}
               </div>
             </div>
             <AnimatedSpeedRace />
          </div>
        </section>

        {/* Animated Workflows */}
        <section id="workflows" className="py-24 bg-[#0d0d0d] border-t border-zinc-800 text-start">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Activity className="w-4 h-4" />
                {t('workflows.badge')}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t('workflows.title')}</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">{t('workflows.sub')}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <AnimatedWorkflow429 />
              <AnimatedWorkflowCaptcha />
              <AnimatedWorkflowCalendar />
            </div>
          </div>
        </section>

        {/* Live Results */}
        <section id="proof" className="py-24 bg-[#080808] border-t border-zinc-800 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {t('proof.badge')}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t('proof.title')}</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">{t('proof.sub')}</p>
          </div>

          <div dir="ltr" className="relative flex overflow-x-hidden w-full group py-4">
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#080808] to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#080808] to-transparent z-10"></div>

            <div className="flex animate-marquee whitespace-nowrap min-w-full">
               {mockBookings.map((booking, index) => (
                 <SuccessTicket key={`first-${index}`} data={booking} t={t} />
               ))}
               {mockBookings.map((booking, index) => (
                 <SuccessTicket key={`second-${index}`} data={booking} t={t} />
               ))}
            </div>
          </div>
        </section>

        {/* Biometrics */}
        <section id="biometrics" className="py-24 bg-[#0a0a0a] border-t border-zinc-800 text-start">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                  <ScanFace className="w-4 h-4" />
                  {t('biometrics.badge')}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{t('biometrics.title')}</h2>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  {t('biometrics.sub')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                    <Lock className="text-emerald-400 w-6 h-6 me-4 shrink-0" />
                    <div>
                      <h4 className="text-white font-bold">{t('biometrics.f1_title')}</h4>
                      <p className="text-zinc-500 text-sm mt-1 leading-relaxed">{t('biometrics.f1_desc')}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                    <Shield className="text-emerald-400 w-6 h-6 me-4 shrink-0" />
                    <div>
                      <h4 className="text-white font-bold">{t('biometrics.f2_title')}</h4>
                      <p className="text-zinc-500 text-sm mt-1 leading-relaxed">{t('biometrics.f2_desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <AnimatedBiometricScan />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808] to-[#041a10] z-0"></div>
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('cta.title')}</h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl">{t('cta.sub')}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href={DOWNLOAD_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-[#141414] hover:bg-[#1a1a1a] border border-zinc-700 hover:border-emerald-500 text-white rounded-lg font-bold text-xl transition-all flex items-center justify-center gap-3 group"
              >
                <Download className="w-6 h-6 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                {t('cta.btnDownload')}
              </a>

              <a 
                href={WHATSAPP_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-[#25D366] hover:bg-[#20b858] text-white rounded-lg font-bold text-xl transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                {t('cta.btnWhatsapp')}
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800 bg-[#080808] py-12 text-start">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Activity className="text-emerald-400 h-6 w-6" />
              <span className="text-white font-black text-xl tracking-tighter uppercase">BLS <span className="text-emerald-400">SUPERBOT</span></span>
            </div>
            <p className="text-zinc-600 text-sm">
              © 2026 BLS Superbot Technologies. All rights reserved. Version 7.0.4
            </p>
            <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
               <a href="#" className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm">Terms</a>
               <a href="#" className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm">Privacy</a>
               <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#25D366] transition-colors text-sm font-bold flex items-center gap-1">
                 <MessageCircle className="w-4 h-4" /> Support
               </a>
            </div>
          </div>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
