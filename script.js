const scroll = new LocomotiveScroll({
    el: document.querySelector(' #main'),
    smooth: true
});


function firstpage(){
    var tl = gsap.timeline();

    tl.from('#nav', {
        y: '-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    tl.to('.boundingelem', {
        y: '-0',
        ease: Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger:.2
    })
    tl.from('#herofooter', {
        y:'-10',
        opacity: 0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut

    })
}

var timer;

function circleChaptakaro(){
    // define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev= 0;
    var yprev =0;
    window.addEventListener("mousemove", function(dets){
        clearTimeout(timer);


        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev);//clamp(lower_range, upperrange, for_which_element)
        yscale = gsap.utils.clamp(.8,1.2, dets.clientY - yprev);
        
        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);

        timer = setTimeout(function () {
            document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale( 1,1)`;
        }, 100);
    });
}

function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}

circleChaptakaro();
circleMouseFollower();
firstpage();



function imagemove() {
    document.querySelectorAll(".elem").forEach(function (elem) {
     var rotate = 0;
     var differ = 0;

        elem.addEventListener("mousemove", function (dets) {
          var diff =  dets.clientY - elem.getBoundingClientRect().top 
          differ =   dets.clientX -  rotate ;
          rotate = dets.clientX;
           
            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                ease: Power3,
                top:diff,
                left: dets.clientX,
                rotate: gsap.utils.clamp(-20, 20, differ*0.8),
            });
        });

        elem.addEventListener("mouseleave", function (dets) {
            gsap.to(elem.querySelector("img"), {
                opacity: 0,
                ease: Power3.ease,
                duration: 0.5,
            });
        });
   });
}


imagemove();