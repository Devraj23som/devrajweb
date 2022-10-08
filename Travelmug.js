gsap.from("#mug",{
    transform:"scale(2.5)",
   
    delay:1,
    duration:1,
    

})
gsap.from("#page1",{
    backgroundColor:"black",
   
    delay:1,
    duration:1,
    

})
gsap.from(".nav",{
    y:-50,
    opacity:0,
    delay:1,
    duration:1

})
gsap.from("#textf h1",{
    y:132,
    // opacity:0,
    delay:1,
    duration:1

})
gsap.from(".page1cont h3",{
    x:"-100%",
    opacity:0,
    delay:2,
    duration:0.8

})
var t1=gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
    //   markers:true,
      start:"top center ",
  
      end:"centre centre",
      scrub:1,
    //   pin:true
      
  }
});
t1.from(".p2",{
    opacity:0,
    y:100
},"a")
t1.from(".p1",{
    opacity:0,
    x:10
},"a")

var t2=gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
    //   markers:true,
      start:"top center ",
  
      end:"centre centre",
      scrub:1,
    //   pin:true
      
  }
});
t2.from("#pic1",{
    transform:"scale(1.5)",
    duration:1

})

var load=document.querySelector(".load");
var clic1=document.querySelector("#clic1");
var clic2=document.querySelector("#clic2");
var clic3=document.querySelector("#clic3");
var clic4=document.querySelector("#clic4");

var pic1=document.querySelector("#pic1");
var pic2=document.querySelector("#pic2");
var pic3=document.querySelector("#pic3");
var pic4=document.querySelector("#pic4");

clic1.addEventListener("click",function(){
    load.style.transform="translateX(0px)";
    pic1.style.opacity=1;
    pic3.style.opacity=0;
    pic4.style.opacity=0;
    pic2.style.opacity=0;
    gsap.from(pic1,{
        
        transform:"scale(1.5)",
        duration:1


    })
    
})
clic2.addEventListener("click",function(){
    load.style.transform="translateX(100%)";
    pic2.style.opacity=1;
    pic3.style.opacity=0;
    pic4.style.opacity=0;
    pic1.style.opacity=0;
    gsap.from(pic2,{
        
        transform:"scale(1.5)",
        duration:1


    })
    
})
clic3.addEventListener("click",function(){
    load.style.transform="translateX(200%)";
    pic3.style.opacity=1;
    pic1.style.opacity=0;
    pic2.style.opacity=0;
    pic4.style.opacity=0;
    gsap.from(pic3,{
        
        transform:"scale(1.5)",
        duration:1


    })
    
})
clic4.addEventListener("click",function(){
    load.style.transform="translateX(300%)";
    pic4.style.opacity=1;
    pic3.style.opacity=0;
    pic1.style.opacity=0;
    pic2.style.opacity=0;
    gsap.from(pic4,{
        
        transform:"scale(1.5)",
        duration:1


    })
   
})

var t3=gsap.timeline({
    scrollTrigger:{
        trigger:"#page4",
    //   markers:true,
      start:"top center ",
  
      end:"centre centre",
      scrub:1,
    //   pin:true
      
  }
});
t3.from(".p4img img",{
    transform:"scale(1.5)",
    duration:0.9

})
t3.from(".p4text",{
   opacity:0,
   y:100,
    duration:0.7

})

var t4=gsap.timeline({
    scrollTrigger:{
        trigger:"#page5",
    //   markers:true,
      start:"top center ",
  
      end:"centre centre",
      scrub:1,
    //   pin:true
      
  }
});
t4.from(".p5text h2",{
    y:"100%",
    // ease:Expoeaseout,
    opacity:0,
    duration:1.5
})

