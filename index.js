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

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/main.html")
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})