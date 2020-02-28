import Thimbleful     from 'thimbleful';
import mediumArticles from './medium';

require('./slideshow-magic');

/** Load articles **/

mediumArticles().then(rss => {
  document.getElementById('medium').innerHTML = rss.map(article => `
    <a href="${article.link}"><h2>${article.title}</h2></a>
    <p class="date">${article.date.toLocaleDateString('NL-nl')}</p>
    <p>${article.content}</p>
  `).join('<hr/>');
  if ( rss.length > 0 )
    document.querySelector('li.hidden').classList.remove('hidden');
});

/** Handle page navigation with Thimbleful router **/

new Thimbleful.Router().addRoutes(
  [
    'welkom',
    'artikelen',
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
