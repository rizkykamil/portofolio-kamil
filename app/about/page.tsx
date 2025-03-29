import Link from 'next/link'
import ProfileCard from '../components/profileCard'
import ScrollingInfo from '../components/scrollingInfo'
import Image from 'next/image'

async function fetchWorks() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/works`, {
            cache: 'no-store',
            next: { revalidate: 60 }
        });

        if (!response.ok) {
            return null;
        }

        const works = await response.json();
        return works;
    } catch (error) {
        console.error('Failed to fetch works:', error);
        return null;
    }
}


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

interface Work {
    id: number
    judul: string
    gambar: string
    type: string
    client: string
    link: string
}


export default async function About() {
    const works = await fetchWorks();
    const blogs = await fetchBlogs();

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
                                        <h2 className="main-common-title">
                                            Portofolio Project
                                        </h2>
                                        <div className="row client-feedback-slider">
                                            {works.length > 0 ? (
                                                works.map((work: Work) => (
                                                    <div key={work.id} className="col-lg-12">
                                                        <div className="portfolio-item me-3">
                                                            <div className="image">
                                                                <img
                                                                    src={work.gambar}
                                                                    alt={work.judul}
                                                                    className="img-fluid w-100"
                                                                    loading="lazy"
                                                                />
                                                                <Link href={work.link || '#'} className="full-image-preview parent-container">
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
                                                                    <p className="subtitle">{work.type}</p>
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
                                                <div className="portfolio-area mt-5">
                                                    <div className="row g-4 parent-container">
                                                        <div className="col-lg-12">
                                                            <div className="portfolio-item">
                                                                <div className="image" style={{ padding: '0px' }}>
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
                                    </div>
                                    <div className="article-publications">
                                        <h2 className="main-common-title">
                                            Article and Publications
                                        </h2>
                                        <div className="article-publications-main">
                                            <div className="row article-publications-slider">

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
