import Thimbleful from 'thimbleful';
require('./slideshow-magic');
require('./medium');

/** Handle page navigation with Thimbleful router **/

new Thimbleful.Router().addRoutes(
  [
    'welkom',
    'onze-visie',
    'contact'
  ],
  function(page) {
    document.querySelector('.page.active').classList.remove('active');
    document.querySelector('.page#'+page).classList.add('active');
  }
);

/** Handle opening and closing of menu on mobile **/

Thimbleful.Click.instance().register('a[href]', function() {
  if (!onMobile()) return;
  document.querySelector('nav').classList.remove('active');
});

Thimbleful.Click.instance().register('[data-open-nav]', function(e) {
  document.querySelector('nav').classList.toggle('active');
  e.preventDefault();
});

/** Animate menu in on page load on desktop **/

window.addEventListener('load', function() {
  if (onMobile()) return;
  window.setTimeout(function() {
    document.querySelector('nav').classList.add('active');
  }, 500);
});

window.addEventListener('resize', function() {
  if (onMobile()) {
    document.querySelector('nav').classList.remove('active');
  } else {
    document.querySelector('nav').classList.add('active');
  }
});

function onMobile() {
  return window.innerWidth <= 768;
}
