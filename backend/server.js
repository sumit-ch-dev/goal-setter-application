const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const goals = require('./routes/goalRoutes')
const users = require('./routes/userRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', goals)
app.use('/api/users', users)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`server started on port ${port.blue}....`)
})