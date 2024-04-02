$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });

  $(".menu_btn").click(function () {
    if ($(".menu_btn").hasClass("active")) {
      $(this).removeClass("active");
      $(".site_map").removeClass("active");
      $("body").css("overflow", "auto"); // 활성화 해제 시 스크롤 가능하도록 설정
    } else {
      $(".menu_btn").addClass("active");
      $(this).addClass("active");
      $(".site_map").addClass("active");
      $("body").css("overflow", "hidden"); // 활성화 시 스크롤 비활성화
    }
  });
});
