var fromHome = require("./home/home.en");
var fromWeekly = require("./weaklydeals/weaklydeals.en");
var fromSuppliers = require("./suppliers/suppliers.en");
var local = {
  price: "price",
  pieces: "pieces",
  min_order: "min order",
  colors: "colors",
  shopping: "shopping now",
  location: "Location",
  view_details: "View Details",
  mainProducts: "Main Products",
  targetMarket: "Target Market",
  view_more: "View more",
  quantity: "Quantity",
  request_quotation: "Request For Quotation",
  Learn_more: "Learn More",
  from: "from",
  deals_end_in: "Deals end in",
  days: "days",
  hours: "hours",
  minutes: "minutes",
  categories: "categories",
  more_categories: "More Categories",
  you_may_like: "You May Like",
  all_deals: "all Deals",
  weekly_deals: "Weekly Deals",
  contact_now: "Contact Now",
  chat_with_supplier: "Chat With Supplier",
  inquiry_basket: "Inquiry Basket",
  business_type: "Business Type",
  certification: "Certification",
  city_province: "City/Province",
  suppliers: "suppliers",
  products: "Products",
  suppliers_types: "Supplier Types",
  all_categories: "All Categories",
  product_feature: "Product Feature",
  supplier_features: "Supplier Features",
  all: "All"
};

module.exports = {
  dir: "ltr",
  lang: "en",
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
  sp: fromSuppliers // suppliers page
};
