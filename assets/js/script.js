"use strict";

var counter = 0;

var photos = fisherYates([
   "assets/img/photos/DSC_0129.jpg",
   "assets/img/photos/DSC_0561.jpg",
   "assets/img/photos/DSC_0601.jpg",
   "assets/img/photos/DSC_0705.jpg",
   "assets/img/photos/DSC_0739.jpg",
   "assets/img/photos/DSC_0799.jpg",
   "assets/img/photos/DSC_0812.jpg",
   "assets/img/photos/DSC_0854.jpg",
   "assets/img/photos/DSC_0872.jpg",
   "assets/img/photos/DSC_0913.jpg",
   "assets/img/photos/DSC_0962.jpg",
   "assets/img/photos/DSC_1132.jpg",
   "assets/img/photos/DSC_1993.jpg",
   "assets/img/photos/DSC_2088.jpg",
   "assets/img/photos/DSC_2112.jpg",
   "assets/img/photos/DSC_2215.jpg",
   "assets/img/photos/DSC_2219.jpg",
   "assets/img/photos/DSC_2226.jpg",
   "assets/img/photos/DSC_2384.jpg",
   "assets/img/photos/DSC_2391.jpg",
   "assets/img/photos/DSC_2409.jpg",
   "assets/img/photos/DSC_2539.jpg",
   "assets/img/photos/DSC_2565.jpg",
   "assets/img/photos/DSC_2593.jpg",
   "assets/img/photos/DSC_2639.jpg",
   "assets/img/photos/DSC_2658.jpg",
   "assets/img/photos/DSC_2765.jpg",
   "assets/img/photos/DSC_2834.jpg",
   "assets/img/photos/DSC_2919.jpg",
   "assets/img/photos/DSC_3043.jpg",
   "assets/img/photos/DSC_3179.jpg",
   "assets/img/photos/DSC_3105.jpg",
   "assets/img/photos/DSC_3217.jpg",
   "assets/img/photos/DSC_3291.jpg",
   "assets/img/photos/DSC_3387.jpg",
   "assets/img/photos/DSC_3464.jpg",
   "assets/img/photos/DSC_3601.jpg",
   "assets/img/photos/DSC_3666.jpg",
   "assets/img/photos/DSC_3674.jpg",
   "assets/img/photos/DSC_3921.jpg",
   "assets/img/photos/DSC_3952.jpg",
   "assets/img/photos/DSC_4113.jpg",
   "assets/img/photos/DSC_4201.jpg",
   "assets/img/photos/DSC_4217.jpg",
   "assets/img/photos/DSC_4601.jpg",
   "assets/img/photos/DSC_4628.jpg",
   "assets/img/photos/DSC_4650.jpg",
   "assets/img/photos/DSC_4728.jpg",
   "assets/img/photos/DSC_4784.jpg",
   "assets/img/photos/DSC_4795.jpg",
   "assets/img/photos/DSC_4904.jpg",
   "assets/img/photos/DSC_5057.jpg",
   "assets/img/photos/DSC_5140.jpg",
   "assets/img/photos/DSC_5546.jpg",
   "assets/img/photos/DSC_6619.jpg",
   "assets/img/photos/DSC_6664.jpg",
   "assets/img/photos/DSC_7407.jpg",
   "assets/img/photos/DSC_7537.jpg",
   "assets/img/photos/DSC_7621.jpg"
]);

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

function fisherYates(inputArray) {
   for (var i = inputArray.length; i > 1; i--) {
      var randomIndex = Math.floor(Math.random() * i);
      var removedIndex = inputArray.splice(randomIndex, 1)[0];
      inputArray.push(removedIndex);
   }

   return inputArray;
}

setSrc(photos[counter], photos[0]);