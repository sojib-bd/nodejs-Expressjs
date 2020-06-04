const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('This is from GET Method')
})

app.get('/cors', cors(), (req, res) => {

    res.json({ Message: "I am coming through the cors middleware" })
})

app.post('/clientInfo', (req, res) => {
    console.log(req.body)
})

app.listen(4200, (req, res) => {
    console.log("listening from port 4200")
})