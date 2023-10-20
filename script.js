let windowBtn=document.querySelector(".window-button");
let time=document.querySelector("#time-text")
let date= document.querySelector("#date")
windowBtn.addEventListener("click",(e)=>{
    gsap.to(".start-box",{
        top:"50%",
        ease: "power4.out",
        duration:0.3,
        zIndex:"11"
    })
    e.stopPropagation();
})
window.addEventListener("click",(e)=>{
    gsap.to(".start-box",{
        top:"150%",
        ease:"power4.out",
        duration:0.3
    })
    
})
//Another way to implement the start menu functionality
//by creating a transparent div with height =fullHeight - statusBarHeight
/*let trans=document.querySelector(".trans");
let clicked=false
    trans.addEventListener("click",()=>{
        gsap.to(".start-box",{
            top:"150%",
            ease:"power4.out",
            duration:0.3
        })
    })
*/

const timeDate = ()=>{
    let nowTimeDate=new Date();
    time.innerHTML=`${nowTimeDate.getHours()}:${nowTimeDate.getMinutes()}`
    date.innerHTML=`${nowTimeDate.getDate()}-${nowTimeDate.getMonth()+1}-${nowTimeDate.getFullYear()}`
}
setInterval(timeDate,1000)