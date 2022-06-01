import express, { json } from 'express'
import userRoute from './routes/userRouter.js'
import bookRoute from './routes/bookRouter.js'
import shopRouter from './routes/shopRouter.js';

const port = 8080;

const app=express()

app.use(json());

app.use('/user', userRoute);
app.use('/book', bookRoute);
app.use('/shop', shopRouter);

app.listen(port, ()=>{
    console.log(`listenin server on http://localhost:${port}`);
})