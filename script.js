/*------------------Cursor Effect------------------*/


var crsr=document.querySelector(".cursor");
var bcrsr=document.querySelector(".cursor-blur");

document.addEventListener("mousemove",function(dets){   /*------------------"dets" gives the location of the mouse------------------*/
    crsr.style.left=dets.x-5+"px";
    crsr.style.top=dets.y-5+"px";
    bcrsr.style.left=dets.x-125+"px";     /*------------------125=(div dimension)/2------------------*/
    bcrsr.style.top=dets.y-125+"px";
})

/*------------------Cursor Change Effect on navigating over navbar------------------*/


var h4all = document.querySelectorAll(".navbar h4");

h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      crsr.style.scale = 2;
      crsr.style.border = "1px solid #fff";
      crsr.style.backgroundColor = "transparent";
      crsr.style.transition = "all ease 0.3s";
    });

    elem.addEventListener("mouseleave", function () {
      crsr.style.scale = 1;
      crsr.style.border = "0px solid #ff4500";
      crsr.style.backgroundColor = "#ff4500";
      crsr.style.transition = "all ease 0.3s";
    });
  });

  
/*------------------GSAP script for triggering scroll animations------------------*/

/*------------------NAVBAR BGCOLOR CHANGE------------------*/

gsap.to(".navbar",{
    backgroundColor:"#ff4500",
    duration:0.5,
    height:"90px",
    scrollTrigger:{
        trigger:".navbar",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

/*------------------GRADUAL COLOR CHANGE OF BG------------------*/

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

/*------------------ABOUT US PICS ANIMATION------------------*/

gsap.from(".about-us img,.about-us-info", {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger:0.4,
    scrollTrigger: {
      trigger: ".about-us",
      scroller: "body",
      start: "top 70%",
      end: "top 65%",
      scrub: 3
    },
  });

/*------------------CARD SCALE ANIMATION------------------*/

gsap.from(".card", {
    scale: 0.8,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    },
});

/*------------------INVERTED QUOTES ANIMATION------------------*/

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});

gsap.from("#colon2", {
y: 70,
x: 70,
scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
},
});

/*------------------WHAT R U WAITING FOR ANIMATION------------------*/

gsap.from(".page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: ".page4 h1",
      scroller: "body",
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });


/*------------------Cursor Change Effect on navigating over FOOTER------------------*/

var h3all = document.querySelectorAll(".footer h3");

h3all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 2;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
    crsr.style.transition = "all ease 0.3s";
    });

    elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #ff4500";
    crsr.style.backgroundColor = "#ff4500";
    crsr.style.transition = "all ease 0.3s";
    });
});