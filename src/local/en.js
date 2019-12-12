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
  Learn_more: "Learn More"
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

var sections = [printing, regions, offers, quotations, recently, suppliers];

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
  dir: "ltr",
  lang: "en",
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
