require('dotenv').config();
const express = require('express');
const cors = require('cors');

const blogRoutes = require('./views/blogRoutes');
const mongoose = require('mongoose');

const app = express();

//middlewares
app.use(express.json()) 

app.use(cors())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next();
})


// routes
app.use('/api/blogs', blogRoutes)


// connect to db
mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log('API running on port', process.env.PORT)
        })
    })
    .catch(err => console.log(err))

// mongoose.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME)


// mongoose.connect(process.env.MONGODB_URI)
//     .then(() => {
//         app.listen(process.env.PORT, () => {
//             console.log('API running on port', process.env.PORT)
//         })
//     })
//     .catch(err => console.log(err))

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   const myCollection = db.collection(process.env.COLLECTION_NAME);
// });


// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => {
//     const db = mongoose.connection.getClient().db(process.env.DB_NAME);
//     const collection = db.collection(process.env.COLLECTION_NAME);
//     // Use the "collection" variable to perform operations on the specific collection

//     app.listen(process.env.PORT, () => {
//       console.log('API running on port', process.env.PORT);
//     });
//   })
//   .catch(err => console.log(err));

//get the server running


