require('dotenv').config()
const express = require('express');
const app = express();

const mongoose = require('mongoose');

const cors = require('cors')

const PORT = process.env.PORT || 5001;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (err)=>console.log(err))
db.once('open', ()=>console.log('Connected to MongoDB'))



// mongoose.connection.on('open', function (ref) {
//     console.log('Connected to mongo server.');
//     //trying to get collection names
//     mongoose.connection.db.listCollections().toArray(function (err, names) {
//         console.log(names); // [{ name: 'dbname.myCollection' }]
//         if(names==='users') coll=names;
//         module.exports.Collection = names;
//     });
// })


// console.log(coll);
// let listOfCollections = Object.keys(mongoose.connection.collections);

// console.log(listOfCollections)

// console.log(db.collections())
app.use(express.json())
app.use(cors()) 

app.get("/", (req, res)=>{
    res.send("All systems running!")
})
const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

const issuesRouter = require('./routes/issues')
app.use('/issues', issuesRouter)

const adminRouter = require('./routes/admin')
app.use('/admin', adminRouter)

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}}`))