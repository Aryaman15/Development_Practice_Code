 // CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//local
const secret='SUPER SECRET'
//share
const john='john'
const peter='peter'
console.log(module);
//module contain an object called exports
module.exports={john, peter}

