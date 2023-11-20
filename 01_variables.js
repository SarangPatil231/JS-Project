const accountId = 144552; //once the value assign can`t be chnaged.it remains constant.
let email = "sarang@google.com"; //chnage variable value only at block scope {}.
var pass = "123456";  // can change varible value through out the globle scope.
accountCity = "jaypur"; //no need to declare datatype. not to prefer.

//accountId = 12452; cant change const variables in JS.
email = "test@gmail.com";
pass = "12544546"
let accountSate;


// console.log(accountId);
// console.log(email);
// console.log(pass);
// console.log(accountCity);
console.log(accountSate); //if variable declare but not assign value it will be undefined.

/* prefer not to use var
becouse of issue in block scope and functional scope.*/

console.table([accountId, accountCity, email, pass]);