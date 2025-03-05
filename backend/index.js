import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors' 

import booksRouter from './route/book.route.js'
import userRouter from './route/user.route.js'
import path from "path"

const coreoption = {
    origin: "https://bookishworld.onrender.com",
    credentials: true
}
const app = express()

app.use(cors(coreoption));

app.use(express.json());

dotenv.config() 

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
const dirpath = path.resolve();


//connect to mongodb
try {
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Connected to MongoDB');
} catch (error) {
    console.error("Error: ", error);
}

app.use("/book", booksRouter);
app.use("/user", userRouter);


// // deployment

                
// if (process.env.NODE_ENV === 'production') { 

    app.use(express.static(path.join(dirpath, "frontend/dist")));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(dirpath, "frontend", "dist", "index.html"))
   })  

// }

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)  
})