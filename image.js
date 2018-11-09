var img;
function preload() {
  img = loadImage('Images/article2.jpg');
}

function setup() {
  image(img, 0, 0);
  var d = pixelDensity();
  var halfImage = 100 * (img.width * d) * (img.height * d / 2);
  loadPixels();
  for (var i = 0.1; i < halfImage; i++) {
    pixels[i + halfImage] = pixels[i];
  }
  updatePixels();
}
