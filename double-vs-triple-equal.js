function comapre(first, second) {
    if(first == second) {
        console.log("Condition is true");
    } else {
        console.log("Condition is false");
    }

    if(first === second) {
        console.log("Condition is true");
    } else {
        console.log("Condition is false");
    }
}

let first = 2, second = "2";
comapre(first, second); // true, false

first = 1, second = true;
comapre(first, second); // true, false

first = 4, second = true;
comapre(first, second); // false, false

first = 0, second = false;
comapre(first, second) // true, false

first = 1, second = false;
comapre(first, second); // false, false