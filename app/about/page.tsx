import ProfileCard from '../components/profileCard';
import WorkExperience from '../components/workExperience';
import RecentProjects from '../components/recentProjects';
import ServicesIOffered from '../components/servicesIOffered';
import LetsWorkTogether from '../components/letsWorkTogether';
import Image from 'next/image';
export default function About() {
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
                                                <b>4 years</b>
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
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M15 30L20 35L25 30"
                                                            stroke="white"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
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
                                    <div className="work-together-slider">
                                        <div className="slider-main d-flex gap-4 align-items-center">
                                            <div className="slider-item">
                                                <a href="contact.html">
                                                    Let's 👋 Work Together
                                                </a>
                                                <a href="contact.html">
                                                    Let's 👋 Work Together
                                                </a>
                                            </div>
                                            <div className="slider-item">
                                                <a href="contact.html">
                                                    Let's 👋 Work Together
                                                </a>
                                                <a href="contact.html">
                                                    Let's 👋 Work Together
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
