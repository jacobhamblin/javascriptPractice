Array.prototype.uniq = function () {
  var newArray = [];
  for (var i = 0; i < this.length; i++) {
    var el = this[i];
    if (newArray.indexOf(el) === -1) {
      newArray.push(el);
    }
  }
  return newArray;
}


console.log([1,3,4,5,1,3].uniq());


Array.prototype.twoSum = function () {
  var newArray = [];
  for(var i = 0; i < this.length; i++) {
    // var currentElement = this[i];
    for(var j = i + 1; j < this.length; j++) {
      // var nextElement = this[j];
      if ((this[i] + this[j]) === 0) {
        newArray.push([i, j]);
      }
    }
  }
  return newArray;
}

console.log([-1, 0, 2, -2, 1].twoSum());


function myTranspose(array) {
  var newArray = [];
  for(var row = 0; row < array.length; row++) {
    // var currentArray = array[arr];
    var tempArray = [];
    for(var col = 0; col < array.length; col++ ) {
      tempArray.push(array[col][row]);
    }
    newArray.push(tempArray);
  }
  return newArray;
}

console.log(myTranspose([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]
));
