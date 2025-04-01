// Brute force approach
function secondLargestElement(arr) {
    let sortedArr = [...arr].sort((a, b) => b - a);
    let largest = sortedArr[0];
    for (let i = 1; i < sortedArr.length; i++) {
        if (sortedArr[i] !== largest) {
            return sortedArr[i];
        }
    }
    return undefined;
}

// Better Solution
function secondLargestElement(arr) {
    let largest = arr[0];
    for (let num of arr) {
        if (num > largest) {
            largest = num;
        }
    }
    let secondLarget = arr[0];
    for (let num of arr) {
        if (num > secondLarget && num !== largest) {
            secondLarget = num;
        }
    }
    return secondLarget;
}

// Optimise solution

function secondLargestElement(arr) {
    let largest = -Infinity;
    let secondLarget = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            secondLarget = largest;
            largest = num;
        } else if (num > secondLarget && num !== largest) {
            secondLarget = num;
        }
    }
    return secondLarget === -Infinity ? undefined : secondLarget;
}

const arr = [1, 3, 6, 8, 3, 6, 0, 4];
console.log(secondLargestElement(arr));
