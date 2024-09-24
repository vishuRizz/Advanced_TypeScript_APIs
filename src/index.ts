interface User{
    name: string,
    age: number
}
function ageAdder(user1: User, user2: User){
    return console.log(user1.age + user2.age) 
}
ageAdder({
    name: "vishu",
    age: 18,
},{
    name: "avi",
    age: 17
})