//Functions: three ways to write them

// 1. Function declaration (dit is de klassieke)
function sayHello(){
    console.log("Hello 1");
}
sayHello();


// 2. Function expression ( Winc raadt dit aan om te schrijven)
const sayHello2 = function() {
    console.log("Hello 2");
};
sayHello2();


// 3. Arrow function (also a function expression) (Moderne versie)
const sayHello3 = () => {
    console.log("Hello 3");
};
sayHello3();



// Functions: three ways to write them: exercise

// 1 Function declaration
function twoNumbers(){
    console.log (3 * 4);

}
twoNumbers();


function multiplyNumber (number1, number2){
    return number1 * number2;
}

// multiplyNumber (3, 5);
console.log (3 * 5);



// 2 Function expressions
const twoNumbers2 = function () {
 console.log (4 * 5);
};

twoNumbers2();



// 3 Arrow functions
const twoNumbers3 = () => {
    console.log( 7 * 7);
};

twoNumbers3();

const square = (number) => {
    return number * number;

};
console.log ( 6 * 3);

