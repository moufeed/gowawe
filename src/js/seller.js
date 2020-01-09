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
