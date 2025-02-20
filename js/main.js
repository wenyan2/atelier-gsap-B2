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


// GSAP Animations Section 1 ---------------------------------------------------
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


// GSAP Animations Section 2 ---------------------------------------------------
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


// GSAP Animations Section 3 ---------------------------------------------------
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
        toggleActions: "play none reverse none",
    }
});


// GSAP Animations Section 4 ---------------------------------------------------
let t1 = gsap.timeline({ paused: true })
t1.to(".letter", {
    opacity: 1,
    duration: 0.5, // 每个字母动画持续 0.5 秒
    stagger: 0.2, // 每个字母间隔 0.2 秒依次出现
    ease: "power2.out",
});

t1.to(".skill", {
    opacity: 1,
    y: -50,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out",
},"+=0.5") // 等文字动画完成后，延迟0.5s再执行动画

ScrollTrigger.create({
    animation: t1, 
    trigger: ".skills",
    start: "top 80%", // 当 h1 进入视口 80% 位置时，播放动画
    end: "top 50%",
    onEnter: () => tl.play(), // 滚动到达触发点时播放动画
    markers: true // 仅用于调试，可删
});

let t2 = gsap.timeline({ paused: true })
t1.to(".letterL", {
    opacity: 1,
    duration: 0.5, // 每个字母动画持续 0.5 秒
    stagger: 0.2, // 每个字母间隔 0.2 秒依次出现
    ease: "power2.out",
});

t1.to(".language", {
    opacity: 1,
    y: -50,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out",
},"+=0.5") // 等文字动画完成后，延迟0.5s再执行动画

ScrollTrigger.create({
    animation: t1, 
    trigger: ".languages",
    start: "top 80%", // 当 h1 进入视口 80% 位置时，播放动画
    end: "top 50%",
    onEnter: () => tl.play(), // 滚动到达触发点时播放动画
    markers: true // 仅用于调试，可删
});


// GSAP Animations Section 5 ---------------------------------------------------
gsap.to("#Butterfly", {
    scrollTrigger: {
        trigger: "footer",
        scrub: 1,
        markers:true,
        toggleActions: "play none reverse nonet",

        start: "top 80%",
        end: "bottom 20%"
    },
    duration: 2,
    motionPath: {
        path: "M2 2.19696C15.7943 2.19696 29.5886 2.19696 43.383 2.19696C73.6685 2.19696 102.658 -0.965219 124.183 18.0515C141.525 33.3736 154.096 53.4924 157.42 73.5072C160.567 92.4535 170.842 114.609 158.731 132.838C146.986 150.518 112.831 154.101 93.8477 139.814C89.487 136.532 78.8335 124.286 84.9532 119.168C94.8562 110.887 113.958 105.701 127.272 101.693C141.013 97.5564 161.225 98.5189 173.149 104.23C185.642 110.213 202.576 117.726 210.132 127.835C218.573 139.13 225.008 149.233 229.138 162.011C233.131 174.364 232.883 186.83 232.883 199.498C232.883 211.593 225.61 223.693 218.558 234.308C212.074 244.069 206.926 256.767 192.53 261.507C167.22 269.841 135.926 254.162 128.49 235.505C123.185 222.197 129.047 220.16 143.938 214.014C169.725 203.371 193.751 202.598 222.772 202.598C236.724 202.598 246.365 220.382 246.365 229.939C246.365 247.45 248.051 265.667 248.051 283.492C248.051 294.243 238.904 310.81 228.576 318.583C221.971 323.555 206.947 334.09 197.492 334.508C175.255 335.493 179.688 317.563 196.556 312.946C208.304 309.731 220.812 310.409 233.258 310.409C247.132 310.409 253.463 311.946 263.218 319.288C269.318 323.878 273.428 328.837 278.386 334.226C281.352 337.451 283.712 339.848 286.063 343.387C289.852 349.091 293.001 354.89 296.362 360.792C305.812 377.386 318.256 389.605 334 403"
    }
})