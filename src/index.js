import express, { json } from 'express'
import userRoute from './routes/userRouter.js'

const port = 3000;

const app=express()

app.use(json());

app.use('/', userRoute);

app.listen(port, ()=>{
    console.log(`listenin server on http://localhost:${port}`);
})