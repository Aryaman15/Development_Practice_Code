let a='Hello world';
console.log(a);

let style=`This is
the 
use of 
tempelate
LITERAL`;
console.log(style);

let name='Aryaman';
console.log(`
Dear ${name}
Thank you for contacting our showroom
We will get one spectre deliver at your doorsetp
Looking forward to have a wonderful future relationship between us

Thank you for choosing ROLLS ROYCE
With perfection
ROLLS ROYCE`)

let date= new Date();
console.log(date);

// let birthday=new Date('15 July 2004 10:54');
// console.log(birthday);
// birthday.setFullYear(2010);
// console.log(birthday);1


//Arrays
let nums=[1,2,3,4,5,6];
console.log(nums);
nums.push('last element');
console.log(nums);
nums.unshift('front',9);
console.log(nums);
nums.splice(1,0,'a',10,20,30);
console.log(nums);
console.log(nums.includes(4));


//Array of object
let arrayobject=[{sno:1,name:'Aryaman'},
{sno:2,name:'SKATEROCK'}];
let ans=arrayobject.find(function(arrayobject) {
    return arrayobject.name=='SKATEROCK';
})
console.log(ans);

let first=[1,2,3,4];
let second=['first','second','third','forth'];
let result=first.concat(second);
console.log(result);

// first.forEach(function(i){
//     console.log(i)
// });

first.forEach(i=>console.log(i));

let arr=[10,20,30,40,60];
let jn=arr.join('_');
console.log(arr);
console.log(jn);

//split
let str="This is my string";
console.log(str);
let splt=str.split('i');
console.log(splt);
let arrstr=str.split(' ');
console.log(arrstr);
//joining them
let strjoin=arrstr.join('$');
console.log(strjoin);


//sorting 
let newarr=[10,50,70,20,90,30];
console.log(newarr);
newarr.sort();
console.log(newarr);
newarr.reverse();
console.log(newarr);

let narr=[1,-1,0,20,400,90];
let filteredcoffeearray=narr.filter(function(number){
    return number>100;
})
console.log(filteredcoffeearray);

//mapping
let sno=[1,2,3,4,5];
// let items=sno.map(function(i){
//     return 'STUDENT_ID_'+i;
// });
let items=sno.map(value =>'STUDENT_ID_'+value) ;
console.log(items);

//mapping
let numbers=[1,-2,-1,2,0];
let positive=numbers.filter(function(value){
    return value>0;
})
console.log(positive);
let mapp=positive.map(function(num){
    let obj={value:num};
    return obj;
})
console.log(mapp);