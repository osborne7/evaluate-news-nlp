const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(express.static('dist'))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

var AYLIENTextAPI = require('aylien_textapi');

var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/sentiment', (req, res) => {
    // console.log(req.body);
    textapi.sentiment({
        url: req.body.text,
        mode: 'document'
    }, function(error, response) {
        // console.log('response: ' + response);
        // res.send(response)
        if (error) {
            return res.status(400).json(response);
        }
        return res.status(200).json(response);
    })
});

app.post('/tweet', (req, res) => {
    // console.log('tweet body: ' + req.body);
    textapi.sentiment({
        text: req.body.text,
        mode: 'tweet'
    }, function(error, response) {
        // console.log('response: ' + response);
        if (error) {
            return res.status(400).json(response);
        }
        return res.status(200).json(response);
    })
});