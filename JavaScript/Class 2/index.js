// console.log("KI haal chaal");
// let rectangle={
//     length:5,
//     breadth:3,

//     draw:function(){
//         console.log("Drawring rectangle");  
//     }
// };

// function square(a,b){
//     let area={
//         side:a,
//         sideb:b,
//     };
//     return area;
// }

// let squarebnao=square(5,5);
alert('Watch your way who is coming over');
function Rectangle(a,b){
    this.length=a;
    this.breadth=b;
    this.draw=function(){
        console.log('Drawing');
    }
}
let rectangleobject=new Rectangle(2,3);

rectangleobject.color='mafia black';
console.log(rectangleobject);
// delete rectangleobject.length;
console.log(rectangleobject);

let name={Aryaman: 9.6,
Sujal:8.4,
Aryan:8.5,
Udit:9};
for(let key in name){
    console.log(key , name[key]);
}


//CLONING
console.log('Cloning');
let dest={};
let scr={
    a:10,
    b:20,
    c:30
};
for(let key in scr){
    dest[key]=scr[key];
}
console.log(dest);
scr.a++;
console.log(dest);//even after that dest will remain unchanged; 