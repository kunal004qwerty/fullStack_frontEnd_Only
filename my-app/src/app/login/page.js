'use client'

import Link from "next/link"
import { useState } from "react"

export default function ContactForm() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        phone: '12345'
    })
    const [errors, setErrors] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        setErrors({ ...errors, [name]: '' }) // Clear field error on change
    }

    const validate = () => {
        const newErrors = {}
        if (!formData.email.trim()) newErrors.email = 'Email is required'
        if (!formData.password.trim()) newErrors.password = 'Password is required'
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

        console.log(formData);
        

    }




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


            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                LogIn
            </button>

            <p className="font-light text-sm mt-5">
                Don’t have an account?{' '}
                <Link href="/signup" className="text-blue-600 hover:underline cursor-pointer">
                    Signup
                </Link>
                {" "} Here
            </p>
        </form>
    )
}
