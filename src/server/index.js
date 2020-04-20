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
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.post('/sentiment', (req, res) => {
    // console.log(req.body);
    textapi.sentiment({
        url: req.body.text,
        mode: 'document'
    }, function(error, response) {
        // console.log('response: ' + response);
        res.send(response)
        if (error === null) {
            console.log('error: ' + response);
        }
    })
});

app.post('/tweet', (req, res) => {
    // console.log('tweet body: ' + req.body);
    textapi.sentiment({
        text: req.body.text,
        mode: 'tweet'
    }, function(error, response) {
        // console.log('response: ' + response);
        res.send(response)
        if (error === null) {
            console.log('error: ' + response);
        }
    })
});