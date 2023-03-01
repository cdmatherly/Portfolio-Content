var sec = document.querySelectorAll('.nav-link')
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > sec[1].offsetTop) {
    sec[0].classList.add("test");
  } else {
    sec[0].classList.remove("test");
}
}