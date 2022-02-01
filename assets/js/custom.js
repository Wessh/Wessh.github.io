//Aditional content
//https://desenvolvimentoparaweb.com/css/navegacao-ancora-smooth-scroll-css-puro/
//Reference studing project
//https://www.youtube.com/watch?v=RdCJmh_Hi5k
const navId = document.getElementById("nav_menu");
const ToggleMenuId = document.getElementById("toggle_btn");
const CloseBtnId = document.getElementById("close_btn");

// Show Menu
ToggleMenuId.addEventListener("click", () => {
    navId.classList.add("show")
});

//Hide Menu
CloseBtnId.addEventListener("click", () => {
    navId.classList.remove("show");
});

//Scroll initalize
AOS.init();

//GSAP Logo
gsap.from(".logo", {
    opacity:0,
    y: -10,
    delay: 1,
    duration:0.5
});

//GSAP Nav-menu
gsap.from(".nav_menu_list .nav_menu_item",{
    opacity:0,
    y: -10,
    delay: 1.4,
    duration:0.5,
    stagger: 0.3
});

//GSAP toggle_btn
gsap.from(".toggle_btn",{
    opacity:0,
    y: -10,
    delay: 1.4,
    duration:0.5
});

//GSAP main-heading
gsap.from(".main-heading",{
    opacity:0,
    y: 20,
    delay: 2.4,
    duration:1
});

//GSAP info-text
gsap.from(".info-text",{
    opacity:0,
    y: 20,
    delay: 2.8,
    duration:1
});

//GSAP btn
gsap.from(".btn_wrapper",{
    opacity:0,
    y: 20,
    delay: 2.8,
    duration:1
});

//GSAP team_img
gsap.from(".team_img_wrapper img",{
    opacity:0,
    y: 20,
    delay: 3,
    duration:1
});