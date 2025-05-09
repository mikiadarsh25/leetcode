var rotate = function (nums, k) {
    let n = nums.length;
    k = k % n;
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
    return nums;
};

var reverse = function (nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
};

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(rotate(nums, k));
