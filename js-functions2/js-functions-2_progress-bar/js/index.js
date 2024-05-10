console.clear();
/*
Progress Bar

Build a progress bar that indicates how much the user has scrolled down the page.
For that:
 - change the starting width of the progressBar in the CSS file to 0%
 - write a function "calculateScrollPercentage" which calculates and returns in percent
   how far the user has scrolled down the page.
   Use the following attributes to achieve this:
    - window.scrollY: the Y position of the window on the total webpage
    - window.innerHeight: height of the window
    - document.body.clientHeight: height of the webpage

 - change the width of the progressBar whenever the user scrolls down or up. Use your
   function to calculate the current scroll percentage.

 (HINT: you can add a 'scroll' event listener to the document )
 (HINT: you can change the width of an element like this: element.style.width = '10px')
*/

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  currentwidthOfProgressbar = progressBar.style.width;
  const windowHeight = window.innerHeight;
  const webpageHeight = document.body.clientHeight;
  const scrollHeight = webpageHeight - windowHeight;
  window.addEventListener("scroll", () => {
    let currentPosition = window.scrollY;
    const scrollPercentageY = (currentPosition / scrollHeight) * 100;
    console.log("Scroll percentage:", scrollPercentageY + "%");
    if (scrollPercentageY > 10 && scrollPercentageY < 21) {
      progressBar.style.width = currentwidthOfProgressbar + 100 + "px";
      return;
    } else if (scrollPercentageY > 10 && scrollPercentageY < 21) {
      progressBar.style.width = currentwidthOfProgressbar + 200 + "px";
      return;
    } else if (scrollPercentageY > 20 && scrollPercentageY < 31) {
      progressBar.style.width = currentwidthOfProgressbar + 300 + "px";
      return;
    } else if (scrollPercentageY > 30 && scrollPercentageY < 41) {
      progressBar.style.width = currentwidthOfProgressbar + 400 + "px";
      return;
    } else if (scrollPercentageY > 40 && scrollPercentageY < 51) {
      progressBar.style.width = currentwidthOfProgressbar + 500 + "px";
      return;
    } else if (scrollPercentageY > 50 && scrollPercentageY < 61) {
      progressBar.style.width = currentwidthOfProgressbar + 600 + "px";
      return;
    } else if (scrollPercentageY > 60 && scrollPercentageY < 71) {
      progressBar.style.width = currentwidthOfProgressbar + 700 + "px";
      return;
    } else if (scrollPercentageY > 70 && scrollPercentageY < 81) {
      progressBar.style.width = currentwidthOfProgressbar + 800 + "px";
      return;
    } else if (scrollPercentageY > 80 && scrollPercentageY < 91) {
      progressBar.style.width = currentwidthOfProgressbar + 900 + "px";
      return;
    } else if (scrollPercentageY > 90 && scrollPercentageY <= 100) {
      progressBar.style.width = currentwidthOfProgressbar + 1000 + "px";
      return;
    } else {
      progressBar.style.width = "";
    }
  });
}
calculateScrollPercentage();
