import { pool } from '../db.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {SECRET_JWT_KEY} from '../config.js'

export const register = async (req, res) => {
    try {
        const { email, username, password } = req.body
        const passwordHash = await bcrypt.hash(password, 10)
        const [result] = await pool.query('INSERT INTO user(email, username, password) VALUES(?,?,?)', [email, username, passwordHash])

        //jwt
        const token = jwt.sign({
            id: result.insertId,
        }, SECRET_JWT_KEY, 
        {
            expiresIn: "1d"
        },
        (error, token) => {
            if(error)console.log(error)
            res.json({ token })
        }
    );

        /* res.send(result) */
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const login = (req, res) => res.send('login')
