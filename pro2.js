var button=document.querySelector("button");
var b1=document.querySelector(".box1")
var b2=document.querySelector(".box2")
button.addEventListener("click",function(){
    gsap.to(".box1",{
        bottom:0,
        rotate:"20deg"
        
    })
    gsap.to(".box1",{
        delay:0.5,
        bottom:0,
        rotate:"0deg"
        
    })
    gsap.to(".box2",{
        top:0,
        rotate:"-20deg"

    })
    gsap.to(".box2",{
        top:0,
        delay:0.5,
        rotate:"0deg"

    })
})