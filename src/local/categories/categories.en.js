var categories = [
  {
    t: "Agriculture & Food",
    i: "1.png"
  },
  {
    t: "Apparel,Textiles & Accessories",
    i: "2.png"
  },
  {
    t: "Auto & Transportation",
    i: "Group 119.png"
  },
  {
    t: "Bags, Shoes &  Accessories",
    i: "bag.png"
  },
  {
    t: "Electrical Equipment, Components & Telecoms",
    i: "Fesha.png"
  },
  {
    t: "Packaging, Advertising & Office",
    i: "book.png"
  },
  {
    t: "Electronic",
    i: "Path 12.png"
  },
  {
    t: "Home, Lights & Constructor ",
    i: "chair.png"
  },
  {
    t: "Health & Beauty",
    i: "beauty.png"
  },
  {
    t: "Gifts, Sports & Toys",
    i: "giftbox.png"
  },
  {
    t: "Metallurgy, Chemicals, Rubber & Plastics",
    i: "chemicalsvg.png"
  },
  {
    t: "Machinery, Industrial Parts & Tools",
    i: "machine.png"
  }
];

var links = [
  "Beans",
  "Coffee Shop",
  "Agricultural waste",
  "Fruit",
  "Herbal Cigars &amp; Cigarettes",
  "Feed",
  "Other Agriculture Products",
  "Plant Seeds &amp; Bulbs",
  "Nuts &amp; Kernels",
  "Vanilla Beans"
];

var categoryMap = [
  {
    t: "Agriculture & Food",
    i: "wheat.png",
    l: [
      {
        t: "Agriculture ",
        c: 32123,
        l: [...links, ...links]
      },
      {
        t: "Food & Beverage ",
        c: 566448,
        l: [...links, ...links]
      }
    ]
  },
  {
    t: "Apparel,Textiles & Accessories",
    i: "Path 145.png",
    l: [
      {
        t: "Apparel",
        c: 32123,
        l: [...links, ...links]
      },
      {
        t: "Textile & Leather Product ",
        c: 566448,
        l: [...links, ...links]
      },
      {
        t: "Fashion Accessories",
        c: 2131,
        l: [...links, ...links]
      },
      {
        t: "Timepieces, Jewelry, Eyewear ",
        c: 566448,
        l: [...links, ...links]
      }
    ]
  }
];

module.exports = {
  categories,
  links: categoryMap
};
