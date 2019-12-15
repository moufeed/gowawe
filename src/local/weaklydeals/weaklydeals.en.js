var fromHome = require("../home/home.en");

var categories = [
  {
    txt: "all",
    img: "1.png"
  },
  {
    txt: "Packaging, Advertising & Office",
    img: "2.png"
  },
  {
    txt: "Agriculture & Food",
    img: "3.png"
  },
  {
    txt: "Apparel ,Textiles & Accessories",
    img: "4.png"
  },
  {
    txt: "Bags, Shoes &  Accessories ",
    img: "5.png"
  },
  {
    txt: "Electronics",
    img: "6.png"
  },
  {
    txt: "Electrical Equipment , Components & Telecoms",
    img: "7.png"
  },
  {
    txt: "Metallurgy, Chemicals Rubber & Plastics",
    img: "8.png"
  },
  {
    txt: "Gifts, Sports & Toys",
    img: "9.png"
  },
  {
    txt: "Health & Beauty",
    img: "10.png"
  }
];

function generateDeals() {
  let result = [];
  for (let index = 0; index < 20; index++) {
    result.push(fromHome.product);
  }
  return result;
}

var deals = generateDeals();

module.exports = {
  categories,
  deals
};
