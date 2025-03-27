import ProfileCard from './components/profileCard';
import WorkExperience from './components/workExperience';
import RecentProjects from './components/recentProjects';
import ServicesIOffered from './components/servicesIOffered';
import LetsWorkTogether from './components/letsWorkTogether';
export default function Home() {
    return (
        <>
            <section className="content-box-area mt-4">
                <div className="container">
                    <div className="row g-4">
                        <ProfileCard />
                        <WorkExperience />
                        <RecentProjects />
                    </div>
                    <div className="services-area mt-24">
                        <div className="row g-4">
                            <ServicesIOffered />
                            <LetsWorkTogether />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
