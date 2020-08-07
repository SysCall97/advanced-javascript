function square(num) {
    return num * num;
}

const isOdd = x => x%2;

const array = [3, 4, 5, 6, 7, 8, 9, 10];
const result_1 = [];

// through loop
for(let i = 0; i < array.length; ++i) {
    const element = array[i];
    result_1.push(square(element));
}
console.log(result_1);


//------------------Map------------------//
// through map-1
const result_2 = array.map(square);
console.log(result_2);

// through map-2
const result_3 = array.map(function(element){
    return element * element;
});
console.log(result_3);

// through map and arrow function
const result_4 = array.map(x => x * x);
console.log(result_4);


//------------------Filter------------------//
const even = array.filter(x => x%2==0);
console.log(even);

const odd = array.filter(isOdd);
console.log(odd);


//------------------Find------------------//
const isThere = array.find(x => !(x%6));
console.log(isThere);


//------------------Filter vs Find------------------//
// Filter returns a array of number which fulfill the condition
// find returns the first element which fulfill the condition