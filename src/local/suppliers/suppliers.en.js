var categories = require("../utilities/categories-list.en");
var fromHome = require("../home/home.en");
var types = [
  "Golden Supplier",
  "Verified Supplier",
  "Type Three",
  "ipsum dolor",
  "consectetur adipisicing"
];

var filters = [
  {
    title: "Feature",
    list: [
      "Anti-Static",
      "Plus Size",
      "Breathable",
      "Anti-Wrinkle",
      "Anti-Static",
      "Plus Size",
      "Breathable",
      "Anti-Wrinkle"
    ]
  },
  {
    title: "Fabric Type",
    list: ["Satin", "Woolen", "Taffeta"]
  },
  {
    title: "Material",
    list: ["100% Polyester", "100% Cotton", "Polyester / Nylon", "Lace"]
  },
  {
    title: "Technics",
    list: ["Plain Dyed", "Yarn Dyed", "Garment Dyed", "Embroidered"]
  },
  {
    title: "Sample Order",
    list: ["Free samples", "Paid samples"]
  }
];

var supplier = {
  name: "Guang Zhou Juepell Fashion Company Ltd.",
  images: ["1.png", "2.png", "3.png"],
  type: "Manufacturing/Factory, Trading Company ",
  products: "Dress, Jacket, Tops, T-shirt, Shirt",
  certification: "ISO 9000",
  address: "Manufacturing/Factory, Trading Company ",
  features: [
    {
      ico: "ic1.png",
      txt: "Diamond Member"
    },
    {
      ico: "ic2.png",
      txt: "Audited Supplier"
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

function generateProducts() {
  let result = [];
  for (let index = 0; index < 20; index++) {
    result.push(fromHome.product);
  }
  return result;
}

var products = generateProducts();

var suppliers = generateSuppliers();

var slider = {
  title: "Women's Jeans",
  background: "jeans.png",
  subtitle: "All You Need In Women's Jeans Clothing",
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
