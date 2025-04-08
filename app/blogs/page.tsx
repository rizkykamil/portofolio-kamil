// app/blogs/page.tsx
import BlogArea from '../components/blogArea'
import ProfileCard from '../components/profileCard'
import ScrollingInfo from '../components/scrollingInfo'

// Definisikan interface Blog
interface Blog {
    id: number
    judul: string
    type: string
    time: number
    tanggal: string
    gambar: string
    slug: string
    isi: string
    created_at: string
}

// Fungsi fetch blogs
async function fetchBlogs(): Promise<Blog[]> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/blogs`,
            {
                // Gunakan revalidate untuk caching yang lebih baik
                next: {
                    revalidate: 60, // Regenerasi setiap 60 detik
                },
            }
        )

        if (!response.ok) {
            throw new Error('Failed to fetch blogs')
        }

        return await response.json()
    } catch (error) {
        console.error('Error fetching blogs:', error)
        return [] // Kembalikan array kosong jika gagal
    }
}

export default async function BlogsPage() {
    const blogs = await fetchBlogs()

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
                                <div className="article-publications article-area">
                                    <div className="article-publications-main">
                                        <div className="row">
                                            <div className="portfolio-area mt-5">
                                                <div className="row g-4 parent-container">
                                                    <BlogArea blogs={blogs} />
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
    )
}
