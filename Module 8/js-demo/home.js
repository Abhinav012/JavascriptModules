
//changePercentOff( 32 );

// Object Properties

// let mySymbol = Symbol();
// let person = {
//     name: "John",
//     age: 32,
//     partTime: false,
//     [mySymbol] : "secret Information"
// };

// person["age"] = 44;

// console.log(person.age);


// Object Methods

// let person = {
//     name : "John",
//     age : 32,
//     partTime: false,
//     showInfo: function(realAge){
//         showMessage(this.name + " is " + realAge);
//     } 
// };

// person.showInfo(45);


//Passing Object to Functions

// let message = "Hello";

// function changeMessage(message){
//     message = "Hi!";   
// }

// changeMessage(message);
// showMessage(message);

// let person = {
//     name : "John",
//     age: 34,
//     partTime: false
// };

// function incrementAge(p){
//     p.age++;
// }

// incrementAge(person);
// showMessage(person.age);



// Standard Built-in objects

// let now = new Date();
// showMessage(now.toDateString());

//showMessage(Math.random()); 

//let str = "Hello";
//showMessage(str.charAt(0));



//Styling DOM

// const header = document.getElementById("message");
// header.style.color =  "red";
// header.style.fontWeight = '100';



//Detecting Button Clicks

//  const button = document.getElementById("see-review");

//  button.addEventListener('click',function(){
//      console.log('click');
//  });



//Showing and Hiding DOM Elements

const button = document.getElementById('see-review');
button.addEventListener('click',function(){
       
    const review = document.getElementById('review');
    
       if (review.classList.contains('d-none')){
            review.classList.remove('d-none');
            button.textContent = "CLOSE REVIEW"
       }else{
           review.classList.add('d-none');
           button.textContent = "SEE REVIEW"
       }


});

