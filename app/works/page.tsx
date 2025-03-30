import ProfileCard from '../components/profileCard'
import ScrollingInfo from '../components/scrollingInfo'
import PortofoliArea from '../components/portofoliArea'


// Fetch Works function
async function fetchWorks() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/works`, {
            cache: 'no-store', // No cache for fresh data
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

export default async function Works() {
    const works = await fetchWorks(); // Fetch works on the server-side

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
                                {/* Pass works to PortofoliArea */}
                                <PortofoliArea works={works || []} />

                                <ScrollingInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
