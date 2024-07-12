import {z} from 'zod'

export const registerSchema = z.object({
    user: z.string({
        required_error: 'Username is required'
    }),
    email: z.string({
        required_error: 'EMAL is required'
    }),
    password: z
        .string({
            required_error: "Password is requerid"
        })
        .min(6,{
            message: "Password min 7 characteres"
        })
})
export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required",

    }).email({
        message: "Invalid email"
    }),
    password: z.string({
        required_error: "Password is requerid"
    }).min(6, {
        message: "Password min 7 characteres"
    })
})