const express = require("express");
const {
    graphqlHTTP
} = require("express-graphql");
const schema = require("./schema/schema");
const dotenv = require("dotenv");
const mongoose = require('mongoose');

const app = express();

dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true
    }, () =>
    console.log("connected to db!")
);

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.listen(4000, () => {
    console.log("now listening for requests on port 4000");
});