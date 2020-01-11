var fromHome = require("../home/home.en");

function generateProducts() {
  let result = [];
  for (let index = 0; index < 15; index++) {
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

module.exports = {
  header: {
    t: "Seller Name",
    d:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti recusandae fugit, facere dolorum corporis nesciunt optio corrupti debitis. Veniam debitis pariatur voluptatem optio eius maiores laboriosam expedita odio sint."
  },
  navs: [
    "home page",
    "company profile",
    "product list",
    "classified",
    "seller feedback",
    "contact us"
  ],
  carousel: [
    {
      i: "1-1.jpg",
      t: "Leather Bag",
      p: "€29.99",
      ty: "Grey Messenger Bag"
    },
    {
      i: "2-1.jpg",
      t: "Black Bagpack",
      p: "€23.49",
      ty: "college Backpack"
    },
    {
      i: "3-1.jpg",
      t: "Women Office Bag",
      p: "€11.99",
      ty: "Hand Bag"
    },
    {
      i: "3-2.jpg",
      t: "Men Black Bag",
      p: "€39.00",
      ty: "Laptop Bag"
    },
    {
      i: "4-1.jpg",
      t: "Lady Shoulder Bag.",
      p: "€39.00",
      ty: "Laptop Bag"
    }
  ],
  contact: {
    name: ""
  },
  tabs: [
    "Company Profile",
    "Trade Productions",
    "Information Policies",
    "Image gallery",
    "Certification achieved"
  ],
  productsList: generateProducts(),
  feedbacks: [
    {
      n: "farouk a",
      s: "s2",
      d: "15/12/2012",
      f: "Lorem, ipsum dolor sit amet consectetur"
    },
    {
      n: "mohamad",
      s: "s1",
      d: "1/1234/11",
      f: " consectetur adipisicing elit."
    },
    {
      n: "hasan",
      s: "s4",
      d: "12/03/2002",
      f:
        "sit amet consectetur adipisicing elit. Delectus doloremque cum consequatur voluptatibus ad veniam asperiores architecto fugit sunt maxime necessitatibus, aperiam ullam dignissimos similique,"
    },
    {
      n: "",
      s: "s2",
      d: "12/03/2002",
      f:
        "sit amet consectetur adipisicing elit. Delectus doloremque cum consequatur voluptatibus ad veniam asperiores architecto fugit sunt maxime necessitatibus, aperiam ullam dignissimos similique,"
    },
    {
      n: "",
      s: "s1",
      d: "12/03/2002",
      f:
        "sit amet consectetur adipisicing elit. Delectus doloremque cum consequatur voluptatibus ad veniam asperiores architecto fugit sunt maxime necessitatibus, aperiam ullam dignissimos similique,"
    },
    {
      n: "",
      s: "s3",
      d: "12/03/2002",
      f:
        "sit amet consectetur adipisicing elit. Delectus doloremque cum consequatur voluptatibus ad veniam asperiores architecto fugit sunt maxime necessitatibus, aperiam ullam dignissimos similique,"
    },
    {
      n: "",
      s: "s4",
      d: "12/03/2002",
      f:
        "sit amet consectetur adipisicing elit. Delectus doloremque cum consequatur voluptatibus ad veniam asperiores architecto fugit sunt maxime necessitatibus, aperiam ullam dignissimos similique sit amet consectetur adipisicing elit. Delectus doloremque cum consequatur voluptatibus ad veniam asperiores architecto fugit sunt maxime necessitatibus, aperiam ullam dignissimos similique, sit amet consectetur adipisicing elit. Delectus doloremque cum consequatur voluptatibus ad veniam asperiores architecto fugit sunt maxime necessitatibus, aperiam ullam dignissimos similique,"
    },
    {
      n: "",
      s: "s5",
      d: "12/03/2002",
      f:
        "sit amet consectetur adipisicing elit. Delectus doloremque cum consequatur voluptatibus ad veniam asperiores architecto fugit sunt maxime necessitatibus, aperiam ullam dignissimos similique ,sit amet consectetur adipisicing elit. Delectus doloremque cum consequatur voluptatibus ad veniam asperiores architecto fugit sunt maxime necessitatibus, aperiam ullam dignissimos similique,"
    },
    {
      n: "",
      s: "s2",
      d: "12/03/2002",
      f:
        "sit amet consectetur adipisicing elit. Delectus doloremque cum consequatur voluptatibus ad veniam similique,"
    },
    {
      n: "",
      s: "s3",
      d: "3/23/2002",
      f:
        "sit amet consectetur voluptatibus ad veniam asperiores architecto fugit sunt maxime necessitatibus, aperiam ullam dignissimos similique,"
    },
    {
      n: "mufid",
      s: "s4",
      d: "12/03/2067",
      f:
        "sit amet consectetur adipisicing elit. Delectus doloremque cum consequatur voluptatibus ad veniam"
    }
  ]
};
