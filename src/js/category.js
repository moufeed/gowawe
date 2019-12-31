$(() => {
  $(".ss-images").on("click", "picture", function() {
    let id = $(this).attr("data-id");
    let parent = $($(this).parents(".ss-images")[0]);
    $(this)
      .parent()
      .find("picture")
      .removeClass("active");
    $(this).addClass("active");
    parent
      .find(`picture[data-id="main-${id}"]`)
      .fadeIn()
      .siblings()
      .fadeOut();
  });

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
});

//* <source src="" type="video/mp4">
