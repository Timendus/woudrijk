/** Handle navigation clicks **/

window.addEventListener('click', function(e) {
  if (e.target.matches('[data-link]')) {
    window.location.hash = e.target.getAttribute('data-link');
    if (onMobile()) document.querySelector('nav').classList.remove('active');
    e.preventDefault();
  }

  if (e.target.closest('[data-open-nav]')) {
    document.querySelector('nav').classList.toggle('active');
    e.preventDefault();
  }
});

/** Listen to location.hash **/

let updateNavBasedOnHash = function(e) {
  let target = window.location.hash.substr(1);
  if (!target) return;

  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('active');
  });
  document.querySelector('.' + target).classList.add('active');
}

window.addEventListener('hashchange', updateNavBasedOnHash);
window.addEventListener('load', updateNavBasedOnHash);

/** Animation menu in on page load on desktop **/

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
  return window.innerWidth <= 768
}
