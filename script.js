
var csr = document.querySelector(".cursor");
document.addEventListener("mousemove",(hi)=>{
    csr.style.left = hi.x + 'px';
    csr.style.top = hi.y + 'px';
})
var blr = document.querySelector(".blur");
document.addEventListener("mousemove",(hi)=>{
    blr.style.left = hi.x + 'px' ;
    blr.style.top = hi.y     + 'px';
})

var h4 = document.querySelectorAll('nav h4')
h4.forEach((el) => { 
    el.addEventListener('mouseenter', ()=>{
        csr.style.transform = "scale(3)";
        csr.style.border = "1px solid white"
        csr.style.backgroundColor = "transparent";
    })
    el.addEventListener('mouseleave', ()=>{
        csr.style.transform = "scale(1)";
        csr.style.border = "none"
        csr.style.backgroundColor = "#bbf06d";
    })
    
});




gsap.to('nav',{
    y:-10,
    backgroundColor:"black",
    // duration:1,
    height:'12%',
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})

gsap.to(".main", {
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        // markers:true,
        start:'center 30%',
        end:'center -15%',
        scrub:2
    }
})

    gsap.from(' #sec,#fst, .content',{
        y:-100,
        opacity:0,
        scrollTrigger:{
            trigger:`.page2 .aboutus`,
            scroller:`body`,
            // markers:true,
            start:"top 60%",
            end:"top 25%",
            stagger:1,
        scrub:1
        }
    })
    
    gsap.from('.card',{
            x:-300,
            opacity:0,  
            rotateY:360,
            stagger:0.5,
            scrollTrigger:{
            trigger:`.card`,
            scroller:`body`,
            // markers:true,
            start:'top 60%',
            end:'top 25%',
            scrub:1
            }

    })

    gsap.from('.signup',{
        x:-1000,
        opacity:0,
        scrollTrigger:{
            trigger:`.signup`,
            scroller:`body`,
            // markers:true,
            start:'top 90%',
            end:'top 45%',
            scrub:1
            }
    })
    gsap.from('.food-drink',{
        y:-100,
        opacity:0,
        scrollTrigger:{
            trigger:`.food-drink`,
            scroller:`body`,
            // markers:true,
            start:'top 50%',
            end:'top 25%',
            scrub:1
            }
    })

    gsap.from('.surprise h3',{
        y:90,
        // x:30, 
        opacity:0,
        scrollTrigger:{
            trigger:`.surprise`,
            scroller:`body`,
            // markers:true,
            start:'top 95%',
            end:'top 55%',
            scrub:1
            }
    })

    gsap.from('#topcoma',{
        y:-30,
        x:-30, 
        opacity:0,
        scrollTrigger:{
            trigger:`.surprise h3`,
            scroller:`body`,
            // markers:true,
            start:'top 90%',
            end:'top 75%',
            scrub:1
            }
    })
    gsap.from('#botcoma',{
        y:30,
        x:30, 
        opacity:0,
        scrollTrigger:{
            trigger:`.surprise h3`,
            scroller:`body`,
            // markers:true,
            start:'top 90%',
            end:'top 75%',
            scrub:1
            }
    })


    gsap.to('.waiting h1',{
        y:-80,
        opacity:1,
        scrollTrigger:{
            trigger:'.waiting',
            scroller:`body`,
            // markers:true,
            start:'top 92%',
            end:'top 84%',
            scrub:1,
        }

    })

    