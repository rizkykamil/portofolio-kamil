import Image from 'next/image'
import MyExpertArea from './myExpertArea'

export default function WorkExperience() {
    return (
        <div className="col-xl-4">
            <div className="row g-4">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body work-experiance-card">
                            <h3 className="card-title">Work Experience</h3>
                            <div className="work-experiance-main">
                                <ul className="work-experiance-slider list-unstyled">
                                    <li>
                                        <div className="date">
                                            <p>2022-Now</p>
                                        </div>
                                        <div className="info">
                                            <div className="icon">
                                                <Image
                                                    src="https://wibidigital.com/assets/img/favicon.png"
                                                    width={20}
                                                    height={20}
                                                    alt="adobe"
                                                />
                                            </div>
                                            <div className="text">
                                                <h4 className="title">
                                                    Wibi Digital Teknologi
                                                </h4>
                                                <h6 className="subtitle">
                                                    Web Developer
                                                </h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="date">
                                            <p>2021-2022</p>
                                        </div>
                                        <div className="info">
                                            <div className="icon">
                                                <Image
                                                    src="https://crm.hepta.co.id/assets/img/fav-icon.png"
                                                    width={20}
                                                    height={20}
                                                    alt="google"
                                                ></Image>
                                            </div>
                                            <div className="text">
                                                <h4 className="title">
                                                    Heptaco Digital Media
                                                </h4>
                                                <h6 className="subtitle">
                                                    Web Developer
                                                </h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="date">
                                            <p>2019-2021</p>
                                        </div>
                                        <div className="info">
                                            <div className="icon">
                                                <Image
                                                    src="https://www.inti.co.id/wp-content/uploads/2020/03/Logo-INTI_a.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="adobe"
                                                />
                                            </div>
                                            <div className="text">
                                                <h4 className="title">
                                                    PT. Inti
                                                </h4>
                                                <h6 className="subtitle">
                                                    Internship Web Developer
                                                </h6>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="work-experiance-slider list-unstyled">
                                    <li>
                                        <div className="date">
                                            <p>2022-Now</p>
                                        </div>
                                        <div className="info">
                                            <div className="icon">
                                                <Image
                                                    src="https://wibidigital.com/assets/img/favicon.png"
                                                    alt="adobe"
                                                    width={20}
                                                    height={20}
                                                ></Image>
                                            </div>
                                            <div className="text">
                                                <h4 className="title">
                                                    Wibi Digital Teknologi
                                                </h4>
                                                <h6 className="subtitle">
                                                    Web Developer
                                                </h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="date">
                                            <p>2021-2022</p>
                                        </div>
                                        <div className="info">
                                            <div className="icon">
                                                <Image
                                                    src="https://crm.hepta.co.id/assets/img/fav-icon.png"
                                                    alt="google"
                                                    width={20}
                                                    height={20}
                                                ></Image>
                                            </div>
                                            <div className="text">
                                                <h4 className="title">
                                                    Heptaco Digital Media
                                                </h4>
                                                <h6 className="subtitle">
                                                    Web Developer
                                                </h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="date">
                                            <p>2019-2021</p>
                                        </div>
                                        <div className="info">
                                            <div className="icon">
                                                <Image
                                                    src="https://www.inti.co.id/wp-content/uploads/2020/03/Logo-INTI_a.svg"
                                                    alt="meta"
                                                    width={20}
                                                    height={20}
                                                ></Image>
                                            </div>
                                            <div className="text">
                                                <h4 className="title">
                                                    PT. Inti
                                                </h4>
                                                <h6 className="subtitle">
                                                    Internship Web Developer
                                                </h6>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <MyExpertArea />
            </div>
        </div>
    )
}
