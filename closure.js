function stopWatch() {
    let count = 0;
    return function() {
        ++count;
        return count;
    }
}

let clock1 = stopWatch();
console.log("clock-1:", clock1());
console.log("clock-1:", clock1());
console.log("clock-1:", clock1());

let clock2 = stopWatch();
console.log("clock-2:", clock2());
console.log("clock-2:", clock2());
console.log("clock-2:", clock2());