import { config } from 'dotenv'

config()

export const PORT = process.env.PORT
export const SECRET_JWT_KEY = process.env.SECRET_JWT_KEY
//DATABASE
export const HOST = process.env.HOST
export const USER = process.env.USER
export const PASSWORD = process.env.PASSWORD
export const DATABASE = process.env.DATABASE
export const PORTDB = process.env.PORTDB