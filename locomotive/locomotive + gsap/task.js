gsap.registerPlugin(ScrollTrigger); //This tells GSAP to enable and use the ScrollTrigger plugin.

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({ //LocomotiveScroll is class/library . We are creating a new instance/obj of it with new keyword
  el: document.querySelector("#main"), // el: → The element on which Locomotive Scroll will work.
  smooth: true // Enables smooth vertical scrolling effect.
});



// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);



// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    //If a value is passed (like value = 200), it scrolls to that Y position using locoScroll.scrollTo(...) 

    // If no value is passed, it just returns the current scroll position (locoScroll.scroll.instance.scroll.y).

    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  
  

  getBoundingClientRect() { // Tells ScrollTrigger: "Assume the scrolling area (#main) fills the entire viewport."
    return {
      top: 0, 
      left: 0, 
      width: window.innerWidth, 
      height: window.innerHeight
    };
  },
  

  // Pinning = when an element stays fixed while you scroll.
  // If Locomotive uses transform, then pinType should be "transform".
  // If not (like on mobile), use "fixed" to avoid bugs or jumpiness.

  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! 
  // So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile.
  //  We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




gsap.from(`#page1 #box`,{
    scale: 1.5,
    duration:1,
    rotate: 360,    
    scrollTrigger:{
        trigger : `#page1 #box`,
        scroller : `#main`,
        markers : true,
        start : `top` // start the animation when the top of the trigger element hits the top of the scroller
    }

    
})

gsap.from(`#page2 #box`,{
    scale: 1.5,
    duration:1,
    opacity:0, 
    // delay: 1,
    rotate: 360,
    scrollTrigger:{
        trigger : `#page2 #box`,
        scroller : `#main`,
        markers : true,
        start : `top` 
    }
})
gsap.from(`#page3 #box`,{
    scale: 1.5,
    duration:1,
    opacity:0,
    delay: 1,
    rotate: 360,
    scrollTrigger:{
        trigger : `#page3 #box`,
        scroller : `#main`,
        markers : true,
        start : `top 50%`
    }
})