module.exports = {
  dir: "ltr",
  lang: "en",
  site_title: "gowawe",
  logo: "./assets/img/logo.png",
  date: "",
  main_title: "",
  page_title: "",
  subtitle: "",
  local: {},
  sections: [
    {
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
            img: "",
            title: "",
            link: ""
          },
          {
            img: "",
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
          products: [
            {
              local: {
                price: "price",
                pieces: "pieces",
                min_order: "min order",
                colors: "colors"
              },
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
                icons: ["ico-1.png", "ico-2.png", "ico-3.png"],
                links: [
                  {
                    txt: "contact us",
                    ico: "fa fa-envelope",
                    link: "#"
                  },
                  {
                    txt: "",
                    ico: "fa fa-shopping-cart",
                    link: "#"
                  },
                  {
                    txt: "",
                    ico: "fa fa-heart-o",
                    link: "#"
                  }
                ]
              },
              colors: [
                "red",
                "#ff00ff",
                "rgb(100,205,230)",
                "black",
                "white",
                "$000fff"
              ],
              images: ["product-1.jpg", "product-2.jpg", "product-3.jpg"]
            }
          ]
        }
      ]
    }
  ]
};
