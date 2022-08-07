
var arr=[
    {imgs:"devrajweb/dbz/goku.png",name:"Goku",power:"ultra instint",colrs:"orange"},
    {imgs:"dbz/vegeta.png",name:"Vegeta",power:"Super Saiyan Blue",colrs:"navy"},
    {imgs:"dbz/freeza.png",name:"Gold-Freeza",power:"Gold form",colrs:"gold"},
    {imgs:"dbz/berus.png",name:"Lord berus",power:"infinte"},
    {imgs:"dbz/trunks.png",name:"Future-Trunks",power:"SS2",colrs:"red"},
]
var clut="";
arr.forEach(function(dets,index){
    // box.style.backgroundColor=`${dets.colrs}`;
    clut+=`<div id="${index}" class="box">  
    <img  src=${dets.imgs} alt="">
    <h2>${dets.name}</h2>
    <h4><span>max power:</span>${dets.power} </h4>
    </div>`
    
    
})
document.querySelector(".content").innerHTML=clut;
var box=document.querySelector(".box");

var t2=gsap.timeline({
    scrollTrigger:{
        trigger:"#main2",
        // markers:true,
        pin:true,
        start:"centre centre",
        end:"bottom top",
        scrub:2
    }
})
t2.from(".m2",{
    y:"-50%",
    opacity:0,
    rotate:"180deg",
    // borderRadius:0
    duration:2
    
})
t2.to("body",{
    backgroundColor:"black",
    duration:1
    
    
})
t2.from(".m3 .wbox",{
    x:"200%",
    duration:1
    
    
})
var t3=gsap.timeline({
    scrollTrigger:{
        trigger:"#main3",
        // markers:true,
        pin:true,
        start:"centre centre",
        end:"bottom top",
        scrub:1
    }
})
t3.from(".cards",{
    scale:0,
    opacity:0
})



// box.addEventListener("click",function(dets){
    
//     butt.style.display="initial"
//     butt.style.opacity=1
//     abs.style.display="initial"
//     gsap.to(".box",{

//         delay:1,
//         width:"90%"
  
//     })
//     gsap.to(".box",{
//         duration:1,
//         height:"80%"
//     })
//     gsap.to(".box",{
//         y:90
//     })


// })




// butt.addEventListener("click",function(){
//     butt.style.display="none"
//     abs.style.display="none"
//     box.style.position="relative"
//     gsap.to(".box",{

//         // delay:1,
//         duration:0.9,
//         width:"30%"
  
//     })
//     gsap.to(".box",{
//         // duration:1,
//         delay:0.1,
//         height:"55%"
//         })
//         gsap.to(".box",{
//         // delay:1,
//       y:1
//     })
// })
