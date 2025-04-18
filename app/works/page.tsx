'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import ProfileCard from '../components/profileCard'
import ScrollingInfo from '../components/scrollingInfo'

// Define an interface for the work structure (same as API response)
interface Work {
    id: number
    judul: string
    gambar: string
    type: string
    client: string
    link: string
}

export default function Works() {
    const [works, setWorks] = useState<Work[]>([])
    const [loading, setLoading] = useState(true)

    // Fetch works data when the component is mounted
    useEffect(() => {
        async function fetchWorks() {
            try {
                const response = await fetch('/api/works')
                const data = await response.json()

                // If works are found, update the state
                if (response.ok && data.length > 0) {
                    setWorks(data)
                }
            } catch (error) {
                console.error('Error fetching works:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchWorks()
    }, [])

    return (
        <section className="content-box-area mt-4">
            <div className="container">
                <div className="row g-4">
                    <ProfileCard />
                    <div className="col-xl-8">
                        <div className="card content-box-card">
                            <div className="card-body portfolio-card">
                                <div className="top-info">
                                    <div className="text">
                                        <h1 className="main-title">
                                            Check Out My Latest{' '}
                                            <span>Projects</span>
                                        </h1>
                                        <p>
                                            I&apos;m here to help if you&apos;re
                                            searching for a Web Development to
                                            bring your idea to life or a
                                            Developer partner to help take your
                                            business to the next level.
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-area">
                                    <div className="row g-4 parent-container">
                                        {loading ? (
                                            <div className="col-lg-12">
                                                <div className="portfolio-item">
                                                    <div className="image" style={{ padding: '0px' }}>
                                                        <div className="text d-flex justify-content-center">
                                                            <div className="info">
                                                                <p className="subtitle">Loading projects...</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : works.length > 0 ? (
                                            works.map((work) => (
                                                <div key={work.id} className="col-lg-12">
                                                    <div className="portfolio-item">
                                                        <div className="image">
                                                            <img
                                                                src={work.gambar}
                                                                alt={work.judul}
                                                                className="img-fluid w-100"
                                                                loading="lazy"
                                                            />
                                                            <Link href={work.link} className="full-image-preview parent-container">
                                                                <svg
                                                                    className="icon"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="1.5"
                                                                >
                                                                    <path d="M6 10h8M10 6l4 4-4 4" />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                        <div className="text">
                                                            <div className="info">
                                                                <h3 className="title">{work.judul}</h3>
                                                                <p className="subtitle">{work.client}</p>
                                                            </div>
                                                            <div className="visite-btn">
                                                                <Link href={work.link}>
                                                                    Visit Site
                                                                    <svg
                                                                        className="arrow-up"
                                                                        width="14"
                                                                        height="15"
                                                                        viewBox="0 0 14 15"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9.91634 4.5835L4.08301 10.4168"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                        <path
                                                                            d="M4.66699 4.5835H9.91699V9.8335"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="col-lg-12">
                                                <div className="portfolio-item">
                                                    <div className="image" style={{ padding: '0px' }}>
                                                        <div className="text d-flex justify-content-center">
                                                            <div className="info">
                                                                <p className="subtitle"> Sabar ya lagi dibuat 🙏🏻😭 </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <ScrollingInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
