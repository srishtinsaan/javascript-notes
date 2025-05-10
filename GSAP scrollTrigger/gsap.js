gsap.from(`#page1 #circle`,{
    scale: 0,
    duration : 2,
    rotate: 360,
    scrollTrigger : `#page1 #circle`
})
gsap.from(`#page2 #circle`,{
    scale: 0,
    duration : 2,
    rotate: 360,
    scrollTrigger : `#page2 #circle`
})
gsap.from(`#page3 #circle`,{
    scale: 0,
    duration : 2,
    rotate: 360,
    scrollTrigger : {
        trigger:`#page3 #circle`,
        scroller: `body`,
        markers : true
        
    }
})