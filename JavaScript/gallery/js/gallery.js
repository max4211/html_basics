/* Keep track of variables for js functionality*/
let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

/* JS to run during images*/
if (galleryImages) {
  galleryImages.forEach(function(image, index) {
    image.onclick = function() {
      /* Figure out which image we clicked on*/
      let getElementCss = window.getComputedStyle(image);
      let getFullImgUrl = getElementCss.getPropertyValue("background-image");
      let getImgUrlPos = getFullImgUrl.split("/img/thumbs/");
      let setNewImgUrl = getImgUrlPos[1].replace('")', '');

      getLatestOpenedImg = index + 1;

      // Create popup window
      let container = document.body;
      let newImgWindow = document.createElement("div");
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute("class", "img-window");
      newImgWindow.setAttribute("onclick", "closeImg()");

      // Insert image into the window
      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src", "img/" + setNewImgUrl);
      newImg.setAttribute("id", "current-img");

      newImg.onload = function() {
        // Fetch width of image
        let imgWidth = this.width;
        // Try to add 80 px as styling
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

        // Create buttons to allow change image
        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNode("Next");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img-btn");
        newNextBtn.setAttribute("onclick", "changeImg(1)");
        newNextBtn.style.cssText = "right: " + calcImgToEdge + "px";

        let newPrevBtn = document.createElement("a");
        let btnPrevText = document.createTextNode("Prev");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img-btn");
        newPrevBtn.setAttribute("onclick", "changeImg(-1)");
        newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px";
      };
    };
  })
}

function closeImg() {
  document.querySelector(".img-window")
    .remove();
  document.querySelector(".img-btn")
    .remove();
  document.querySelector(".img-btn")
    .remove();
}

function changeImg(direction) {
  document.querySelector("#current-img")
    .remove();

  // Add new image
  let getImgWindow = document.querySelector(".img-window");
  let newImg = document.createElement("img");
  getImgWindow.appendChild(newImg);

  // Set image attributes based on current image and direction
  // TODO - rework as function, mods don't work
  if (direction === 1) {
    calcNewImg = (getLatestOpenedImg + 1) % 7;
  } else {
    calcNewImg = (getLatestOpenedImg - 1) % 7;
  }

  newImg.setAttribute("src", "img/img" + calcNewImg + ".jpg");
  newImg.setAttribute("id", "current-img");

  getLatestOpenedImg = calcNewImg;

  // Reassign buttons
  newImg.onload = function() {
    // Fetch width of image
    let imgWidth = this.width;
    // Try to add 80 px as styling
    let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

    // Create buttons to allow change image
    let allBtns = document.querySelectorAll(".img-btn");

    allBtns[0].style.cssText = "right: " + calcImgToEdge + "px";
    allBtns[1].style.cssText = "left: " + calcImgToEdge + "px";
  }
}
