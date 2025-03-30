import BlogArea from '../components/blogArea'
import ProfileCard from '../components/profileCard'
import ScrollingInfo from '../components/scrollingInfo'

// app/components/blogArea.tsx
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

// Fetch Blogs function should be here as well
async function fetchBlogs() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
            // cache: 'no-store', // No cache for fresh data
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            return null;
        }

        const blogs = await response.json();
        return blogs;
    } catch (error) {
        console.error('Failed to fetch blogs:', error);
        return null;
    }
}

export default function Blogs({ blogs }: { blogs: Blog[] }) {
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
                                                    {/* Pass blogs to BlogArea */}
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

// Fetch blogs on the server side and pass them as props to the Blogs page
export async function getServerSideProps() {
    const blogs = await fetchBlogs();

    return {
        props: {
            blogs: blogs || [], // If no blogs, return an empty array
        },
    };
}
