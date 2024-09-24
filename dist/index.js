"use strict";
//  this changed the UpdateUser interface like this
// interface UpdateUser{
//     age?: number
// }
function updateAge(updatedProps) {
    // now do whatever you want
}
function mayOrMayNotUpdateAge(updatedProps) {
    // now you can update it or not   
}
const userDetails = {
    1: {
        name: "vishu",
        age: 19
    },
    2: {
        name: 'avi',
        age: 18
    }
};
const mapOfUsers = new Map();
// here number is the key and NewUser1 is the value
mapOfUsers.set(1, { name: 'vishu', age: 18 });
// mapOfUsers.set(2, {name: 'avi', age: 19})
const me = mapOfUsers.get(2);
console.log(me);
mapOfUsers.delete(1);
