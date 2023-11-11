//How to access node js
//using repel->i.e directly go to the command prompt and write node and press enter

const amount=5
if(amount<10){
    console.log('Small Number')
}
else{
    console.log('Large number')
}
console.log( `Hey it's my first node app`)

//In node there is no window 

// GLOBALS  - NO WINDOW !!!! //can be accessed anywhere

// __dirname  - path to current directory
//(double underscore) __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about environment where the program is being executed\

console.log(__dirname);
console.log(__filename)

// setInterval(()=>{
//     console.log('Hello World')
// },1000)




