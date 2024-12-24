

var t1=gsap.timeline({
    scrollTrigger:{
        trigger:"#main1",
    //   markers:true,
      start:"top -10% ",
  
      end:"bottom 60%",
      scrub:1,
      pin:true
      
  }
  });
  gsap.from(".t1 h4",{
      y:-100
})
gsap.from(".t2 h1",{
    x:"-100%",
    delay:0.5,
    duration:1,
    ease:Power4
})
gsap.from("video",{
    opacity:0,
    delay:1
})
t1.to(".abs",{
    // delay:1,
    duration:4,
    width:"570px"
})
var t2=gsap.timeline({
    scrollTrigger:{
        trigger:"#main3",
    //   markers:true,
      start:"top 60% ",
  
      end:"bottom 100%",
      scrub:2,
    //   pin:true
      
  }
  });
t2.to(".abs2",{
    duration:1,
    width:"350px"
})
t2.from(".m3b1",{
    y:100,
    duration:1.6,
    stagger:1,
    opacity:0
})
var t3=gsap.timeline({
    scrollTrigger:{
        trigger:"#main5",
    //   markers:true,
      start:"top 60% ",
  
      end:"bottom 100%",
      scrub:2,
    //   pin:true
      
  }
  });
t3.from(".rb",{
    x:-100,
    duration:1.9,
    stagger:1,
    opacity:0
})
var bdata1=document.querySelector(".b1data1");
var bdata2=document.querySelector(".b1data2");
var bdata3=document.querySelector(".b1data3");
var bdata4=document.querySelector(".b1data4");
var bdata5=document.querySelector(".b1data5");

var imgs=document.querySelector("img")
var pic1=document.querySelector("#pic1");
var pic2=document.querySelector("#pic2");
var pic3=document.querySelector("#pic3");
var pic4=document.querySelector("#pic4");
var pic5=document.querySelector("#pic5");
var line=document.querySelector(".line");
var line2=document.querySelector(".line2");
var line3=document.querySelector(".line3");
var line4=document.querySelector(".line4");
var line5=document.querySelector(".line5");

bdata1.addEventListener("mousemove",function(){
    line.style.width="100%"
    line2.style.width="00%"
    line3.style.width="00%"
    line4.style.width="00%"
    line5.style.width="00%"

    pic1.style.transform=`translateX(0)`;
    pic1.style.zIndex=1;
    pic2.style.transform=`translateX(100%)`;
    pic3.style.transform=`translateX(100%)`;
    pic4.style.transform=`translateX(100%)`;
    pic5.style.transform=`translateX(100%)`;
    pic1.style.zIndex=0;
    pic2.style.zIndex=0;
    pic3.style.zIndex=0;
    pic4.style.zIndex=0;
    pic5.style.zIndex=0;
   
})

bdata2.addEventListener("mousemove",function(){
    line2.style.width="100%"
    line.style.width="00%"
 
    line3.style.width="00%"
    line4.style.width="00%"
    line5.style.width="00%"
    pic2.style.transform=`translateX(00%)`;
    pic2.style.zIndex=1;
    pic3.style.transform=`translateX(100%)`;
    pic1.style.transform=`translateX(100)`;
    pic4.style.transform=`translateX(100%)`;
    pic5.style.transform=`translateX(100%)`;
    pic1.style.zIndex=0;
    pic3.style.zIndex=0;
    pic4.style.zIndex=0;
    pic5.style.zIndex=0;

    

})
bdata3.addEventListener("mousemove",function(){
    line3.style.width="100%"
    line.style.width="00%"
    line2.style.width="00%"
    
    line4.style.width="00%"
    line5.style.width="00%"
    pic1.style.zIndex=0;
    pic2.style.zIndex=0;
    pic3.style.transform=`translateX(00%)`;
    pic3.style.zIndex=1;
    pic4.style.transform=`translateX(100%)`;
    pic1.style.transform=`translateX(100%)`;
    pic2.style.transform=`translateX(100)`;
    pic5.style.transform=`translateX(100%)`;
    pic4.style.zIndex=0;
    pic5.style.zIndex=0;
})
bdata4.addEventListener("mousemove",function(){
    line4.style.width="100%"
    line.style.width="00%"
    line2.style.width="00%"
    line3.style.width="00%"
    line5.style.width="00%"
    pic1.style.transform=`translateX(100)`;
    pic2.style.transform=`translateX(100)`;
    pic3.style.transform=`translateX(100)`;
    pic4.style.transform=`translateX(00%)`;
    pic5.style.transform=`translateX(100%)`;
    pic1.style.zIndex=0;
    pic2.style.zIndex=0;
    pic3.style.zIndex=0;
    pic4.style.zIndex=1;
    pic5.style.zIndex=0;
})
bdata5.addEventListener("mousemove",function(){
    line5.style.width="100%"
    line.style.width="00%"
    line2.style.width="00%"
    line3.style.width="00%"
    line4.style.width="00%"
   
    pic1.style.transform=`translateX(100%)`;
    pic2.style.transform=`translateX(100%)`;
    pic3.style.transform=`translateX(100)`;
    pic4.style.transform=`translateX(100)`;
    pic5.style.transform=`translateX(00%)`;
    pic1.style.zIndex=0;
    pic2.style.zIndex=0;
    pic3.style.zIndex=0;
    pic4.style.zIndex=0;
    pic5.style.zIndex=1;
})

// main4
var mpic1=document.querySelector("#m4p1");
var mpic2=document.querySelector("#m4p2");
var mpic3=document.querySelector("#m4p3");
var mpic4=document.querySelector("#m4p4");
var mpic5=document.querySelector("#m4p5");
var mpic6=document.querySelector("#m4p6");

var sec1=document.querySelector(".secb1");
var sec2=document.querySelector(".secb2");
var sec3=document.querySelector(".secb3");
var sec4=document.querySelector(".secb4");
var sec5=document.querySelector(".secb5");
var sec6=document.querySelector(".secb6");


sec1.addEventListener("mousemove",()=>{
    mpic1.style.opacity=1;
    mpic2.style.opacity=0;
    mpic3.style.opacity=0;
    mpic4.style.opacity=0;
    mpic5.style.opacity=0;
    mpic6.style.opacity=0;
}
)
sec2.addEventListener("mousemove",()=>{
    mpic1.style.opacity=0;
    mpic2.style.opacity=1;
    mpic3.style.opacity=0;
    mpic4.style.opacity=0;
    mpic5.style.opacity=0;
    mpic6.style.opacity=0;
}
)
sec3.addEventListener("mousemove",()=>{
    mpic1.style.opacity=0;
    mpic2.style.opacity=0;
    mpic3.style.opacity=1;
    mpic4.style.opacity=0;
    mpic5.style.opacity=0;
    mpic6.style.opacity=0;
}
)
sec4.addEventListener("mousemove",()=>{
    mpic1.style.opacity=0;
    mpic2.style.opacity=0;
    mpic3.style.opacity=0;
    mpic4.style.opacity=1;
    mpic5.style.opacity=0;
    mpic6.style.opacity=0;
}
)
sec5.addEventListener("mousemove",()=>{
    mpic1.style.opacity=0;
    mpic2.style.opacity=0;
    mpic3.style.opacity=0;
    mpic4.style.opacity=0;
    mpic5.style.opacity=1;
    mpic6.style.opacity=0;
}
)
sec6.addEventListener("mousemove",()=>{
    mpic1.style.opacity=0;
    mpic2.style.opacity=0;
    mpic3.style.opacity=0;
    mpic4.style.opacity=0;
    mpic5.style.opacity=0;
    mpic6.style.opacity=1;
}
)



var newmove=document.querySelector(".move");
var page=document.querySelector(".page")

const m7=document.querySelector("#main7");

m7.addEventListener("mousemove",function(dets){
    var x=dets.clientX;
    var y=dets.clientY;
    newmove.style.left=x+"px";
    newmove.style.top=y+"px";
    console.log(dets.clientX,dets.clientY)
  
}
)
// .page.addEventListener("mousemove",function(){
//     newmove.style.backgroundColor="red";
// })
  
