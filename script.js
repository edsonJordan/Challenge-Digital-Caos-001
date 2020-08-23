const bShared = document.getElementById("button-shared");
bShared.addEventListener('click', (e)=>{
    const profile = document.getElementById("profile");
    const shared = document.getElementById("shared");    
    shared.classList.toggle("none")
    bShared.classList.toggle("active");    
    if(screen.availWidth >1300 ){
        console.log(JSON.stringify((e.pageX)-25));                
    }
    
})