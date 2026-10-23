/**
 * EUROWAY Consulting Agency — Interactive Application Logic
 * Mobile-First, Multi-language, Dynamic Filters, Lead Dispatcher
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. DATA: PROGRAM DETAILS & REQUIREMENTS
  // ==========================================
  const programDetails = {
    'de-wt': {
      flag: '🇩🇪',
      title: 'Germaniya: Work And Travel (Ferienjob)',
      badge: 'Yozgi mavsumiy dastur',
      desc: 'O‘zbekiston va xorijiy OTMlarning kunduzgi bo‘lim talabalari uchun Germaniyada yozgi ta’tilda 2-3 oy qonuniy ishlash va Yevropa bo‘ylab sayohat qilish dasturi.',
      sections: [
        {
          title: 'Dastur imkoniyatlari:',
          items: [
            'Oylik maosh: 1,800€ dan 2,500€ gacha (soatiga 12.41€ dan boshlab)',
            'Germaniya Mehnat Vazirligi (ZAV) tomonidan beriladigan rasmiy ruxsatnoma',
            '27 ta Shengen davlati bo‘ylab sayohat qilish imkoniyati',
            'Nemis va ingliz tili amaliyoti hamda xalqaro do‘stlar'
          ]
        },
        {
          title: 'Nomzodlarga talablar:',
          items: [
            'OTMning 1-, 2- yoki 3-bosqich kunduzgi talabasi bo‘lishi',
            'Boshlang‘ich nemis yoki ingliz tili bilish darajasi (A2+)',
            '18 yoshdan 30 yoshgacha bo‘lish'
          ]
        }
      ]
    },
    'de-bm': {
      flag: '🇩🇪',
      title: 'Germaniya: Bakalavr va Magistratura',
      badge: 'Davlat Universitetlarida Ta\'lim',
      desc: 'Germaniyaning jahon reytingidagi eng ilg‘or davlat universitetlarida tekin yoki minimal semestr to‘lovi bilan ta’lim olish.',
      sections: [
        {
          title: 'Afzalliklari:',
          items: [
            'Ko‘plab davlat OTMlarida 0€ kontrakt (faqat 150-350€ semestrlik chipta/badal)',
            'O‘qish davrida haftasiga 20 soat, ta’tilda esa 40 soatgacha qonuniy ishlash huquqi',
            'O‘qishni tamomlagach, Germaniyada ish qidirish uchun 18 oylik viza beriladi',
            'Butun dunyoda tan olinadigan nufuzli Germaniya diplomi'
          ]
        },
        {
          title: 'Asosiy talablar:',
          items: [
            'Bakalavr uchun: Maktab/Litsey/Kollej + 1-2 yil OTM yoki Studienkolleg',
            'Magistratura uchun: Bakalavr diplomi',
            'Nemis tilidagi yo‘nalishlar uchun: TestDaF, DSH yoki Goethe B2/C1',
            'Ingliz tilidagi yo‘nalishlar uchun: IELTS 6.0 — 6.5+'
          ]
        }
      ]
    },
    'de-aus': {
      flag: '🇩🇪',
      title: 'Germaniya: Ausbildung (Dual Ta\'lim)',
      badge: 'Oylik stipendiyali kasbiy ta\'lim',
      desc: 'Germaniyada 3 yillik dual kasb-hunar dasturi: o‘quvchilar bir vaqtning o‘zida kasb o‘rganadi, korxonada ishlaydi va har oy maosh oladi.',
      sections: [
        {
          title: 'Dastur imtiyozlari:',
          items: [
            'Har oylik kafolatlangan stipendiya: 950€ dan 1,300€ gacha (yil sayin o‘sadi)',
            'Ta’lim mutlaqo bepul (shartnoma va sug‘urta ish beruvchi tomonidan to‘lanadi)',
            'Tibbiyot (hamshiralik), IT, mehmondo‘stlik, logistika va muhandislik sohalari',
            'Dastur yakunida Germaniyada doimiy rasmiy ish joyi kafolati'
          ]
        },
        {
          title: 'Nomzodga qo‘yiladigan talablar:',
          items: [
            'Kamida 11 yillik maktab, kollej yoki litsey diplomi',
            'Nemis tili bo‘yicha rasmiy sertifikat (Goethe, ÖSD yoki Telc B1/B2)',
            'Yosh chegarasi: 18 yoshdan 35 yoshgacha'
          ]
        }
      ]
    },
    'de-fsj': {
      flag: '🇩🇪',
      title: 'Germaniya: FSJ (Ko‘ngillilik Yili)',
      badge: 'Ijtimoiy-ko‘ngillilik dasturi',
      desc: 'Freiwilliges Soziales Jahr — 1 yil davomida Germaniyaning ijtimoiy, tibbiy yoki madaniy muassasalarida yordam berish va Yevropa muhitiga kirib borish dasturi.',
      sections: [
        {
          title: 'Dastur taqdim etadigan sharoitlar:',
          items: [
            'Bepul turar joy va oziq-ovqat (yoki kompensatsiya)',
            'Har oy 400€ dan 550€ gacha cho‘ntak puli (Taschengeld)',
            'Bepul tibbiy va ijtimoiy sug‘urta',
            'FSJ tugagach, Ausbildung yoki Universitetga kirishda eng ustuvor imtiyoz'
          ]
        },
        {
          title: 'Talablar:',
          items: [
            '18 yoshdan 26 yoshgacha bo‘lgan yoshlar',
            'Nemis tilida erkin muloqot qila olish (kamida B1 daraja)',
            'Ijtimoiy yordamga qiziqish va mas’uliyatlilik'
          ]
        }
      ]
    },
    'bg-wt': {
      flag: '🇧🇬',
      title: 'Bolgariya: Work and Travel',
      badge: 'Yozgi mavsumiy mehnat dasturi',
      desc: 'Bolgariyaning Qora dengiz bo‘yi mashhur kurortlari (Varna, Burgas, Sunny Beach) dagi nufuzli mehmonxona va restoranlarda rasmiy ishlash.',
      sections: [
        {
          title: 'Dastur afzalliklari:',
          items: [
            'Bepul yotoqxona va 3 mahal ovqat ish beruvchi hisobidan to‘liq ta’minlanadi',
            'Oylik sof daromad + choychaqa (tips) va bonuslar',
            'Qisqa muddatda va oson viza olish jarayoni',
            'Dengiz bo‘yida dam olish, yangi muhit va xalqaro tajriba'
          ]
        },
        {
          title: 'Talablar:',
          items: [
            '18 yoshdan 35 yoshgacha bo‘lish',
            'Rus yoki ingliz tilida boshlang‘ich so‘zlashuv darajasi',
            'Mehnatsevarlik va xushmuomalalik'
          ]
        }
      ]
    },
    'it-bac': {
      flag: '🇮🇹',
      title: 'Italiya: Bakalavriat Ta\'limi',
      badge: 'Yevropada 3 Yillik Oliy Ta\'lim',
      desc: 'Tarixiy va jahonga mashhur Rim, Bolonya, Milan, Turin va Padoa universitetlarida ingliz yoki italyan tilida nufuzli diplom olish.',
      sections: [
        {
          title: 'Imkoniyatlar:',
          items: [
            'Ingliz tilida 100 dan ortiq zamonaviy bakalavr yo‘nalishlari',
            'Yevropa va butun dunyoda tan olinuvchi Yevropa Ittifoqi diplomi',
            'Italiya hukumati va viloyat grantlariga ariza topshirish imkoni',
            'Shengen mamlakatlariga sayohat qilish va talaba sifatida ishlash huquqi'
          ]
        },
        {
          title: 'Talablar:',
          items: [
            '12 yillik ta’lim (maktab + litsey/kollej yoki OTM 1-kursi)',
            'Ingliz tilidagi yo‘nalishlar uchun: IELTS 5.5 — 6.0+',
            'Universitet kirish imtihonlari (TOLC yoki sat)'
          ]
        }
      ]
    },
    'it-mas': {
      flag: '🇮🇹',
      title: 'Italiya: Magistratura & DSU Grantlari',
      badge: 'Yillik ~8,000€ lik to‘liq grant',
      desc: 'Italiya davlat universitetlarida 2 yillik magistratura dasturlari hamda davlat tomonidan to‘liq moliyalashtiriluvchi DSU regional stipendiyasi.',
      sections: [
        {
          title: 'DSU Granti nimani taqdim etadi?',
          items: [
            'Universitetning 100% kontrakt to‘lovi bekor qilinadi (0€ to‘lov)',
            'Har yili talabaga 7,000€ dan 8,000€ gacha naqd stipendiya to‘lanadi',
            'Bepul turar joy (talabalar rezidensiyasi) va bepul oshxona kartasi',
            'Arizalarni topshirishda oilaviy daromad ko‘rsatkichlari inobatga olinadi'
          ]
        },
        {
          title: 'Talablar:',
          items: [
            'Tegishli soha bo‘yicha bakalavr diplomi (GPA yuqori bo‘lishi ustunlik beradi)',
            'IELTS 6.0+ yoki ingliz tilida o‘qiganlik to‘g‘risida ma’lumotnoma',
            'Motivatsiya xati va rezyume (CV)'
          ]
        }
      ]
    }
  };

  // ==========================================
  // 2. MULTI-LANGUAGE TRANSLATIONS (UZ / RU / EN)
  // ==========================================
  const i18n = {
    uz: {
      navAbout: 'Biz haqimizda',
      navPrograms: 'Dasturlar',
      navFaq: 'Savol-Javob',
      navContact: 'Aloqa',
      heroBadge: '2026/2027 mavsumi arizalari qabuli ochiq',
      heroTitle: 'Yevropa sari yo‘lingizni EUROWAY bilan boshlang',
      heroDesc: 'Germaniya, Italiya va Bolgariyada qonuniy ishlash, nufuzli oliy ta’lim, 100% lik grantlar hamda xalqaro karyera imkoniyatlari.',
      btnPrograms: "Dasturlarni ko'rish",
      btnApplyNow: 'Tezkor ariza berish',
      statCountries: 'Yevropa Davlati',
      statLegal: 'Qonuniy & Shartnoma',
      statPrograms: 'Maxsus Dastur',
      linkConsult: 'Maslahat olish →',
      badgeAbout: 'BIZ HAQIMIZDA',
      aboutTitle: 'Yevropada ishonchli hamkoringiz',
      aboutSubtitle: 'EUROWAY Consulting Agency — yoshlar, talabalar va xalqaro tajriba orttirmoqchi bo‘lganlar uchun Yevropaning ilg‘or davlatlariga yo‘l ochib beruvchi professional konsalting agentligi.',
      adv1Title: 'Qonuniy va Rasmiy shartnoma',
      adv1Desc: 'Har bir mijoz bilan qonuniy shartnoma tuziladi. Xizmatlar shaffof va 100% xavfsiz amalga oshiriladi.',
      adv2Title: 'To‘liq Viza Ko‘magi',
      adv2Desc: 'Elchixona uchun hujjatlar paketini xatosiz tayyorlash, suhbatlarga individual tayyorgarlik va viza kafolati.',
      adv3Title: 'Grantlar & Yuqori Daromad',
      adv3Desc: "Italiyada 8,000€ gacha bo'lgan DSU grantlari hamda Germaniyada 1,800€-2,500€ oylik daromadli ish o'rinlari.",
      adv4Title: 'Doimiy Kuratorlik',
      adv4Desc: "Yevropaga yetib borgandan so'ng turar joy topish, kutib olish va ro'yxatdan o'tishda doimiy yordam.",
      badgePrograms: 'YO‘NALISHLAR',
      programsTitle: 'Xalqaro Yevropa Dasturlari',
      programsSubtitle: 'O‘zingizga mos davlat va dasturni tanlang hamda talablari bilan batafsil tanishing.',
      bannerTag: 'BEPUL KONSULTATSIYA',
      bannerTitle: 'Qaysi dastur sizga mos kelishini bilmayapsizmi?',
      bannerText: "Ma'lumotlaringizni qoldiring, mutaxassislarimiz 15 daqiqa ichida siz bilan bog'lanib, sharoitingizga eng mos yo'nalishni tanlab berishadi.",
      btnFastConsult: 'Konsultatsiya olish',
      badgeFaq: 'SAVOL-JAVOBLAR',
      faqTitle: 'Ko‘p Beriladigan Savollar',
      faqSubtitle: 'Mijozlarimiz tomonidan tez-tez so‘raladigan asosiy savollarga javoblar.',
      badgeContact: 'BOG‘LANISH',
      contactTitle: 'Biz Bilan Bog‘laning',
      contactSubtitle: 'Savollaringiz bormi? Mutaxassislarimiz har doim aloqada va sizga yordam berishga tayyor.',
      lblPhone: 'Telefon raqam',
      formTitle: 'Tezkor Ariza Qoldirish',
      formDesc: "Formani to‘ldiring, ma'lumotlaringiz to‘g‘ridan-to‘g‘ri mutaxassisimizga yetib boradi.",
      lblName: 'Ismingiz va Familiyangiz *',
      lblUserPhone: 'Telefon raqamingiz *',
      lblSelectProgram: 'Qiziqqan yo‘nalishingiz *',
      lblMessage: 'Qo‘shimcha savolingiz (ixtiyoriy)',
      formPrivacy: '🔒 Shaxsiy ma\'lumotlaringiz maxfiyligi 100% kafolatlanadi.',
      fastCall: "Tezkor bog'lanish:"
    },
    ru: {
      navAbout: 'О нас',
      navPrograms: 'Программы',
      navFaq: 'Вопросы-Ответы',
      navContact: 'Контакты',
      heroBadge: 'Приём заявок на сезон 2026/2027 открыт',
      heroTitle: 'Откройте путь в Европу вместе с EUROWAY',
      heroDesc: 'Легальная работа, престижное высшее образование, 100% стипендии и гранты в Германии, Италии и Болгарии.',
      btnPrograms: 'Смотреть программы',
      btnApplyNow: 'Быстрая заявка',
      statCountries: 'Страны Европы',
      statLegal: 'Официальный договор',
      statPrograms: 'Программ',
      linkConsult: 'Получить консультацию →',
      badgeAbout: 'О НАШЕМ АГЕНТСТВЕ',
      aboutTitle: 'Ваш надёжный партнёр в Европе',
      aboutSubtitle: 'EUROWAY Consulting Agency — профессиональное консалтинговое агентство, открывающее двери в передовые страны Европы для студентов и молодёжи.',
      adv1Title: 'Официальный договор',
      adv1Desc: 'С каждым клиентом заключается официальный договор. Все услуги прозрачны и безопасны.',
      adv2Title: 'Визовая поддержка',
      adv2Desc: 'Безошибочная подготовка документов в консульство и индивидуальная подготовка к собеседованию.',
      adv3Title: 'Гранты и высокая оплата',
      adv3Desc: 'Гранты DSU до 8,000€ в Италии и заработок 1,800€-2,500€ в месяц в Германии.',
      adv4Title: 'Кураторство 24/7',
      adv4Desc: 'Помощь с поиском жилья, встречей и регистрацией по прибытии в Европу.',
      badgePrograms: 'НАПРАВЛЕНИЯ',
      programsTitle: 'Международные европейские программы',
      programsSubtitle: 'Выберите подходящую страну и ознакомьтесь с условиями участия.',
      bannerTag: 'БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ',
      bannerTitle: 'Не знаете, какая программа вам подходит?',
      bannerText: 'Оставьте свои данные, и наш специалист свяжется с вами в течение 15 минут для подбора лучшего варианта.',
      btnFastConsult: 'Получить консультацию',
      badgeFaq: 'ВОПРОСЫ И ОТВЕТЫ',
      faqTitle: 'Часто задаваемые вопросы',
      faqSubtitle: 'Ответы на самые популярные вопросы от наших клиентов.',
      badgeContact: 'СВЯЗЬ С НАМИ',
      contactTitle: 'Свяжитесь с нами',
      contactSubtitle: 'Есть вопросы? Наши специалисты всегда на связи и готовы помочь.',
      lblPhone: 'Номер телефона',
      formTitle: 'Быстрая заявка',
      formDesc: 'Заполните форму, и ваши данные сразу попадут нашему специалисту.',
      lblName: 'Ваше имя и фамилия *',
      lblUserPhone: 'Номер телефона *',
      lblSelectProgram: 'Интересующее направление *',
      lblMessage: 'Дополнительный вопрос (необязательно)',
      formPrivacy: '🔒 Конфиденциальность ваших данных на 100% гарантирована.',
      fastCall: 'Быстрая связь:'
    },
    en: {
      navAbout: 'About Us',
      navPrograms: 'Programs',
      navFaq: 'FAQ',
      navContact: 'Contact',
      heroBadge: 'Applications open for 2026/2027 season',
      heroTitle: 'Begin Your Gateway to Europe with EUROWAY',
      heroDesc: 'Legal employment, prestigious universities, 100% full scholarships and grants in Germany, Italy, and Bulgaria.',
      btnPrograms: 'Explore Programs',
      btnApplyNow: 'Apply Now',
      statCountries: 'EU Countries',
      statLegal: '100% Legal Contract',
      statPrograms: 'Top Programs',
      linkConsult: 'Get Consultation →',
      badgeAbout: 'ABOUT OUR AGENCY',
      aboutTitle: 'Your Trusted Gateway to Europe',
      aboutSubtitle: 'EUROWAY Consulting Agency is a premier educational and career consulting agency creating pathways to Europe for ambitious youth and students.',
      adv1Title: 'Legal & Certified Contract',
      adv1Desc: 'We execute formal binding agreements with each client ensuring 100% safety and transparency.',
      adv2Title: 'Comprehensive Visa Support',
      adv2Desc: 'Complete consular documentation assistance, mock interview preparation, and high visa issuance success.',
      adv3Title: 'Grants & High Earnings',
      adv3Desc: 'Italian DSU grants up to 8,000€/year and German Work & Travel earnings of 1,800€-2,500€/month.',
      adv4Title: 'Arrival Mentorship',
      adv4Desc: 'Full accommodation assistance, orientation, airport greeting, and registration support in Europe.',
      badgePrograms: 'PROGRAMS',
      programsTitle: 'European Pathways & Programs',
      programsSubtitle: 'Choose your desired country and discover verified career and study options.',
      bannerTag: 'FREE CONSULTATION',
      bannerTitle: 'Unsure which program fits your background?',
      bannerText: 'Submit your contact details and our senior consultant will get in touch within 15 minutes to guide you.',
      btnFastConsult: 'Request Consultation',
      badgeFaq: 'FAQ',
      faqTitle: 'Frequently Asked Questions',
      faqSubtitle: 'Answers to the most common questions regarding visas, admissions, and requirements.',
      badgeContact: 'CONTACT',
      contactTitle: 'Get In Touch',
      contactSubtitle: 'Have questions? Our international admissions and career team is here to assist you.',
      lblPhone: 'Phone number',
      formTitle: 'Submit Fast Application',
      formDesc: 'Fill out this quick form and our advisors will receive your inquiry directly.',
      lblName: 'Full Name *',
      lblUserPhone: 'Phone Number *',
      lblSelectProgram: 'Preferred Program *',
      lblMessage: 'Your message or question (optional)',
      formPrivacy: '🔒 Your personal information is strictly protected and secure.',
      fastCall: 'Direct line:'
    }
  };

  // Language Switching Handler
  let currentLang = 'uz';
  try {
    const saved = localStorage.getItem('euroway-lang');
    if (saved && i18n[saved]) currentLang = saved;
  } catch (e) {}

  function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    try { localStorage.setItem('euroway-lang', lang); } catch (e) {}

    // Update Text Elements
    document.querySelectorAll('[data-t]').forEach(el => {
      const key = el.getAttribute('data-t');
      if (i18n[lang] && i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    // Update Active Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      updateLanguage(btn.getAttribute('data-lang'));
    });
  });

  updateLanguage(currentLang);

  // ==========================================
  // 3. MOBILE MENU TOGGLE
  // ==========================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileMenuBtn.classList.toggle('active', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when clicking link
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==========================================
  // 4. COUNTRY FILTER TABS
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const programCards = document.querySelectorAll('.program-card');

  function filterPrograms(country) {
    filterBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter') === country));

    programCards.forEach(card => {
      const cardCountry = card.getAttribute('data-country');
      if (country === 'all' || cardCountry === country) {
        card.style.display = 'flex';
        card.style.animation = 'fadeInCard 0.35s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterPrograms(btn.getAttribute('data-filter'));
    });
  });

  // Nav Links with data-filter-nav attribute
  document.querySelectorAll('[data-filter-nav]').forEach(navLink => {
    navLink.addEventListener('click', (e) => {
      const targetCountry = navLink.getAttribute('data-filter-nav');
      if (targetCountry) {
        filterPrograms(targetCountry);
        const progSection = document.getElementById('programs');
        if (progSection) {
          progSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // ==========================================
  // 5. FAQ ACCORDION
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close other items
      faqItems.forEach(other => {
        other.classList.remove('active');
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ==========================================
  // 6. PROGRAM DETAILS MODAL (POPUP)
  // ==========================================
  const detailModal = document.getElementById('detailModal');
  const closeDetailModal = document.getElementById('closeDetailModal');
  const modalDetailCloseBtn = document.getElementById('modalDetailCloseBtn');
  const modalDetailApplyBtn = document.getElementById('modalDetailApplyBtn');
  const modalDetailFlag = document.getElementById('modalDetailFlag');
  const modalDetailTitle = document.getElementById('modalDetailTitle');
  const modalDetailBody = document.getElementById('modalDetailBody');

  let activeProgramNameForDetail = '';

  function openDetailModal(key) {
    const data = programDetails[key];
    if (!data) return;

    activeProgramNameForDetail = data.title;
    modalDetailFlag.textContent = data.flag;
    modalDetailTitle.textContent = data.title;

    let bodyHtml = `<p class="modal-subtitle" style="margin-bottom: 14px;">${data.desc}</p>`;

    data.sections.forEach(sec => {
      bodyHtml += `
        <div class="detail-section">
          <h4>${sec.title}</h4>
          <ul class="detail-list">
            ${sec.items.map(it => `<li>${it}</li>`).join('')}
          </ul>
        </div>
      `;
    });

    modalDetailBody.innerHTML = bodyHtml;
    detailModal.classList.add('open');
    detailModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function hideDetailModal() {
    detailModal.classList.remove('open');
    detailModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.open-detail-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-program-key');
      openDetailModal(key);
    });
  });

  if (closeDetailModal) closeDetailModal.addEventListener('click', hideDetailModal);
  if (modalDetailCloseBtn) modalDetailCloseBtn.addEventListener('click', hideDetailModal);

  if (modalDetailApplyBtn) {
    modalDetailApplyBtn.addEventListener('click', () => {
      hideDetailModal();
      openApplyModal(activeProgramNameForDetail);
    });
  }

  // ==========================================
  // 7. APPLICATION MODAL & FORM LEAD DISPATCHER
  // ==========================================
  const applyModal = document.getElementById('applyModal');
  const closeApplyModal = document.getElementById('closeApplyModal');
  const modalSelectedProgram = document.getElementById('modalSelectedProgram');
  const modalHiddenProgram = document.getElementById('modalHiddenProgram');
  const modalApplyForm = document.getElementById('modalApplyForm');
  const modalSubmitWa = document.getElementById('modalSubmitWa');

  function openApplyModal(programPreset) {
    const preset = programPreset || 'Umumiy bepul konsultatsiya';
    modalSelectedProgram.textContent = preset;
    modalHiddenProgram.value = preset;

    applyModal.classList.add('open');
    applyModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // autofocus first input
    const nameInput = document.getElementById('modalUserName');
    if (nameInput) setTimeout(() => nameInput.focus(), 100);
  }

  function hideApplyModal() {
    applyModal.classList.remove('open');
    applyModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.open-apply-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const preset = btn.getAttribute('data-program-preset');
      openApplyModal(preset);
    });
  });

  if (closeApplyModal) closeApplyModal.addEventListener('click', hideApplyModal);

  // Close modals on backdrop click
  [detailModal, applyModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
          modal.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        }
      });
    }
  });

  // Close modals on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideDetailModal();
      hideApplyModal();
    }
  });

  // Dispatch to Telegram
  function sendToTelegram(name, phone, program, note) {
    const message = `Assalomu alaykum, EUROWAY Consulting Agency!\n\n` +
      `Mening arizam:\n` +
      `👤 Ism: ${name}\n` +
      `📞 Tel: ${phone}\n` +
      `🌍 Dastur: ${program}\n` +
      (note ? `💬 Izoh: ${note}\n` : '') +
      `\nKonsultatsiya olishni istayman.`;

    const encoded = encodeURIComponent(message);
    const tgUrl = `https://t.me/EuroWay_uzb?text=${encoded}`;
    window.open(tgUrl, '_blank');
  }

  // Dispatch to WhatsApp
  function sendToWhatsApp(name, phone, program, note) {
    const message = `Assalomu alaykum, EUROWAY Consulting Agency!\n\n` +
      `Mening arizam:\n` +
      `👤 Ism: ${name}\n` +
      `📞 Tel: ${phone}\n` +
      `🌍 Dastur: ${program}\n` +
      (note ? `💬 Izoh: ${note}\n` : '') +
      `\nKonsultatsiya olishni istayman.`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/998997643710?text=${encoded}`;
    window.open(waUrl, '_blank');
  }

  // Handle Modal Form Submit (Telegram)
  if (modalApplyForm) {
    modalApplyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modalUserName').value.trim();
      const phone = document.getElementById('modalUserPhone').value.trim();
      const program = modalHiddenProgram.value;
      const note = document.getElementById('modalUserNote').value.trim();

      if (!name || !phone) return;

      sendToTelegram(name, phone, program, note);
      hideApplyModal();
      modalApplyForm.reset();
    });
  }

  // Handle Modal Form Submit (WhatsApp)
  if (modalSubmitWa) {
    modalSubmitWa.addEventListener('click', () => {
      const name = document.getElementById('modalUserName').value.trim();
      const phone = document.getElementById('modalUserPhone').value.trim();
      const program = modalHiddenProgram.value;
      const note = document.getElementById('modalUserNote').value.trim();

      if (!name || !phone) {
        alert("Iltimos, ismingiz va telefon raqamingizni kiriting!");
        return;
      }

      sendToWhatsApp(name, phone, program, note);
      hideApplyModal();
      modalApplyForm.reset();
    });
  }

  // ==========================================
  // 8. CONTACT SECTION FORM (TELEGRAM & WHATSAPP)
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  const submitWaBtn = document.getElementById('submitWaBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('userName').value.trim();
      const phone = document.getElementById('userPhone').value.trim();
      const program = document.getElementById('userProgram').value;
      const msg = document.getElementById('userMessage').value.trim();

      if (!name || !phone || !program) return;

      sendToTelegram(name, phone, program, msg);
      contactForm.reset();
    });
  }

  if (submitWaBtn) {
    submitWaBtn.addEventListener('click', () => {
      const name = document.getElementById('userName').value.trim();
      const phone = document.getElementById('userPhone').value.trim();
      const program = document.getElementById('userProgram').value;
      const msg = document.getElementById('userMessage').value.trim();

      if (!name || !phone || !program) {
        alert("Iltimos, ismingiz, telefon raqamingiz va yo'nalishni tanlang!");
        return;
      }

      sendToWhatsApp(name, phone, program, msg);
      contactForm.reset();
    });
  }

});
