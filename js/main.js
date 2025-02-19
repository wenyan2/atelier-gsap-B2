// GSAP Modules  ---------------------------------------------------
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

// GSAP Animations   ---------------------------------------------------
// GSAP matchedia
// let mm = gsap.matchMedia();
// mm.add({
//     isMoblie: "(max-width: 799px)",
//     isDesktop: "(max-width: 799px)",
// }, (context) => {
//     let (isMoblie.isDesktop) = context.conditions;
// })

// // GSAP Demo Animation
// gsap.to("#demo",{
//     rotation : 360,
//     duration : 2,
// })

// gsap.fromTo("#demo",{
//     rotation : 180
// },{
//     rotation : 360,
//     duration : 2,
// })

// Draggable.create("#demo")

// // GSAP Demo Animation
// gsap.to(".modal-content",{
//     ScrollTrigger : {
//     },
//     rotation: 360,
//     duration: 2,
// })


// // GSAP Animation - modal-content MotionPath 

// gsap.to("#word", {
//     scrollTrigger: {
//         trigger: "#modal",
//         scrub: 1,
//         markers:true,
//         toggleActions: "reverse play play reset",

//         start: "top 50%",
//         end: "bottom 60%"
//     },
//     // duration: 2,
//     // motionPath: {
//     //     path: "M797.5 88.5C730.333 120.5 621.4 235.6 721 344C845.5 479.5 985.808 273.738 929.999 235C887.499 205.5 778.366 144.848 738.999 415.5C714.999 580.5 875.999 660.167 964.499 607C1009.5 562 1007 434 903.499 434C784.163 434 690.499 556.5 770.499 782.5C834.499 963.3 954.833 886.167 1007 825C987.666 753.167 922.399 634.5 815.999 734.5C709.599 834.5 790.999 1036.5 844.999 1125"
//     // }
// })

// // GSAP Animation - modal-content Timeline
// let timelineModal = gsap.timeline();

// timelineModal.to('#word',{x:100,})
// .to('#word',{y:100,})
// .to('#word',{x:-10,})
// .to('#word',{y:-10,})


// // Gsap Draggable - Poke
// Draggable.create(".hero-img",{
//     typ:'rotation',
    
//     onDrag: function(){
//         document.querySelector('.hero-img').style.width = "250px"; //按这个会变大或变小
//     },
//     onDragEnd: function(){
//         document.querySelector('.hero-img').style.width = "400px"; 
//         // if (this,hitTest('#depositeZone','180px')) {
//         //     document.getElementById("depositeZone")
//         // } else {

//         // }
//     },
// })


gsap.from(".text-creative",{
    x:'900px',
    duration: 1.5,
})
gsap.from(".text-designer",{
    x:'-1100px',
    duration: 1.5,
})
gsap.from("#name, #school",{
    y:'900px',
    duration: 1.5,
})

gsap.from(".illustratorCrown", {
    x:'-900px', 
    duration : 1.5,
})

gsap.fromTo(".hero-img",
    {opacity:0},
    {opacity: 1,duration: 1},
)

gsap.to("#illustratorFlower", {
    rotation: 360,
    duration: 2,
})

gsap.to("#yanwenImage1", {
    scrollTrigger: {
        trigger: ".contentWrapper",
        scrub: 1,
        markers:true,
        toggleActions: "reverse play play reset",

        start: "top 15%",
        end: "bottom 25%"
    },
    y: '465px',
    x: '-380px',
})

gsap.to("#yanwenImage2, #yanwenImage3", {
    opacity: 1,
    scrollTrigger: {
        trigger: ".contentWrapper",
        scrub: 1,
        markers:true,
        toggleActions: "reverse play play reset",

        start: "top 15%",
        end: "bottom 25%"
    }
})

gsap.to("#text", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".intro",
        scrub: 1,
        markers:true,
        toggleActions: "reverse play play reset",

        start: "top 55%",
        end: "bottom 80%"
    }
})

gsap.to(".character", {
    x: (index) => [ 70, 80, 30, 60, -40 ][index], // 左右散开
    y: (index) => [ -30, -120, 20, 80, -80][index], // 上下散开
    opacity: 1,
    duration: 5,
    stagger:  gsap.utils.random(0.1, 0.3),
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#characterGroup",
        start: "top 55%",
        end: "top 80%",
        scrub: 3,
        markers: true,
        toggleActions: "play none reverse none",
    }
});