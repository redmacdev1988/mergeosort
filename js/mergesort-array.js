function merge(leftPortion, rightPortion) {
    if (!Array.isArray(leftPortion)) {leftArray = [leftPortion];} else {leftArray = leftPortion;}
    if (!Array.isArray(rightPortion)) {rightArray = [rightPortion];} else {rightArray = rightPortion;}

    let finalArray = []; let leftIndex = 0; let rightIndex = 0;

    do {
      let pushed = (leftArray[leftIndex] < rightArray[rightIndex]) ?
      finalArray.push(leftArray[leftIndex++]) :
      finalArray.push(rightArray[rightIndex++]);
    } while (leftIndex < leftArray.length && rightIndex < rightArray.length);

    // check to see if right has ended
    if (leftIndex < leftArray.length) {
        finalArray = finalArray.concat(leftArray.slice(leftIndex));
    }

    if (rightIndex < rightArray.length) {
        finalArray = finalArray.concat(rightArray.slice(rightIndex));
    }

    return finalArray;
}

function mergeSort(array, left, right) {
    if (left < right) {
        let center = Math.floor((left+right)/2);
        let leftArray = mergeSort(array, left, center);
        let rightArray = mergeSort(array, center+1, right);
        return merge(leftArray, rightArray);
    } else if (left == right) { // THIS IS ALWAYS AN NON-ARRAY ELEMENT
      return array[left]; // this is always a value
    }
}

let array = [100, 99, 98, 90, 89, 88, 0, 75, 1, 74, 2, 73, 3, 72, 24, 71, 12, 70, 20, 69, 88];

let total = mergeSort(array, 0, array.length-1);
console.log(`${total}`);
