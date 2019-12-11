function fixSliderHeight() {
  if (
    $(".main-carousel").length &&
    $(".featured-slider").length &&
    window.innerWidth > 790
  ) {
    $(".featured-slider")
      .find(".item")
      .css("min-height", $(".main-carousel").height() + 50);
  }
}

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
  fixSliderHeight();
  $(window).on("resize", function() {
    setTimeout(function() {
      fixSliderHeight();
    }, 500);
  });
});
