const countvalue=document.querySelector('#counter');

const increment=()=>{
    //fetch the value
    let value=parseInt(countvalue.innerText);
    value=value+1;
    // updation the ui
    countvalue.innerText=value;
};

const decrement=()=>{
    let value=parseInt(countvalue.innerText);
    value=value-1;
    countvalue.innerText=value;
};