var express = require('express')
import router from './routes'
// require('dotenv').config({ path: __dirname + '/.env' })
import dotenv from 'dotenv'
import bodyParser from 'body-parser';

dotenv.config()
console.log(__dirname)
var app = express()
var port = process.env.APP_PORT || 3000;

app.use(bodyParser.json());
app.use('/api', router)

app.get('/', function (req, res) {
  res.send('WELCOME DUDE!!!')
})

app.listen(port, function () {
  console.log("Running on port:" + port)
})
