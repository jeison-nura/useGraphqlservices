const users = [
    {
        name:"jeison",
        lastName: "sierra",
        age: 25,
        ocupation:"ingeniero de sistemas",
        phone: "+57 3235882236"
    },
    {
        name:"juan",
        lastName: "lara",
        age: 30,
        ocupation:"bulling puro y duro",
        phone: "+57 3016316760"
    },
    {
        name:"erika",
        lastName: "ballesteros",
        age: 26,
        ocupation:"bulling master",
        phone: "+57 3202095010"
    }
]

module.exports = {
    createUser({userInput}, req){
       let user = {
          ...userInput
       }
       users.push(user)
       return {...user};
    },

    hello(){
        return users;
    },
    
    search({age}, req){
        let find = [];
        for (user of users){
            if (age == user.age){
                find.push(user)
            }
        }
        return find;
    }
}


