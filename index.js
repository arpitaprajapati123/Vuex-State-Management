// let arr1 = [1, 2, 3, 4, 5, 10, 11, 12, 14, 16, 17, 18, 20, 22, 23, 25];
// let missingArr = [];

// function missingVal(arr1, missingArr){
//     let min = Math.min(...arr1);
//     let max = Math.max(...arr1);
//     // console.log(min);
//     // console.log(max);

//     for(let i=min;i<=max;i++){
//         if(arr1.indexOf(i)<0){
//             missingArr.push(i);
//         }
//     }
//     return missingArr;
// }
// console.log(missingVal(arr1, missingArr))
function find_max(nums) {
     let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
     console.log(max_num);
     for (let num of nums) {
     if (num > max_num) {
        max_num = num;
     }
    }
     return max_num;
    }
let nums = [2,3, 1, 6, 7, 9];
console.log(find_max(nums));


