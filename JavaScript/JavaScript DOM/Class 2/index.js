const content=document.querySelector('#warning');
content.addEventListener('click',function(){
    alert('YOU ARE NOW TRAPPED');
});

// let mydiv=document.createElement('div');
// function display(){
//     console.log('You just clicked');
// }
// for(let i=1;i<=100;i++){
//     let divchild=document.createElement('p');
//     divchild.textContent='This is paragraph no '+i;
//     // divchild.addEventListener('click',function(){
//     //     console.log('YOU JUST CLICKED')
//     // });
//     divchild.addEventListener('click',display);
//     mydiv.appendChild(divchild);
// }
// document.body.appendChild(mydiv);

setTimeout(function(){
    console.log('HELLO EVERYONE');
},4000);