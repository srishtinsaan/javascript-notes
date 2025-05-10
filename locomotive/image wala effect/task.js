gsap.to("#page2 img", {
  width : "100%", //we put it in "" bcz % is a special character. only 100 likhte then wasn't needed
  scrollTrigger : {
    // trigger : '#page2 img', jab aap elem ko (here img) ko pin karna chahte ho then always parent ko trigger karna na ki us pinned elem ko
    trigger : `#page2`,
    scroller : `body`,
    markers: true,
    start : 'top 0',
    end : 'top -100%',
    scrub : 2, // Without scrub: The animation plays immediately when the trigger point is reached.
    // scrub means syncing the scroll position with the animation progress 
    // — so as you scroll, the animation plays smoothly along with the scroll, not instantly.
    pin : true // it stays fixed on screen — while the scroll animation is active.
  }
})