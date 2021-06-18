const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const { graphqlHTTP } = require('express-graphql')
const graphqlSchema = require('./graphql/schema')
const graphqlResolver = require('./graphql/resolvers')

app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
}))
app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
