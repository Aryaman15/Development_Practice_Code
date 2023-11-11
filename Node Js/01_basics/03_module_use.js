//using the requre access the module of that particular file
const names=require('./02_modules')//always start the module using ./
console.log(names)
const say=require('./04_names') //since how the sayHi function is set up in the module of 04 file 
//therefore we are able to access the sayHi function from this file
say('Aryaman')

const data=require('./05_alternative_method_modules');
console.log(data);
say(names.john);
say(names.peter);// this will also work as that function is now in the module exports i.e in sharing global mode and we have store that in a variable say