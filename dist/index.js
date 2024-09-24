"use strict";
function ageAdder(user1, user2) {
    return console.log(user1.age + user2.age);
}
ageAdder({
    name: "vishu",
    age: 18,
}, {
    name: "avi",
    age: 17
});
