// helper function
// 👉 try solving this first! 
// return a new sorted array with all of the values of arr1 and arr2
var mergeArr1 = [11,22,33,33,44];
var mergeArr2 = [55,66,77,88,99];

var mergeArrA = [33,44,55];
var mergeArrB = [11,66];

var arrLeft = [22];
var arrRight = [11,33];
//                      arrLeft, arrRight
function mergeSortedArrays(arr1, arr2) {
    let newArr = []
    let arr2Index =0;
    for(let i =0; i<arr1.length; i++){
        for(let j=i; j< arr2.length; j++){
            if(arr1[i]>=arr2[j]){
                newArr.push(arr2[j]);
                arr2Index= j
            }else{
                newArr.push(arr1[i]);
            }
            break;
        }
    }
    let newArr2 = arr2.slice(arr2Index+1)
    let arr3 = newArr.concat(newArr2)
    return arr3;
  }
console.log(mergeSortedArrays(mergeArr1,mergeArr2));