window.addEventListener('load', function() {

  let images = [
    'backgrounds/forest_light.jpg',
    'backgrounds/treetops.jpg',
    'backgrounds/autumn_stroll.jpg',
    'backgrounds/foot_path.jpg',
    'backgrounds/cabin_in_woods.jpg',
    'backgrounds/stepping_stones.jpg',
    'backgrounds/view_from_cabin.jpg'
  ];

  let backgrounds = document.querySelector('figure.backgrounds');
  let last_image = 'backgrounds/cabin_in_woods';

  backgrounds.addEventListener('animationiteration', function(evnt) {
    options = images.filter(function(image) { return image !== last_image })
    image = options[Math.floor(Math.random() * options.length)];
    evnt.target.src = image;
    last_image = image;
  });

});
