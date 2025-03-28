import Image from 'next/image'
import laravelImage from '../../public/assets/img/icons/laravel.svg'
import notionImage from '../../public/assets/img/icons/notion.svg'
import figmaImage from '../../public/assets/img/icons/figma.svg'
import githubImage from '../../public/assets/img/icons/github.svg'

export default function MyExpertArea() {
    return (
        <div className="col-lg-12">
            <div className="card expertise-card">
                <div className="card-body">
                    <h3 className="card-title">My Expert Area</h3>
                    <div className="expertise-main mt-24">
                        <div className="row g-3">
                            <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                                <div className="expertise-item">
                                    <div className="image text-center">
                                        <Image
                                            src={laravelImage}
                                            width={50}
                                            height={50}
                                            alt="Laravel"
                                        ></Image>
                                    </div>
                                    <div className="text">
                                        <h4 className="title">Laravel</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                                <div className="expertise-item">
                                    <div className="image text-center">
                                        <Image
                                            src={notionImage}
                                            width={50}
                                            height={50}
                                            alt="notion"
                                        ></Image>
                                    </div>
                                    <div className="text">
                                        <h4 className="title">Notion</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                                <div className="expertise-item">
                                    <div className="image text-center">
                                        <Image
                                            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/150px-MySQL_logo.svg.png"
                                            width={50}
                                            height={50}
                                            alt="micro"
                                        ></Image>
                                    </div>
                                    <div className="text">
                                        <h4 className="title">Database</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                                <div className="expertise-item">
                                    <div className="image text-center">
                                        <Image
                                            src={figmaImage}
                                            width={50}
                                            height={50}
                                            alt="figma"
                                        ></Image>
                                    </div>
                                    <div className="text">
                                        <h4 className="title">Figma</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                                <div className="expertise-item">
                                    <div className="image text-center">
                                        <Image
                                            src={githubImage}
                                            width={50}
                                            height={50}
                                            alt="github"
                                        ></Image>
                                    </div>
                                    <div className="text">
                                        <h4 className="title">Github</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                                <div className="expertise-item">
                                    <div className="image text-center">
                                        <Image
                                            src="https://github.githubassets.com/assets/actions-icon-actions-61925a4b8822.svg"
                                            width={50}
                                            height={50}
                                            alt="zeplin"
                                        ></Image>
                                    </div>
                                    <div className="text">
                                        <h4 className="title">Github Action</h4>
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
