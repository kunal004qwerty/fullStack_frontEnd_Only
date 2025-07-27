'use client'

import { OnSignUp } from "@/redux/actions/user-actions"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function ContactForm() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        phone: ''
    })
    const [errors, setErrors] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user)

    const router = useRouter()

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        setErrors({ ...errors, [name]: '' }) // Clear field error on change
    }

    const validate = () => {
        const newErrors = {}
        if (!formData.email.trim()) newErrors.email = 'Email is required'
        if (!formData.password.trim()) newErrors.password = 'Password is required'
        if (!formData.phone.trim()) newErrors.phone = 'Phone No. is required'
        return newErrors
    }

    function handleSubmit(e) {
        e.preventDefault()
        setErrorMessage('')
        setSuccessMessage('')

        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        try {
            dispatch(OnSignUp(formData))
            setSuccessMessage('Signup successful!')

            // Reset form
            setFormData({ email: '', password: '', phone: '' })
            setErrors({})

            setTimeout(() => {
                // redirect to link /shopping
                router.push('/shopping')
            }, 2000);

        } catch (error) {
            console.log(error);

        }


    }


    // console.log("user", user);
    

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded-md shadow-md mt-5">

            {errorMessage && (
                <p className="mb-4 text-red-600 font-semibold">{errorMessage}</p>
            )}

            {successMessage && (
                <p className="mb-4 text-green-600 font-semibold">{successMessage}</p>
            )}

            <div className="mb-4">
                <label className="block mb-1">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="mb-4">
                <label className="block mb-1">Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            <div className="mb-4">
                <label className="block mb-1">Phone NO.</label>
                <input
                    type="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>


            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                SignUp
            </button>

            <p className="font-light text-sm mt-5">
                Already have an account?{' '}
                <Link href="/login" className="text-blue-600 hover:underline cursor-pointer">
                    LogIn
                </Link>
                {" "} here
            </p>
        </form>
    )
}
