
// const containers = 
//     document.getElementsByClassName('container');
// containers[0].classList.add('d-none');
// console.log(containers);


// Global Scope


// let productId = 12345;
// function showProductId(){
//     console.log(productId);
// }

// showProductId();



// const app = {
//    productId : 12345,
//    userName : 'Joe',
//    orderNumber: 789
// };

// function showProductId(){
//     console.log(app.productId);
// }

// showProductId();



//Function Scope
 

// function showProductId(){
//      let productId = 12345;

//      function fix(){
//          let productId = 45678;
//          console.log('in fix: ',productId);
//      }

//      fix();

//      console.log('in showProductId:' ,productId);
// }

// showProductId();



// var and hoisting

// productId = 456;
// console.log(productId);
// var productId = 123;

// showProductId();
// function showProductId(){
//     console.log(123);
// }



// Undecared Variables and Strict Mode

// productId = 1234;
// console.log(productId);


// 'use strict';
// productId = 1234;
// console.log(productId);

'user strict';
const productId = 1234;
console.log(productId);
