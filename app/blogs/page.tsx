'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import ProfileCard from '../components/profileCard'
import ScrollingInfo from '../components/scrollingInfo'

interface Blog {
    id: number
    judul: string
    gambar: string
    type: string
    isi: string
    time: number
    slug: string
    tanggal: string
    // link: string
}


export default function Blogs() {
    const [blogs, setBlog] = useState<Blog[]>([])
    const [loading, setLoading] = useState(true)

    // Fetch blogs data when the component is mounted
    useEffect(() => {
        async function fetchBlog() {
            try {
                const response = await fetch('/api/blogs')
                const data = await response.json()

                // If blogs are found, update the state
                if (response.ok && data.length > 0) {
                    setBlog(data)
                }
            } catch (error) {
                console.error('Error fetching blogs:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchBlog()
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
                                            My Recent Article and Publications
                                        </h1>
                                        <p>
                                            I&apos;m here to help if you&apos;re
                                            searching for a Web Developer to
                                            bring your idea to life or a
                                            Programmer partner to help take your
                                            business to the next level.
                                        </p>
                                    </div>
                                </div>
                                {/* <div className="article-publications article-area">
                                    <div className="article-publications-main">
                                        <div className="row">
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
                                </div> */}

                                <div className="article-publications article-area">
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
                                        ) : blogs.length > 0 ? (
                                            blogs.map((blog) => (
                                                <div key={blog.id} className="col-xl-6 col-lg-4 col-md-6">
                                                    <div className="article-publications-item">
                                                        <div className="image">
                                                            <img
                                                                src={blog.gambar}
                                                                alt={blog.judul}
                                                                className="img-fluid w-100"
                                                                loading="lazy"
                                                            />
                                                            <Link href="" className="tags">{blog.type}</Link>
                                                        </div>
                                                        <div className="text">
                                                            <Link href={`/blogs/${blog.slug}`} className="tags">
                                                                {blog.type}
                                                            </Link>
                                                            <ul className="list-unstyled">
                                                                <li>{blog.time} min read</li>
                                                                <li>{blog.tanggal}</li>
                                                            </ul>
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
