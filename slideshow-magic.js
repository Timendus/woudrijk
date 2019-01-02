window.addEventListener('DOMContentLoaded', function() {

  let styling = document.createElement('style');
  styling.innerHTML = `

    [data-slideshow-magic=true] {
      position: relative;
      overflow: hidden;
      display: initial;
    }

    [data-slideshow-magic=true] img {
      position: absolute;
      margin: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
    }

    [data-slideshow-magic=true] img:first-child {
      animation: zoom-in 20s linear infinite 0s;
    }

    [data-slideshow-magic=true] img:nth-child(2) {
      animation: zoom-out 20s linear infinite 10s;
    }

    @keyframes zoom-in {
      0% {
        opacity: 0;
        transform: scale(1) translate(0, 0);
      }
      10% {
        opacity: 1
      }
      50% {
        opacity: 1;
      }
      60% {
        opacity: 0;
        transform:scale(1.2) translate(6%, 6%);
      }
    }

    @keyframes zoom-out {
      0% {
        opacity: 0;
        transform: scale(1.2) translate(-6%, -6%);
      }
      10% {
        opacity: 1
      }
      50% {
        opacity: 1;
      }
      60% {
        opacity: 0;
        transform:scale(1) translate(0, 0);
      }
    }

  `

  document.querySelectorAll('[data-slideshow-magic=true]')
          .forEach(function(slideshow) {

    // Fetch image paths from the DOM
    let images = [];
    slideshow.querySelectorAll('img').forEach(function(image) {
      images.push(image.src);
    });

    // Initialize slideshow with random images
    let firstImage = images[Math.floor(Math.random() * images.length)];
    let options = images.filter(function(image) { return image !== firstImage })
    let secondImage = options[Math.floor(Math.random() * options.length)];
    slideshow.children.item(0).src = firstImage;
    slideshow.children.item(1).src = secondImage;

    // Don't show the same image twice in a row
    let lastImage = secondImage;

    // Randomly switch images after each animation
    slideshow.addEventListener('animationiteration', function(evnt) {
      let options = images.filter(function(image) { return image !== lastImage })
      let image = options[Math.floor(Math.random() * options.length)];
      evnt.target.src = image;
      lastImage = image;
    });

  });

  document.head.appendChild(styling);

});
