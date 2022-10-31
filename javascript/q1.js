/*
* The callback function is mixing up anonymous function and arrow function syntaxes.
* To solve the problem either remove the function keyworkd or the => symbol.
* */


const express = require('express')


const app = express()
app.post('/data', (req, res, next) => {
  console.log('body', req.body)
  try {
    callAsyncMethod(req.body, (err, result) => {
      console.log('error', err.status, err.message)
      if (err) {
        next(new Error('failed'))
      }
      res.json({status: 200})
    })
  } catch (ex) {
    next(new Error('failed'))
  }
})