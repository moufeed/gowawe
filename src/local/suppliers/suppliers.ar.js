var categories = require("../utilities/categories-list.ar");
var fromHome = require("../home/home.ar");
var types = [
  "المورد الذهبي",
  "مزود التحقق",
  "اكتب ثلاثة",
  "حقيقة مثبتة منذ زمن طويل",
  " المحتوى المقروء"
];

var filters = [
  {
    title: "Feature",
    list: [
      "مكافحة ساكنة",
      "حجم اضافي",
      "تنفس",
      "مكافحة تجعد",
      "مكافحة ساكنة",
      "حجم اضافي",
      "تنفس",
      "مكافحة تجعد"
    ]
  },
  {
    title: "نوع القماش",
    list: ["ساتان", "صوفي", "التفت"]
  },
  {
    title: "مواد النسيج",
    list: ["100% بولستير", "100% قطن", "بولستير / نايلون", "Lace"]
  }
];

var supplier = {
  name: "غوانغ زهو جويبيل للأزياء المحدودة",
  images: ["1.png", "2.png", "3.png"],
  type: "التصنيع / مصنع ، شركة تجارية",
  products: "اللباس ، سترة ، بلايز ، تي شيرت ، قميص",
  certification: "ISO 9000",
  address: "Manufacturing/Factory, Trading Company",
  features: [
    {
      ico: "ic1.png",
      txt: "عضو الماس"
    },
    {
      ico: "ic2.png",
      txt: "المورد المراجعة"
    }
  ]
};

function generateSuppliers() {
  let result = [];
  for (let index = 0; index < 10; index++) {
    result.push(supplier);
  }
  return result;
}

var suppliers = generateSuppliers();

function generateProducts() {
  let result = [];
  for (let index = 0; index < 20; index++) {
    result.push(fromHome.product);
  }
  return result;
}

var products = generateProducts();

var slider = {
  title: "جينز نسائي",
  background: "jeans.png",
  subtitle: "كل ما تحتاجه في ملابس الجينز النسائية",
  images: [
    "jeans1.png",
    "jeans1.png",
    "jeans1.png",
    "jeans1.png",
    "jeans1.png",
    "jeans1.png",
    "jeans1.png",
    "jeans1.png",
    "jeans1.png",
    "jeans1.png",
    "jeans1.png",
    "jeans1.png",
    "jeans1.png",
    "jeans1.png",
    "jeans1.png",
    "jeans1.png",
    "jeans1.png",
    "jeans1.png"
  ]
};

module.exports = {
  types,
  suppliers,
  filters,
  categories,
  products,
  slider
};
