let meravada=new Promise(function(resolve,reject){
    console.log('MEIN APNA VADA PURA KARUNGA');
    resolve(1900);
    return 10000;
})
console.log('APKA ARYAMAN');
console.log(meravada);
// let usnkavada=new Promise(function(resolve,reject){
//     console.log('HM APNA VADA KABHI PURA NHI KARENGE');
//     reject(new Error('KYUNKI MERI THINKING HI AISI HAI'));
// })
// console.log(usnkavada);
meravada.then((value)=>{console.log(value)});

async function abcd(){
    return 'hello';
}
async function printjson(){
let a= await fetch('https://jsonplaceholder.typicode.com/posts/1');
let b=await a.json();
console.log(b);
}
printjson();
