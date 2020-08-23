const bShared = document.getElementById("button-shared");
bShared.addEventListener('click', (e)=>{
    const profile = document.getElementById("profile");
    const shared = document.getElementById("shared");    
    shared.classList.toggle("none")
    bShared.classList.toggle("active");        
    if(screen.availWidth >1000 ){
        shared.style.left=JSON.stringify((bShared.offsetLeft)-((bShared.clientWidth)*3.5))+ "px";
        shared.style.top = JSON.stringify((bShared.offsetTop)-((bShared.clientHeight)*3.5)) + "px";          
    }    
})