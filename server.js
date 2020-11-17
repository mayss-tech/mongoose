const express=require('express');

const dbConnect=require('./config/dbConnect');
const router =require('./Routes/person');

const app=express();
app.use(express.json());

dbConnect();
app.use('/', router);

const PORT= process.env.PORT || 4000;
app.listen(PORT,err=> err ? console.error(error):console.log( `server is ranning on PORT ${PORT}`));
