const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();
const app = express();
const schema = require('./schema/schema');
const { connectDB } = require('./config/db');

const port = process.env.PORT || 5000;

app.use(cors());

connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  }),
);

app.listen(port, console.log(`Server listening on ${port}`));
