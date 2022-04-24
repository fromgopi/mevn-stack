const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')

if(process.env.ENVIRONMENT !== 'production'){
    require('dotenv').config()
}


console.log('environment    ', process.env.ENVIRONMENT)
console.log('PORT    ', process.env.PORT)
console.log('MONGO_CONNECTION_STRING    ', process.env.MONGO_CONNECTION_STRING)

const taskController = require('./controller/task.controller');

const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({'data': 'Welcome'})
})

app.get('/api/task', (req, res) => {
    taskController.getTasks().then(data => {res.json(data)});
});

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})








