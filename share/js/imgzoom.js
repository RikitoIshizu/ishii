$(function() {
  var zName = "zoom";
  var all = $(".slider-for-list").length;
  var zNum;
  var zCur;
  var picDisp;
  var picDispn;
  var clickPic;
  var clickPic2;
  var beforeClickPic = 0;
  var thumbnailAmount

  $("#zoom1").elevateZoom({
    zoomType: "inner",
    lensShape: "sharp",
    lensSize: 150,
  });

  $(document).on("click", "#thumbnail-list .slick-arrow", function() {
    zNum = $("#thumbnail-list .slick-list .slick-current").data("slick-index");

    if($(this).hasClass("slick-prev")) {
      if(zNum == all-1 ) {
        zNum = all;
        picDispn = 0;
        picDisp = all - 1;
      } else {
        zNum = zNum + 1;
        picDispn = zNum;
        picDisp = zNum - 1;
      }
    }

    if($(this).hasClass("slick-next")) {
      if(zNum == 0) {
        zNum = 1;
        picDisp = 0;
        picDispn = all - 1;
      } else {
        zNum += 1;
        picDispn = zNum - 2;
        picDisp = zNum - 1;
      }
    }

    $(".button-pic_zoom").eq(picDispn).addClass("dsp-n");
    $(".button-pic_zoom").eq(picDisp).removeClass("dsp-n");
    beforeClickPic = picDisp;
    zCur = zName+zNum;

    $("#"+zCur).elevateZoom({
      zoomType: "inner",
      lensShape: "sharp",
      lensSize: 150,
    });

    $(".zoomContainer:first").remove();

  });

  $(document).on("click", "#thumbnail-list .img_list-cont", function() {
    thumbnailAmount = $(".img_list-cont").length;

    if (thumbnailAmount <= 4) {
      clickPic = $(".slick-active:first").data("slick-index");
      picDisp = clickPic;
      zCur3 = clickPic + 1;
      zCur2 = zName + zCur3;
    } else {
      clickPic = $("#thumbnail-list .slick-active").index()-3;
      picDisp = clickPic-1;
      zCur2 = zName+clickPic;
    }

    if (beforeClickPic == 0) {
      picDispn = 0;
    } else {
      picDispn = beforeClickPic;
    }

    $(".button-pic_zoom").eq(picDispn).addClass("dsp-n");
    $(".button-pic_zoom").eq(picDisp).removeClass("dsp-n");

    clickPic2 = $(".slick-active:first").data("slick-index");
    beforeClickPic = clickPic2;

    $("#"+zCur2).elevateZoom({
      zoomType: "inner",
      lensShape: "sharp",
      lensSize: 150,
    });

    $(".zoomContainer:first").remove();

  });

});
