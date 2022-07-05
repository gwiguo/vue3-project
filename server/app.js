const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const router = require('./router')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.resolve(__dirname,'../src')));
// app.use(express.static(path.resolve(__dirname,'../dist')));
app.use(cors());

app.use(router);

// app.get("/",(req,res)=>{    
//     res.send(fs.readFileSync(path.resolve(__dirname,'../dist/index.html'),"utf-8"));
// });



app.listen(8000,()=>{
    console.log("服务器已启动并监听8000端口");
});