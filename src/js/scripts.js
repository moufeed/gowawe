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

const readURL = (input, target) => {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      const img = new Image();
      img.src = e.target.result;
      img.classList = ["img-fluid"];
      $(target)
        .css({
          display: "flex",
          opacity: 1
        })
        .html(img);
    };

    reader.readAsDataURL(input.files[0]);
  }
};

$("[data-characters]").each(function(index, item) {
  let $this = $(item);
  let data = $this.data();
  let length = data.max - $this.val().length;
  $this
    .parent()
    .find(".number")
    .text(length);

  $this.keyup(() =>
    $this
      .parent()
      .find(".number")
      .text(data.max - this.value.length)
  );
});

if ($.fn.validate) {
  $("[validate-form]").each(function(index, form) {
    $(form).validate({
      errorClass: "invalid-feedback",
      validClass: "valid-feedback",
      ignore: ".ignore",
      highlight: function(element) {
        $(element).addClass("is-invalid");
      },
      unhighlight: function(element) {
        $(element).removeClass("is-invalid");
      }
    });
  });
}
