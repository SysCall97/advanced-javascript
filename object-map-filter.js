const students = [
    {id: 1, name: "Rubel"},
    {id: 6, name: "Dipto"},
    {id: 21, name: "Nafis"},
    {id: 36, name: "Mashry"},
    {id: 37, name: "Shohag"}
];

const names = [];
for(let i = 0; i < students.length; ++i) {
    const {name} = students[i];
    names.push(name);
}
console.log(names);

//------------------Map------------------//
const names_1 = students.map(s => s.name);
console.log(names_1);


//------------------Map------------------//
const namesOfGreaterThan20 = students.filter(s => s.id > 20).map(s => s.name);
console.log(namesOfGreaterThan20);