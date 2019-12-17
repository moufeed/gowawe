$(() => {
  // toggle view
  $(".btn-list").click(function() {
    $(".res-prod-list").addClass("prod-list-view");
  });

  $(".btn-grid").click(function() {
    $(".res-prod-list").removeClass("prod-list-view");
  });

  $('.results-tabs a[data-toggle="tab"]').on("show.bs.tab", e => {
    let tabId = $(e.target).attr("id");
    let sliderId = $(".adv-prod-slider").data("show");

    if (tabId === sliderId) {
      $(".adv-prod-slider").slideDown();
    } else {
      $(".adv-prod-slider").slideUp();
    }
  });
});
