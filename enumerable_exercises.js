Array.prototype.myEach = function(cb) {
  for(var i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};


// [1,2,3,4,5].myEach(function(el) {
//   console.log(el);
// });


Array.prototype.myMap = function(cb) {
  newArray = [];
  this.myEach(function(el) {
    newArray.push(cb(el));
  });
  return newArray;
};

// console.log([1,2,3,4,5].myMap(function(el) {
//   return el * 2;
// }));

Array.prototype.myInject = function(cb) {
  var accumulator = this[0];
  this.slice(1).myEach(function(el) {
    accumulator = cb(accumulator, el);
  });
  return accumulator;
};
//
//
// Array.prototype.myInject = function(cb) {
//   var accum = this[0];
//   for(var i = 1; i < this.length; i++) {
//     accum = cb(accum, this[i])
//   }
//   return accum;
// }

console.log([1,2,3].myInject(function(accum, el) {
  return accum + el;
}));
