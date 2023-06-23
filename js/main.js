// 메인메뉴에서 움직이는 바

$('.gnb li a').mouseenter(function (){
  let bar=$(this).position().left;
  console.log(bar)
  let widNum = $(this).width();
  // $('.bar').animate({실행문},시간)
  $('.bar').animate({
    'left':bar+'px',
    'width':widNum + 'px',
    'opacity':1
  },300)
})

$('.gnb').mouseleave(function (){

  $('.bar').animate({
    'left':0,
    'width':0,
    'opacity':0
  })
})



///------------- scrolla----------

$('.animate').scrolla({
  // default
  mobile: true, // 모바일 버전에서 활성화
  once: false, // 스크롤시 한번 또는 여러번 실행을 설정
  animateCssVersion: 4 // used animate.css version (3 or 4)
});


// menuOpen
// $('.menuOpen .open').on('click',function(){})
// $('.menuOpen .open').on('click',function(){}) 
// js는 on대신 addEventLisner
$('.menuOpen .open').click((e)=>{
  $('.menuOpen .menuWrap').addClass('on')
  e.preventDefault();
})

$('.menuWrap .close').click((e)=>{
  $('.menuOpen .menuWrap').removeClass('on')
  e.preventDefault();
})

$('.menuWrap ul li').click((e)=>{
  e.preventDefault();
  $('.menuOpen .menuWrap').removeClass('on')
  
})


//background color 변경
$(window).scroll(function(){
  // $(this)는 window
  let scrollTop = $(this).scrollTop();
  console.log(scrollTop)
  let offset=$('.service').offset().top;
  //service 섹션 머리가 천장에 닿는곳 형들 다 지나고
  //내 머리에 딱 닿으면 그곳을 지칭한다.
  if(scrollTop >= offset*0.8){
    $('body').addClass('on');
  }else{
    $('body').removeClass('on');
  }
})