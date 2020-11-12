
// JS and jquery code to play audios on hover of location blocks
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

// pause the video when a location is selected and opened in other tab
$(".location-name").click(function()
{
  // a.src = "silence.mp3";
  console.log(a);
  a.pause();
});



var c = false;
// $(".audio-360").attr("controls", true);
$(".audio-360").attr("controls", false);

// to toggle audio controls on and off as user desires on the particular location 360 view
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

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */

// Js Code for side menu and sub MediaElementAudioSourceNode, initally displays are none and these change when relevant links are clicked
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
// -----------------------------------------------
// Animation styles for landing text animations

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

// // -----------------------------------------------
// JS Code to make sure all elemets except landing video are diplayed initially and then they appear once the user clicks on relevant links
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
  document.getElementById("philosophy").style.display = "block";
  document.getElementById("about").style.display = "block";
});
document.getElementById("tour01").addEventListener("click", function(){

  document.getElementById("outdoors").style.display = "block";
  document.getElementById("studyspots").style.display = "block";
  document.getElementById("diningfitness").style.display = "block";
  document.getElementById("philosophy").style.display = "block";
  document.getElementById("about").style.display = "block";
});
document.getElementById("tour02").addEventListener("click", function(){

  document.getElementById("outdoors").style.display = "block";
  document.getElementById("studyspots").style.display = "block";
  document.getElementById("diningfitness").style.display = "block";
  document.getElementById("philosophy").style.display = "block";
  document.getElementById("about").style.display = "block";
});
document.getElementById("tour2").addEventListener("click", function(){

  document.getElementById("outdoors").style.display = "block";
  document.getElementById("studyspots").style.display = "block";
  document.getElementById("diningfitness").style.display = "block";
  document.getElementById("philosophy").style.display = "block";
  document.getElementById("about").style.display = "block";
});
document.getElementById("tour3").addEventListener("click", function(){

  document.getElementById("outdoors").style.display = "block";
  document.getElementById("studyspots").style.display = "block";
  document.getElementById("diningfitness").style.display = "block";
  document.getElementById("philosophy").style.display = "block";
  document.getElementById("about").style.display = "block";
});
document.getElementById("tour4").addEventListener("click", function(){

  document.getElementById("outdoors").style.display = "block";
  document.getElementById("studyspots").style.display = "block";
  document.getElementById("diningfitness").style.display = "block";
  document.getElementById("philosophy").style.display = "block";
  document.getElementById("about").style.display = "block";
});

// -----------------------------------------------
// JS Code to add a button that directs the user to the top of the page
//Get the button:
mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
