var n = 5;
var arr = new Array(n);

function fillArray() {
  var min = -100;
  var max = 100;
  for (var i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * (max - min) + min);
  }
  console.log(arr);
}

function replaceFromArray() {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  console.log(arr);
}

function addToArray() {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 0 && i%2 == 0) {
      arr.splice(i+1, 0, -1);
    }
  }
  console.log(arr);
}
