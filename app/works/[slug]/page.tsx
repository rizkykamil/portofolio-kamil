'use client'

import Link from 'next/link';
import ProfileCard from '../../components/profileCard'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'


interface Work {
    id: number
    judul: string
    gambar: string
    type: string
    isi: string
    time: string
    tanggal: string
    link: string
    challenge: string
    overview: string
    client : string
}

export default function ContentWork() {
    const [work, setWork] = useState<Work | null>(null)
    const [loading, setLoading] = useState(true)
    const params = useParams()
    const { slug } = params

    useEffect(() => {
        async function fetchWork() {
            try {
                const response = await fetch(`/api/works/${slug}`)
                const data = await response.json()
                if (response.ok) {
                    setWork(data)
                }
            } catch (error) {
                console.error('Error fetching work:', error)
            } finally {
                setLoading(false)
            }
        }

        if (slug) fetchWork()
    }, [slug])

    return (
        <section className="content-box-area mt-4">
            <div className="container">
                <div className="row g-4">
                    <ProfileCard />
                    <div className="col-xl-8">
                        <div className="card content-box-card">
                            <div className="card-body portfolio-card">
                                <div className="portfolio-details-area">
                                    {loading ? (
                                        <div className="text-center">
                                            <TypeAnimation
                                                sequence={[
                                                    'Loading...',
                                                    500, // jeda 1 detik
                                                    '',   // hapus
                                                    500,  // jeda 0.5 detik
                                                ]}
                                                wrapper="span"
                                                speed={50}
                                                //center

                                                repeat={Infinity}
                                                cursor={true}
                                                style={{ fontSize: '2em', display: 'inline-block' }}
                                            />
                                        </div>


                                    ) : !work ? (
                                        <div>Work tidak ditemukan.</div>
                                    ) : (
                                        <>
                                            <div className="main-image">
                                                <Image
                                                    src={work.gambar || 'default_image.jpg'}
                                                    alt={work.judul}
                                                    className="img-fluid w-100"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="portfolio-details-text">
                                                <div className="short-info">
                                                    <div className="info-item">
                                                        <p className="subtitle">Client For:</p>
                                                        <h4 className="card-title">
                                                            {work.client}
                                                        </h4>
                                                    </div>
                                                    <div className="info-item">
                                                        <p className="subtitle">Services:</p>
                                                        <h4 className="card-title">
                                                            {work.type}
                                                        </h4>
                                                        <Link href={work.link} className="website">
                                                            {work.link}
                                                            <svg className="arrow-up" width="14" height="15" viewBox="0 0 14 15" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9.91634 4.5835L4.08301 10.4168" strokeLinecap="round"
                                                                    strokeLinejoin="round">
                                                                </path>
                                                                <path d="M4.66699 4.5835H9.91699V9.8335" strokeLinecap="round"
                                                                    strokeLinejoin="round">
                                                                </path>
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="overview">
                                                    <h4 className="card-title">Overview</h4>
                                                    <div
                                                        className="article-content"
                                                        dangerouslySetInnerHTML={{ __html: work.overview }}
                                                    />

                                                </div>
                                            </div>

                                            <div className="more-info-block">
                                                <h4 className="card-title">Challenge</h4>
                                                <div
                                                    className="article-content"
                                                    dangerouslySetInnerHTML={{ __html: work.challenge }}
                                                />

                                            </div>
                                        </>

                                    )}
                                </div>

                                <div className="work-together-slider">
                                    <div className="slider-main d-flex gap-4 align-items-center">
                                        <div className="slider-item">
                                            <a href="contact.html">Let&apos;s👋 Work Together</a>
                                            <a href="contact.html">Let&apos;s👋 Work Together</a>
                                        </div>
                                        <div className="slider-item">
                                            <a href="contact.html">Let&apos;s👋 Work Together</a>
                                            <a href="contact.html">Let&apos;s👋 Work Together</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
