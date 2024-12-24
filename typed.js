var typed = new Typed(".typed",{
    strings : ["Developer", "Coder"],
    loop : true,
    backSpeed : 100,
    typeSpeed : 100
})
var typed1 = new Typed(".typed1",{
    strings : ["Developer", "Coder"],
    loop : true,
    backSpeed : 100,
    typeSpeed : 100
})



window.addEventListener("scroll", ()=>{
    var nav = document.querySelector("nav");
    // console.log(nav);
    nav.classList.toggle("sticky", window.scrollY > 0);
    console.log(nav);
    
    
})