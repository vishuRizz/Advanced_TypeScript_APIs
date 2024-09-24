// using pick lets you create a new type or interface based on the original one 
// but with some properties removed
interface User{
    name: string,
    age: number,
    email: string
}
type updateUser = Pick<User, 'age' | 'name'> // i dont want the user to update the email in any conditions
// now what it the update functions need not want to get or update all all values but all can be optional

type updateUserOptional = Partial<updateUser>
//  this changed the UpdateUser interface like this
// interface UpdateUser{
//     age?: number
// }
function updateAge(updatedProps: updateUser){
 // now do whatever you want
}
function mayOrMayNotUpdateAge(updatedProps: updateUserOptional){
 // now you can update it or not   
}

// if you want to make a interface that's just readonly and you can not allow it to be changed 
interface anotherUser{
   readonly name: string,
    age: number,
}
// or if all the entris of anotherUser are readonly you can simply do this
type newAnotherUser = Readonly<anotherUser>
 
// if we have an object of objects 
interface UserDetails{
   name: string,
   age:  number
    }
    interface Users{
        [key: number]: UserDetails,
    }

 const userDetails: Users = {
   1: {
        name: "vishu",
        age: 19
    },
    2: {
        name: 'avi',
        age: 18
    }
 }
 // the same thing can be done using Record 
type Users2 = Record<number, UserDetails> // this is equivalent to that [key: number]: UserDetails,
// here number is the key and the UserDatails tells the type of values in object

// Another way to do key value pair in ts/js is Map
// Map is a collection of key value pairs
type NewUser1 = {
    name: string, 
    age: number
}
const mapOfUsers = new Map<number, NewUser1>()
// here number is the key and NewUser1 is the value
mapOfUsers.set(1, {name: 'vishu', age: 18})
mapOfUsers.set(2, {name: 'avi', age: 19})
const me = mapOfUsers.get(2)
console.log(me) 
mapOfUsers.delete(1)

// exclude is just the opposite of picking 
// it will exclude the given type from the given type
type UserHehe = {
    name: string,
    age: number
    }
    type NewUser = Exclude<UserHehe, 'age'> // this will exclude the age from the User
    // so the NewUser will be
    // {
    //     name: string
    // }