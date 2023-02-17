const express=require('express')
const cors=require('cors')
const Cars = require('../routes/Router.js')

const app=express()

app.use(cors( {
    origin:'http://localhost:3000',
    methods:['GET','POST', 'PUT', 'DELETE', 'OPTIONS','PATCH']
} ))
app.get('/',(req,res)=>{
res.send('<h2>Home Page</h2>')
}
)
app.use(express.json())

app.use('/api/v1',Cars)

module.exports= app