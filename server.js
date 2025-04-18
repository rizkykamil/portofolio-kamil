import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'
import dotenv from 'dotenv'

// Memuat file .env
dotenv.config()

// Mendapatkan variabel lingkungan untuk menentukan apakah sedang dalam mode pengembangan atau produksi
const dev = process.env.NODE_ENV !== 'production'

// Mendapatkan nilai port dan hostname dari variabel lingkungan atau nilai default
const hostname = process.env.HOSTNAME || 'localhost'
const port = process.env.PORT || 8080

const app = next({
    dev,
    hostname,
    port,
})

const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer(async (req, res) => {
        try {
            // Mem-parsing URL untuk mendapatkan pathname dan query
            const parsedUrl = parse(req.url, true)
            const { pathname, query } = parsedUrl

            if (pathname === '/a') {
                await app.render(req, res, '/a', query)
            } else if (pathname === '/b') {
                await app.render(req, res, '/b', query)
            } else {
                await handle(req, res, parsedUrl)
            }
        } catch (err) {
            console.error('Error occurred handling', req.url, err)
            res.statusCode = 500
            res.end('internal server error')
        }
    }).listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://${hostname}:${port}`)
    })
})
