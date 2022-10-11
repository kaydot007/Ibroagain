const express = require('express')
const morgan = require('morgan')
const connectDb = require('./DB/DB')
const app = express()
app.use(morgan('tiny'))  //to console.log errors and request
app.use(express.json())
connectDb();

app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/index.routes'))

app.use('/',require('./routes/post.routes'))


app.listen(3000, () => {
    console.log('Server on port 3000')
})