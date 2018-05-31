# mergesort

There are 2 main steps in mergesort:


A) Using divide and conquer, we drill down to each value individually.

This is done by calculating:

center = FLOOR ((left + right) / 2)

mergeSort(array, left, center)
mergeSort(array, center+1, left)

When you drill down to each individual value, we return them as an array.

B) The next important thing is the sorting of the two arrays.

This is done in merge()

It takes two arrays, and

1) uses a do/while loop to loop through both arrays. Each array is maintained via its own unique index.

2) We use a finalArray to store the values. We get minimum element from the array, then store it in finalArray. Then we increment the array that has just stored its value into our finalArray.

3) When one of the array reaches it end, we check to see if the other index
have not reached the end. If it has not, we simply concatenate the rest of that array onto our finalArray.
