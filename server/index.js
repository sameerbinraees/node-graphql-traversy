const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();
const app = express();
const schema = require('./schema/schema');

const port = process.env.PORT || 5000;

app.use(cors());

app.listen(port, console.log(`Server listening on ${port}`));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  }),
);
