gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".belowpage",
        markers:true,
        start: "top top",
        end: "bottom 80%",
        scrub: 5,
        pin:"#page1",
        ease:"SlowMo.ease",
        // duration:0.5
    },
})

        tl.to(".imgboxestopleft",{width:"350",height:"380",x:110,y:-20},"-=1")
        tl.to(".imgboxestopleft2",{width:"300",height:"400",x:-183,y:-75},"-=1")
        tl.to(".abovepage .imgboxestopright",{width:"580",height:"450",y:170,x:60},"-=1")
        tl.to(".imgtopright",{height:"400",width:"500",x:200,y:-180},"-=1")
        tl.to(".imgboxestoplast",{height:"350",width:"300",x:-150,y:-135,},"-=1")
        tl.to(".imgtoprightbe",{height:"400",width:"600",x:-198,y:87,},"-=1")
        tl.to(".imgtopleftbe",{height:"400",width:"600",x:-360,y:-100,},"-=1")
        tl.to(".imglightblueblur",{x:600,y:-60},"-=1")
        tl.to(".imgorangeblur",{y:-400},"-=1")
        tl.to(".imgdarkblueblur",{x:-900},"-=1")
        tl.to(".centerhead1",{transform:"scale(0.5,0.5)",opacity: 0,delay : 0,ease:"SlowMo.ease"},"-=1")
        tl.to(".centerhead h5",{transform:"scale(0,0)",opacity: 0,delay : 0,ease:"SlowMo.ease"},"-=1")
        tl.from(".texttop1",{y:100,transform:"scale(0.2, 0)",opacity: 0,delay : 0 ,ease:"SlowMo.ease"},"-=1")
        
        const t2 = gsap.timeline({
            scrollTrigger:{
                trigger: ".imgboxestopleft2",
                Scroller:"body",
                // markers:true,
                start: "top 80%",
                end: "bottom 70%",
                scrub: 4,
                // pin:"#page2",
                ease:"SlowMo.ease",
                delay:0
            },
        })

        t2.to(".imgboxestopleft2",{})

        


// tl.from("#main h2",{
//     y:100,transform:"scale(0.2, 0)",opacity: 0,
//     delay : 0 ,
//     ease:"SlowMo.ease"
// })
// tl.from("#main h4",{
//     y:100,transform:"scale(0.2, 0)",opacity: 0,
//     delay : 0,
//     ease:"SlowMo.ease"
// })
