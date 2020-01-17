$(function() {
  $(".se-gallery").each(function() {
    $(this).magnificPopup({
      delegate: "a",
      type: "image",
      gallery: {
        enabled: true
      }
    });
  });

  $(".se-image").each(function() {
    $(this).magnificPopup({
      type: "image"
    });
  });
});
