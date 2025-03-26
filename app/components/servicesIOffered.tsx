import Image from 'next/image';
import prdDesignImage from '../../public/assets/img/icons/prd-design.svg';
import brandingImage from '../../public/assets/img/icons/branding.svg';
import webDevelopmentImage from '../../public/assets/img/icons/web-development.svg';

export default function ServicesIOffered() {
    return (
        <div className="col-xl-8">
            <div className="card services-card">
                <div className="card-body">
                    <h3 className="card-title">Services I Offered</h3>
                    <div className="services-main mt-24">
                        <div className="row g-4 justify-content-center align-items-center">
                            <div className="col-md-3 col-sm-6 col-6">
                                <div className="services-item text-center">
                                    <div className="image">
                                        <Image
                                            src={prdDesignImage}
                                            width={50}
                                            height={50}
                                            alt="prd-design"
                                        ></Image>
                                    </div>
                                    <div className="text">
                                        <h3 className="title">Web Design</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6">
                                <div className="services-item text-center">
                                    <div className="image">
                                        <Image
                                            src={brandingImage}
                                            width={50}
                                            height={50}
                                            alt="branding"
                                        ></Image>
                                    </div>
                                    <div className="text">
                                        <h3 className="title">Database</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-6">
                                <div className="services-item text-center">
                                    <div className="image">
                                        <Image
                                            src={webDevelopmentImage}
                                            width={50}
                                            height={50}
                                            alt="Web Development"
                                        ></Image>
                                    </div>
                                    <div className="text">
                                        <h3 className="title">
                                            Web Development
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
