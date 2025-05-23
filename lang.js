const translations = {
  ru: {
    home: "Главная",
    services: "Услуги",
    portfolio: "Портфолио",
    about: "О нас",
    contact: "Контакты",
    welcome: "Добро пожаловать в мир 3D печати",
    intro: "Мы предлагаем услуги 3D-печати на заказ и готовы реализовать любую вашу идею.",
    order_now: "Заказать сейчас",
    print_on_demand: "Печать по вашему 3D-файлу (STL, OBJ)",
    design_service: "Моделирование объектов под заказ",
    scan_service: "Скоро: 3D-сканирование физических объектов",
    market_sale: "Продажа готовых изделий",
    portfolio_text: "Скоро здесь появятся фотографии наших работ!",
    about_text: "PrintLab IL — это домашняя мастерская 3D-печати, где каждый заказ — это проект с душой. Мы работаем с PLA, PETG и TPU.",
    send: "Отправить"
  },
  en: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact",
    welcome: "Welcome to the World of 3D Printing",
    intro: "We offer custom 3D printing services to bring your ideas to life.",
    order_now: "Order Now",
    print_on_demand: "Print your 3D file (STL, OBJ)",
    design_service: "Custom object modeling",
    scan_service: "Coming soon: 3D scanning of physical objects",
    market_sale: "Selling ready-made prints",
    portfolio_text: "Photos of our work will appear here soon!",
    about_text: "PrintLab IL is a home-based 3D printing workshop where every order is a personal project. We use PLA, PETG, and TPU.",
    send: "Send"
  },
  he: {
    home: "דף הבית",
    services: "שירותים",
    portfolio: "פורטפוליו",
    about: "אודות",
    contact: "צור קשר",
    welcome: "ברוכים הבאים לעולם ההדפסה בתלת מימד",
    intro: "אנו מציעים שירותי הדפסה בתלת מימד בהתאמה אישית כדי להחיות את הרעיונות שלך.",
    order_now: "הזמן עכשיו",
    print_on_demand: "הדפסה לפי קובץ STL/OBJ",
    design_service: "עיצוב מודלים בהתאמה אישית",
    scan_service: "בקרוב: סריקת אובייקטים בתלת מימד",
    market_sale: "מכירת מוצרים מוכנים",
    portfolio_text: "תמונות של העבודות שלנו יופיעו כאן בקרוב!",
    about_text: "PrintLab IL היא סדנת הדפסה בתלת מימד ביתית שבה כל הזמנה היא פרויקט אישי. אנו עובדים עם PLA, PETG ו-TPU.",
    send: "שלח"
  }
};

const switcher = document.getElementById("lang-switcher");

function translatePage(lang) {
  document.documentElement.lang = lang;
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || key;
  });

  if (lang === "he") {
    document.body.dir = "rtl";
  } else {
    document.body.dir = "ltr";
  }
}

switcher.addEventListener("change", () => {
  translatePage(switcher.value);
});

translatePage(switcher.value);