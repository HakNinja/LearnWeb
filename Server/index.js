import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'

import userRoutes from './routes/user.js'
import teacherRoutes from "./routes/teacher.js"
import userData from './routes/data.js'

import paymentRoute from './routes/stripe.js'


dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())


app.use('/user',userRoutes)
app.use('/teacher',teacherRoutes)
app.use('/data',userData)
app.use('/payment',paymentRoute)

const PORT=process.env.PORT || 9000
mongoose.connect(process.env.MONGO_URL,{
}).then(()=>{
    app.listen(PORT,()=> console.log(`Server Port: ${PORT}`))

    

}).catch((error)=> console.log(`${error} did not connect`))

