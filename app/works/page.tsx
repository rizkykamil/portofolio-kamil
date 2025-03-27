import ProfileCard from '../components/profileCard';
import ScrollingInfo from '../components/scrollingInfo';

export default function Works() {
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
                                            Check Out My Latest{' '}
                                            <span>Projects</span>
                                        </h1>
                                        <p>
                                            I&apos;m here to help if you&apos;re
                                            searching for a Web Development to
                                            bring your idea to life or a
                                            Developer partner to help take your
                                            business to the next level.
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-area">
                                    <div className="row g-4 parent-container">
                                        <div className="col-lg-12">
                                            <div className="portfolio-item">
                                                <div
                                                    className="image"
                                                    style={{ padding: '0px' }}
                                                >
                                                    <div className="text d-flex justify-content-center">
                                                        <div className="info">
                                                            <p className="subtitle">
                                                                Sabar ya lagi
                                                                dibuat 🙏🏻😭
                                                            </p>
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
    );
}
