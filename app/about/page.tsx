'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Slider from "react-slick"
import Image from 'next/image'
import '../../public/assets/css/slick.css'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


import ProfileCard from '../components/profileCard'
import ScrollingInfo from '../components/scrollingInfo'

interface Work {
    id: number
    judul: string
    gambar: string
    type: string
    client: string
    link: string
}
export default function About() {
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }
    return (
        <>
            <section className="content-box-area mt-4">
                <div className="container">
                    <div className="row g-4">
                        <ProfileCard />
                        <div className="col-xl-8">
                            <div className="card content-box-card">
                                <div className="card-body">
                                    <div className="top-info">
                                        <div className="text">
                                            <h1 className="main-title">
                                                Hi, This Is{' '}
                                                <span>Rizky Kamil</span> 👋
                                            </h1>
                                            <p>
                                                A Passionate{' '}
                                                <b>Laravel Developer</b> 🖥️
                                                having
                                                <b> 4 years </b>
                                                of experience in the field of
                                                Web Development. I have worked
                                                on a wide range of projects and
                                                I am always looking to take on
                                                new and interesting projects.
                                            </p>
                                        </div>
                                        <div className="available-btn">
                                            <span>
                                                <i className="fas fa-circle"></i>{' '}
                                                Available For Hire
                                            </span>
                                        </div>
                                    </div>
                                    <div className="counter-area">
                                        <div className="counter">
                                            <div className="counter-item">
                                                <h3 className="number">4</h3>
                                                <p className="subtitle">
                                                    Year of Experience
                                                </p>
                                            </div>
                                            <div className="counter-item">
                                                <h3 className="number">10+</h3>
                                                <p className="subtitle">
                                                    Project Completed
                                                </p>
                                            </div>
                                            <div className="counter-item">
                                                <h3 className="number">10+</h3>
                                                <p className="subtitle">
                                                    Happy Client
                                                </p>
                                            </div>
                                        </div>
                                        <div className="circle-area">
                                            <div className="circle-text">
                                                <Image
                                                    className="circle-image"
                                                    src="assets/img/about-us/circle-text.svg"
                                                    width={100}
                                                    height={100}
                                                    alt="circle-text"
                                                />
                                                <Image
                                                    className="circle-image circle-image-light d-none"
                                                    src="assets/img/about-us/circle-text-light.svg"
                                                    width={100}
                                                    height={100}
                                                    alt="circle-text"
                                                />
                                                <span className="arrow-down">
                                                    <svg
                                                        width="40"
                                                        height="40"
                                                        viewBox="0 0 40 40"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M20 5V35"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M15 30L20 35L25 30"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="client-feedback">
                                        <h2 className="main-common-title">Portofolio Project</h2>
                                        {loading ? (
                                            <div className="portfolio-area mt-5">
                                                <div className="row g-4 parent-container">
                                                    <div className="col-lg-12">
                                                        <div className="portfolio-item me-3 loading">
                                                            <div className="image" style={{ minHeight: 200 }}>
                                                                <span className="text-muted">Loading projects...</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : works.length > 0 ? (
                                            <Slider {...settings}>
                                                {works.map((work) => (
                                                    <div key={work.id}>
                                                        <div className="col-lg-12">
                                                            <div className="portfolio-item me-3">
                                                                <div className="image">
                                                                    <img
                                                                        src={work.gambar}
                                                                        alt={work.judul}
                                                                        className="img-fluid w-100"
                                                                        loading="lazy"
                                                                    />
                                                                    <a
                                                                        href={work.link}
                                                                        className="full-image-preview parent-container"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
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
                                                                    </a>
                                                                </div>
                                                                <div className="text">
                                                                    <div className="info">
                                                                        <Link href={`/works/${work.link}`} className="title">
                                                                            {work.judul}
                                                                        </Link>
                                                                        <p className="subtitle">{work.type}</p>
                                                                    </div>
                                                                    <div className="visite-btn">
                                                                        <a
                                                                            href={work.link}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                        >
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
                                                                                ></path>
                                                                                <path
                                                                                    d="M4.66699 4.5835H9.91699V9.8335"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                ></path>
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </Slider>
                                        ) : (
                                            <div className="portfolio-area mt-5">
                                                <div className="row g-4 parent-container">
                                                    <div className="col-lg-12">
                                                        <div className="portfolio-item">
                                                            <div className="image" style={{ padding: 0 }}>
                                                                <div className="text d-flex justify-content-center">
                                                                    <div className="info">
                                                                        <p className="subtitle">Sabar ya lagi dibuat 🙏🏻😭</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="article-publications">
                                        <h2 className="main-common-title">
                                            Article and Publications
                                        </h2>
                                        <div className="article-publications-main">
                                            <div className="row article-publications-slider">
                                                <div className="portfolio-area mt-5">
                                                    <div className="row g-4 parent-container">
                                                        <div className="col-lg-12">
                                                            <div className="portfolio-item">
                                                                <div
                                                                    className="image"
                                                                    style={{
                                                                        padding:
                                                                            '0px',
                                                                    }}
                                                                >
                                                                    <div className="text d-flex justify-content-center">
                                                                        <div className="info">
                                                                            <p className="subtitle">
                                                                                Sabar
                                                                                ya
                                                                                lagi
                                                                                dibuat
                                                                                🙏🏻😭
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ScrollingInfo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
