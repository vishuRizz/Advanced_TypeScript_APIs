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
 