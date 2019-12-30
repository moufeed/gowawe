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

module.exports = {
  categories,
  suppliers,
  sliders
};
