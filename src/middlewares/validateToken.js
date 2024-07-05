import jwt from 'jsonwebtoken'
import {SECRET_JWT_KEY} from '../config.js'

export const authRequired = (req, res, next) => {
    const {token} = req.cookies
    if(!token) return res.status(401).json({message: "No token, authorization denied"})

    jwt.verify(token, SECRET_JWT_KEY, (err, user)=>{
        if(err) return res.status(401).json({message: 'Invalid token'})
        console.log(user)
    })
    console.log(token)

    next()
}