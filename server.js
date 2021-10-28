const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

require('dotenv').config()
const { DATABASE_URL, PORT = 3000 } = process.env

mongoose.connect(DATABASE_URL)
const db = mongoose.connection

db.on('connected', () => console.log('Connectes to MongoDB'))
db.on('disconnected', () => console.log('Disconnected to MongoDb'))
db.on('error', (error) => console.log('MongoDB has an error' + error.message))

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/api', (req, res) => {
    res.json({message: 'Welcome to the React CRM API'})
})



app.get('/api/*'), (req, res) => {
    res.status(404).json({message: 'That route was not found'})
}

app.listen(PORT, () => console.log(`Express is listening on port:${PORT}`));