// 웹세팅

import express from 'express'
import path from 'path'
import http from 'http'
import logged from 'morgan'
import sass from 'node-sass'

// 기본설정-------------------------------
const app = express()
const port = 3000
app.use( logged('dev') )

// 페이지구현 ---------------------------
app.get('/', (request, response) => {
  response.send('web !!!!!')
})

// 서버구동 -----------------------------
http.createServer(app).listen(port)
