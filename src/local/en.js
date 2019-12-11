var local = {
  price: "price",
  pieces: "pieces",
  min_order: "min order",
  colors: "colors",
  shopping: "shopping now"
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

var sections = [printing];

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
  sections: sections
};
