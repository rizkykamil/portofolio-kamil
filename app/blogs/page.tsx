import BlogArea from '../components/blogArea'
import ProfileCard from '../components/profileCard'
import ScrollingInfo from '../components/scrollingInfo'

export default function Blogs() {
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
                                                    <BlogArea />
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
