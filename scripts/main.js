// *********************************************
// toggles the class is-active on both the navbar-burger and the targeted navbar-menu
// *********************************************

document.addEventListener('DOMContentLoaded', () => {
  
  // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }

  // Get all the "navbar-link" elements 
    const navbarLinks = Array.from(document.querySelectorAll('[data-navbar-link]'));
    // add a click click event listener on each of them
    navbarLinks.forEach(function(navbarLink) {
      navbarLink.addEventListener('click', () => {

        // Get the navMenu element containing all the links
        const navbarBurger = document.querySelector('[data-target="navMenu"]');
        const navMenu = document.getElementById('navMenu');
        
        // Toggle the is-active class on the navMenu and the navbarBurger
        navMenu.classList.toggle('is-active');
        navbarBurger.classList.toggle('is-active');

      });
    });
  });

// *********************************************
// Start the instance of bulma accordian
// *********************************************

bulmaAccordion.attach();

// *********************************************
// Show and hide sections with the navbar items
// *********************************************

// create an array of DOM elements and add a click event to each
const navbarLinks = Array.from(document.querySelectorAll('[data-navbar-link]'));
// add a click click event listener for each
navbarLinks.forEach(function(navbarLink) {
  navbarLink.addEventListener('click', sectionsShowHide);
});

// declare function that gets fires from event listener on navbarLinks
function sectionsShowHide(e) {

  // first, hide all sections with "data-section" attribute
  const sectionsSelectable = document.querySelectorAll('[data-section]');
  sectionsSelectable.forEach(function(section) {
    if (!section.classList.contains('is-display-none')) {
      section.classList.add('is-display-none');
    } 
  });
  
  // from the click event(e), set the value of the data attribute to a variable
  const navbarLinkSelected = e.target.dataset.navbarLink;
  const sectionSelected = document.querySelector(`section[data-section="${navbarLinkSelected}"]`);
  sectionSelected.classList.remove('is-display-none');



}
