// Define an interface Profile with properties name, age, and email.

interface Profile {
    name : string ,
    age : number ,
    email : string
}

const updateProfile = <T extends Profile ,P >(obj: T, p : P)  => {
    const updateData : Profile = {
        name : obj.name,
        age : obj.age ,
        email : obj.email
    }
    const update = {...updateData,}
    console.log(p);
    return updateData
}


const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, {age : 26}));