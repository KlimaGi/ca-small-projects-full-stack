const express = require('express');
// express serveris
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const session = require('express-session');
const store = new session.MemoryStore();
const mainRouter = require("./routes/router");

mongoose.connect("mongodb+srv://admin:admin@cluster0.ygdrbad.mongodb.net/?retryWrites=true&w=majority")
  .then(() => { console.log('connected ok') })
  .catch(e => {
    console.log('connection error')
  })

app.use(
  session({
    secret: 'dsfdvaeaf',
    resave: false,
    saveUninitialized: true,
    store,
    cookie: { secure: false },
  })
);

//app.use(cors());
app.use(cors({ origin: 'http://localhost:3000', credentials: true, methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' }));

app.use(express.json());

app.listen(4000);

app.use('/', mainRouter);
