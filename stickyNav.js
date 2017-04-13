/**
 * Created by Losiev on 13.04.2017.
 */
$(document).ready(function () {
  var navPos, winPos, navHeight;

  function refreshVar() {
    navPos = $("nav").offset().top;
    navHeight = $("nav").outerHeight(true);
  }

  refreshVar();
  $(window).resize(refreshVar);
  $("<div class='clone-nav'></div>").insertBefore("nav").css("height", navHeight).hide();
  $(window).scroll(function () {
    winPos = $(window).scrollTop();
    if (winPos >= navPos) {
      $("nav").addClass("fixed shadow");
      $(".clone-nav").show();
    } else {
      $("nav").removeClass("fixed shadow");
      $(".clone-nav").hide();
    }
  });
});