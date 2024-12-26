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

var menuBtn = document.getElementsByClassName("bx-menu")[0];
console.log(menuBtn);

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        console.log("clicked");
        let clickedMenu=menuBtn.classList.toggle('clickedMenu')
        // console.log(menuBtn);
        if (clickedMenu || !clickedMenu) {
            let menuClicked = document.getElementsByClassName("menuClick")[0];
            menuClicked.classList.toggle('btnPressed')
            console.log(menuClicked);

            let menubtnInside = document.querySelectorAll(".menubtn");
            menubtnInside.forEach((link) => {
                link.addEventListener("click", () => {
                    menuClicked.classList.remove('btnPressed');
                });
            });
        }
        
    });
} else {
    console.log("menuBtn not found");
}
 
let menubtn= document.getElementsByClassName("menubtn");
console.log(menubtn)
