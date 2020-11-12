
// $(document).ready(function()
// {
//   var a = new Audio();
//   a.src = $(".audio-360").attr("src");
//   a.play();
// });

// alert("hello");
// // var location = $(".location");
// // var overlay = $("span");
//
// $(".location").hover(mouseI, mouseO);
//
// function mouseI()
// {
//   $(".location-hover").css("display","block");
// }
//
// function mouseO()
// {
//   $(".location-hover").css("display","none");
// }
//
// $(".location").click(function()
// {
//   alert("clicked");
// });
//
// var a = new Audio();
// a.src = $(".audio-360").attr("src");
// a.play();
//
// $(".location").click(function() {
//   name = $(this).attr("id");
//   console.log(name);
//   var name_img = 'images/' + name + '.jpeg';
//   $(".image-36").attr("src", name_img);
//   console.log($(".image-36").attr("src"));
//   var name_audio = 'sounds/' + name + '.mp3';
//   $(".audio-360").attr("src", name_audio);
//   console.log($(".audio-360").attr("src"));
//   //window.location = "location.html";
// });

var a = new Audio();
$(".location").hover(function() {
  name = $(this).attr("id");
  var name_audio = 'sounds/' + name + '-day.mp3';
  a.src = name_audio;
  a.play();
  console.log($(".audio-360").attr("src"));
}, function()
{
  a.pause();
});


var c = false;
// $(".audio-360").attr("controls", true);
$(".audio-360").attr("controls", false);

$(".audio-hider").click(function()
{
  if (c == false)
  {
    $(".audio-360").attr("controls", true);
    console.log("clicked");
    console.log(c);
    c = true;
  }
  else
  {
    $(".audio-360").attr("controls", false);
    console.log("clicked");
    console.log(c);

    c=false;
}
});
//
// for (int i = 0; i < 9; i++)
// {
//   var n = $(".location")[i].attr("id");
//   var name_img = 'images/' + n + '-day.JPG';
//   console.log(name_img);
//   $(".location")[i].style.background = "url("name_img");";
// }




  // else
  // {
  //   $(".audio-360").attr("controls", false);
  //   console.log("clicked");
  //   console.log(c);
  //
  //   c=0;

  // if ($(".audio-360").controls == "controls")
  // {
  //   $(".audio-360").attr("controls", false);
  //   console.log("clicked");
  // }
  // console.log(($(".audio-360").attr("controls")));
  // alert(($(".audio-360").attr("controls")))


// $(".audio-shower").click(function() {
//     $(".audio-360").attr("controls", false);
// });


// $(".audio-hider").hover(function()
// {
//   $(".audio-360").controls = true;
//   console.log("clicked");
//   console.log($(".audio-360"));
// }, function()
// {
//   console.log("clicked");
//   console.log($(".audio-360"));
//   $(".audio-360").controls = true;
// });

// $(".location").hover(function()
// {
//   name = $(this).attr("id");
//   console.log(name);
//   var name_img = 'images/' + name + '.jpeg';
//   $(".image-36").attr("src", name_img);
//   console.log($(".image-36").attr("src"));
//   var name_audio = 'sounds/' + name + '.mp3';
//   $(".audio-360").attr("src", name_audio);
//   console.log($(".audio-360").attr("src"));
// });

// var name-file = 'images/' + name + '.jpeg';
// $(".image-360").attr("src", "images/palms.jpeg") ;

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */

/* --------------------------------------- */
/* Ayesha's part begins */
function openNav() {
  document.getElementById("mySidenav").style.width = "275px";
  document.getElementById("header-text").style.marginLeft = "275px";
  document.getElementById("header-content").style.zIndex = 0;
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("header-text").style.marginLeft = "0";
  document.getElementById("header-content").style.zIndex = 5;
  // document.body.style.backgroundColor = "white";
}

function openSubMenu1() {
  document.getElementById("subMenu01").style.width = "275px";
  document.getElementById("header-text").style.marginLeft = "275px";
};
function openSubMenu2() {
  document.getElementById("subMenu02").style.width = "275px";
  document.getElementById("header-text").style.marginLeft = "275px";
};

function openSubMenu3() {
  document.getElementById("subMenu03").style.width = "275px";
  document.getElementById("header-text").style.marginLeft = "275px";
};

function closeSubMenu() {
  document.getElementById("subMenu01").style.width = "0";
  document.getElementById("subMenu02").style.width = "0";
  document.getElementById("subMenu03").style.width = "0";
  document.getElementById("header-text").style.marginLeft = "275px";
};
/* Ayesha's part ends */
/* --------------------------------------- */
// function noscroll() {
//   window.scrollTo(0, 0);
// }
// // add listener to disable scroll
// window.addEventListener('scroll', noscroll);
// function onMyFrameLoad() {
//   setTimeout(function () {
//     // Remove the scroll disabling listener (to enable scrolling again)
//     window.removeEventListener('scroll', noscroll);
//   }, 1000);
// };

anime.timeline({loop: false})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  });

  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// document.onload=
function later(){
  setTimeout(function(){
    anime.timeline({loop: false})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1500,
    delay: (el, i) => 45 * i
  });
  },650);
};

document.getElementById("phil_link").addEventListener("click", function(){
  document.getElementById("philosophy").style.display = "block";
});
document.getElementById("about_link").addEventListener("click", function(){
  document.getElementById("about").style.display = "block";
});


document.getElementById("mainBtn").addEventListener("click", function(){

  document.getElementById("panelWelcome").style.display = "block";
});
document.getElementById("tour00").addEventListener("click", function(){

  document.getElementById("outdoors").style.display = "block";
  document.getElementById("studyspots").style.display = "block";
  document.getElementById("diningfitness").style.display = "block";
});
document.getElementById("tour01").addEventListener("click", function(){

  document.getElementById("outdoors").style.display = "block";
  document.getElementById("studyspots").style.display = "block";
  document.getElementById("diningfitness").style.display = "block";
});
document.getElementById("tour02").addEventListener("click", function(){

  document.getElementById("outdoors").style.display = "block";
  document.getElementById("studyspots").style.display = "block";
  document.getElementById("diningfitness").style.display = "block";
});
document.getElementById("tour2").addEventListener("click", function(){

  document.getElementById("outdoors").style.display = "block";
  document.getElementById("studyspots").style.display = "block";
  document.getElementById("diningfitness").style.display = "block";
});
document.getElementById("tour3").addEventListener("click", function(){

  document.getElementById("outdoors").style.display = "block";
  document.getElementById("studyspots").style.display = "block";
  document.getElementById("diningfitness").style.display = "block";
});
document.getElementById("tour4").addEventListener("click", function(){

  document.getElementById("outdoors").style.display = "block";
  document.getElementById("studyspots").style.display = "block";
  document.getElementById("diningfitness").style.display = "block";
});
