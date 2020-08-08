function myFunction() {
    var innerFunction = function() {
        anotherFunction();
    }
    innerFunction();
    function anotherFunction() {
        console.log("another function");
    }
}

myFunction();