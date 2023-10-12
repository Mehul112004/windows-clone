let windowBtn=document.querySelector(".window-button");
// let trans=document.querySelector(".trans");
// let clicked=false
windowBtn.addEventListener("click",(e)=>{
    gsap.to(".start-box",{
        top:"50%",
        ease: "power4.out",
        duration:0.3,
        zIndex:"11"
    })
    e.stopPropagation();
})
// trans.addEventListener("click",()=>{
//     gsap.to(".start-box",{
//         top:"150%",
//         ease:"power4.out",
//         duration:0.3
//     })
// })
window.addEventListener("click",(e)=>{
    gsap.to(".start-box",{
        top:"150%",
        ease:"power4.out",
        duration:0.3
    })
    
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