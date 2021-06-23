const express = require('express');
const app= express();
const db= require('./app/models');
const initRoutes= require('./app/routes/tutorial.routes');

global.__basedir= __dirname ;//+ '/..';

app.use(express.urlencoded({ extended: true }));
initRoutes(app);
//db.sequelize.sync();

  db.sequelize.sync().then(()=>{
    console.log('create Db');
   })
   app.get('/', function (req, res) {
    res.json({ message: "Welcome to azza  application upload excel file "}); 
  })
  
const PORT=  5100;
 
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}.`);
})