//JS

// Testing function
function testClick(){
  alert ("I am clicked!");
}



$(".welcome-text").on("click",function(){
  $(".welcome-text").css("opacity","0");
  $(".center-circle").delay(300).animate({
    width:'2500px',
    height:'2500px',
    left:'-1000px',
    top:'-1000px'
  },500);
});

// $(".navbar-toggler-icon").removeAttr("style");
$(".head-title").animate({opacity: '1',top: '0'},500);
$(".head-subtitle").delay(300).animate({opacity: '1',top: '0'},500);
$(".title-img").delay(600).animate({opacity: '1',top: '0'},500);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
var positionTop = 0;
var navToggle = false;

$(window).scroll(function(){
  positionTop = $(document).scrollTop();
  // ANIMATE ON SCROLLING
  if(positionTop < 100){
    $(".nav-holder").css("height","150px");
    $(".nav-holder").css("backgroundColor","#fff");
    $(".navbar").css("paddingTop","35px");
    $(".navbar-brand").css("fontSize","3rem");
    $(".green-text").css("color","#2A7886");
    $(".green-text").hover(function(){
      $(this).css("color","#104064");
    },function(){
      $(this).css("color","#2A7886");
    });
  }else {
    $(".nav-holder").css("height","60px");
    $(".nav-holder").css("backgroundColor","#2A7886");
    $(".navbar").css("paddingTop","5px");
    $(".navbar-brand").css("fontSize","2rem");
    $(".green-text").css("color","#fff");
    $(".green-text").hover(function(){
      $(this).css("color","#fff");
    },function(){
      $(this).css("color","#fff");
    });
  }

  if(positionTop < 900){
    $(".card").css("top","50px");
    $(".card").css("opacity","0");
  }else {
    $(".card").css("top","0");
    $(".card").css("opacity","1");
  }

  if(positionTop < 2200){
    $(".contact-div").css("top","50px");
    $(".contact-div").css("opacity","0");
  }else{
    $(".contact-div").css("top","0");
    $(".contact-div").css("opacity","1");
  }
});

$(".navbar-toggler").on("click",function(){
  if(navToggle == false){
    if(positionTop < 100){
    $(".nav-holder").css("height","250px");
    }else{
      $(".nav-holder").css("height","220px");
    }

    $("body").css("overflow","hidden");
    navToggle = true;
  }else{
    if(positionTop < 100){
      $(".nav-holder").css("height","150px");
    }else{
      $(".nav-holder").css("height","60px");
    }
    $("body").css("overflow","visible");
    navToggle = false;
  }
});

$(".work-inner-div").each(function(){
  $(this).hover(function(){
    $(this).children().css("opacity","1");
    $(this).children().css("top","0");
  }, function(){
    $(this).children().css("opacity","0");
    $(this).children().css("top","20px");
  });
});
