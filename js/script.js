var galleryThumbs = new Swiper('.greenhouse_box_small', {
    spaceBetween: 10,
    slidesPerView: 3,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
  });
  var galleryTop = new Swiper('.greenhouse_box_big', {
    spaceBetween: 10,
    loop: true,
    observer: true,
    observeParents: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });
    var galleryThumbs = new Swiper('.lake_box_small', {
        spaceBetween: 10,
        slidesPerView: 3,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
      });
      var galleryTop = new Swiper('.lake_box_big', {
        spaceBetween: 10,
        loop: true,
        observer: true,
        observeParents: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: galleryThumbs,
        },
      });
  
      var galleryThumbs = new Swiper('.flower_box_small', {
        spaceBetween: 10,
        slidesPerView: 3,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
      });
      var galleryTop = new Swiper('.flower_box_big', {
        spaceBetween: 10,
        loop: true,
        observer: true,
        observeParents: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: galleryThumbs,
        },
      });

      var galleryThumbs = new Swiper('.tree_box_small', {
        spaceBetween: 10,
        slidesPerView: 3,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
      });
      var galleryTop = new Swiper('.tree_box_big', {
        spaceBetween: 10,
        loop: true,
        observer: true,
        observeParents: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: galleryThumbs,
        },
      });

var swiper = new Swiper('.swiper1', {
    loop: true,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });


  var swiper = new Swiper('.swiper_plants', {
    spaceBetween: 10,
    breakpoints: {
        300: {
            slidesPerView: 1,
            slidesPerGroup : 1,
            slidesPerColumn: 1,
        },
        580: {
            slidesPerView: 2,
            slidesPerGroup : 2,
            slidesPerColumn: 1,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup : 2,
            slidesPerColumn: 2,
        },
        1000: {
            slidesPerView: 3,
            slidesPerGroup : 2,
            slidesPerColumn: 2,
        },
        1150: {
            slidesPerView: 4,
            slidesPerGroup : 4,
            slidesPerColumn: 2,
        },
    },
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
  });
  

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
  mapOption = { 
        center: new kakao.maps.LatLng(37.569490891280424, 126.83537809796682), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = 'images/big_marker.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(51, 77), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.569490891280424, 126.83537809796682); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition,
  image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);  

// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
var content = '<div class="customoverlay">' +
    '  <a href="https://kko.to/vecz6ZdYH" target="_blank">' +
    '    <span class="title">서울식물원</span>' +
    '  </a>' +
    '</div>';

// 커스텀 오버레이가 표시될 위치입니다 
var position = new kakao.maps.LatLng(37.569490891280424, 126.83537809796682);  

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    position: position,
    content: content,
    yAnchor: 1 
});


// 지도 끝 

//관람유의사항 탭바

$(function(){
    $(".notice_tit_left").click(function(){
        $(this).css("border","4px solid #0e8a2d").css("border-bottom","none");
        $(".left_cont").fadeIn(800).css("display","block");
        $(".right_cont").fadeOut(800).css("display","none");
        $(".notice_tit_right").css("border","none");
    });
    $(".notice_tit_right").click(function(){
        $(this).css("border","4px solid #8a0e0e").css("border-bottom","none");
        $(".right_cont").fadeIn(800).css("display","block");
        $(".left_cont").fadeOut(800).css("display","none");
        $(".notice_tit_left").css("border","none");
    });
})


//관람유의사항 탭바 끝
// 고스트메뉴 


$(function(){
    $(".ghost_bar_img").click(function(){
        $(this).fadeOut();
        $(".ghost_navi").css("display","block").css("left","100%").animate(
            {
                left: "0"
            },700
        );
    });
    $(".ghost_bar_close_img").click(function(){
        $(".ghost_bar_img").fadeIn();
        $(".ghost_navi").animate(
            {
                left: "100%"
            },700
        );
    });
});

$(function(){
    $(".menu1").click(function(){
        $(".ghost_navi").css("display","none");
        $(".ghost_bar_img").css("display","block");
    });
    $(".menu2").click(function(){
        $(".ghost_navi").css("display","none");
        $(".ghost_bar_img").css("display","block");
    });
    $(".menu3").click(function(){
        $(".ghost_navi").css("display","none");
        $(".ghost_bar_img").css("display","block");
    });
    $(".menu4").click(function(){
        $(".ghost_navi").css("display","none");
        $(".ghost_bar_img").css("display","block");
    });
    $(".menu5").click(function(){
        $(".ghost_navi").css("display","none");
        $(".ghost_bar_img").css("display","block");
    });
});

//고스트메뉴 끝

$(function(){
    $(".tablinks1").click(function(){
        $(".marker1").fadeIn();
        $(".marker1").siblings(".markers").css("display","none");
    });
    $(".tablinks2").click(function(){
        $(".marker2").fadeIn();
        $(".marker2").siblings(".markers").css("display","none");
    });
    $(".tablinks3").click(function(){
        $(".marker3").fadeIn();
        $(".marker3").siblings(".markers").css("display","none");
    });
    $(".tablinks4").click(function(){
        $(".marker4").fadeIn();
        $(".marker4").siblings(".markers").css("display","none");
    });
});


$(function(){
    $(".marker1").click(function(){
        $(".modal_greenhouse").fadeIn();
    });
    $(".marker2").click(function(){
        $(".modal_lake").fadeIn();
    });

    $(".marker3").click(function(){
        $(".modal_flower").fadeIn();
    });
    $(".marker4").click(function(){
        $(".modal_tree").fadeIn();
    });
});



$(function(){
    $(".fa-times").click(function(){
        $(".modal_greenhouse").css("display","none");
        $(".modal_lake").css("display","none");
        $(".modal_flower").css("display","none");
        $(".modal_tree").css("display","none");
        $(".modal_insta").css("display","none");
    });
});


$(function(){
    $(".fa-chevron-left").click(function(){
        $(".modal_insta").fadeIn()
    });
});
$(function(){
    $(".gallert_post1").click(function(){
        $(".modal_greenhouse").fadeIn()
        $(".modal_insta").fadeOut()
        $(".modal_lake").fadeOut()
        $(".modal_flower").fadeOut()
        $(".modal_tree").fadeOut()
    });
    $(".gallert_post2").click(function(){
        $(".modal_greenhouse").fadeOut()
        $(".modal_insta").fadeOut()
        $(".modal_lake").fadeIn()
        $(".modal_flower").fadeOut()
        $(".modal_tree").fadeOut()
    });
    $(".gallert_post3").click(function(){
        $(".modal_greenhouse").fadeOut()
        $(".modal_insta").fadeOut()
        $(".modal_lake").fadeOut()
        $(".modal_flower").fadeIn()
        $(".modal_tree").fadeOut()
    });
    $(".gallert_post4").click(function(){
        $(".modal_greenhouse").fadeOut()
        $(".modal_insta").fadeOut()
        $(".modal_lake").fadeOut()
        $(".modal_flower").fadeOut()
        $(".modal_tree").fadeIn()
    });
});

$(function(){
    $(".check1").click(function(){
        $(".check2").fadeIn();
        $(".check1").fadeOut();
    });
    $(".check2").click(function(){
        $(".check1").fadeIn();
        $(".check2").fadeOut();
    });
});



$(function(){
    $(".fa-chevron-up").click(function(){
        $(".swiper-button-plant").fadeOut();
    });
    $(".fa-chevron-down").click(function(){
        $(".swiper-button-plant").fadeIn();
    });
});


$(function(){
    $(".fa-chevron-up1").click(function(){
        $(".plant1").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down1").css("display","block");
    });
    $(".fa-chevron-down1").click(function(){
        $(".plant1").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up1").css("display","block");
    });
    $(".fa-chevron-up2").click(function(){
        $(".plant2").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down2").css("display","block");
    });
    $(".fa-chevron-down2").click(function(){
        $(".plant2").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up2").css("display","block");
    });
    $(".fa-chevron-up3").click(function(){
        $(".plant3").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down3").css("display","block");
    });
    $(".fa-chevron-down3").click(function(){
        $(".plant3").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up3").css("display","block");
    });
    $(".fa-chevron-up4").click(function(){
        $(".plant4").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down4").css("display","block");
    });
    $(".fa-chevron-down4").click(function(){
        $(".plant4").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up4").css("display","block");
    });
    $(".fa-chevron-up5").click(function(){
        $(".plant5").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down5").css("display","block");
    });
    $(".fa-chevron-down5").click(function(){
        $(".plant5").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up5").css("display","block");
    });
    $(".fa-chevron-up6").click(function(){
        $(".plant6").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down6").css("display","block");
    });
    $(".fa-chevron-down6").click(function(){
        $(".plant6").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up6").css("display","block");
    });
    $(".fa-chevron-up7").click(function(){
        $(".plant7").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down7").css("display","block");
    });
    $(".fa-chevron-down7").click(function(){
        $(".plant7").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up7").css("display","block");
    });
    $(".fa-chevron-up8").click(function(){
        $(".plant8").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down8").css("display","block");
    });
    $(".fa-chevron-down8").click(function(){
        $(".plant8").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up8").css("display","block");
    });
    $(".fa-chevron-up9").click(function(){
        $(".plant9").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down9").css("display","block");
    });
    $(".fa-chevron-down9").click(function(){
        $(".plant9").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up9").css("display","block");
    });
    $(".fa-chevron-up10").click(function(){
        $(".plant10").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down10").css("display","block");
    });
    $(".fa-chevron-down10").click(function(){
        $(".plant10").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up10").css("display","block");
    });
    $(".fa-chevron-up11").click(function(){
        $(".plant11").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down11").css("display","block");
    });
    $(".fa-chevron-down11").click(function(){
        $(".plant11").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up11").css("display","block");
    });
    $(".fa-chevron-up12").click(function(){
        $(".plant12").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down12").css("display","block");
    });
    $(".fa-chevron-down12").click(function(){
        $(".plant12").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up12").css("display","block");
    });
    $(".fa-chevron-up13").click(function(){
        $(".plant13").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down13").css("display","block");
    });
    $(".fa-chevron-down13").click(function(){
        $(".plant13").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up13").css("display","block");
    });
    $(".fa-chevron-up14").click(function(){
        $(".plant14").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down14").css("display","block");
    });
    $(".fa-chevron-down14").click(function(){
        $(".plant14").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up14").css("display","block");
    });
    $(".fa-chevron-up15").click(function(){
        $(".plant15").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down15").css("display","block");
    });
    $(".fa-chevron-down15").click(function(){
        $(".plant15").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up15").css("display","block");
    });
    $(".fa-chevron-up16").click(function(){
        $(".plant16").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down16").css("display","block");
    });
    $(".fa-chevron-down16").click(function(){
        $(".plant16").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up16").css("display","block");
    });
    $(".fa-chevron-up17").click(function(){
        $(".plant17").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down17").css("display","block");
    });
    $(".fa-chevron-down17").click(function(){
        $(".plant17").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up17").css("display","block");
    });
    $(".fa-chevron-up18").click(function(){
        $(".plant18").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down18").css("display","block");
    });
    $(".fa-chevron-down18").click(function(){
        $(".plant18").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up18").css("display","block");
    });
    $(".fa-chevron-up19").click(function(){
        $(".plant19").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down19").css("display","block");
    });
    $(".fa-chevron-down19").click(function(){
        $(".plant19").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up19").css("display","block");
    });
    $(".fa-chevron-up20").click(function(){
        $(".plant20").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down20").css("display","block");
    });
    $(".fa-chevron-down20").click(function(){
        $(".plant20").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up20").css("display","block");
    });
    $(".fa-chevron-up21").click(function(){
        $(".plant21").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down21").css("display","block");
    });
    $(".fa-chevron-down21").click(function(){
        $(".plant21").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up21").css("display","block");
    });
    $(".fa-chevron-up22").click(function(){
        $(".plant22").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down22").css("display","block");
    });
    $(".fa-chevron-down22").click(function(){
        $(".plant22").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up22").css("display","block");
    });
    $(".fa-chevron-up23").click(function(){
        $(".plant23").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down23").css("display","block");
    });
    $(".fa-chevron-down23").click(function(){
        $(".plant23").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up23").css("display","block");
    });
    $(".fa-chevron-up24").click(function(){
        $(".plant24").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down24").css("display","block");
    });
    $(".fa-chevron-down24").click(function(){
        $(".plant24").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up24").css("display","block");
    });
    $(".fa-chevron-up25").click(function(){
        $(".plant25").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down25").css("display","block");
    });
    $(".fa-chevron-down25").click(function(){
        $(".plant25").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up25").css("display","block");
    });
    $(".fa-chevron-up26").click(function(){
        $(".plant26").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down26").css("display","block");
    });
    $(".fa-chevron-down26").click(function(){
        $(".plant26").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up26").css("display","block");
    });
    $(".fa-chevron-up27").click(function(){
        $(".plant27").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down27").css("display","block");
    });
    $(".fa-chevron-down27").click(function(){
        $(".plant27").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up27").css("display","block");
    });
    $(".fa-chevron-up28").click(function(){
        $(".plant28").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down28").css("display","block");
    });
    $(".fa-chevron-down28").click(function(){
        $(".plant28").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up28").css("display","block");
    });
    $(".fa-chevron-up29").click(function(){
        $(".plant29").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down29").css("display","block");
    });
    $(".fa-chevron-down29").click(function(){
        $(".plant29").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up29").css("display","block");
    });
    $(".fa-chevron-up30").click(function(){
        $(".plant30").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down30").css("display","block");
    });
    $(".fa-chevron-down30").click(function(){
        $(".plant30").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up30").css("display","block");
    });
    $(".fa-chevron-up31").click(function(){
        $(".plant31").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down31").css("display","block");
    });
    $(".fa-chevron-down31").click(function(){
        $(".plant31").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up31").css("display","block");
    });
    $(".fa-chevron-up32").click(function(){
        $(".plant32").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down32").css("display","block");
    });
    $(".fa-chevron-down32").click(function(){
        $(".plant32").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up32").css("display","block");
    });
    $(".fa-chevron-up33").click(function(){
        $(".plant33").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down33").css("display","block");
    });
    $(".fa-chevron-down33").click(function(){
        $(".plant33").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up33").css("display","block");
    });
    $(".fa-chevron-up34").click(function(){
        $(".plant34").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down34").css("display","block");
    });
    $(".fa-chevron-down34").click(function(){
        $(".plant34").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up34").css("display","block");
    });
    $(".fa-chevron-up35").click(function(){
        $(".plant35").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down35").css("display","block");
    });
    $(".fa-chevron-down35").click(function(){
        $(".plant35").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up35").css("display","block");
    });
    $(".fa-chevron-up36").click(function(){
        $(".plant36").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down36").css("display","block");
    });
    $(".fa-chevron-down36").click(function(){
        $(".plant36").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up36").css("display","block");
    });
    $(".fa-chevron-up37").click(function(){
        $(".plant37").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down37").css("display","block");
    });
    $(".fa-chevron-down37").click(function(){
        $(".plant37").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up37").css("display","block");
    });
    $(".fa-chevron-up38").click(function(){
        $(".plant38").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down38").css("display","block");
    });
    $(".fa-chevron-down38").click(function(){
        $(".plant38").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up38").css("display","block");
    });
    $(".fa-chevron-up39").click(function(){
        $(".plant39").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down39").css("display","block");
    });
    $(".fa-chevron-down39").click(function(){
        $(".plant39").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up39").css("display","block");
    });
    $(".fa-chevron-up40").click(function(){
        $(".plant40").animate({
            marginTop: 0
        },600);
        $(this).css("display","none");
        $(".fa-chevron-down40").css("display","block");
    });
    $(".fa-chevron-down40").click(function(){
        $(".plant40").animate({
            marginTop: 240
        },600);
        $(this).css("display","none");
        $(".fa-chevron-up40").css("display","block");
    });
});

         /* 탭 */
         function openCity(evt, cityName) {
            // 변수 선언
            var i, tabcontent, tablinks;
    
            // class = "tabcontent"가있는 모든 요소를 ​​가져 와서 숨깁니다.
            tabcontent = document.getElementsByClassName("tabcontent", "");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            
            // class = "tablinks"가있는 모든 요소를 ​​가져오고 "active"클래스를 제거합니다.
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            // 현재 탭을 표시하고 탭을 연 버튼에 "활성"클래스를 추가합니다.
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
            }
            // 처음상태에 보일 탭
            document.getElementById("defaultOpen").click(greenhouse);


        /**스크롤이 설정한 높이 이상 내려갔을때 스타일추가하기**/
        if (jQuery(window).width() > 0) {
            jQuery(window).on("scroll",function(ev){
                if(jQuery(window).scrollTop() > 150 ) { /**높이 픽셀 조정**/
                    jQuery('.menu_box').addClass('fixed');  /**위의 높이에서 .fixed 클래스를 추가합니다. 스타일에서 자유롭게 수치 조절 가능합니다.**/
                }
                else{
                    jQuery('.menu_box').removeClass('fixed');
                }
                return false;
            });
            }
            
            /**마우스 부드럽게 해당위치로 이동**/
            $(function(){
            $('a[href^=#]').click(function() {
                var speed = 800;
                var href= $(this).attr("href");
                var target = $(href == "#" || href == "" ? 'html' : href);
                var position = target.offset().top;
                $('body,html').animate({scrollTop:position}, speed, 'swing');
                return false;
            });
            });
    
