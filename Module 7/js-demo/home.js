
// let i = -4;
// do {
//     console.log(i);
//     i--;
// } while (i > 0);

//Function Basics

// function showMessage(){
//     console.log("Here is a message");
// }

// showMessage();
// showMessage();



//Function Expressions

// let myFunction = function loggingFunction (){
//     console.log("Here is a message");
// }
// myFunction();


//Passing Information to Functions

// let myFunction = function (message, firstName){
//     console.log(message);
//     console.log(firstName);
// }

//myFunction('Hello', 'John');



//Function Return Values

// function getSecretCode(value){
//      let code = 42*value;
//      return code
// }

// //showMessage(getSecretCode(2));
// let secretCode = getSecretCode(2);
// console.log(secretCode); 



//Function Scope

// let key = 42;

// function getSecretCode(value){
//     let keyGenerator = function() {
//         let key = 12;
//         console.log('in keyGenerator', key);    
//         return key;
//     }

//     let code = value*keyGenerator();
//     console.log('in getSecretCode', key);
//     return code; 
// }

// let secretCode = getSecretCode(2);
// showMessage(secretCode);


// Using functions to modify web pages 

changePercentOff(40);