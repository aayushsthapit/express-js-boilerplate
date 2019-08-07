var express = require('express')
import router from './routes'
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import * as errorHandler from './middlewares/errorHandler';

dotenv.config()
var app = express()
var port = process.env.APP_PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', router)
app.use(errorHandler.errorHandler)

app.get('/', function (req, res) {
  res.send('WELCOME DUDE!!!')
})

app.listen(port, function () {
  console.log("Running on port:" + port)
})
