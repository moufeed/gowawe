var fromHome = require("../home/home.en");

var arrivals = {
  title: "New Arrivals",
  img: "arrivals.jpg"
};

var women = {
  title: "Women's Clothing",
  img: "women.jpg"
};
var men = {
  title: "Men's Clothing",
  img: "men.jpg"
};

var suppliers = {
  w: {
    title: "Selected supplier in Women's Clothing"
  },
  m: {
    title: "Selected supplier in men's Clothing"
  }
};
var categories = {
  a: arrivals,
  w: women,
  m: men
};

var sliders = {
  t: "Apparel Category",
  bg: "11.jpg",
  ms: ["12.jpg", "13.jpg"],
  cs: {
    t: "Search By Category",
    s: [
      {
        i: "ca1.png",
        t: "Women’s Clothing"
      },
      {
        i: "ca2.png",
        t: "Men’s Clothing"
      },
      {
        i: "ca3.png",
        t: "Lorem ipsum dolor"
      },
      {
        i: "ca4.png",
        t: "sit amet consectetur"
      },
      {
        i: "ca5.png",
        t: "Nihil  consectetur"
      },
      {
        i: "ca6.png",
        t: "sit Nihil quibusdam"
      }
    ]
  }
};

var sp1 = {
  t: "Spicily Coffee For Your Morning ",
  i: "sp-1.png",
  p: "26$",
  c: 50
};

var sp2 = {
  t: "Especial Meets For Your Dinner",
  i: "sp-2.png",
  p: "156$",
  c: 25
};

var sc = {
  t: "Starbucks",
  a: "2",
  i: "avatar.jpg",
  p: [sp1, sp2]
};

var search = {
  t: "Search By Category",
  bg: "2450851.jpg",
  c: [sc, sc, sc, sc]
};

function generateProducts() {
  let result = [];
  for (let index = 0; index < 4; index++) {
    result.push(fromHome.product);
    if (index % 2 == 0) {
      result[index] = {
        ...result[index],
        video: "assets/videos/oceans.mp4"
      };
    }
  }

  return result;
}

var fs1 = {
  img: "12.jpg",
  avatar: "avatar.jpg",
  flag: "flag.png",
  country: "USA",
  name: "reprehenderit fuga sapiente",
  age: "4 years",
  icons: ["ico-1.png", "ico-2.png", "ico-3.png"],
  products: generateProducts()
};

var fs2 = {
  ...fs1,
  img: "supplier.png",
  video: "assets/videos/oceans.mp4"
};

var featured = {
  t: "Featured Suppliers",
  bg: "alphacolor-r6RCPk1X91c-unsplash.jpg",
  s: [fs1, fs2, fs1, fs2]
};
module.exports = {
  categories,
  suppliers,
  sliders,
  search,
  featured
};
