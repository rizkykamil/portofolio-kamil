'use client'
import React, { useState } from 'react'
import Swal from 'sweetalert2' // Import SweetAlert2

interface FormData {
    name: string
    email: string
    subject: string
    phone: string
    InquiryType: string
    message: string
}

export default function FormContact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        phone: '',
        InquiryType: '',
        message: '',
    })

    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null) // State untuk menyimpan error

    console.log(errorMessage)
    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault() // Mencegah pengiriman form default (refresh halaman)

        if (isLoading) return // Jangan kirim form jika sedang loading

        setIsLoading(true) // Set loading true saat pengiriman data

        // Kirim data ke server menggunakan fetch (atau bisa menggunakan axios)
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                })
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    phone: '',
                    InquiryType: '',
                    message: '',
                }) // Reset form setelah berhasil
                setErrorMessage(null) // Reset error message
            } else {
                const errorData = await response.json()
                setErrorMessage(errorData.message) // Menampilkan pesan error dari server
                console.log(errorData)
                Swal.fire({
                    title: 'Failed',
                    text:
                        errorData.message ||
                        'Failed to send message. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                })
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            Swal.fire({
                title: 'Error',
                text: 'An error occurred. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            })
        } finally {
            setIsLoading(false) // Set loading false setelah proses selesai
        }
    }

    return (
        <div className="comments-box">
            <form id="contact-form" action="/api/contact" method="POST">
                <input
                    type="hidden"
                    name="recaptcha_token"
                    id="recaptcha_token"
                />
                <div className="row gx-3">
                    <div className="col-md-6">
                        <div className="mb-4">
                            <label className="form-label">Name</label>
                            <input
                                name="name"
                                required
                                type="text"
                                id="name"
                                className="form-control shadow-none"
                                placeholder="John Doe"
                                value={formData.name} // Tautkan dengan state
                                onChange={handleChange} // Pastikan ada event handler
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-4">
                            <label className="form-label">Email</label>
                            <input
                                name="email"
                                required
                                type="email"
                                id="email"
                                className="form-control shadow-none"
                                placeholder="test@gmail.com"
                                value={formData.email} // Tautkan dengan state
                                onChange={handleChange} // Pastikan ada event handler
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-4">
                            <label className="form-label">Subject</label>
                            <input
                                name="subject"
                                required
                                type="text"
                                id="subject"
                                className="form-control shadow-none"
                                placeholder="Inquiry about Product"
                                value={formData.subject} // Tautkan dengan state
                                onChange={handleChange} // Pastikan ada event handler
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-4">
                            <label className="form-label">Phone</label>
                            <input
                                name="phone"
                                required
                                type="text"
                                id="phone"
                                className="form-control shadow-none"
                                placeholder="+62 812 3456 7890"
                                value={formData.phone} // Tautkan dengan state
                                onChange={(e) => {
                                    // Hanya izinkan angka, tanda +, dan tanda spasi
                                    const inputValue = e.target.value
                                    const regex = /^[0-9+\s]*$/ // Mengizinkan angka, +, dan spasi

                                    // Jika input valid, set state, jika tidak, tidak ada perubahan
                                    if (regex.test(inputValue)) {
                                        handleChange(e)
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="mb-4">
                            <label className="form-label">Inquiry Type</label>
                            <select
                                name="InquiryType"
                                className="form-select shadow-none"
                                id="InquiryType"
                                value={formData.InquiryType} // Tautkan dengan state
                                onChange={handleChange} // Pastikan ada event handler
                            >
                                <option value="">Select</option>
                                <option value="Recruitment Office">
                                    Recruitment Office
                                </option>
                                <option value="Freelance">Freelance</option>
                                <option value="Feedback">Feedback</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="mb-4">
                            <label className="form-label">Comment</label>
                            <textarea
                                name="message"
                                className="form-control shadow-none"
                                rows={4}
                                id="message"
                                placeholder="Please describe your inquiry"
                                value={formData.message} // Tautkan dengan state
                                onChange={handleChange} // Pastikan ada event handler
                            ></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button
                            type="submit"
                            className="submit-btn"
                            onClick={(e) => {
                                e.preventDefault()
                                handleSubmit(e) // Pastikan tidak ada setIsLoading di sini
                            }}
                            disabled={isLoading} // Nonaktifkan tombol ketika loading
                        >
                            {isLoading ? (
                                // loading ...
                                'Loading...'
                            ) : (
                                <>
                                    Send Message
                                    <svg
                                        className="icon"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17.5 11.6665V6.6665H12.5"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M17.5 6.6665L10 14.1665L2.5 6.6665"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
