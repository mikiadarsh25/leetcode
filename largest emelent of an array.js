function largestElement (arr){
    let res = arr[0];
    for (let num of arr){
        if (num > res){
            res = num;
        }
    }
    return res;
}

let arr = [2,6,9,3,1,5,7,8,4];
console.log(largestElement(arr)); // 9