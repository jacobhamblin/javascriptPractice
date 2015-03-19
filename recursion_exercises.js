
function range (start, end) {
  if (end < start) {
    return [];
  }
  return [start].concat(range(start+1, end));
}

// console.log(range(1,5));


function sum (array) {
  if (array.length < 1) {
    return 0;
  }

  var prevSum = array[0];
  return prevSum + sum(array.slice(1));
}

// console.log(sum([1,2,3]));


function exp(b, n) {
  if (n === 0) {
    return 1;
  }

  return b * exp(b, n - 1);
}


function exp2(b, n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return b;
  }
  if (n % 2 === 0) {
    return Math.pow(exp2(b, n / 2), 2);
  } else {
    return b * Math.pow(exp2(b, (n - 1) / 2) , 2);
  }
}


// console.log(exp(2,3));
// console.log(exp2(2,3));



function fibSequence(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  var prevFib = fibSequence(n - 1);

  return prevFib.concat(prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2]);
}


// console.log(fibSequence(4));

Array.prototype.bsearch = function (target) {
  if (this.length < 2 && this[0] !== target ) {
    return null;
  }
  var mid = Math.floor(this.length / 2);
  var midValue = this[mid];
  if (midValue === target) {
    return mid;
  } else if (midValue < target) {
    var rightResult = this.slice(mid + 1).bsearch(target);
    return rightResult !== null ? (rightResult + mid + 1) : null;
  } else {
    return this.slice(0, mid).bsearch(target);
  }
};


// console.log([1,2,3,4,5].bsearch(4));

// makeChange(14, [10,7,1]))

function makeChange(total, array) {
  if (total === 0) {
    return [];
  }

  var bestChange = null;

  for (var i = 0; i < array.length; i++) {
    if (array[i] > total) {
      continue;
    }
    var tempChange = [array[i]];
    tempChange = tempChange.concat(makeChange((total - array[i]), array));

    if (bestChange === null || tempChange.length < bestChange.length) {
      bestChange = tempChange;
    }
  }
  return bestChange;
}

// console.log(makeChange(14, [10, 7, 1]));


Array.prototype.mergeSort = function() {
  if (this.length < 2) {
    return this;
  }

  var middle = Math.floor(this.length / 2);
  var leftArray = this.slice(0, middle);
  var rightArray = this.slice(middle);

  return merge(leftArray.mergeSort, rightArray.mergeSort);

};

function merge(left, right) {
  var newArray = [];

  while (left.length > 0 || right.length > 0) {
    if (left[0] > right[0]) {
      newArray.push(right.shift());
    } else {
      newArray.push(left.shift());
    }

  }
    newArray = newArray.concat(left);
    newArray = newArray.concat(right);
    return newArray;
}

console.log([3,2,5,7,3,2,1,6,8].mergeSort());
