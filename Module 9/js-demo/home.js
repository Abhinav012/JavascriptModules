
// const button = document.getElementById('see-review');

// button.addEventListener('click', function() {

//     const review = document.getElementById('review');

//     if (review.classList.contains('d-none')) {
//         review.classList.remove('d-none');
//         button.textContent = 'CLOSE REVIEW';
//     }
//     else {
//         review.classList.add('d-none');
//         button.textContent = 'SEE REVIEW';
//     }
    

// });

// Creating and Initializing Arrays

//const values = [1,2,3];
//console.log(values);


//Acessing array items

// const values = ['a','b','c'];
// values[0] = 'aaa';
// console.log(values[0]);


//Manipulating Array

// const values = ['a','b','c'];
// values.push('d');
// console.log(values);

// const values = ['a','b','c'];
// const last = values.pop();
// console.log(values, last);

// const values = ['a','b','c'];
// const first = values.shift();
// console.log(values, first);

// const values = ['a','b','c'];
// values.unshift("hello", "world");
// console.log(values);



// slice and splice

// const values = ['a','b','c', 'd','e','f'];
// const newValues = values.slice(1,4);
// console.log(newValues);

// const values = ['a','b','c', 'd','e','f'];
// values.splice(1,1);
// console.log(values);

// const values = ['a','b','c', 'd','e','f'];
// values.splice(1,0, 'foo ');
// console.log(values);



//Array searching and looping

// const values = ['a','b','c'];
// //console.log(values.indexOf('a'));
// console.log(values.indexOf('v'));


// const values = ['a','b','c','d','z'];
// const set = values.filter(function(item){
//     console.log(item);  
//     return item > 'b';
// });

// console.log(set);


// const values = ['a','bbb','c'];
// const found = values.find(function(item){
//       return item.length>1;
// });

// console.log(found);


// const values = ['a','bbb','cccc'];
// const found = values.find(function(item){
//       return item.length>1;
// });

// console.log(found);


// const values = ['a','b','c'];
// values.forEach(function(item){
//        console.log(item);
// });



//Arrays in the DOM
const container = document.getElementsByClassName('container');
container[3].classList.add('d-none');
console.log(container);
