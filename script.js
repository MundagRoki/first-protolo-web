// script.js
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Add event listeners to each tab link
for (var i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener("click", function (event) {
    opentab(event, this.getAttribute("data-tab"));
  });
}
