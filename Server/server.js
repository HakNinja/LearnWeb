const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    console.log("server");
});


app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});