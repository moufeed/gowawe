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
  minutes: "دقائق"
};

var product = {
  min_price: "10.00$ - 20.00$",
  discount: "10%",
  price: "9.00$ - 18.00$",
  min: "100",
  img: "",
  title: "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت",
  factory: {
    avatar: "avatar.jpg",
    flag: "flag.png",
    country: "امريكا",
    name: "كيواي دولوريم أيوم فيوجايات كيو",
    age: "4 years",
    icons: ["ico-1.png", "ico-2.png", "ico-3.png"]
  },
  colors: ["red", "#ff00ff", "rgb(100,205,230)", "black", "white", "$000fff"],
  images: ["product-1.jpg", "product-2.jpg", "product-3.jpg"],
  actions: [
    {
      txt: "أضف إلى السلة",
      ico: "fa fa-shopping-cart",
      link: "#",
      tooltip: false
    },
    {
      txt: false,
      ico: "fa fa-envelope",
      link: "#",
      tooltip: "تواصل مع البائع"
    },
    {
      txt: false,
      ico: "fa fa-heart-o",
      link: "#",
      tooltip: "أضف للمفضلة"
    }
  ]
};

var WeeklyDeals = {
  type: "WeeklyDeals",
  published: true,
  title: "عروض أسبوعية",
  off: "10% خصم",
  date: "Jan 5, 2021 15:37:25",
  products: [product, product, product, product, product, product]
};

var quotations = {
  type: "quotations",
  published: true,
  form: {
    title: "طلب واحد ، ونقلت متعددة",
    search: "أين أنت تبحث عن...",
    select: ["حقيبة / حقائب"],
    templates: {
      title: "اختر نوع القالب",
      data: ["سعر الطلب", "طلب عينة", "طلب تفاصيل السؤال"]
    }
  },
  paragraph: {
    background: "quotations.png",
    title: "طريقة سهلة لإرسال طلبات الشراء للموردين والحصول على اقتباس بسرعة",
    list: [
      "الحصول على أسعار لطلبك مخصص",
      "دع الموردين المناسبين يجدونك",
      "إغلاق الصفقات بنقرة واحدة"
    ]
  }
};

var data = [
  {
    flag: "canada.png",
    name: "كندا",
    txt: "تريد شراء قطع غيار أصلية",
    date: "30-Sep"
  },
  {
    flag: "usa.png",
    name: "امريكا",
    txt: "قطع غيار أصلية",
    date: "30-Sep"
  }
];

var selling = {
  title: "عروض بيع جديدة",
  count: "3.423",
  data: [...data, ...data]
};

var offer = {
  title: "أحدث من العروض",
  count: "3.423",
  data: [...data, ...data]
};

var offers = {
  type: "offers",
  published: true,
  data: [offer, selling]
};

var printing = {
  id: "packaging-printing",
  title: "التغليف والطباعة",
  Link: "#",
  background: "packaging-printing.png",
  icon: "",
  brief: "عرض كل شيء في التعبئة والتغليف والطباعة",
  published: true,
  type: "normal",
  subLinks: [
    {
      text: "الهاتف الخلوي",
      link: "#"
    },
    {
      text: "سطح المكتب",
      link: "#"
    },
    {
      text: "أجهزة لوحية",
      link: "#"
    }
  ],
  featured_slider: {
    slides: [
      {
        img: "f1.jpg",
        title: "",
        link: ""
      },
      {
        img: "f2.jpg",
        title: "",
        link: ""
      }
    ]
  },
  products_slider: [
    {
      id: "1",
      img: "",
      title: "",
      link: "",
      name: "",
      products: [product, product, product, product, product, product]
    },
    {
      id: "1",
      img: "",
      title: "",
      link: "",
      name: "",
      products: [product, product, product, product, product, product]
    }
  ]
};

var supplier = {
  name: "CKS قرطاسية Corporator",
  image: "supplier.png",
  products:
    "تي شيرت بجودة عالية تي شيرت بجودة عالية جودة جيدة جدا اطلب الآن واحصل على خصم ...",
  target:
    "تي شيرت بجودة عالية تي شيرت بجودة عالية جودة جيدة جدا اطلب الآن واحصل على خصم ...",
  location: "تايوان"
};

var recently = {
  type: "recently",
  title: "  البنود التي تم عرضها مؤخرا",
  published: true,
  products: [product, product, product, product]
};

var suppliers = {
  type: "suppliers",
  title: " الموردين",
  background: "",
  published: true,
  list: [supplier, supplier, supplier, supplier]
};

var regions = {
  type: "regions",
  title: "اختيار الموردين الخاص بك حسب المناطق",
  background: "",
  published: true,
  list: ["sudan.png", "usa.png", "eg.png", "canada.png", "France.png"]
};

var sections = [
  WeeklyDeals,
  printing,
  regions,
  offers,
  quotations,
  recently,
  suppliers
];

var footer = {
  logo: "logo.png",
  social: [
    {
      txt: "twitter",
      ico: "fa fa-twitter"
    },
    {
      txt: "facebook",
      ico: "fa fa-facebook"
    },
    {
      txt: "instagram",
      ico: "fa fa-instagram"
    }
  ],
  lists: [
    {
      title: "معلومات",
      list: ["الخدمات", "الإعلان معنا", "الهوية التجارية"]
    },
    {
      title: "خدمة الزبائن",
      list: [
        "قصص النجاح",
        "قسم الصحافة",
        "وظائف ومهن",
        "ردود الفعل",
        "مساعدة",
        "دفع امن",
        "خدمات التفتيش",
        "مركز التعلم",
        "أنا مستخدم جديد"
      ]
    },
    {
      title: "شراء التجارة  ",
      list: [
        "إرسال متطلبات الشراء",
        "عرض ما بعد البيع",
        "إنشاء موقع الويب الخاص بك مجانا",
        "عرض العملاء المتوقعين",
        "كيف اشترى",
        "حد الائتمان الإلكتروني",
        "إرسال نزاع",
        "أنا المشتري"
      ]
    },
    {
      title: "شراء التجارة  ",
      list: [
        "إرسال متطلبات الشراء",
        "عرض ما بعد البيع",
        "إنشاء موقع الويب الخاص بك مجانا",
        "عرض العملاء المتوقعين",
        "كيف اشترى",
        "حد الائتمان الإلكتروني",
        "إرسال نزاع",
        "أنا المشتري"
      ]
    }
  ]
};
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
  sections: sections,
  footer: footer
};
