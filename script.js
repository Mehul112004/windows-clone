let windowBtn=document.querySelector(".window-button");
let rest=document.querySelector(".main");
let clicked=false
windowBtn.addEventListener("click",()=>{
    gsap.to(".start-box",{
        top:"50%",
        ease: "power4.out",
        duration:0.4
    })
    clicked=true
})
// function remove(){
//     gsap.to(".start-box",{
//         top:"150%",
//         duration:0.5
//     })
//     clicked=flase
// }
// rest.addEventListener("click",()=>{
//     if(clicked===true)
//     remove();
// else
// return
    
// })