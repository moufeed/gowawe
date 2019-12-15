var fromHome = require("./home/home.ar");
var fromWeekly = require("./weaklydeals/weaklydeals.ar");

var local = {
  price: "السعر",
  pieces: "قطع",
  min_order: " الحد الأدنى",
  colors: "الألوان",
  shopping: "تسوق الآن",
  location: "الموقع",
  view_details: "التفاصيل",
  mainProducts: "المنتجات",
  targetMarket: "السوق",
  view_more: "المزيد",
  quantity: "كمية",
  request_quotation: "طلب الإقتباس",
  Learn_more: "معرفة المزيد",
  from: "من",
  deals_end_in: "العرض ينتهي في",
  days: "ايام",
  hours: "ساعات",
  minutes: "دقائق",
  all_deals: "كل العروض",
  weekly_deals: "عروض أسبوعية"
};

/* end home page */
module.exports = {
  dir: "rtl",
  lang: "ar",
  site_title: "gowawe",
  logo: "./assets/img/logo.png",
  date: "",
  main_title: "",
  page_title: "",
  subtitle: "",
  local: local,
  sections: fromHome.sections,
  footer: fromHome.footer,
  banner: fromHome.main_banner,
  w_d: fromWeekly // weekly deals page
};
