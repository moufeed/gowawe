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
  var $form = $("#feedForm");
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

  $(".fk-content").each((index, item) => {
    let $item = $(item);
    if ($item.find(".fx-txt").text().length < 125) {
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
