const mongoose = require('mongoose');

const db = process.env.DATABASE;
//const db = "Database but no storing of data"
mongoose.connect(db, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
   console.log("Connection Successfull");
}).catch((e)=>{
    console.log(e);
})