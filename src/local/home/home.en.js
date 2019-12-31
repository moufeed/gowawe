var main_banner = {
  published: true,
  tabs: [
    {
      active: true,
      txt: "Kampanyalar",
      id: "Kampanyalar",
      bg: "b1.jpg"
    },
    {
      active: false,
      txt: "Yılbaşına Özel",
      id: "yilbasinaozel",
      bg: "b2.png"
    },
    {
      active: false,
      txt: "Yeni Gelenler",
      id: "yenigelenler",
      bg: "b3.png"
    },
    {
      active: false,
      txt: "Keşfet",
      id: "Kesfet",
      bg: "b4.png"
    }
  ],
  slides: [
    {
      img: "1.jpg",
      bg: "b1.jpg",
      title: "consectetur adipisicing elit.",
      txt: "Lorem ipsum dolor sit amet ",
      link: "#",
      color: "white"
    },
    {
      img: "2.jpg",
      bg: "b2.jpg",
      title: "obcaecati voluptatibus odio",
      txt: "Molestiae eligendi ut nemo voluptatem",
      link: "",
      color: "white"
    },
    {
      img: "3.jpg",
      bg: "b3.png",
      title: "quasi exercitationem vel",
      txt: " Necessitatibus veniam, perferendis corrupti similique",
      link: "#",
      color: "#333333"
    },
    {
      img: "4.jpg",
      bg: "b4.png",
      title: "ipsam optio nihil cupiditate",
      txt: "neque saepe possimus distinctio quam ab delectus ratione",
      link: "#",
      color: "white"
    },
    {
      img: "5.jpg",
      bg: "b5.png",
      title: "Quae natus quisquam neque beatae est fugit reiciendis",
      txt:
        "quibusdam ducimus aliquam quod dolor tempore rerum impedit? Laudantium, eligendi!",
      link: "#",
      color: "#333333"
    },
    {
      img: "6.jpg",
      bg: "b6.png",
      title: "saepe ipsum, eligendi molestias",
      txt: "Necessitatibus veniam, perferendis corrupti similique",
      link: "#",
      color: "#333333"
    }
  ]
};

var product = {
  min_price: "10.00$ - 20.00$",
  discount: "10%",
  price: "9.00$ - 18.00$",
  min: "100",
  img: "",

  title:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia ",
  factory: {
    avatar: "avatar.jpg",
    flag: "flag.png",
    country: "USA",
    name: "reprehenderit fuga sapiente",
    age: "4 years",
    icons: ["ico-1.png", "ico-2.png", "ico-3.png"]
  },
  colors: ["red", "#ff00ff", "rgb(100,205,230)", "black", "white", "$000fff"],
  images: ["product-1.jpg", "product-2.jpg", "product-3.jpg"],
  actions: [
    {
      txt: "add to cart",
      ico: "fa fa-shopping-cart",
      link: "#",
      tooltip: false
    },
    {
      txt: false,
      ico: "fa fa-envelope",
      link: "#",
      tooltip: "contact the seller"
    },
    {
      txt: false,
      ico: "fa fa-heart-o",
      link: "#",
      tooltip: "Add to Wish List"
    }
  ]
};

var categories = {
  type: "categories",
  published: true,
  title: "categories",
  categories: [
    "Manufacturing & Processing Machinery",
    "Consumer Electronic",
    "Industrial Equipment & Components",
    "Electrical & Electronics",
    "Construction & Decoration",
    "Light industry & Daily use",
    "Auto, Motorcycle Parts & Accessories",
    "Apparel & Accessories",
    "Lights & Lighting",
    "Sporting Goods & Recreation",
    "Transportation",
    "Arts & Crafts",
    "Health & Medicine",
    "Packaging & Printing",
    "Computer Products"
  ],
  slider: ["s1.png", "s2.png", "s3.png"],
  featured: [
    {
      txt: "Getex 2019",
      img: "c6.png"
    },
    {
      txt: "Gift Packaging",
      img: "c5.png"
    },
    {
      txt: "Diving Suppliers",
      img: "c4.png"
    }
  ],
  likes: [
    {
      title: "Lorem ipsum, dolor sit amet",
      txt: "15.000+  Products",
      img: "c3.png"
    },
    {
      title: "consectetur adipisicing elit.",
      txt: "15.000+  Products",
      img: "10150367264818.jpg"
    },
    {
      title: "obcaecati assumenda ipsum",
      txt: "15.000+  Products",
      img: "9015165911090.jpg"
    },
    {
      title: "obcaecati assumenda ipsum",
      txt: "15.000+  Products",
      img: "9015165911090.jpg"
    }
  ]
};

var WeeklyDeals = {
  type: "WeeklyDeals",
  published: true,
  title: "Weekly Deals",
  off: "10% off",
  date: "Jan 5, 2021 15:37:25",
  products: [product, product, product, product, product, product]
};

var quotations = {
  type: "quotations",
  published: true,
  form: {
    title: "One Request,Multiple Quotes",
    search: "Where Are You Looking For...",
    select: ["Bag/Bags"],
    templates: {
      title: "Select Template Type:",
      data: ["Request Price", "Request a sample", "Request Question Details"]
    }
  },
  paragraph: {
    background: "quotations.png",
    title:
      "An Easy Way To Send Buying Requests To Suppliers & Get Quote Quickly",
    list: [
      "Get Quotes For Your Custom Request",
      "Let The Right Suppliers Find You",
      "Close Deals With One Click"
    ]
  }
};

//#region offers
var data = [
  {
    flag: "canada.png",
    name: "canada",
    txt: "Want To Buy Zf Genuine Parts",
    date: "30-Sep"
  },
  {
    flag: "usa.png",
    name: "USA",
    txt: "Mercides Genuine Parts",
    date: "30-Sep"
  }
];

var selling = {
  title: "New Selling Leads",
  count: "3.423",
  data: [...data, ...data]
};
//#endregion
var offer = {
  title: "Latest By Offers",
  count: "3.423",
  data: [...data, ...data]
};

var offers = {
  type: "offers",
  published: true,
  data: [offer, selling]
};
//*offers

var printing = {
  id: "packaging-printing",
  title: "packaging & printing",
  Link: "#",
  background: "packaging-printing.png",
  icon: "",
  brief: "view all in packaging & printing",
  published: true,
  type: "normal",
  subLinks: [
    {
      text: "cell phone",
      link: "#"
    },
    {
      text: "desktop",
      link: "#"
    },
    {
      text: "tablets",
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
  name: "CKS Stationery Corporator",
  image: "supplier.png",
  products:
    "High Quality T-Shirt High Quality T-Shirt Very Good Quality order now and get your discount…",
  target:
    "High Quality T-Shirt High Quality T-Shirt Very Good Quality order now and get your discount…",
  location: "Taiwan"
};

var recently = {
  title: "My Recently Viewed Items",
  type: "recently",
  published: true,
  products: [product, product, product, product]
};

var suppliers = {
  type: "suppliers",
  title: "Selected Suppliers",
  background: "",
  published: true,
  list: [supplier, supplier, supplier, supplier]
};

var regions = {
  type: "regions",
  title: "Choose your suppliers by regions",
  background: "",
  published: true,
  list: ["sudan.png", "usa.png", "eg.png", "canada.png", "France.png"]
};

var sections = [
  categories,
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
      title: "Information",
      list: ["Services", "Advertise with Us", "Business Identity"]
    },
    {
      title: "Customer Service",
      list: [
        "Success Stories",
        "Press Section",
        "Jobs & Careers",
        "Feedback",
        "Help",
        "Secure Payment",
        "Inspection Services",
        "Learning Center",
        "I am new user"
      ]
    },
    {
      title: "Buy Trade Lead",
      list: [
        "Send Buy Requirement",
        "Post Sell Offer",
        "Create Your Free Website",
        "View Buy Leads",
        "How to Buy",
        "e-Credit Line",
        "Submit a Dispute",
        "I am buyer"
      ]
    },
    {
      title: "Sell Trade Lead",
      list: [
        "How to Sell",
        "Premium Membership",
        "Verified Membership",
        "Display Products",
        "Manage Products",
        "Supplier Memberships",
        "Gold Suppliers",
        "I am seller",
        "Trade Assurance"
      ]
    }
  ]
};

module.exports = {
  footer,
  sections,
  regions,
  main_banner,
  product,
  categories,
  WeeklyDeals,
  quotations,
  data,
  selling,
  offer,
  offers,
  printing,
  supplier,
  recently,
  suppliers
};
