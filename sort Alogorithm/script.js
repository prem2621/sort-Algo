
// Give an array of  'n' elements and a target element 't' , find the index of 't' in the array
// retrun -1 if the targget element is not found


// function findIndex(arr,target){
//         for(let i=0; i<=arr.length; i++){
//                 if(arr[i] == target){
//                         return i
//                 }                                  (linear search)   Big-O ===>  O(n)
//         }
//         return -1
// }

// console.log(findIndex([345,7,7,8,89,56,4,2],3));


// #############################################################################################################################################


// 2) Binary Search (Big-O ===>  O(log n))


// function binarySearch2(arr,target){
//         let l=0
//         let r = arr.length-1
//         while(l<=r){
//                 let mid = Math.floor((l+r)/2)
//                 if(target == arr[mid]) return mid
//                 if(target > arr[mid]) return l=mid+1
//                 if(target < arr[mid])  return r = mid-1
//         }
//         return -1
// }
// console.log(binarySearch2([5, 9, 17, 23, 25, 45, 59, 63, 71, 89],59));



// function binarySearch(arr, target) {
//   let l = 0;
//   let r = arr.length - 1;
//   while (l <= r) {
//     let mid = Math.floor((l + r) / 2);
//     if (arr[mid] == target) {
//       return mid;
//     } else if (arr[mid] > target) {
//       r = mid - 1;
//     } else if (arr[mid] < target) {
//       l = mid + 1;
//     }
//   }
//   return -1;
// }
// let arr = [1, 3, 5, 7, 9, 11, 13];
// let target = 13;

// let result = binarySearch(arr, target);

// if (result !== -1) {
//   console.log(`Your index found in ${result}`);
// } else {
//   console.log("Your index not found");
// }


// #############################################################################################################################################

                                 //Bubble Sort

// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     let found = false;                         found =0
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         found = true;                       found =1
//       }
//     }
//     if (!found) {                                              if(found == 0) break
//       break; // If no swaps, array is already sorted       
//     }
//   }
//   return arr;
// }

// // Unsorted array
// let arr = [2,4,78,324,25,5,7,789,12];

// console.log("Unsorted Array:", arr);
// console.log("Sorted Array:", bubbleSort(arr));

// #############################################################################################################################################

                                                //   Insertion Sort

// function insertionSort(arr) {
//   let n = arr.length;
//   for (let i = 1; i < n; i++) {
//     let key = arr[i];
//     for (let j = i - 1; j >= 0 && arr[j + 1] > key; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }
// let arr = [4, 2, 9, 1, 5];

// console.log(insertionSort(arr));


// function insertionSort(arr){
//       let n= arr.length
//     for(let i=1; i<n; i++){
//            let key = arr[i]
//            let j = i-1
//            while(j>=0 && arr[j]>key){
//             arr[j+1] = arr[j]
//             j--
//            }
//            arr[j+1] = key
//     }
//     return arr
// }

// let arr = [1,3,9,5,7,3,65,8,4,2,6]
// console.log(arr);
// console.log(insertionSort(arr));


// #############################################################################################################################################

                                           //   Selection Sort


// function selectionSort(arr){
//        let n =arr.length
//        for(let i=0; i<n-1; i++){
//               let min = i
//               for(let j=i+1; j<n; j++){
//                 if(arr[j]<arr[min]){
//                      min = j
//                 }
//               }
//               if(min != i){
//                      [arr[i],arr[min]] = [arr[min],arr[i]]
//               }
//        }
//        return arr
// }     


// let arr = [64, 25, 12, 22, 11];
// console.log(arr);
// console.log(selectionSort(arr));

// function selectionSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         // Swap the found minimum element with the first element
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//     return arr;
// }

// let arr = [64, 25, 12, 22, 11];
// console.log(selectionSort(arr)); // Output: [11, 12, 22, 25, 64]


// #############################################################################################################################################


// function portion(a,lb,up){
//     let pivot = a[lb]
//     let start = lb
//     let end = up
//     while (start < end) {
//         while(a[start] <= pivot){
//             start++
//         }
//         while(a[end] > pivot){
//             end--
//         }
//         if(start < end){
//             [a[start],a[end]] = [a[end],a[start]]
//         }
//     }
//     [a[lb],a[end]] = [a[end],a[lb]]
//     return end
// }

// function quick(a,lb,ub){
//     if(lb<ub){
//         let loc = portion(a,lb,ub)
//         quick(a,lb,loc-1)
//         quick(a,loc+1,ub)
//     }
// }
// let arr = [3,5,8,6,32,5,9,54]
// console.log(quick(arr,0,arr.length-1));


// #############################################################################################################################################


// function merge(a, lb, ub) {
//   let mid = Math.floor((lb + ub) / 2);
//   let i = lb,
//     j = mid + 1,
//     k = lb;
//   let b = []; // Temporary array

//   while (i <= mid && j <= ub) {
//     if (a[i] <= a[j]) {
//       b[k] = a[i];
//       i++;
//     } else {
//       b[k] = a[j];
//       j++;
//     }
//     k++;
//   }

//   while (i <= mid) {
//     // Leftover elements in left half
//     b[k] = a[i];
//     i++;
//     k++;
//   }

//   while (j <= ub) {
//     // Leftover elements in right half
//     b[k] = a[j];
//     j++;
//     k++;
//   }

//   for (let x = lb; x <= ub; x++) {
//     // Copy back to original array
//     a[x] = b[x];
//   }
// }
// function mergeSort(a, lb, ub) {
//     if (lb < ub) {
//         let mid = Math.floor((lb + ub) / 2);
//         mergeSort(a, lb, mid);
//         mergeSort(a, mid + 1, ub);
//         merge(a, lb, ub);
//     }
// }

// // Example usage
// let arr = [5, 3, 8, 6, 2, 7, 4, 1];
// mergeSort(arr, 0, arr.length - 1);
// console.log(arr); // Sorted output



