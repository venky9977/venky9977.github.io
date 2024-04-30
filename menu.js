// Functions to manage menu opening and closing
export function openMenu() {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0";
}

export function closeMenu() {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
}
