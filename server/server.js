import dotenv from 'dotenv'
dotenv.config()
import pool from "./db.js";
import express from 'express'

const app=express()
try {
  const result = await pool.query("SELECT NOW()");
  console.log("Database connected:", result.rows[0]);
} catch (error) {
  console.error("Database connection failed:", error);
}
const port=process.env.PORT
app.get('/',((req,res)=>{
  res.json({ message: 'welcome to server' })
}))
app.listen(port,(()=>{
    console.log('server running on port')
}))

