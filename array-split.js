let nums = [1, 2, 3, 4, 5, 6, 7, 8];
// slice
const part = nums.slice(2, 5);
console.log(part);


// splice
let removed = nums.splice(2, 3);
console.log(removed);
console.log(nums);

nums = [1, 2, 3, 4, 5, 6, 7, 8];
removed = nums.splice(2, 3, 33, 33, 33, 33, 33);
console.log(removed);
console.log(nums);


// Join
nums = [1, 2, 3, 4, 5, 6, 7, 8];
let together = nums.join(",");
console.log(together);
together = nums.join("");
let num = parseInt(together);
console.log(num);