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

  $("input[data-preview]").change(function() {
    readURL(this, $(this).data()["preview"]);
  });

  function progress(form, target) {
    const $form = $(form);
    const count = $form.find("input ,textarea , select").length;
    let items = $form.find("input ,textarea , select");
    let percentage = 100 / count;

    items.change(function() {
      let progress = 0;
      items.each(function() {
        if ($(this).is(":checkbox")) {
          if ($(this).prop("checked")) {
            progress += percentage;
          }
        } else if (this.value.length > 0) {
          progress += percentage;
        }
      });
      $(target)
        .find(".bubble")
        .css("width", `${progress}%`);
    });
  }

  progress("#rfqForm", ".rfq-progress-bar");

  /*

   if ($(this).is(":checkbox") ) {
        console.log();
        console.log(this.value);
      }

  $("#rfqForm input , #rfqForm textarea ").change(() => {

  console.log(progress);
  $("#rfqForm")
    .find("input ,textarea , select")
    .each(function(itm, indx) {
      if (this.value.length > 0) {
        progress += percentage;
      } else {
        progress -= percentage;
      }
      console.log(progress);
      // console.log(itm, indx);
      //  console.log(this, this.value.length);
      /* if (this.validity.valid) {
                  numValid++;
              }
    });
});
 */
});
