const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('This is from GET Method')
})


app.post('/clientInfo', (req, res) => {
    console.log(req.body);
    const data = req.body;
    res.json({
        username: data.username,
        userMail: data.userMail,
        userPass: data.userPass
    })
})

app.listen(4200, (req, res) => {
    console.log("listening from port 4200")
})