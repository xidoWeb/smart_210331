// 웹세팅
import express from 'express'
import path from 'path'
import http from 'http'
import logged from 'morgan'
import sass from 'node-sass'

// 기본설정-------------------------------
const app = express()
const port = 3000 
const __dirname = path.resolve()
const staticDir = path.resolve(__dirname + '/public')
app.use( express.static(staticDir) )
app.use( logged('dev') )

// sass ---------------------
const srcPath = path.resolve(staticDir + '/scss');
const destPath = path.resolve(staticDir + '/css');



// 페이지구현 ---------------------------
app.get('/', (request, response) => { response.sendFile(staticDir + '/html/main.html') })
app.get('/main', (request, response) => {  response.sendFile(staticDir + '/html/main.html') })
app.use((request, response)=>{ response.status(404).sendFile(staticDir + '/html/404.html') })

// 서버구동 -----------------------------
http.createServer(app).listen(port)
