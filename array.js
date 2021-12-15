var array1 =[0,1,2,3,4,"five","seven","eight",9];
var array2 = new Array("three four");
// empty array
var myList=[];
var myList=[11,12,13,"ten"];
console.log(array1[5]);
array1.push('six');  //push
console.log(array1);
array1.unshift("zero"); ///unshift
console.log(array1);
array1[3]="new element";   // to add at a particular position
console.log(array1);   
array1.pop();             //pop
console.log(array1);
console.log(array1.length); //length
console.log(array2);