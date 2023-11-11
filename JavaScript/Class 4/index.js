let a='Hello';
console.log(a);
run();
function run(){
    console.log('running');
}

let temp=function run(){
    console.log('running');
}
temp();
let n=function(){
    console.log('NO hoisting');
}
n();

function sum(a,b){
    console.log(arguments); //Its output is not an array
    //converting the function using arguments so that it can add all numbers
    let total=0;
    for(let val of arguments){
        total+=val;
    }
    return total;
}
console.log(sum(25,5,10,20,30));

function sumusingrest(...args){
    console.log(args);
}
sumusingrest(1,2,3,5,6,7,8,9);

function interest(p=3,r=5,y=10){
    return p*r*y/100;
}
console.log(interest(1000,10,10));
console.log(interest(5,undefined,100));


let person={
    fname:'Aryaman',
    sname:'Verma'
};
function fullName(){
    return `${person.fname} ${person.sname}`;
}
console.log(fullName());

let persongetsetconcept={
    fName:'Love',
    sName:'babbar',
    get fullName(){
        return `${persongetsetconcept.fName}  ${persongetsetconcept.sName}`;
    },
    set fullName(value){
        if(typeof value!='string'){
            throw new Error("You have not sent a string");
        }
        let parts=value.split(' ');
        this.fName=parts[0];
        this.sName=parts[1];
    }
}

//ERROR HANDLING

// try{
// persongetsetconcept.fullName=1;
// }
// catch(e){
//     // alert("ERROR ENCOUNTERED!! YOU ARE SENDING A NUMBER TO THE GETTER");
//     alert(e);
// }


console.log(persongetsetconcept.fullName);
console.log(persongetsetconcept.fullName);

let arr=[10,20,30,40,50];
let totalusingreducing=arr.reduce((accumulator,currentvalue)=> accumulator+currentvalue,0);
console.log(totalusingreducing);