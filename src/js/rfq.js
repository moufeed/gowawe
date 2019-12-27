$(() => {
  var $form = $("#rfqForm");
  var validator = $form.validate({
    errorClass: "invalid-feedback",
    validClass: "valid-feedback",

    ignore: ".ignore",
    errorElement: "span",
    highlight: function(element) {
      $(element).addClass("is-invalid");
    },
    unhighlight: function(element) {
      $(element).removeClass("is-invalid");
    },
    errorPlacement: function(error, element) {
      var data = element.data();
      var placement = data["errorPlacement"];
      if (placement && placement.length > 0) {
        error.appendTo(placement);
        return;
      } else {
        error.insertAfter(element);
      }
    }
  });
});
