import React, { useEffect, useMemo, useState, useCallback, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Menu, X } from 'lucide-react';
import './index.css';

/* ---------- IMPORT ALL IMAGES ---------- */
/* AI */
import aiSudan from './assets/images/designs/ai/Sudan.jpg';
import aiTalkAboutSudan from './assets/images/designs/ai/Talk-about-Sudan.jpg';
import aiCries from './assets/images/designs/ai/cries.jpg';
import aiSilanceWall from './assets/images/designs/ai/silance-wall.jpg';

/* charity-posters */
import posterFriday from './assets/images/designs/charity-posters/firday.jpg';
import poster1 from './assets/images/designs/charity-posters/poster-1.jpg';
import poster2 from './assets/images/designs/charity-posters/poster-2.jpg';
import poster3 from './assets/images/designs/charity-posters/poster-3.jpg';
import poster4 from './assets/images/designs/charity-posters/poster-4.jpg';
import poster5 from './assets/images/designs/charity-posters/poster-5.jpg';
import poster6 from './assets/images/designs/charity-posters/poster-6.jpg';

/* fantasy */
import fantasyHndsa from './assets/images/designs/fantasy/Hndsa.jpg';
import fantasyAstronout from './assets/images/designs/fantasy/astronout.jpg';
import fantasyMain from './assets/images/designs/fantasy/fantasy.jpg';

/* logo */
import logoNabta2 from './assets/images/designs/logo/nabta-2.jpg';
import logoNapta1 from './assets/images/designs/logo/napta-1.jpg';
import logoSomo from './assets/images/designs/logo/somo-logo.jpg';

/* marketing */
import marketingBlueCar from './assets/images/designs/marketing/blue-car.jpg';
import marketingHeadphone from './assets/images/designs/marketing/head-phone.jpg';
import marketingNike from './assets/images/designs/marketing/nike-shoes.jpg';

/* practice */
import practice7up from './assets/images/designs/practice/7-up.jpg';
import practiceOrangeCar from './assets/images/designs/practice/Orange-Car.jpg';
import practiceStarbucks from './assets/images/designs/practice/Starbucks.jpg';
import practiceYellowCar from './assets/images/designs/practice/Yellow-Car.jpg';
import practiceCoffeeCup from './assets/images/designs/practice/coofee-cup.jpg';

/* real-world */
import realSudani from './assets/images/designs/real-world/Sudani.jpg';
import realTornado from './assets/images/designs/real-world/Tornado.jpg';

/* profile photo */
import profilePic from './assets/images/profile/my-pic.png';

/* resume */
import resumePdf from './assets/cv/munzir-malik.pdf';

/* -------------------- PROJECTS (one per image) --------------------
   Each project includes an `i18n` field with `en` and `ar` copies for:
   - title, short, details, category
   This lets the UI pick the right language for title/description/category.
*/
const PROJECTS = [
  /* AI */
  {
    id: 'ai-1',
    category: 'AI',
    client: 'Personal',
    tools: ['AI', 'Photoshop'],
    hero: aiSudan,
    gallery: [aiSudan],
    i18n: {
      en: { title: 'Sudan — AI Study', short: 'AI & Photoshop composition.', details: 'AI + Photoshop composition exploring visual narrative.', category: 'AI' },
      ar: { title: 'السودان — دراسة بالذكاء الاصطناعي', short: 'تركيب بالذكاء الاصطناعي والفوتوشوب.', details: 'تركيب AI + Photoshop يستكشف السرد البصري.', category: 'الذكاء الاصطناعي' },
    },
  },
  {
    id: 'ai-2',
    category: 'AI',
    client: 'Personal',
    tools: ['AI', 'Photoshop'],
    hero: aiTalkAboutSudan,
    gallery: [aiTalkAboutSudan],
    i18n: {
      en: { title: 'Talk About Sudan', short: 'Awareness poster produced with AI + Photoshop.', details: 'AI-assisted concept refined in Photoshop.', category: 'AI' },
      ar: { title: 'تحدث عن السودان', short: 'ملصق توعوي باستخدام AI وPhotoshop.', details: 'فكرة مولدة بالذكاء الاصطناعي ومعدّلة في فوتوشوب.', category: 'الذكاء الاصطناعي' },
    },
  },
  {
    id: 'ai-3',
    category: 'AI',
    client: 'Personal',
    tools: ['AI', 'Photoshop'],
    hero: aiCries,
    gallery: [aiCries],
    i18n: {
      en: { title: 'Cries', short: 'Emotive AI treatment.', details: 'AI + Photoshop, focus on mood and texture.', category: 'AI' },
      ar: { title: 'صرخات', short: 'معالجة عاطفية بالذكاء الاصطناعي.', details: 'AI + Photoshop مع التركيز على المزاج والملمس.', category: 'الذكاء الاصطناعي' },
    },
  },
  {
    id: 'ai-4',
    category: 'AI',
    client: 'Personal',
    tools: ['AI', 'Photoshop'],
    hero: aiSilanceWall,
    gallery: [aiSilanceWall],
    i18n: {
      en: { title: 'Silence Wall', short: 'Generative wall composition.', details: 'Generative elements polished in Photoshop.', category: 'AI' },
      ar: { title: 'جدار الصمت', short: 'تركيب جمالي مولد.', details: 'عناصر مولدة مصقولة في فوتوشوب.', category: 'الذكاء الاصطناعي' },
    },
  },

  /* Charity posters */
  {
    id: 'cp-1',
    category: 'Charity Posters',
    client: 'Charity',
    tools: ['Photoshop'],
    hero: posterFriday,
    gallery: [posterFriday],
    i18n: {
      en: { title: 'Friday Poster', short: 'Charity outreach poster.', details: 'Poster design for charity event.', category: 'Charity Posters' },
      ar: { title: 'ملصق الجمعة', short: 'ملصق للتواصل الخيري.', details: 'تصميم ملصق لفعالية خيرية.', category: 'ملصقات خيرية' },
    },
  },
  {
    id: 'cp-2',
    category: 'Charity Posters',
    client: 'Charity',
    tools: ['Photoshop'],
    hero: poster1,
    gallery: [poster1],
    i18n: {
      en: { title: 'Poster 1', short: 'Campaign poster.', details: 'Typography-led charity poster.', category: 'Charity Posters' },
      ar: { title: 'الملصق 1', short: 'ملصق حملة.', details: 'ملصق خيري بقيادة الطباعة.', category: 'ملصقات خيرية' },
    },
  },
  {
    id: 'cp-3',
    category: 'Charity Posters',
    client: 'Charity',
    tools: ['Photoshop'],
    hero: poster2,
    gallery: [poster2],
    i18n: {
      en: { title: 'Poster 2', short: 'Awareness poster series.', details: 'Bright, bold visual to drive engagement.', category: 'Charity Posters' },
      ar: { title: 'الملصق 2', short: 'سلسلة ملصقات توعوية.', details: 'تصميم جريء ومشرق لجذب الانتباه.', category: 'ملصقات خيرية' },
    },
  },
  {
    id: 'cp-4',
    category: 'Charity Posters',
    client: 'Charity',
    tools: ['Photoshop'],
    hero: poster3,
    gallery: [poster3],
    i18n: {
      en: { title: 'Poster 3', short: 'Poster variant.', details: 'Layout and imagery for charity cause.', category: 'Charity Posters' },
      ar: { title: 'الملصق 3', short: 'نسخة من الملصق.', details: 'تخطيط وصور لقضية خيرية.', category: 'ملصقات خيرية' },
    },
  },
  {
    id: 'cp-5',
    category: 'Charity Posters',
    client: 'Charity',
    tools: ['Photoshop'],
    hero: poster4,
    gallery: [poster4],
    i18n: {
      en: { title: 'Poster 4', short: 'Campaign art.', details: 'Poster design with visual hierarchy.', category: 'Charity Posters' },
      ar: { title: 'الملصق 4', short: 'فن الحملة.', details: 'تصميم ملصق مع هرمية بصرية.', category: 'ملصقات خيرية' },
    },
  },
  {
    id: 'cp-6',
    category: 'Charity Posters',
    client: 'Charity',
    tools: ['Photoshop'],
    hero: poster5,
    gallery: [poster5],
    i18n: {
      en: { title: 'Poster 5', short: 'Poster variant.', details: 'Campaign poster visual.', category: 'Charity Posters' },
      ar: { title: 'الملصق 5', short: 'نسخة ملصق.', details: 'صورة لمواد الحملة.', category: 'ملصقات خيرية' },
    },
  },
  {
    id: 'cp-7',
    category: 'Charity Posters',
    client: 'Charity',
    tools: ['Photoshop'],
    hero: poster6,
    gallery: [poster6],
    i18n: {
      en: { title: 'Poster 6', short: 'Charity outreach.', details: 'Final poster in the series.', category: 'Charity Posters' },
      ar: { title: 'الملصق 6', short: 'تواصل خيري.', details: 'الملصق النهائي في السلسلة.', category: 'ملصقات خيرية' },
    },
  },

  /* Fantasy */
  {
    id: 'f-1',
    category: 'Fantasy',
    client: 'Personal',
    tools: ['Photoshop'],
    hero: fantasyHndsa,
    gallery: [fantasyHndsa],
    i18n: {
      en: { title: 'Hndsa', short: 'Fantasy environment composition.', details: 'Illustrative fantasy poster produced in Photoshop.', category: 'Fantasy' },
      ar: { title: 'هندسة', short: 'تركيب بيئة فانتازية.', details: 'ملصق فنتازي توضيحي مصنوع في فوتوشوب.', category: 'فانتازيا' },
    },
  },
  {
    id: 'f-2',
    category: 'Fantasy',
    client: 'Personal',
    tools: ['Photoshop'],
    hero: fantasyAstronout,
    gallery: [fantasyAstronout],
    i18n: {
      en: { title: 'Astronout', short: 'Astronaut scene.', details: 'Surreal sci-fi composition.', category: 'Fantasy' },
      ar: { title: 'رائد الفضاء', short: 'مشهد رائد فضاء.', details: 'تركيب علمي-خيالي سريالي.', category: 'فانتازيا' },
    },
  },
  {
    id: 'f-3',
    category: 'Fantasy',
    client: 'Personal',
    tools: ['Photoshop'],
    hero: fantasyMain,
    gallery: [fantasyMain],
    i18n: {
      en: { title: 'Fantasy Scene', short: 'Fantasy art.', details: 'Experiment with color and form.', category: 'Fantasy' },
      ar: { title: 'مشهد فانتازي', short: 'فن فانتازي.', details: 'تجربة بالألوان والشكل.', category: 'فانتازيا' },
    },
  },

  /* Logo */
  {
    id: 'l-1',
    category: 'Logo',
    client: 'Brand',
    tools: ['Photoshop'],
    hero: logoNabta2,
    gallery: [logoNabta2],
    i18n: {
      en: { title: 'Nabta 2', short: 'Logo concept.', details: 'Brand identity exploration.', category: 'Logo' },
      ar: { title: 'نبتة 2', short: 'مفهوم الشعار.', details: 'استكشاف هوية العلامة التجارية.', category: 'شعارات' },
    },
  },
  {
    id: 'l-2',
    category: 'Logo',
    client: 'Brand',
    tools: ['Photoshop'],
    hero: logoNapta1,
    gallery: [logoNapta1],
    i18n: {
      en: { title: 'Napta 1', short: 'Logo mark.', details: 'Mark and logotype concept.', category: 'Logo' },
      ar: { title: 'نابتا 1', short: 'رمز الشعار.', details: 'مفهوم العلامة واللوجو.', category: 'شعارات' },
    },
  },
  {
    id: 'l-3',
    category: 'Logo',
    client: 'Brand',
    tools: ['Photoshop'],
    hero: logoSomo,
    gallery: [logoSomo],
    i18n: {
      en: { title: 'Somo Logo', short: 'Logo design.', details: 'Simple and modern identity.', category: 'Logo' },
      ar: { title: 'شعار سومو', short: 'تصميم شعار.', details: 'هوية بسيطة وحديثة.', category: 'شعارات' },
    },
  },

  /* Marketing */
  {
    id: 'm-1',
    category: 'Marketing',
    client: 'Client',
    tools: ['Photoshop'],
    hero: marketingBlueCar,
    gallery: [marketingBlueCar],
    i18n: {
      en: { title: 'Blue Car Ad', short: 'Automotive promo.', details: 'Marketing asset for car brand.', category: 'Marketing' },
      ar: { title: 'إعلان السيارة الزرقاء', short: 'ترويج سيارات.', details: 'مادة تسويقية لعلامة سيارات.', category: 'تسويق' },
    },
  },
  {
    id: 'm-2',
    category: 'Marketing',
    client: 'Client',
    tools: ['Photoshop'],
    hero: marketingHeadphone,
    gallery: [marketingHeadphone],
    i18n: {
      en: { title: 'Headphone Ad', short: 'Audio product ad.', details: 'Product ad for headphones.', category: 'Marketing' },
      ar: { title: 'إعلان سماعات', short: 'إعلان منتج صوتي.', details: 'إعلان منتج للسماعات.', category: 'تسويق' },
    },
  },
  {
    id: 'm-3',
    category: 'Marketing',
    client: 'Client',
    tools: ['Photoshop'],
    hero: marketingNike,
    gallery: [marketingNike],
    i18n: {
      en: { title: 'Nike Shoes Ad', short: 'Sneaker ad.', details: 'Sport product marketing creative.', category: 'Marketing' },
      ar: { title: 'إعلان حذاء نايك', short: 'إعلان حذاء رياضي.', details: 'إعلان تسويقي لمنتج رياضي.', category: 'تسويق' },
    },
  },

  /* Practice */
  {
    id: 'p-1',
    category: 'Practice',
    client: 'Practice',
    tools: ['Photoshop'],
    hero: practice7up,
    gallery: [practice7up],
    i18n: {
      en: { title: '7-Up Study', short: 'Practice piece.', details: 'Practice exercise in layout & color.', category: 'Practice' },
      ar: { title: 'دراسة 7-Up', short: 'عمل تدريبي.', details: 'تمرين ممارس في التخطيط واللون.', category: 'تجارب' },
    },
  },
  {
    id: 'p-2',
    category: 'Practice',
    client: 'Practice',
    tools: ['Photoshop'],
    hero: practiceOrangeCar,
    gallery: [practiceOrangeCar],
    i18n: {
      en: { title: 'Orange Car Study', short: 'Practice render.', details: 'Color & composition practice.', category: 'Practice' },
      ar: { title: 'دراسة سيارة برتقالية', short: 'تصيير تدريبي.', details: 'ممارسة اللون والتكوين.', category: 'تجارب' },
    },
  },
  {
    id: 'p-3',
    category: 'Practice',
    client: 'Practice',
    tools: ['Photoshop'],
    hero: practiceStarbucks,
    gallery: [practiceStarbucks],
    i18n: {
      en: { title: 'Starbucks Mock', short: 'Practice packaging design.', details: 'Packaging study.', category: 'Practice' },
      ar: { title: 'محاكاة ستاربكس', short: 'تصميم تغليف تدريبي.', details: 'دراسة التغليف.', category: 'تجارب' },
    },
  },
  {
    id: 'p-4',
    category: 'Practice',
    client: 'Practice',
    tools: ['Photoshop'],
    hero: practiceYellowCar,
    gallery: [practiceYellowCar],
    i18n: {
      en: { title: 'Yellow Car Study', short: 'Practice exercise.', details: 'Practice composition.', category: 'Practice' },
      ar: { title: 'دراسة سيارة صفراء', short: 'تمرين تدريبي.', details: 'تكوين تدريبي.', category: 'تجارب' },
    },
  },
  {
    id: 'p-5',
    category: 'Practice',
    client: 'Practice',
    tools: ['Photoshop'],
    hero: practiceCoffeeCup,
    gallery: [practiceCoffeeCup],
    i18n: {
      en: { title: 'Coffee Cup', short: 'Coffee cup mock.', details: 'Label & mockup practice.', category: 'Practice' },
      ar: { title: 'كوب قهوة', short: 'محاكاة كوب قهوة.', details: 'تمرين تسمية ومحاكاة.', category: 'تجارب' },
    },
  },

  /* Real-world */
  {
    id: 'r-1',
    category: 'Real World',
    client: 'Personal',
    tools: ['Photoshop'],
    hero: realSudani,
    gallery: [realSudani],
    i18n: {
      en: { title: 'Sudani — Real', short: 'Real-world edit.', details: 'Photo edit & composition inspired by real events.', category: 'Real World' },
      ar: { title: 'سوداني — حقيقي', short: 'تعديل واقعي.', details: 'تحرير صور وتركيب مستوحى من أحداث حقيقية.', category: 'عالم حقيقي' },
    },
  },
  {
    id: 'r-2',
    category: 'Real World',
    client: 'Personal',
    tools: ['Photoshop'],
    hero: realTornado,
    gallery: [realTornado],
    i18n: {
      en: { title: 'Tornado', short: 'Weather-themed edit.', details: 'Real-world thematic edit in Photoshop.', category: 'Real World' },
      ar: { title: 'إعصار', short: 'تعديل بموضوع الطقس.', details: 'تعديل موضوعي واقعي في فوتوشوب.', category: 'عالم حقيقي' },
    },
  },
];

/* -------------------- TRANSLATIONS: keys for EN + AR (app UI) -------------------- */
const translations = {
  en: {
    header: { name: 'Munzir Malik', role: 'Senior Programmer & Graphic Designer' },
    nav: { work: 'Work', about: 'About', contact: 'Contact', resume: 'Resume' },
    hero: {
      eyebrow: 'Hello — I’m',
      subtitle:
        'I am a senior programmer with a strong background in graphic design, having 5 years of experience creating designs for social media, branding, and advertisements. I combine design and programming to build creative, functional solutions while studying Information Systems at university.',
      viewWork: 'View my work',
      featured: 'Featured project',
    },
    skills: { ai: 'AI', fantasy: 'Fantasy', logo: 'Logo', marketing: 'Marketing', charity: 'Charity Posters', practice: 'Practice', real: 'Real World' },
    projects: { title: 'Selected Work', desc: 'Explore my work by field — pick a category to focus.', none: 'No projects found for', all: 'All' },
    about: {
      heading: 'About me',
      p1:
        'I am a senior programmer with a strong background in graphic design, having 5 years of experience in creating designs for social media, branding, and advertisements. I have completed several online courses and earned certifications in graphic design, which helped me improve my skills.',
      p2: 'Currently, I am a university student studying Information Systems. I am passionate about combining my design expertise with programming to create creative and functional solutions.',
      educationHeading: 'Education in graphic field',
      edu1: 'Graphic Design, by University of Colorado Boulder.',
      edu2: 'Fundamentals of Graphic Design, by California Institute of the Arts.',
      edu3: 'Introduction to Typography.',
      toolsHeading: 'Tools',
      tool1: 'Photoshop.',
      tool2: 'Illustrator.',
      tool3: 'Using AI websites to generate photos.',
      programmingHeading: 'Programming Languages',
      prog1: 'C++.',
      prog2: 'Java.',
      downloadResume: 'Download resume',
      caption: 'Outside work I like to take photoshots.',
    },
    contact: {
      heading: 'Get in touch',
      desc: 'Tell me about your project timeline and budget. I reply within 48 hours.',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your email',
      subjectPlaceholder: 'Subject',
      messagePlaceholder: 'Tell me about the project',
      email: 'munzirmmalik@gmail.com',
      send: 'Send message',
    },
    footer: { copyright: 'Built with ❤️', privacy: 'Privacy', instagram: 'Instagram', github: 'GitHub', linkedin: 'LinkedIn' },
    modal: { openImage: 'Open image', close: 'Close' },
    lang: { en: 'EN', ar: 'ع' },
  },

  ar: {
    header: { name: 'منذر مالك', role: 'مبرمج أول ومصمم جرافيك' },
    nav: { work: 'الأعمال', about: 'نبذة', contact: 'اتصل', resume: 'السيرة الذاتية' },
    hero: {
      eyebrow: 'مرحبًا — أنا',
      subtitle:
        'أعمل كمبرمج أول ولدي خلفية قوية في التصميم الجرافيكي، مع خبرة 5 سنوات في إنشاء تصاميم لوسائل التواصل الاجتماعي والعلامات التجارية والإعلانات. أدمج التصميم والبرمجة لابتكار حلول إبداعية وعملية أثناء دراستي لنظم المعلومات في الجامعة.',
      viewWork: 'عرض أعمالي',
      featured: 'المشروع المميز',
    },
    skills: { ai: 'الذكاء الاصطناعي', fantasy: 'فانتازيا', logo: 'شعارات', marketing: 'تسويق', charity: 'ملصقات خيرية', practice: 'تجارب', real: 'عالم حقيقي' },
    projects: { title: 'أعمال مختارة', desc: 'استعرض عملي حسب المجال — اختر فئة للتركيز.', none: 'لم يتم العثور على مشاريع لـ', all: 'الكل' },
    about: {
      heading: 'نبذة عني',
      p1:
        'أنا مبرمج أول ولدي خلفية قوية في التصميم الجرافيكي، أمتلك 5 سنوات من الخبرة في إنشاء تصاميم لوسائل التواصل الاجتماعي والعلامات التجارية والإعلانات. أنهيت عدة دورات عبر الإنترنت وحصلت على شهادات في التصميم الجرافيكي مما ساعدني على تحسين مهاراتي.',
      p2: 'حاليًا أنا طالب جامعي أدرس نظم المعلومات. أشعر بالشغف لربط خبرتي في التصميم بالبرمجة لإنشاء حلول مبتكرة وعملية.',
      educationHeading: 'التعليم في مجال الجرافيك',
      edu1: 'تصميم جرافيك، جامعة كولورادو بولدر.',
      edu2: 'أساسيات التصميم الجرافيكي، معهد كاليفورنيا للفنون.',
      edu3: 'مقدمة في الطباعة (Typography).',
      toolsHeading: 'الأدوات',
      tool1: 'فوتوشوب.',
      tool2: 'إليستريتور.',
      tool3: 'استخدام مواقع الذكاء الاصطناعي لتوليد الصور.',
      programmingHeading: 'لغات البرمجة',
      prog1: 'C++.',
      prog2: 'Java.',
      downloadResume: 'تحميل السيرة الذاتية',
      caption: 'خارج العمل أحب التصوير.',
    },
    contact: {
      heading: 'تواصل معي',
      desc: 'أخبرني عن موعد المشروع والميزانية. أجيب خلال 48 ساعة.',
      namePlaceholder: 'الاسم',
      emailPlaceholder: 'البريد الإلكتروني',
      subjectPlaceholder: 'الموضوع',
      messagePlaceholder: 'أخبرني عن المشروع',
      email: 'munzirmmalik@gmail.com',
      send: 'إرسال الرسالة',
    },
    footer: { copyright: 'مصنوع بحب ❤️', privacy: 'الخصوصية', instagram: 'إنستاغрам', github: 'جيت هب', linkedin: 'لينكدإن' },
    modal: { openImage: 'افتح الصورة', close: 'إغلاق' },
    lang: { en: 'EN', ar: 'ع' },
  },
};

/* -------------------- i18n context & hook -------------------- */
const I18nContext = createContext(null);

function I18nProvider({ children }) {
  const getInitial = () => {
    try {
      const saved = localStorage.getItem('site_lang');
      if (saved && Object.keys(translations).includes(saved)) return saved;
    } catch (e) { }
    const navLang = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    if (navLang && navLang.toLowerCase().startsWith('ar')) return 'ar';
    return 'en';
  };

  const [lang, setLangRaw] = useState(getInitial);

  const setLang = useCallback(
    (next) => {
      if (!Object.keys(translations).includes(next)) return;
      setLangRaw(next);
      try {
        localStorage.setItem('site_lang', next);
      } catch (e) { }
    },
    [setLangRaw]
  );

  const t = useCallback(
    (keyPath, fallback = '') => {
      if (!keyPath) return fallback;
      const parts = keyPath.split('.');
      let node = translations[lang] || translations.en;
      for (const p of parts) {
        if (node && Object.prototype.hasOwnProperty.call(node, p)) node = node[p];
        else {
          const enNode = keyPath.split('.').reduce((acc, k) => (acc && acc[k] ? acc[k] : null), translations.en);
          return enNode || fallback || keyPath;
        }
      }
      return typeof node === 'string' ? node : fallback || keyPath;
    },
    [lang]
  );

  // set html lang + dir on change
  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.documentElement.classList.remove('lang-en', 'lang-ar', 'dir-ltr', 'dir-rtl');
    document.documentElement.classList.add(`lang-${lang}`, `dir-${dir}`);
  }, [lang]);

  return <I18nContext.Provider value={{ t, lang, setLang }}>{children}</I18nContext.Provider>;
}

function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
}

/* helper: choose project field by current language, fallback to english or raw field */
function projectText(project, lang, field) {
  if (project?.i18n?.[lang] && project.i18n[lang][field]) return project.i18n[lang][field];
  if (project?.i18n?.en && project.i18n.en[field]) return project.i18n.en[field];
  return project[field] || '';
}

/* -------------------- UI & Components -------------------- */

function IconButton({ children, className = '', ...props }) {
  return (
    <button className={`inline-flex items-center justify-center rounded-full p-2 ${className}`} {...props}>
      {children}
    </button>
  );
}

/* Language switcher component */
function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();

  return (
    <div className="language-switcher" role="navigation" aria-label="Language switch">
      <button
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className="px-3 py-1 rounded-md border transition focus:outline-none focus:ring-2 focus:ring-offset-2"
        style={{
          marginRight: 8,
          backgroundColor: lang === 'en' ? 'var(--accent-1)' : '#fff',
          color: lang === 'en' ? '#fff' : 'var(--accent-1)',
          borderColor: 'rgba(7,16,41,0.06)',
        }}
      >
        {t('lang.en')}
      </button>

      <button
        onClick={() => setLang('ar')}
        aria-pressed={lang === 'ar'}
        className="px-3 py-1 rounded-md border transition focus:outline-none focus:ring-2 focus:ring-offset-2"
        style={{
          backgroundColor: lang === 'ar' ? 'var(--accent-1)' : '#fff',
          color: lang === 'ar' ? '#fff' : 'var(--accent-1)',
          borderColor: 'rgba(7,16,41,0.06)',
        }}
      >
        {t('lang.ar')}
      </button>
    </div>
  );
}


/* Header */
function Header({ onContact }) {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  // close drawer on route/hash change or Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <div className="brand-bubble">GD</div>
          <div className="brand-text">
            <div className="name">{t('header.name')}</div>
            <div className="role">{t('header.role')}</div>
          </div>
        </div>

        {/* Desktop nav (hidden on small screens via CSS) */}
        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          <a href="#work" className="nav-link">{t('nav.work')}</a>
          <a href="#about" className="nav-link">{t('nav.about')}</a>
          <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); onContact(); }}>{t('nav.contact')}</a>
          <a href={resumePdf} className="btn-resume" target="_blank" rel="noopener noreferrer">{t('nav.resume')}</a>
        </nav>

        <div className="header-actions">
          {/* Desktop socials + language switcher group - hidden on very small screens by CSS */}
          <div className="actions-inline">
            <div className="socials">
              <a href="https://github.com/Munzir-Malik" aria-label="github" className="social" target="_blank" rel="noopener noreferrer"><Github /></a>
              <a href="https://www.linkedin.com/in/munzirmalik/" aria-label="linkedin" className="social" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
            </div>

            <div className="lang-inline">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile menu button (always visible on small screens) */}
          <IconButton
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="mobile-menu-btn"
          >
            {open ? <X /> : <Menu />}
          </IconButton>
        </div>
      </div>

      {/* Mobile drawer (visible only on small screens via CSS). Contains nav, language switcher, socials */}
      <div className={`mobile-drawer ${open ? 'open' : ''}`} role="dialog" aria-modal={open} aria-label="Mobile menu">
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-header">
            <div className="brand-small">
              <div className="brand-bubble" aria-hidden>GD</div>
              <div className="brand-text">
                <div className="name">{t('header.name')}</div>
              </div>
            </div>
            <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
              <X />
            </IconButton>
          </div>

          <nav className="mobile-menu-list">
            <a href="#work" className="mobile-nav-link" onClick={() => setOpen(false)}>{t('nav.work')}</a>
            <a href="#about" className="mobile-nav-link" onClick={() => setOpen(false)}>{t('nav.about')}</a>
            <a href="#contact" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); setOpen(false); onContact(); }}>{t('nav.contact')}</a>
            <a href={resumePdf} className="mobile-nav-link" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>{t('nav.resume')}</a>
          </nav>

          <div className="mobile-drawer-footer">
            <div className="mobile-lang">
              <LanguageSwitcher />
            </div>

            <div className="mobile-socials">
              <a href="https://github.com/Munzir-Malik" aria-label="github" target="_blank" rel="noopener noreferrer"><Github /></a>
              <a href="https://www.linkedin.com/in/munzirmalik/" aria-label="linkedin" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
            </div>
          </div>
        </div>

        {/* backdrop click closes drawer */}
        <button className="mobile-drawer-backdrop" onClick={() => setOpen(false)} aria-hidden />
      </div>
    </header>
  );
}

/* Hero — shows translated name and translated featured label */
function Hero({ onOpenProject }) {
  const featured = PROJECTS[0];
  const { t, lang } = useI18n();
  const name = t('header.name');
  return (
    <section className="hero">
      <div className="hero-inner">
        <motion.div initial={{ x: -24, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="hero-copy">
          <div className="eyebrow">{t('hero.eyebrow')}</div>
          <h1 className="hero-title">{name} <span className="dash">—</span> <span className="highlight">{t('header.role')}</span></h1>
          <p className="hero-sub">{t('hero.subtitle')}</p>

          <div className="hero-ctas">
            <a href="#work" className="btn-primary">{t('hero.viewWork')}</a>
            <button className="btn-ghost" onClick={() => onOpenProject(featured)}>{t('hero.featured')}</button>
          </div>

          <div className="skill-pills">
            <span>{t('skills.ai')}</span>
            <span>{t('skills.fantasy')}</span>
            <span>{t('skills.logo')}</span>
            <span>{t('skills.marketing')}</span>
            <span>{t('skills.charity')}</span>
            <span>{t('skills.practice')}</span>
            <span>{t('skills.real')}</span>
          </div>
        </motion.div>

        <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} className="hero-media">
          <div className="media-frame">
            <div className="media-card">
              <img src={featured.hero} alt={projectText(featured, lang, 'title') || featured.id} />
              <div className="media-overlay" />
            </div>
            <div className="media-badge">{projectText(featured, lang, 'category') || featured.category}</div>
          </div>

          <motion.div className="decor-blob" animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }} />
        </motion.div>
      </div>
    </section>
  );
}

/* FilteredGallery — derives categories from project i18n, resets active when lang changes */
function FilteredGallery({ projects, onOpen }) {
  const { t, lang } = useI18n();

  const categories = useMemo(() => {
    const set = new Set(
      projects.map((p) => {
        const cat = projectText(p, lang, 'category') || p.category || 'Uncategorized';
        return cat;
      })
    );
    return [t('projects.all'), ...Array.from(set)];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects, lang]);

  const [active, setActive] = useState(t('skills.marketing'));
  const [filtered, setFiltered] = useState(projects);

  // reset active category when language changes (so label matches the pill)
  useEffect(() => {
    // prefer localized "Marketing" label; fallback to "All" if not present in categories
    const preferred = t('skills.marketing');
    setActive(preferred);
  }, [lang, t]);

  useEffect(() => {
    if (active === t('projects.all')) setFiltered(projects);
    else {
      setFiltered(
        projects.filter((p) => {
          const cat = projectText(p, lang, 'category') || p.category;
          return cat === active;
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, projects, lang]);

  // deep-link support — tries to match the localized category if provided in URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    if (cat) {
      // if cat matches any localized category, set it
      const found = categories.find((c) => c === cat);
      if (found) setActive(found);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories.join(',')]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (active === t('projects.all')) params.delete('cat');
    else params.set('cat', active);
    const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    window.history.replaceState(null, '', newUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <section id="work" className="projects">
      <div className="section-head container-center">
        <h2>{t('projects.title')}</h2>
        <p className="muted">{t('projects.desc')}</p>
      </div>

      {/* filter pills */}
      <div className="container-center" style={{ marginBottom: 18 }}>
        <div className="flex gap-3 overflow-x-auto py-2 hide-scrollbar" role="tablist" aria-label="Project categories">
          {categories.map((cat) => {
            const count = cat === t('projects.all') ? projects.length : projects.filter((p) => (projectText(p, lang, 'category') || p.category) === cat).length;
            const activeClass = active === cat ? 'bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] text-white shadow-lg' : 'bg-white text-[rgba(7,16,41,0.9)]';
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                role="tab"
                aria-selected={active === cat}
                className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border transition ${activeClass}`}
              >
                <span className="text-sm font-semibold">{cat}</span>
                <span className="text-xs text-[rgba(7,16,41,0.45)]">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* grid */}
      <div className="projects-grid container-center" aria-live="polite">
        {filtered.length === 0 ? (
          <div className="p-8 text-center col-span-full">
            <p className="muted">{t('projects.none')} “{active}”.</p>
          </div>
        ) : (
          filtered.map((p) => (
            <motion.article
              key={p.id}
              className="project-card"
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => onOpen(p)}
            >
              <div className="project-media">
                <img src={p.hero} alt={projectText(p, lang, 'title') || p.id} loading="lazy" />
              </div>
              <div className="project-info">
                <div className="project-meta">{projectText(p, lang, 'category') || p.category}</div>
                <h3 className="project-title">{projectText(p, lang, 'title') || p.title}</h3>
                <p className="project-desc">{projectText(p, lang, 'short') || p.short}</p>
                <div className="project-footer">
                  <div className="client">{p.client}</div>
                  <div className="open">Open →</div>
                </div>
              </div>
            </motion.article>
          ))
        )}
      </div>
    </section>
  );
}

/* About: biography, education, tools and profile pic */
function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="about">
      <div className="about-inner container-center">
        <div className="about-copy">
          <h2>{t('about.heading')}</h2>

          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>

          <h3 style={{ marginTop: 16 }}>{t('about.educationHeading')}</h3>
          <ul className="about-list" style={{ marginTop: 8 }}>
            <li>{t('about.edu1')}</li>
            <li>{t('about.edu2')}</li>
            <li>{t('about.edu3')}</li>
          </ul>

          <h3 style={{ marginTop: 12 }}>{t('about.toolsHeading')}</h3>
          <ul className="about-list" style={{ marginTop: 8 }}>
            <li>{t('about.tool1')}</li>
            <li>{t('about.tool2')}</li>
            <li>{t('about.tool3')}</li>
          </ul>

          <h3 style={{ marginTop: 12 }}>{t('about.programmingHeading')}</h3>
          <ul className="about-list" style={{ marginTop: 8 }}>
            <li>{t('about.prog1')}</li>
            <li>{t('about.prog2')}</li>
          </ul>

          <div style={{ marginTop: 12 }}>
            <a href={resumePdf} className="btn-outline" target="_blank" rel="noopener noreferrer">
              {t('about.downloadResume')}
            </a>
          </div>
        </div>

        <div className="about-card">
          {/* personal pic */}
          <img src={profilePic} alt={t('header.name')} />
          <div className="about-caption">{t('about.caption')}</div>
        </div>
      </div>
    </section>
  );
}

/* Contact with email */
function Contact({ onClose }) {
  const { t } = useI18n();
  return (
    <section id="contact" className="contact">
      <div className="contact-panel container-center">
        <h2>{t('contact.heading')}</h2>
        <p className="muted">{t('contact.desc')}</p>

        <form action="https://formspree.io/f/xwpwrzqk" method="POST" className="contact-form">
          <div className="grid-2">
            <input name="name" placeholder={t('contact.namePlaceholder')} required />
            <input name="email" type="email" placeholder={t('contact.emailPlaceholder')} required />
          </div>
          <input name="subject" placeholder={t('contact.subjectPlaceholder')} />
          <textarea name="message" rows="6" placeholder={t('contact.messagePlaceholder')} />

          <div className="contact-footer">
            <div className="contact-info">
              <Mail />
              <a href={`mailto:${t('contact.email')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {t('contact.email')}
              </a>
            </div>
            <button type="submit" className="btn-primary">{t('contact.send')}</button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="site-footer">
      <div className="container-center foot-inner">
        <div>
          © {new Date().getFullYear()} {t('header.name')} — {t('footer.copyright')}
        </div>
        <div className="foot-links" style={{ display: 'flex', gap: 12 }}>
          <a href="https://github.com/Munzir-Malik" target="_blank" rel="noopener noreferrer">{t('footer.github')}</a>
          <a href="https://www.linkedin.com/in/munzirmalik/" target="_blank" rel="noopener noreferrer">{t('footer.linkedin')}</a>
          <a href="#">{t('footer.privacy')}</a>
        </div>
      </div>
    </footer>
  );
}

/* Project modal: shows selected project's gallery (we set gallery to at least 1 image per project) */
function ProjectModal({ project, onClose }) {
  const { t, lang } = useI18n();
  if (!project) return null;
  return (
    <AnimatePresence>
      <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.div className="modal" initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.98, opacity: 0 }}>
          <div className="modal-media">
            <img src={project.gallery?.[0] || project.hero} alt={projectText(project, lang, 'title') || project.id} />
          </div>
          <div className="modal-body">
            <div className="modal-meta">{projectText(project, lang, 'category') || project.category} • {project.client}</div>
            <h3>{projectText(project, lang, 'title') || project.title}</h3>
            <p className="muted">{projectText(project, lang, 'details') || project.details}</p>

            <div className="modal-tools">
              {project.tools.map((tTool) => <span key={tTool} className="tool">{tTool}</span>)}
            </div>

            <div className="modal-actions">
              <a className="btn-outline" href={project.hero} target="_blank" rel="noreferrer">{t('modal.openImage')}</a>
              <button onClick={onClose} className="btn-ghost">{t('modal.close')}</button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* -------------------- App (wrap with I18nProvider) -------------------- */
export default function App() {
  const [selected, setSelected] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    const onResize = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <I18nProvider>
      <div className="app-root">
        <Header onContact={() => setContactOpen(true)} />

        <main>
          <Hero onOpenProject={(p) => setSelected(p)} />
          <FilteredGallery projects={PROJECTS} onOpen={(p) => setSelected(p)} />
          <About />
          {!contactOpen && <Contact onClose={() => setContactOpen(false)} />}
        </main>

        <Footer />

        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </div>
    </I18nProvider>
  );
}

/* Mount if used standalone */
if (typeof document !== 'undefined') {
  const rootEl = document.getElementById('root') || document.createElement('div');
  rootEl.id = 'root';
  if (!document.getElementById('root')) document.body.appendChild(rootEl);
  const root = createRoot(rootEl);
  root.render(<App />);
}
