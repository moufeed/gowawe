const initSlider = (slider, thumbs) => {
  let slidesPerPage = 1;
  let syncedSecondary = true;
  let sliderData = slider.data();
  let thumbsData = slider.data();
  console.log(sliderData);
  console.log(thumbsData);

  let syncPosition = el => {
    //if you set loop to false, you have to restore this next line
    var current = el.item.index;

    //if you disable loop you have to comment this block
    /* var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    } */
    //end block

    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
      .find(".owl-item.active")
      .first()
      .index();
    var end = thumbs
      .find(".owl-item.active")
      .last()
      .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  };

  let syncPosition2 = el => {
    if (syncedSecondary) {
      let number = el.item.index;
      slider.data("owl.carousel").to(number, 100, true);
    }
  };

  slider
    .on("initialized.owl.carousel", function() {
      setTimeout(() => $(this).fadeIn(100), 500);
    })
    .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      navText: sliderData.navText
        ? sliderData.navText
        : ["&#xf060;", "&#xf061; "],
      autoplay: false,
      dots: false,
      loop: false,
      responsiveRefreshRate: 200,
      animateOut: "fadeOut",
      lazyLoad: true,
      hoverPause: true,
      mouseDrag: false,
      pullDrag: false,
      touchDrag: false,
      rtl: sliderData.rtl,
      responsive: {
        0: {
          autoHeight: true
        },
        720: {
          autoHeight: false
        }
      }
    })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
      setTimeout(() => $(this).fadeIn(100), 500);
      thumbs
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
    .owlCarousel({
      items: slidesPerPage,
      autoWidth: true,
      dots: false,
      nav: false,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: 1,
      responsiveRefreshRate: 100,
      rtl: sliderData.rtl
    })
    .on("changed.owl.carousel", syncPosition2);

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    slider.data("owl.carousel").to(number, 300, true);
  });
};

function init() {
  let activeTab = $('.tabs-links a[data-toggle="tab"].active');
  let hash = activeTab.attr("href");
  let slider = $(hash).find('.owl-carousel[data-slider="slider"]');
  let thumbs = $(hash).find('.owl-carousel[data-slider="thumbs"]');

  initSlider(slider, thumbs);
}

$(() => {
  init();
  $('.tabs-links a[data-toggle="tab"]')
    .on("show.bs.tab", e => {
      let slider = $(e.target.hash).find('.owl-carousel[data-slider="slider"]');
      let thumbs = $(e.target.hash).find('.owl-carousel[data-slider="thumbs"]');

      initSlider(slider, thumbs);
    })
    .on("hide.bs.tab", e => {
      let slider = $(e.target.hash).find('.owl-carousel[data-slider="slider"]');
      let thumbs = $(e.target.hash).find('.owl-carousel[data-slider="thumbs"]');
      destroySlider(slider, thumbs);
    });
});

function destroySlider(slider, thumbs) {
  if (slider.data("owl.carouse") && thumbs.data("owl.carouse")) {
    slider.data("owl.carouse").destroySlider();
    thumbs.data("owl.carouse").destroySlider();
  }
}
