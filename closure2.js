const counter = function () {
    let count = 0;
    function changeBy (val) {
        count += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        getValue: function () {
            return count;
        }
    };
}

let counter1 = counter();
let counter2 = counter();

counter1.increment();
counter1.increment();
counter2.decrement();
counter2.decrement();
console.log(counter1.getValue());
console.log(counter2.getValue());