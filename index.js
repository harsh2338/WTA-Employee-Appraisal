const { mongoose } = require('./db')
const express = require('express');
const bodyParser = require('body-parser')
const employeeController = require('./controllers/employee_controller')
const app = express()
const PORT = 3000;
app.use(bodyParser.json())


app.listen(PORT, () => console.log('Server started'));
app.use('/employee', employeeController)