// O(N) + O(N) + O(N)  Brute force
var check = function (nums) {
    if (nums.length <= 1) {
        return true;
    }
    let breakPoint;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            breakPoint = i + 1;
            break;
        }
    }

    if (breakPoint === undefined) {
        return true;
    }
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        res[i] = nums[(i + breakPoint) % nums.length];
    }

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            return false;
        }
    }
    return true;
};

// O(N)
var check = function (num) {
    if (nums.length <= 1) {
        return true;
    }
    let rotationPoints = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[(i - 1 + nums.length) % nums.length]) {
            rotationPoints++;
        }
    }
    return rotationPoints <= 1;
};


const nums = [3, 4, 5, 1, 2];
console.log(check(nums)); // Output: true
