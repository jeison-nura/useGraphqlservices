const {buildSchema} = require('graphql')

module.exports = buildSchema(`

    type userData{
        name: String!
        lastName: String!
        age: Int
        ocupation: String
        phone: String
    }

    input userInputData{
        name: String!
        lastName: String!
        age: Int
        ocupation: String
        phone: String
    }


    type rootQuery{
        hello: [userData!]!
        search(age: Int!):[userData!]!
    }

    type rootMutation{
        createUser(userInput: userInputData ): userData
    }

    schema{
        query: rootQuery
        mutation: rootMutation
    }
`)

// buildSchema(`
//     type userData{
//         name: String!
//         lastName: String!
//         age: Int
//         ocupation: String
//         phone: String
//     }



//     input userInputData{
//         name: String!
//         lastName: String!
//         age: Int
//         ocupation: String
//         phone: String
//     }

//     type rootMutation{
//         createUser(userInput: userInputData )
//     }

//     schema{
//         query: rootQuery
//         mutation: rootMutation
//     }
// `);