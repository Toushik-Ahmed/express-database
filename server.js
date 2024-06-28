const express = require('express');
const app = express();
const connection = require('./model/index');
const User = require('./model/db');
app.use(express.json());
const router = require('./router');
app.use(router);

app.listen(3000, () => {
  console.log(`server is listening at port 3000`);

  connection.connection();
  User.syncTable();
});
