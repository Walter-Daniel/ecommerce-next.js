import {z} from 'zod';


export const userSchema = z.object({
    displayName: z.string().min(3, {
        message: 'Name must be at least 3 characters long'
    }).max(30, {
        message: 'Name must be less than 30 characters long'
    }),
    email: z.string().email({
        message: 'Please enter a valid email'
    }),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters long'
    }).max(12, {
        message: 'Password must be less than 12 characters long'
    }),
    confirmPassword: z.string().min(6, {
        message: 'Password must be at least 6 characters long'
    }).max(12, {
        message: 'Password must be less than 12 characters long'
    }),
}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword']
})