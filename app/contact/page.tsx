import ProfileCard from '../components/profileCard';
import '../../public/assets/css/bootstrap.min.css';  
import FormContact from '../components/formContact';
import Maps from '../components/maps';
import FrequentlyAskedQuestions from '../components/frequentlyAskedQuestions';

export default function Contact() {
    return (
        <section className="content-box-area mt-4">
            <div className="container">
                <div className="row g-4">
                    <ProfileCard />
                    <div className="col-xl-8">
                        <div className="card content-box-card">
                            <div className="card-body portfolio-card contact-card">
                                <div className="top-info">
                                    <div className="text">
                                        <h1 className="main-title">
                                            Let's 👋 <span>Work</span> Together
                                        </h1>
                                        <p>
                                            I'm here to help if you're searching
                                            for a Web Developer to bring your
                                            idea to life or a design partner to
                                            help take your business to the next
                                            level.
                                        </p>
                                    </div>
                                </div>
                                <div className="contact-area">
                                    <div className="leave-comments-area">
                                        <FormContact />
                                    </div>
                                    <Maps />
                                    <FrequentlyAskedQuestions />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
