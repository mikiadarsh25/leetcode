// Brute Force
// O(n)
function checkSortedArray(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            return false;
        }
    }
    return true;
}

const arr = [1, 3, 4, 6, 7, 8];
console.log(checkSortedArray(arr));
