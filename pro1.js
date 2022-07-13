gsap.from(".red",{
    x:1000,
    duration:1.2
})

gsap.from(".pic",{
    width:"100%",
    delay:1.1,
    opacity:0
    // duration:2.5
})
gsap.to(".red",{
    width:0,
    delay:1.4,
    // duration:2.5
})
gsap.from(".lb h2",{
    y:30,
    opacity:0,
    delay:1.8

})
gsap.from(".box1 img",{
    rotate:("-100deg"),
    scale:3,
    delay:1.3,
    // opacity:0,
    duration:1

})
gsap.from(".sq1",{
    right:-10,
    opacity:0,
    delay:1.2,
    ease:Expo.easeOut,
 
    duration:1.9
})
gsap.from(".pic1",{
    right:-10,
    opacity:0,
    delay:1.3,
 ease:Expo.easeOut,
    duration:1.5
})
gsap.from(".circle",{
    opacity:0,
    
    delay:3,
    duration:1.8
})
gsap.from(".pic2",{
    right:-20,
    opacity:0,
    delay:1.2,
 ease:Expo.easeOut,
    duration:1.8
})
gsap.from(".text",{
    x:100,
    // opacity:0,
    delay:2,
    duration:2.8
})
