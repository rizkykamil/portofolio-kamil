'use client'

import ProfileCard from '../../components/profileCard'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';


interface Blog {
    id: number
    judul: string
    gambar: string
    type: string
    isi: string
    time: string
    tanggal: string
}

export default function ContentBlog() {
    const [blog, setBlog] = useState<Blog | null>(null)
    const [loading, setLoading] = useState(true)
    const params = useParams()
    const { slug } = params

    useEffect(() => {
        async function fetchBlog() {
            try {
                const response = await fetch(`/api/blogs/${slug}`)
                const data = await response.json()
                if (response.ok) {
                    setBlog(data)
                }
            } catch (error) {
                console.error('Error fetching blog:', error)
            } finally {
                setLoading(false)
            }
        }

        if (slug) fetchBlog()
    }, [slug])

    return (
        <section className="content-box-area mt-4">
            <div className="container">
                <div className="row g-4">
                    <ProfileCard />
                    <div className="col-xl-8">
                        <div className="card content-box-card">
                            <div className="card-body portfolio-card article-details-card">
                                <div className="article-details-area">
                                    {/* Loading dan Not Found di sini */}
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


                                    ) : !blog ? (
                                        <div>Blog tidak ditemukan.</div>
                                    ) : (
                                        <>
                                            <div className="main-image">
                                                <img
                                                    src={blog.gambar || 'default_image.jpg'}
                                                    alt={blog.judul}
                                                    className="img-fluid w-100"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <ul className="list-unstyled article-tags">
                                                <li>{blog.time}</li>
                                                <li>{new Date(blog.tanggal).toLocaleDateString()}</li>
                                                <li>1.5k Views</li>
                                            </ul>
                                            <div className="article-details-text">
                                                <h3 className="main-title">{blog.judul}</h3>
                                                <div
                                                    className="article-content"
                                                    dangerouslySetInnerHTML={{ __html: blog.isi }}
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
