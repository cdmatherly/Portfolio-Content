var sec = document.querySelectorAll('.nav-link')

// Define the scroll threshold in pixels
var scrollThreshold = sec[1].offsetHeight;

// Add an event listener to the window object to detect scroll
window.addEventListener('scroll', () => {
  // Get the current scroll position
  var scrollPosition = window.scrollY;

  // Check if the scroll position has passed the threshold
  if (scrollPosition > scrollThreshold) {
    // Add the class to the element
    sec[1].classList.add('test');
  } else {
    // Remove the class from the element
    sec[1].classList.remove('test');
  }
});