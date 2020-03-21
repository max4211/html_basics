/* Check if navigation is open or closed */
let toggleNavStatus = false;
const lowWidth = "50px";
const highWidth = "272px";

let setOpacity = function(lvl, getSidebarLinks) {
  for (let i = 0; i < getSidebarLinks.length; i++) {
    getSidebarLinks[i].style.opacity = lvl;
  }
}

let toggleNav = function() {
  /* Get all HTML elements we want to change styling of */
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarTitle = document.querySelector(".nav-sidebar span");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  /* Check toggle nav status */
  if (toggleNavStatus === false) {
    getSidebar.style.width = highWidth;
    getSidebarUl.style.visibility = "visible";
    getSidebarTitle.style.opacity = "0.7";

    setOpacity("1", getSidebarLinks);

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebar.style.width = lowWidth;
    getSidebarUl.style.visibility = "hidden";
    getSidebarTitle.style.opacity = "0";

    setOpacity("0", getSidebarLinks);

    toggleNavStatus = false;
  }

}
