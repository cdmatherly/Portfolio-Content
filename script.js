var link = document.querySelectorAll('.nav-link')
var sect = document.querySelectorAll('.nav-sec')
// Define the scroll threshold in pixels
var homeTarget = document.querySelector("#home");
var scrollThreshold = [(sect[0].offsetTop), sect[1].offsetTop, sect[2].offsetTop, sect[3].offsetTop];
// console.log(sect[2].offsetTop)
(function() {
  // getProjects();
})()

// Add an event listener to the window object to detect scroll

function removeClass(){
  for (var i = 0; i < link.length; i++){
    link[i].classList.remove('active');
  };
};
function testFunc(){
  var scrollPosition = window.scrollY;
  for (var i = 0; i < scrollThreshold.length; i++){
    if (scrollPosition > (sect[i].offsetTop-15)){
      removeClass();
      link[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', testFunc);

var projects = document.querySelector('.projectList')

function getProjects(){
$.getJSON('https://api.github.com/users/cdmatherly/repos?per_page=53', (data) => {
  data.forEach((element) => {
      if (element.fork == false) {
          $.getJSON(element.languages_url, (data) => {
              populate(element.name, element.pushed_at, Object.keys(data), element);
          })
      }
  })
})
}

function populate(name, updated, languages, element) {
  var card = document.createElement("div");
  card.classList.add("card");

  addLanguages(languages, card);

  var title = document.createElement("a");
  title.classList.add("title");
  var name_parts = name.replace("-", " ");
  title.innerHTML = name_parts;
  title.setAttribute("href", element.html_url);
  card.appendChild(title);

  var date = updated.split("T")[0]
  var date_0 = date.split("-");

  var year = date_0[0];
  var month = date_0[1];
  var day = date_0[2];

  var date = document.createElement("div");
  date.classList.add("date");

  var subtitle = document.createElement("code");
  subtitle.classList.add("last-updated");
  subtitle.classList.add("mb-0");
  subtitle.innerHTML = "Last updated on: </br>"
  date.appendChild(subtitle);

  var last_updated = document.createElement("code");
  last_updated.innerHTML = month + "/" + day + "/" + year;
  last_updated.classList.add("last-updated");
  last_updated.classList.add("mt-0");
  date.appendChild(last_updated);

  card.appendChild(date);

  projects.appendChild(card);
}

function addLanguages(languages, card) {
  var lang_icons = document.createElement("div");
  lang_icons.classList.add("d-flex");
  lang_icons.classList.add("languages_list");

  var icon = document.createElement("i");
  icon.classList.add("bx");
  if (languages.length == 0) {
      icon.innerHTML = " ";
  }
  if (languages.includes("HTML")) {
      var icon2 = document.createElement("i");
      icon2.classList.add("bx");
      icon2.classList.add("bxl-html5");
      icon2.classList.add("html");
      lang_icons.appendChild(icon2);
  }
  if (languages.includes("Python")) {
      var icon3 = document.createElement("i");
      icon3.classList.add("bx");
      icon3.classList.add("bxl-python");
      icon3.classList.add("python");
      lang_icons.appendChild(icon3);
  }
  if (languages.includes("JavaScript")) {
      var icon4 = document.createElement("i");
      icon4.classList.add("bx");
      icon4.classList.add("bxl-javascript");
      icon4.classList.add("javascript");
      lang_icons.appendChild(icon4);
  }
  if (languages.includes("CSS")) {
      var icon5 = document.createElement("i");
      icon5.classList.add("bx");
      icon5.classList.add("bxl-css3");
      icon5.classList.add("css");
      lang_icons.appendChild(icon5);
  }
  if (languages.includes("Java")) {
      var icon9 = document.createElement("i");
      icon9.classList.add("bx");
      icon9.classList.add("bxl-java");
      icon9.classList.add("plain-java");
      lang_icons.appendChild(icon9);
  }
  lang_icons.appendChild(icon);


  card.appendChild(lang_icons);
}