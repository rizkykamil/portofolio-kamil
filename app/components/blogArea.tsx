import Link from "next/link";

async function fetchBlogs() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
            cache: 'no-store',
            next: { revalidate: 60 }
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

interface Blog {
    id: number;
    judul: string;
    gambar: string;
    type: string;
    slug: string;
    created_at: string;
}

export default async function BlogArea() {
    const blogs = await fetchBlogs();

    return (
        <div className="portfolio-area">
            <div className="row g-4 parent-container">
                {blogs && blogs.length > 0 ? (
                    blogs.map((blog: Blog) => (
                        <div key={blog.id} className="col-lg-12">
                            <div className="portfolio-item">
                                <div className="image">
                                    <img
                                        src={blog.gambar}
                                        alt={blog.judul}
                                        className="img-fluid w-100"
                                        loading="lazy"
                                    />
                                    <Link href={`/blogs/${blog.slug}`} className="full-image-preview parent-container">
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
                                        <h3 className="title">{blog.judul}</h3>
                                        <p className="subtitle">{blog.type}</p>
                                    </div>
                                    <div className="visite-btn">
                                        <Link href={`/blogs/${blog.slug}`}>
                                            Read More
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
                            <div className="image" style={{ padding: '0px' }} >
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
    );
}
