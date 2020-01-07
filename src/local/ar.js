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
  weekly_deals: "عروض أسبوعية",
  contact_now: "اتصل بنا",
  chat_with_supplier: "تواصل مع المورد",
  inquiry_basket: "التحقق من السلة",
  business_type: "النوع",
  certification: "الشهادات",
  city_province: "العنوان",
  suppliers: "الموردين",
  products: "المنتجات",
  suppliers_types: "انواع المورادين",
  all_categories: "التصنيفات",
  product_feature: "ميزات المنتج",
  supplier_features: "ميزات المورد",
  all: "الكل",
  ok: "نعم",
  filter_by: "بحث متقدم",
  new: "جديد",
  ready_to_ship: "جاهز للشحن",
  sort_by: "ترتيب",
  title_a_to_z: "الأسم : ا الى ي",
  title_z_to_a: "الأسم : ي الى ا",
  newst_first: "الأحدث أولاً",
  oldest_first: "الأقدام أولاً",
  min: "اقل",
  max: "اكثر",
  search: "بحث",
  project_partner: "الشركاء",
  jobs: "أعمال",
  attachments: "إضافة مرفقات",
  remaining: "متبق",
  agreement:
    "أوافق على مشاركة <a href=''> بطاقة العمل </a> الخاصة بي مع الموردين المقتبسين.",
  understood: "لقد قرأت وفهمت ووافقت على الالتزام بالشروط والأحكام",
  other_requirements: "متطلبات اخرى",
  other_requirements_txt: "تشمل سعر الوحدة ، شروط الدفع ، الخ",
  request_for_quotation: "طلب عرض أسعار",
  request_for_quotation_text: "طلب واحد ، ونقلت متعددة",
  submit_rfq: "تقديم طلب عرض الأسعار",
  coi: "اكتمال المعلومات",
  fair: "عادي",
  great: "جيد",
  excellent: "ممتاز"
};

var fromHome = require("./home/home.ar");
var fromWeekly = require("./weaklydeals/weaklydeals.ar");
var fromSuppliers = require("./suppliers/suppliers.ar");
var fromProducts = require("./products/products.ar");

var fromCategories = require("./categories/categories.ar");
var fromQuotation = require("./quotation/quotation.ar");
var fromCategory = require("./category/category.ar");
var fromSeller = require("./seller/seller.ar");

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
  w_d: fromWeekly, // weekly deals page
  sp: fromSuppliers, // suppliers page
  c_p: fromProducts,
  c: fromCategories,
  q: fromQuotation,
  cy: fromCategory,
  s: fromSeller
};
