const express = require('express');

// express serveris
const app = express();
const cors = require('cors');
const mainRouter = require("./routes/router");

app.use(cors());
app.use(express.json());

app.listen(4000);

app.use('/', mainRouter);
