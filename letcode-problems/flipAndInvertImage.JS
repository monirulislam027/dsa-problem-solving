//
//
var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    let l = 0;
    let r = image[i].length - 1;

    while (l <= r) {
      const temp = image[i][l] ? 0 : 1;
      image[i][l] = image[i][r] ? 0 : 1;
      image[i][r] = temp;
      l++;
      r--;
    }
  }
};

const image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

flipAndInvertImage(image);
