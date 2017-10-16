const express = require('express');
const app = express();
const expressGraphQL = require('express-graphql');
const


app.use('/graphql', expressGraphQL({ graphiql: true }));



app.listen(3000, () => { console.log("Server up and running...") })
