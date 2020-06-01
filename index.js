const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('Hello World!!')
})

app.get('/app/:id', (req, res) => {

    res.send(req.params)
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening from ${port}`))