---
---

/*!
 * Basically Basic Jekyll Theme 1.4.5
 * Copyright 2017-2018 Michael Rose - mademistakes | @mmistakes
 * Free for personal and commercial use under the MIT license
 * https://github.com/mmistakes/jekyll-theme-basically-basic/blob/master/LICENSE
*/

let menuItems = document.querySelectorAll('#sidebar li');

// Get vendor transition property
let docElemStyle = document.documentElement.style;
let transitionProp = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';

// Animate sidebar menu items
function animateMenuItems() {
  for (let i = 0; i < menuItems.length; i++) {
    let item = menuItems[i];
    // Stagger transition with transitionDelay
    item.style[transitionProp + 'Delay'] = (i * 75) + 'ms';
    item.classList.toggle('is--moved');
  }
};

let myInitialContent = document.querySelector('.initial-content');
let mySearchContent = document.querySelector('.search-content');
let mySearchToggle = document.querySelector('.search-toggle');

let sidebar = document.getElementById("sidebar");
let sidebarToggleWrapper = document.querySelector(".sidebar-toggle-wrapper");

function toggleSidebar() {
  sidebar.classList.toggle("opened");

  if (sidebar.classList.contains("opened")) {
    sidebarToggleWrapper.style.display = "none";
  } else {
    sidebarToggleWrapper.style.display = "block";
  }

}


if (mySearchToggle) {
  mySearchToggle.addEventListener('click', function () {
    toggleClassSearch();
  }, false);
}

// Toggle search input and content visibility
function toggleClassSearch() {
  mySearchContent.classList.toggle('is--visible');
  myInitialContent.classList.toggle('is--hidden');
  setTimeout(function () {
    document.querySelector('.search-content input').focus();
  }, 400);
}
