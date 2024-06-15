import { pool } from '../db.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
    try {
        const { email, username, password } = req.body
        const passwordHash = await bcrypt.hash(password, 10)
        const [result] = await pool.query('INSERT INTO user(email, username, password) VALUES(?,?,?)', [email, username, passwordHash])
        res.send(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const login = (req, res) => res.send('login')
