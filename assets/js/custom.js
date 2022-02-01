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
