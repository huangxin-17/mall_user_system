const express = require('express');
const body_parser = require('body-parser');
const r1 = require('./routers/01_router.js');
const app = express();
app.listen(5678,()=>{
	console.log('5678...');
});
app.use(express.static('./public'));
app.use(body_parser.urlencoded({
	extended:false
}));

app.use('/r1',r1);
app.get('/',(req,res)=>{
	res.redirect('/login.html');
});