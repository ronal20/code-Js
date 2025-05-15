const accountID = 1233
let accountEmail = "abc@gmail.com"
var accountPassword = "33445"

var accountPassword = "99940"
accountEmail ="aee@gmai.com" 
//let accountEmail ="aee@gmai.com" 
/*{
 Anything inside this bracket is scope
}*/

/* let and const cannot be redeclared in the same scope.
that is why this gives error

let accountEmail = "abc@gmail.com"
let accountEmail = "ccc@gmail.com" 

but this doesn't give error
let accountEmail = "abc@gmail.com"
accountEmail = "ccc@gmail.com"

because here we just reassigned value of accountEmail but earlier we declared accountEmail twice which
isn't possible in javascript as we cannot redeclare let and const within same scope.

*/

console.table([accountID, accountEmail, accountPassword])