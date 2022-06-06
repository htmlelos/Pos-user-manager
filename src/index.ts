import http from 'http'
import app from './app'

const server = http.createServer(app)

const PORT = 3000
console.log('NODE_ENV', process.env.NODE_ENV)

if (process.env.NODE_ENV !== 'test') {
    server.listen(PORT, () => {
        console.log('Server running on port', PORT)
    })
}

export default server