function printTriangle() {
  // Желаемое количество строк
  var n = 5;

  var triangle = "";

  for (var i = 1; i <= n; i++)
  {
    for (var j = n - i; j > 0; j--) {
      triangle += " ";
    }
    for (var j = 1; j <= i; j++) {
      triangle += "# ";
    }
    triangle += "\n";
  }

 console.log(triangle);
}
