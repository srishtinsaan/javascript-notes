// FOR ONLY ONE LINE : ----

/*
let first = document.querySelector(`#firsth1`).textContent

let splitted_text = first.split('') 

// console.log(splitted_text) // (14) ['S', 'e', 't', ' ', 'w', 'i', 't', 'h', 'i', 'n', ' ', 't', 'h', 'e']

// we have to do this for every array elem
// array ke upar chalne wala ek loop hota hai aur wo hai ... forEach loop

let clutter = ""

splitted_text.forEach(function(elem){
  clutter += `<span>${elem}</span>`
})

document.querySelector(`#firsth1`).innerHTML = clutter

*/

// LOCOMOTIVE SCROLLTRIGGER CODEPAN :

function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}


// ---------------------------

// FOR ALL LINES :

function textSplitting(){
  let allh1 = document.querySelectorAll(`#page2 h1`);

allh1.forEach(function(elem){
  let text = elem.textContent
  let splitted_text = text.split("")

  let clutter = ""
  splitted_text.forEach(function(e){
    clutter += `<span>${e}</span>`
  })
  elem.innerHTML = clutter
});
}


// -----------------------------

// Line pe colour ane wala effect

function textAnimation(){

  gsap.to('#page2 h1 span', {
  color : `#E3E3C4`,
  stagger : 0.2,
  scrollTrigger:{
    trigger : `#page2`,
    scroller : `#main`,
    // markers : true,
    start : `top 50%`,
    scrub : 1
  }
})

}


// calling all func 

loco()
textSplitting()
textAnimation()
