var link = document.querySelectorAll('.nav-link')
var sec = document.querySelectorAll('.nav-sec')
// Define the scroll threshold in pixels
var scrollThreshold = [sec[0].offsetTop, sec[1].offsetTop, sec[2].offsetTop, sec[3].offsetTop];
console.log(sec[2].offsetTop)
console.log(sec)
// Add an event listener to the window object to detect scroll
window.addEventListener('scroll', () => {
  // Get the current scroll position
  var scrollPosition = window.scrollY;

  // Check if the scroll position has passed the threshold
  if (scrollPosition > 0 && scrollPosition < scrollThreshold[1]) {
    // Add the class to the element
    link[0].classList.add('test');
    link[1].classList.remove('test')
    link[2].classList.remove('test')
    link[3].classList.remove('test');
  } 
  else if (scrollPosition > scrollThreshold[1] && scrollPosition < scrollThreshold[2]) {
    // Add the class to the element
    link[0].classList.remove('test')
    link[2].classList.remove('test')
    link[3].classList.remove('test');
    link[1].classList.add('test');
  } 
  else if (scrollPosition > scrollThreshold[2] && scrollPosition < scrollThreshold[3]) {
    // Add the class to the element
    link[0].classList.remove('test')
    link[1].classList.remove('test')
    link[3].classList.remove('test');
    link[2].classList.add('test');
  } 
  else if (scrollPosition > scrollThreshold[3]) {
    // Add the class to the element
    link[0].classList.remove('test')
    link[1].classList.remove('test')
    link[2].classList.remove('test');
    link[3].classList.add('test');
  }
});
