const express = require('express');

// express serveris
const app = express();
const cors = require('cors');
const mainRouter = require("./routes/router");

app.use(cors());
app.use(express.json());

app.listen(4000);

// visos uzklausos yra nusiunciamos i mainRouter
// o router'is paskirsto koks kontroleris kokiam route'ui vykdomas
app.use('/', mainRouter);
