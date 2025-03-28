import Image from 'next/image'
import flozorsGymImage from '../../public/assets/img/projects/Flozorsgym.png'
import enforceaImage from '../../public/assets/img/projects/enforcea.png'

export default function RecentProjects() {
    return (
        <div className="col-xl-4">
            <div className="card card-projects">
                <div className="card-body">
                    <h3 className="card-title">
                        Recent Projects{' '}
                        <a className="link-btn" href="">
                            All Projects
                            <svg
                                className="icon"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.16699 10H15.8337"
                                    stroke="#4770FF"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.833 15L15.833 10"
                                    stroke="#4770FF"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.833 5L15.833 10"
                                    stroke="#4770FF"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </h3>
                    <div className="projects-main mt-24">
                        <div className="row g-4 parent-container">
                            <div className="col-lg-12">
                                <div className="project-item">
                                    <div className="image">
                                        <Image
                                            src={flozorsGymImage}
                                            alt="flozorsgym"
                                            className="img-fluid w-100"
                                        ></Image>
                                        <a
                                            href="https://flozorsgym.com/"
                                            target="_blank"
                                            className="full-image-preview "
                                        >
                                            <svg
                                                className="icon"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                            >
                                                <path d="M9 18l6-6-6-6"></path>
                                            </svg>
                                        </a>
                                        <div className="info">
                                            <span className="category">
                                                Web Development
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="project-item">
                                    <div className="image">
                                        <Image
                                            src={enforceaImage}
                                            alt="enforcea"
                                            className="img-fluid w-100"
                                        ></Image>
                                        <a
                                            href="https://www.enforcea.com/"
                                            target="_blank"
                                            className="full-image-preview "
                                        >
                                            <svg
                                                className="icon"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                            >
                                                <path d="M9 18l6-6-6-6"></path>
                                            </svg>
                                        </a>
                                        <div className="info">
                                            <span className="category">
                                                Web Development
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
