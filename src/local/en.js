var fromHome = require("./home/home.en");
var fromWeekly = require("./weaklydeals/weaklydeals.en");
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
  weekly_deals: "Weekly Deals"
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
  w_d: fromWeekly // weekly deals page
};
