const express = require('express');
const pool = require('../pool.js');
const r1 = express.Router();
r1.post('/login',(req,res)=>{
	let data = req.body;
	pool.query('select * from xz_user where uname = ? and upwd = ?',[data.uname,data.upwd],(err,res1)=>{
		if(err){throw err}
		if(res1.length > 0){
			res.send('1');
		}else{
			res.send('0');
		}
	});
});
r1.post('/register',(req,res)=>{
	let data = req.body;
	pool.query('insert into xz_user set ?',[data],(err,res1)=>{
		if(err){throw err}
		if(res1.affectedRows > 0){
			res.send('1');
		}else{
			res.send('0');
		}
	});
});
module.exports = r1;