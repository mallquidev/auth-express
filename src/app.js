import express from 'express'
import morgan from 'morgan'
import cookieParse from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/tasks.routes.js'
const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParse())

app.use('/api',authRoutes)
app.use('/api', taskRoutes)


export default app