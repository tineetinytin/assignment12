// STEP 1
// function cat () {
//     //named declaration
// };
// const dog = function() {
//     //anonymous declaration
// }

// STEP 2
// const cat = new Cat();
// const dog = new Dog();

// STEP 3
// class Animal {
//     constructor() {
//     }
//     message = function() {
//         console.log('The Animal has been created');
//     }
// }
// const Animal1 = new Animal();
// Animal1.message();

// STEP 4
// class Animal {
//     constructor(msg){
//         console.log(msg);
//     }   
// }
// const Animal1 = new Animal('The Animal has been created');

// STEP 5
// class Animal {
//     constructor( type, breed, color, height, length){
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
// }

// const Animal1 = new Animal('dog', 'golden', 'brown', 2 ,3);
// console.log(Animal1.height);

// STEP 6
// class Animal {
//     constructor( type, breed, color, height, length){
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
// }

// const Animal1 = new Animal('dog', 'golden', 'brown', 2 ,3);

// for (const prop in Animal1) {
//     console.log(`Animal1.${prop} = ${Animal1[prop]}`);
//   }

// STEP 7
// class Animal {
//     constructor( type, breed, color, height, length){
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }

//     speak = function() {
//         if(this.type === 'dog') {
//             console.log(`The ${this.color} dog is barking`);
//         } else if(this.type === 'cat') {
//             console.log(`The ${this.color} cat is meowing`);
//         }

//     }
// }

// const dog1 = new Animal('dog', 'poodle', 'brown', 18 ,15);
// const cat1 = new Animal('cat','Bengal', 'white', 25 ,20);
// dog1.speak();
// cat1.speak();

// STEP 8
// function Animal(type, breed, color, height, length) {
   
//     let _type = type;
//     let _breed = breed;
//     let _color = color;
//     let _height = height;
//     let _length = length;

//     let checkType = function() { 
//         if(_type === 'dog') {
//             return _type;
//         } else if(_type === 'cat') {
//             return _type;
//         }
//     }     

//     this.speak = function() {
//        return `${checkType()} has made a noise`;
//     }
// }

// const dog1 = new Animal('dog', 'poodle', 'brown', 18 ,15);
// const cat1 = new Animal('cat','Bengal', 'white', 25 ,20);
// console.log(dog1.speak());
// console.log(cat1.speak());

// STEP 9
String.prototype.findWords = function(str,search) {
    let tmpStr = str;
    let tmpArr = tmpStr.split(' ');
    let wordsCount = 0;
    console.log(tmpArr);
    for (i = 0; i < tmpArr.length; i++) {
       let word = tmpArr[i];
       if(word === search)
           wordsCount++;
    }
    return wordsCount;
   
   }
   
   const myObj = new String;
   const str = 'This is is is first senctence. This is second.';
   const search = 'first';
   
   alert(`the number of times the word '${search}' found in paragraph is ${myObj.findWords(str,search)}`);