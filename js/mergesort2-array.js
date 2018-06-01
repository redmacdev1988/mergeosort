
var arr = [88, 32, 23, 1,9,8, 10, 33, 56, 65, 35, 52, 15, 78, 98, 89, 100, 2,3,11,22,31,44,56,66];

function partition(arr, low, high) {
    return Math.ceil((low + high) / 2);
}

function merge(leftArr, rightArr) {

  if (leftArr.length < rightArr.length) {
    smallerArray = leftArr;
    biggerArray = rightArr;
  } else {
    smallerArray = rightArr;
    biggerArray = leftArr;
  }

  var smallIndex = 0, largeIndex = 0;
  var result = [];

  while (smallerArray[smallIndex] && biggerArray[largeIndex]) {
    var nextSmallerItem = (smallerArray[smallIndex] < biggerArray[largeIndex]) ?
    smallerArray[smallIndex++] : biggerArray[largeIndex++];
    result.push(nextSmallerItem);
  }

  return (smallerArray[smallIndex]) ?
  result.concat(smallerArray.splice(smallIndex)) : result.concat(biggerArray.splice(largeIndex));
}


function divAndConq(arr, low, high) {
      console.log("\ndivAndConq: [" + low + ", " + high + "]");

      if (low == high) {
        console.log(" processing at element: " + arr[low] + " √ ");
        return [arr[low]];
      }

      if (low < high) { // low >= high skips
        var mid = partition(arr, low, high);
        console.log("mid: " +mid);

        return merge(divAndConq(arr, low, mid-1), divAndConq(arr, mid, high));
      }
}

var arr = divAndConq(arr, 0, arr.length-1);
console.log(arr);
