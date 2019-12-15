var fromHome = require("../home/home.ar");

var categories = [
  {
    txt: "الكل",
    img: "1.png"
  },
  {
    txt: "التعبئة والتغليف والإعلان ومكتب",
    img: "2.png"
  },
  {
    txt: "الزراعة والغذاء",
    img: "3.png"
  },
  {
    txt: "الملابس والمنسوجات وملحقاتها",
    img: "4.png"
  },
  {
    txt: "حقائب وأحذية واكسسوارات ",
    img: "5.png"
  },
  {
    txt: "إلكترونيات",
    img: "6.png"
  },
  {
    txt: "المعدات الكهربائية والمكونات والاتصالات",
    img: "7.png"
  },
  {
    txt: "تعدين ، كيماويات مطاط ومواد بلاستيكية",
    img: "8.png"
  },
  {
    txt: "الهدايا والرياضة والألعاب",
    img: "9.png"
  },
  {
    txt: "الصحة والجمال",
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
