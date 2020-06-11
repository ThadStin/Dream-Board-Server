// DEPENDENCIES //
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const dreamRouter = require('./routes/dream-router')

const app = express()
const apiPort = 3000

// MIDDLEWARE //
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

// MONGO CONNECTION //
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// REQUEST //
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', dreamRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
