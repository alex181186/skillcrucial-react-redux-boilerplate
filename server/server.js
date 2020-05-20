/* eslint-disable import/no-duplicates */
import express from 'express'
import path from 'path'
import axios from 'axios'
import cors from 'cors'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'

import cookieParser from 'cookie-parser'
// import { readFile, writeFile, unlink } from 'fs'
const { readFile, writeFile, unlink } = require('fs').promises
import Html from '../client/html'

// import { getDisplayName } from 'next/dist/next-server/lib/utils'

let connections = []

const port = process.env.PORT || 3000
const server = express()

server.use(cors())

server.use(express.static(path.resolve(__dirname, '../dist/assets')))
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))
server.use(bodyParser.json({ limit: '50mb', extended: true }))

server.use(cookieParser())

const saveFile = async (users, nameJson) => {
  return writeFile(`${__dirname}/${nameJson}`, JSON.stringify(users), { encoding: 'utf8' })
}

const getJson = async (nameJson) => {
  return readFile(`${__dirname}/${nameJson}`, { encoding: 'utf8' })
    .then((text) => {
      return JSON.parse(text)
    })
    .catch(async () => {
      const { data: users } = await axios('https://jsonplaceholder.typicode.com/users')
      await saveFile(users, nameJson)
      return users
    })
}

/*
const checkJson = async (nameJson) => {
  await stat(`${nameJson}`)
    .then(() => true)
      .catch( err => {
        console.log(err)
        return false
      })
}
*/

function setHeader(req, res, next) {
  res.set('x-skillcrucial-user', 'b1fccc74-1b3b-4035-9644-2494f4f742b7')
  res.set('Access-Control-Expose-Headers', 'X-SKILLCRUCIAL-USER')
  next()
}

server.get('/api/v1/users', setHeader, async (req, res) => {
  const users = await getJson('users.json')
  // console.log(users)
  res.json(users)
})

server.get('/api/v1/users/:name', (req, res) => {
  const { name } = req.params
  res.json({ name })
})

server.get('/api/v1/users/take/:number', async (req, res) => {
  const { number } = req.params
  const { data: users } = await axios('https://jsonplaceholder.typicode.com/users')
  res.json(users.slice(0, +number))
})

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

const echo = sockjs.createServer()
echo.on('connection', (conn) => {
  connections.push(conn)
  conn.on('data', async () => { })

  conn.on('close', () => {
    connections = connections.filter((c) => c.readyState !== 3)
  })
})

server.get('/', (req, res) => {
  // const body = renderToString(<Root />);
  const title = 'Server side Rendering'
  res.send(
    Html({
      body: '',
      title
    })
  )
})

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }

  return res.send(
    Html({
      body: '',
      initialState
    })
  )
})

const app = server.listen(port)

echo.installHandlers(app, { prefix: '/ws' })

// eslint-disable-next-line no-console
console.log(`Serving at http://localhost:${port}`)
