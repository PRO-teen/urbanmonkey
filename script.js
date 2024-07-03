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




window.onload = function(){
  document.getElementById("autoplay").play()
}

var elems = document.querySelectorAll(".elem")
var page2 = document.querySelector("#page2")
elems.forEach(function(ele){
   ele.addEventListener("mouseenter",function(){
   var bgimg = ele.getAttribute("img")
    page2.style.backgroundImage = `url(${bgimg})`

   })

})






//trending



function trendingText (){

gsap.to(".trending h1",{
  transform:"translateX(-45%)",
  duration:10,
  delay:0.1,
  scrollTrigger:{
    trigger:".trending",
    scroller:"#main",
    // markers:true,
    start:"top 0%",
    end:"top -200%",
    scrub:1,
    pin:true,
    

  },
  
})
}

trendingText()















  //  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,underground



function trendingImage(){
gsap.from(".child img",{
  y:120,
  stagger:0.5,
  duration:1,
  scrollTrigger:{
    trigger:".child",
    scroller:"#main",
    start:"top -112%",
    end:"top -116%",
    // markers:true,
    scrub:2
  }
})
}
trendingImage()


function undergroundAnimation(){
  gsap.from(".elem h1",{
    y:120,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
      trigger:"#underground",
      scroller:"#main",
      start:"top 46%",
      end:"top 47%",
      // markers:true,
      scrub:2
    }
  })
}

undergroundAnimation()


gsap.from(".quote",{
  y:120,
  stagger:0.2,
  duration:1,
  scrollTrigger:{
    trigger:".quote",
    scroller:"#main",
    start:"top 80%",
    end:"top 81%",
    // markers:true,
    scrub:2
  }
})


gsap.from("#page5 h1",{
  y:120,
  stagger:0.2,
  duration:1,
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    start:"top 80%",
    end:"top 81%",
    // markers:true,
    scrub:2
  }
})






//blog

function blogCards(){

gsap.from(".page4 #blog1",{
  y:120,
  stagger:0.2,
  duration:1,
  scrollTrigger:{
    trigger:".page4",
    scroller:"#main",
    start:"top 46%",
    end:"top 47%",
    // markers:true,
    scrub:2
  }
})

gsap.from(".page4 #blog2",{
  y:120,
  stagger:0.2,
  duration:1,
  scrollTrigger:{
    trigger:".page4",
    scroller:"#main",
    start:"top 30%",
    end:"top 31%",
    // markers:true,
    scrub:2
  }
})

gsap.from(".page4 #blog3",{
  y:120,
  stagger:0.2,
  duration:1,
  scrollTrigger:{
    trigger:".page4",
    scroller:"#main",
    start:"top 15%",
    end:"top 16%",
    // markers:true,
    scrub:2
  }
})

}
blogCards();



// page3
//collab
function collab(){
  gsap.from(".page3 img",{
    y:120,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
      trigger:".page3",
      scroller:"#main",
      start:"top 46%",
      end:"top 47%",
      // markers:true,
      scrub:5
    }
  })
}
collab();

  


  













 







function quote(){

gsap.set ('.quoteSymbol', {autoAlpha:0, scale:.9});
gsap.set ('.inside', {y:200});

// initialize some animations
gsap.to(".text", {duration:1.4, autoAlpha:1, y:0, ease: "power2.inOut"});
gsap.to(".start > .inner", {delay:.4, duration:1, autoAlpha:1, y:0, ease: "power2.out",  stagger: {amount: .25}});
        
gsap.timeline({
  scrollTrigger: {
  trigger: ".quoteSymbol",
  scroller:"#main",
    start: "top bottom",
    end: "top center",
    scrub: true
  }
})
.to(".quoteSymbol",  {autoAlpha:1, transformOrigin: "center center", scale:1, ease: "none"}, 0);



var splitTextTl = gsap.timeline({
  scrollTrigger: {
  trigger: ".quote",
  scroller:"#main",
     toggleActions: "restart pause resume reverse",
    start: "top 65%"
  }
}), 
    splitTextQuote = new SplitText(".quote", {type:"words,chars"}), 
    chars = splitTextQuote.chars; //an array of all the divs that wrap each character

gsap.set (chars, {overflow: "hidden"});
splitTextTl.from(chars, {duration: .7, y:130, ease:"circ:out", stagger: 0.02}, "+=0");
}

quote();










