const num1=5;
const num2=10;
function addvalues(){
    console.log(`the sum is : ${num1+num2}`)
}
addvalues()
// setTimeout(function(){
//     console.log('Connecting files ! Working !!!')
// },1000)
//set timeout will only print one time after waiting for the specified time
//set interval will keep on printing after each intervals

setInterval(()=>{
    console.log('Connecting Files! Working!!');
},1000)