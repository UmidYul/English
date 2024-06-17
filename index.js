import express from 'express'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(__dirname + "/public/"))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: false }))
const pages = ["materials", "essay_checker"]

// GET SECTION

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/main.html")
})
app.get(`/${pages[0]}`, (req, res) => {
    res.sendFile(__dirname + `/views/${pages[0]}.html`)
})
app.get(`/${pages[1]}`, (req, res) => {
    res.sendFile(__dirname + `/views/${pages[1]}.html`)
})

// POST SECTION


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})