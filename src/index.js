const assets = require("./assets");

const canvas = document.getElementById("main-canvas");
const context = canvas.getContext("2d");
context.fillRect(25, 25, 100, 100);
context.fillStyle = "#e2fcbf";
context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

assets.loadImage("images/Green_Blob.png").then(img => {
  context.drawImage(img, 25, 25);
});
