import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: { features: "Features", stealth: "Stealth System", performance: "Performance", speed: "Benchmark", workflows: "Workflows", proof: "Live Results", biometrics: "Biometrics", pricing: "Pricing", license: "Get License" },
    seo: {
      title: "BLS Superbot — Auto Book Spain Visa Appointments 24/7 | BLS Algeria, Morocco, Turkey",
      description: "Automate your BLS Spain visa appointment booking from Algeria, Morocco & Turkey. TurboPulse™ engine secures slots in under 1 second with captcha bypass, proxy rotation and biometric liveness defeat.",
      keywords: "BLS Spain visa appointment bot, BLS Algeria auto book, BLS Morocco bot, BLS Turkey booking, Spain visa slot hunter, visa automation, captcha bypass bot, auto visa Algeria"
    },
    hero: {
      badge: "v7.0.4 with TurboPulse™ Engine",
      title1: "Automate Your",
      phrases: ["WAF & Captcha", "Slot Hunting 24/7.", "Biometric Verifications.", "BLS Visa Appointments."],
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
      f1: "Complete Auto Mode", f1_1: "Session State Persistence", f1_2: "Automatic Login & Recovery", f1_3: "Cascade Dropdown Waiters",
      f2: "TurboPulse™ Slot Hunting", f2_1: "Dual-Mode Detection", f2_2: "Caesar Cipher Payload Injection", f2_3: "Category Swap Protocol",
      f3: "Multi-Layer Stealth", f3_1: "CloudFront WAF Bypass", f3_2: "Automated 429 Recovery", f3_3: "Passive Modal Killer",
      f4: "Advanced Captcha Handling", f4_1: "Zero-interaction v3 bypassing", f4_2: "Paid NoCaptcha Integration", f4_3: "Token Injection & Submission",
      f5: "Extreme Performance", f5_1: "BLS Core Speed Boost", f5_2: "Fast-Inject Date Selection", f5_3: "Auto Doorstep V3 Integration",
      f6: "Biometric Mission Control", f6_1: "Liveness Bypass via Fake Stream", f6_2: "Advanced Video Selfie (Y4M)", f6_3: "Auto-Intelligence Mode"
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
      btnStart: "Start Simulation", btnReset: "Reset Systems",
      human: "Human Applicant", bot: "TurboPulse™ Bot",
      h_wait: "Waiting for slot...", h_type: "Typing details...", h_cap: "Solving Captcha...", h_fail: "Slot taken! Failed.",
      b_wait: "Awaiting trigger...", b_api: "API Intercept...", b_win: "Secured in 0.8s!",
      sim_browser: "bls-spain-visa.com/book",
      sim_loc: "Select Location", sim_pass: "Passport Number", sim_cap: "I'm not a robot", sim_btn: "Book Appointment",
      sim_err: "ERROR: SLOT TAKEN", sim_suc: "SUCCESS: 0.8s"
    },
    workflows: {
      badge: "Interactive Operations",
      title: "Visualizing the Engine",
      sub: "See exactly how our automated workforce bypasses the toughest security measures in real-time.",
      w429_title: "Automated 429 Recovery Loop",
      w429_desc: "When the target server triggers a rate limit (HTTP 429), the bot halts, swaps to a clean proxy, and regenerates a new fingerprint to resume hunting seamlessly.",
      w429_step0: "429 Target Blocked", w429_step1: "Proxy & ID Rotation", w429_step2: "Connection Restored",
      wcap_title: "Zero-Click Captcha Bypass",
      wcap_desc: "Intercepts ReCaptcha V3 scripts, offloads the challenge to our AI servers, and injects the valid token directly into the form—all in under 0.8 seconds.",
      wcap_step0: "V3 Script Intercepted", wcap_step1: "AI Solver Processing", wcap_step2: "Token Auto-Injected",
      wcal_title: "Fast-Inject Date Selection",
      wcal_desc: "Instantly scans Kendo UI calendars, detects DOM changes in milliseconds, and snaps to the first available green slot to beat human reaction times.",
      wcal_step0: "Polling API...", wcal_step1: "Slots Detected", wcal_step2: "Auto-Injected"
    },
    proof: {
      badge: "Live Telemetry",
      title: "Real-Time Secures",
      sub: "A live look at actual appointment confirmations secured recently across Turkey, Algeria, and Morocco using the TurboPulse™ Engine.",
      ticketHeader: "Appointment Letter - BLS Spain",
      applicant: "Applicant", passport: "Passport", route: "Route", securedIn: "Secured in", orderNo: "Order No."
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
    nav: { features: "المميزات", stealth: "نظام التخفي", performance: "الأداء", speed: "مقارنة السرعة", workflows: "آلية العمل", proof: "النتائج الحية", biometrics: "البيومتري", pricing: "الأسعار", license: "احصل على الترخيص" },
    seo: {
      title: "BLS Superbot — حجز تلقائي لمواعيد تأشيرة إسبانيا 24/7 | الجزائر، المغرب، تركيا",
      description: "احجز مواعيد تأشيرات إسبانيا من الجزائر والمغرب وتركيا تلقائياً. محرك TurboPulse™ يحجز المواعيد في أقل من ثانية مع تجاوز الكابتشا وتدوير البروكسي.",
      keywords: "بوت حجز مواعيد BLS, حجز تلقائي تأشيرة اسبانيا الجزائر, بوت موعد BLS المغرب, حجز تأشيرة تركيا"
    },
    hero: {
      badge: "الإصدار 7.0.4 مع محرك TurboPulse™",
      title1: "أتمت بالكامل",
      phrases: ["حجوزات تأشيرة BLS.", "تخطي الكابتشا والحظر.", "صيد المواعيد 24/7.", "تجاوز الفحص البيومتري."],
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
      f1: "الوضع التلقائي الكامل", f1_1: "استمرارية حالة الجلسة", f1_2: "تسجيل الدخول والتعافي التلقائي", f1_3: "تجاوز القوائم المنسدلة المعقدة",
      f2: "صيد المواعيد TurboPulse™", f2_1: "اكتشاف مزدوج (API + DOM)", f2_2: "تشفير وحقن البيانات القياسية", f2_3: "بروتوكول التبديل التلقائي للفئات",
      f3: "تخفي متعدد الطبقات", f3_1: "تخطي حماية CloudFront WAF", f3_2: "تعافي تلقائي من حظر 429", f3_3: "القاتل الصامت للنوافذ المنبثقة",
      f4: "التعامل المتقدم مع الكابتشا", f4_1: "تخطي V3 بدون تدخل بشري", f4_2: "دمج مع واجهة NoCaptcha", f4_3: "حقن التوكن والإرسال التلقائي",
      f5: "أداء فائق السرعة", f5_1: "معزز سرعة نواة BLS", f5_2: "اختيار سريع للتواريخ لمنع التضارب", f5_3: "دمج تلقائي لخدمة الباب",
      f6: "مركز التحكم البيومتري", f6_1: "تخطي الحيوية عبر فيديو وهمي", f6_2: "دعم فيديو السيلفي (Y4M)", f6_3: "وضع الذكاء التلقائي لربط الوجوه"
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
      btnStart: "بدء المحاكاة", btnReset: "إعادة الضبط",
      human: "المتقدم البشري", bot: "بوت TurboPulse™",
      h_wait: "ينتظر ظهور الموعد...", h_type: "يكتب البيانات يدوياً...", h_cap: "يحاول حل الكابتشا...", h_fail: "طااار الموعد! فشل الحجز.",
      b_wait: "في وضع الاستعداد...", b_api: "اعتراض بيانات API...", b_win: "تم الحجز في 0.8 ثانية!",
      sim_browser: "bls-spain-visa.com/book",
      sim_loc: "اختر المركز", sim_pass: "رقم جواز السفر", sim_cap: "أنا لست برنامج روبوت", sim_btn: "تأكيد الحجز",
      sim_err: "خطأ: الموعد محجوز مسبقاً", sim_suc: "نجاح: تم الحجز (0.8s)"
    },
    workflows: {
      badge: "عمليات تفاعلية",
      title: "تصور بصري للمحرك",
      sub: "شاهد كيف يقوم نظامنا بتخطي أعقد الإجراءات الأمنية في الوقت الفعلي.",
      w429_title: "حلقة التعافي التلقائي 429",
      w429_desc: "عند اكتشاف حظر (HTTP 429)، يتوقف البوت فوراً، ويقوم بتبديل البروكسي، ومسح التخزين المحلي، وتوليد بصمة جديدة لاستئناف الصيد دون تدخل بشري.",
      w429_step0: "تم حظر الاتصال (429)", w429_step1: "تدوير البروكسي والهوية", w429_step2: "تمت استعادة الاتصال",
      wcap_title: "تخطي الكابتشا الآلي",
      wcap_desc: "يعترض سكريبتات ReCaptcha V3، ويرسل التحدي إلى خوادم الذكاء الاصطناعي، ثم يحقن التوكن الصالح مباشرة في النموذج في أقل من 0.8 ثانية.",
      wcap_step0: "اعتراض سكريبت V3", wcap_step1: "معالجة الذكاء الاصطناعي", wcap_step2: "تم حقن التوكن تلقائياً",
      wcal_title: "الحقن السريع لتواريخ الحجز",
      wcal_desc: "يقوم بمسح تقويم Kendo UI لحظياً، ويكتشف التغييرات في أجزاء من الثانية، ثم يصوب نحو أول مقعد أخضر متاح متفوقاً على سرعة الاستجابة البشرية.",
      wcal_step0: "جاري فحص الواجهة...", wcal_step1: "تم رصد مقاعد (أخضر)", wcal_step2: "تم الحقن والسيطرة"
    },
    proof: {
      badge: "تتبع العمليات الحية",
      title: "حجوزات تم تأمينها للتو",
      sub: "نظرة حية على المواعيد الحقيقية التي تم تأمينها مؤخراً بنجاح في تركيا والجزائر والمغرب باستخدام محرك TurboPulse™.",
      ticketHeader: "رسالة حجز - مركز BLS",
      applicant: "المتقدم", passport: "جواز السفر", route: "المسار", securedIn: "تم الحجز في", orderNo: "رقم الطلب"
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
    nav: { features: "Özellikler", stealth: "Gizlilik Sistemi", performance: "Performans", speed: "Karşılaştırma", workflows: "İş Akışları", proof: "Canlı Sonuçlar", biometrics: "Biyometri", pricing: "Fiyatlandırma", license: "Lisans Al" },
    seo: {
      title: "BLS Superbot — İspanya Vize Randevularını 7/24 Otomatik Booking | BLS Cezayir, Fas, Türkiye",
      description: "Cezayir, Fas ve Türkiye'den İspanya BLS vize randevularınızı otomatikleştirin. TurboPulse™ motoru captcha atlama, proxy rotasyonu ve biyometrik canlılık doğrulamasıyla 1 saniyeden kısa sürede randevu alır.",
      keywords: "BLS İspanya vize randevusu bot, BLS Cezayir otomatik randevu, BLS Fas randevu botu, BLS Türkiye otomatik rezervasyon"
    },
    hero: {
      badge: "TurboPulse™ Motoru ile v7.0.4",
      title1: "Otomatikleştirin:",
      phrases: ["BLS Vize Randevularınızı.", "WAF ve Captcha Atlamayı.", "7/24 Slot Avcılığını.", "Biyometrik Doğrulamayı."],
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
      f1: "Tam Otomatik Mod", f1_1: "Oturum Durumu Kalıcılığı", f1_2: "Otomatik Giriş ve Kurtarma", f1_3: "Kademeli Açılır Liste Bekleticileri",
      f2: "TurboPulse™ Slot Avı", f2_1: "Çift Modlu Algılama", f2_2: "Caesar Şifreli Yük Enjeksiyonu", f2_3: "Kategori Değiştirme Protokolü",
      f3: "Çok Katmanlı Gizlilik", f3_1: "CloudFront WAF Atlama", f3_2: "Otomatik 429 Kurtarma", f3_3: "Pasif Modal Öldürücü",
      f4: "Gelişmiş Captcha İşleme", f4_1: "Etkileşimsiz v3 atlatma", f4_2: "Ücretli NoCaptcha Entegrasyonu", f4_3: "Token Enjeksiyonu",
      f5: "Olağanüstü Performans", f5_1: "BLS Çekirdek Hızlandırıcı", f5_2: "Hızlı Enjeksiyon Tarih Seçimi", f5_3: "Auto Doorstep V3 Entegrasyonu",
      f6: "Biyometrik Görev Kontrolü", f6_1: "Sahte Yayın ile Canlılık Atlama", f6_2: "Gelişmiş Video Selfie (Y4M)", f6_3: "Otomatik Zeka Modu"
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
      btnStart: "Simülasyonu Başlat", btnReset: "Sistemleri Sıfırla",
      human: "İnsan Başvuran", bot: "TurboPulse™ Bot",
      h_wait: "Slot bekleniyor...", h_type: "Ayrıntılar yazılıyor...", h_cap: "Captcha çözülüyor...", h_fail: "Slot alındı! Başarısız.",
      b_wait: "Tetikleyici bekleniyor...", b_api: "API Yakalanıyor...", b_win: "0.8 saniyede alındı!",
      sim_browser: "bls-spain-visa.com/book",
      sim_loc: "Konum Seçin", sim_pass: "Pasaport Numarası", sim_cap: "Ben robot değilim", sim_btn: "Randevu Al",
      sim_err: "HATA: SLOT ALINDI", sim_suc: "BAŞARILI: 0.8s"
    },
    workflows: {
      badge: "Etkileşimli Operasyonlar",
      title: "Motoru Görselleştirin",
      sub: "Otomatik sistemimizin en zorlu güvenlik önlemlerini gerçek zamanlı olarak nasıl aştığını görün.",
      w429_title: "Otomatik 429 Kurtarma Döngüsü",
      w429_desc: "Sunucu oran sınırına ulaştığında (HTTP 429), bot anında durur, temiz bir proxy'ye geçer ve avlanmaya sorunsuz bir şekilde devam etmek için yeni bir parmak izi oluşturur.",
      w429_step0: "Hedef Engellendi (429)", w429_step1: "Proxy ve Kimlik Döngüsü", w429_step2: "Bağlantı Geri Yüklendi",
      wcap_title: "Sıfır Tıklama Captcha Atlama",
      wcap_desc: "ReCaptcha V3'ü yakalar, NoCaptcha AI sunucularımıza gönderir ve geçerli token'ı 0.8 saniyenin altında doğrudan forma enjekte eder.",
      wcap_step0: "V3 Komut Dosyası Yakalandı", wcap_step1: "Yapay Zeka Çözümlüyor", wcap_step2: "Token Otomatik Eklendi",
      wcal_title: "Hızlı Enjeksiyon Tarih Seçimi",
      wcal_desc: "Kendo UI takvimlerini anında tarar, DOM değişikliklerini milisaniyeler içinde algılar ve insan tepki sürelerini aşarak mevcut ilk yeşil slota kilitlenir.",
      wcal_step0: "API Taranıyor...", wcal_step1: "Slotlar Algılandı", wcal_step2: "Otomatik Enjekte"
    },
    proof: {
      badge: "Canlı Telemetri",
      title: "Gerçek Zamanlı Randevular",
      sub: "Türkiye, Cezayir ve Fas genelinde yakın zamanda başarıyla alınan randevu onaylarına canlı bir bakış.",
      ticketHeader: "Randevu Mektubu - BLS",
      applicant: "Başvuran", passport: "Pasaport", route: "Rota", securedIn: "Sürede Alındı", orderNo: "Sipariş No."
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

const t = (lang, path) =>
  path.split('.').reduce((obj, key) => (obj && obj[key] !== undefined) ? obj[key] : '', translations[lang] || translations.en);

export const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  t,
});

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { translations, t };
