let index = 1; /* Counter variable */

let slides = Array.from(document.getElementsByClassName("slide")); /* Variable that stores all the "slides" elements */

slides[index - 1].style.display = "block";

const carousel = (e) => {
  let posX = e.clientX;
  let viewportCenter = window.innerWidth / 2; /* Separating the interactive parts of the screen into two sides (left and right side of the screen) and storing information in the viewportCenter variable */
  slides.forEach(slide => slide.style.display = "none");
  if (posX > viewportCenter) {
    index++; /* If the position of the mouse on the x-axis is greater than the center of the screen, then the index value will increase */
    if (index > slides.length) {
      index = 1; /* Resetting the value of index to fit the number of elements in the "slides" array */
    }
  } else {
    index--; /* If the position of the mouse on the x-axis is greater than the center of the screen, then the index value will increase */
    if (index < 1) {
      index = slides.length; /* Resetting the value of index to fit the number of elements in the "slides" array */
    }
  }

  slides[index - 1].style.display = "block"; /* At the end, the function displays the propety that it has reached to block */
}

document.addEventListener("click", carousel); /* The event listener is triggered by the "click" interaction of the user */
