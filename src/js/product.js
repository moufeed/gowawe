var src = "";
var poster = "";
$("#VideosModal").on("show.bs.modal", function(e) {
  var modal = $(this);
  var video = modal.find("video").get(0);
  if (poster.length) {
    video.poster = poster;
  }
  video.src = src;
});

$("#VideosModal").on("hide.bs.modal", function(e) {
  var modal = $(this);
  var video = modal.find("video").get(0);
  video.pause();
  video.src = "";
  video.poster = "";
});

$("[data-video]").on("click", function() {
  src = $(this).attr("data-video");
  poster = $(this).attr("data-poster");
  if (src.length) {
    $("#VideosModal").modal("show");
  }
  return;
});

$(() => {
  var $form = $("#feedForm ");
  var validator = $form.validate({
    errorClass: "invalid-feedback",
    validClass: "valid-feedback",
    ignore: ".ignore",
    errorElement: "span",
    highlight: function(element) {
      $(element).addClass("is-invalid");
      var data = $(element).data();
      if (data["name"] && data["name"] === "rating") {
        $(".rating-group").addClass("is-invalid");
      }
    },
    unhighlight: function(element) {
      $(element).removeClass("is-invalid");
      var data = $(element).data();
      if (data["name"] && data["name"] === "rating") {
        $(".rating-group").removeClass("is-invalid");
      }
    },
    errorPlacement: function(error, element) {
      var data = element.data();

      if (data["name"] && data["name"] === "rating") {
        $("#ratingError").append(error);
      } else {
        error.insertAfter(element);
      }
    }
  });

  $("#fSupplier").validate({
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

  $(".fk-content").each((index, item) => {
    let $item = $(item);
    if ($item.find(".fx-txt").text().length < 300) {
      $item.find(".btn-feed").hide();
    }
  });
});

$("#FeedbackModal").on("show.bs.modal", function(e) {
  var modal = $(this);
  var btn = $($(e.relatedTarget).get(0));
  var feed = $(btn.parents(".fk-card").get(0));
  var content = feed.clone();
  content.addClass("inModal");
  content.find(".btn-feed").remove();
  modal.find(".modal-body").html(content);
});

$("#FeedbackModal").on("hidden.bs.modal", function(e) {
  var modal = $(this);
  modal.find(".modal-body").html("");
});

function changeOldPrice(qty, price) {
  $(".old-price ins").text(qty * price);
}
function changePrice(qty, price) {
  $(".current-price ins").text(qty * price);
}

function GetOptions(event) {
  let available = $(event.target).data("instock");
  let price = $(event.target).data("price");
  let oldPrice = $(event.target).data("oldprice");
  return { available, price, oldPrice };
}

function ChangePrices(qty, options) {
  if (options.price !== undefined) {
    changePrice(qty, options.price);
  }
  if (options.oldPrice !== undefined) {
    changeOldPrice(qty, options.oldPrice);
  }
}

function changeQTY(event, increases) {
  let qty = 1;
  let val = parseInt($(".product-quantity .qty").val()) | 0;
  let options = GetOptions(event);
  if (increases) {
    let max = options.available !== undefined ? options.available : 500;
    qty = val < max ? ++val : max;
    $(".product-quantity .qty").val(qty);
  } else {
    qty = val > 1 ? --val : val;
    $(".product-quantity .qty").val(qty);
  }
  ChangePrices(qty, options);
}

$(".product-quantity .minus").on("click", event => changeQTY(event, false));
$(".product-quantity .plus").on("click", event => changeQTY(event, true));
$(".product-quantity .qty").on("change", function(event) {
  let options = GetOptions(event);
  let qty = parseInt($(this).val());
  if (qty >= 1) {
    let max = options.available !== undefined ? options.available : 500;
    qty = qty < max ? qty : max;
    $(this).val(qty);
    ChangePrices(qty, options);
  } else {
    $(this).val(1);
  }
});

$(".btn-toCart").click(function() {
  $("#cart-toast").toast("show");
});
