const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json());
app.use(cors());
app.use(express.static("public"));


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '../public/inex.html'))
})

const port = process.envPORT || 4000

app.listen(4000, () => console.log(`server running on 4000`))