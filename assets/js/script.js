"use strict";

var counter = 0;

var photos = [
   "assets/img/photos/DSC_0129.jpg",
   "assets/img/photos/DSC_0561.jpg",
   "assets/img/photos/DSC_0601.jpg",
   "assets/img/photos/DSC_0739.jpg",
   "assets/img/photos/DSC_0799.jpg",
   "assets/img/photos/DSC_0872.jpg",
   "assets/img/photos/DSC_0913.jpg",
   "assets/img/photos/DSC_0962.jpg",
   "assets/img/photos/DSC_2539.jpg",
   "assets/img/photos/DSC_2565.jpg",
   "assets/img/photos/DSC_2593.jpg",
   "assets/img/photos/DSC_3179.jpg",
   "assets/img/photos/DSC_3217.jpg",
   "assets/img/photos/DSC_3291.jpg",
   "assets/img/photos/DSC_3387.jpg",
   "assets/img/photos/DSC_3666.jpg",
   "assets/img/photos/DSC_4113.jpg",
   "assets/img/photos/DSC_4201.jpg",
   "assets/img/photos/DSC_4217.jpg",
   "assets/img/photos/DSC_5057.jpg",
   "assets/img/photos/DSC_5140.jpg",
   "assets/img/photos/DSC_5546.jpg",
   "assets/img/photos/DSC_6619.jpg",
   "assets/img/photos/DSC_6664.jpg",
   "assets/img/photos/DSC_7407.jpg",
   "assets/img/photos/DSC_7537.jpg",
   "assets/img/photos/DSC_7621.jpg"
];

function setSrc(img1, img2) {
   document.getElementById("photo1").src = img1;
   document.getElementById("photo2").src = img2;
}

function advance() {
   counter++;

   if (counter === photos.length - 1) {
      setSrc(photos[counter], photos[0]);
   } else if (counter === photos.length) {
      counter = 0;
      setSrc(photos[counter], photos[counter+1]);
   } else {
      setSrc(photos[counter], photos[counter+1]);
   }
}

function back() {
   counter--;

   if (counter === -1) {
      counter = photos.length - 1;
      setSrc(photos[counter], photos[0]);
   } else {
      setSrc(photos[counter], photos[counter+1]);
   }
}