
var $ = require("jquery");
let ScrollMagic = require('scrollmagic')
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");
// let Gasp = require('gasp');
require("./index.css");
require( 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');
let TweenMax = require( 'gsap/src/uncompressed/TweenMax');
let TimelineMax = require( 'gsap/src/uncompressed/TimelineMax');


var controller = new ScrollMagic.Controller();
var blockTween = new TweenMax.to(".ani-img.hero", 1.5, {
  scale: 1.2
})
var blockTweenContact = new TweenMax.to("#contact", 1.5, {
    scale: 1.2,
})
var blockTweenServices = new TweenMax.to(".is-5>.ani-img", 1.5, {
    scale: 1.2,
})
var sceneContact= new ScrollMagic.Scene({
  triggerElement: "#contact", // starting scene, when reaching this element
  duration: 400 // pin the element for a total of 400px
})
.setTween(blockTweenContact)
var sceneServices = new ScrollMagic.Scene({
  triggerElement: "#services", // starting scene, when reaching this element
  duration: 400 // pin the element for a total of 400px
})
    .setTween(blockTweenServices)
    //  .setPin(".is-5>.ani-img")// the element we want to pin
    
    
    
    // Add Scene to ScrollMagic Controller
controller.addScene(sceneContact);
controller.addScene(sceneServices);
// .addTo(controller)


$(document).ready(function () {
    $("a.scrollLink").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});
function scrollTo(cur) {
    var element = document.getElementById("cur");
    debugger
    
}