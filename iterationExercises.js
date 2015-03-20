Array.prototype.bubbleSort = function () {
  var sorted = false;
  while (!sorted) {
    sorted = true;
    for (var i = 0; i < this.length - 1; i++) {
      if (this[i + 1] < this[i]) {
        var current_item = this[i];
        this[i] = this[i + 1];
        this[i + 1] = current_item;
        sorted = false;
      }
    }
  }
  return this;
}
// console.log([1, 3, 2, 5, 7, 3].bubbleSort());



function substrings(str) {
  var newArray = [];
  for(var i = 0; i < str.length; i++) {
    for(var j = i; j < str.length; j++) {
      var substr = str.slice(i, j + 1);
      if (newArray.indexOf(substr) === -1) {
        newArray.push(substr);
      }
    }
  }

  return newArray;
}

console.log(substrings("cat"));
