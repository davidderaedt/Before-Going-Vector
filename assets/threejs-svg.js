

var imageCanvas = document.createElement("canvas");
var ctx = imageCanvas.getContext('2d');

var img = new Image();
img.onload = function() {
ctx.drawImage(img, 0, 0);
}
img.src = "vectors.svg";

var texture = new THREE.Texture(imageCanvas);
texture.needsUpdate = true;



