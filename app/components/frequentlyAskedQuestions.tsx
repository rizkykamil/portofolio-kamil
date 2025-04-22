import Image from 'next/image'

export default function FrequentlyAskedQuestions() {
    return (
        <div className="frequently-asked-questions">
            <h2 className="main-common-title">Frequently Asked Questions</h2>
            <div className="frequently-asked-questions-main">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h4 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Apa saja layanan yang ditawarkan oleh Rizky
                                Kamil?
                                <span className="ms-auto">
                                    <span className="icon ms-4">
                                        <Image
                                            className="icon-plus"
                                            src="/assets/img/icons/plus.svg"
                                            alt="plus"
                                        />
                                        <Image
                                            className="icon-minus d-none"
                                            src="/assets/img/icons/minus.svg"
                                            alt="minus"
                                        />
                                    </span>
                                </span>
                            </button>
                        </h4>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <p>
                                    Rizky Kamil menawarkan layanan pengembangan
                                    web penuh, dengan keahlian di bagian backend
                                    dan lebih dari 4 tahun pengalaman dalam
                                    lebih dari 10+ proyek.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h4 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Bagaimana cara menghubungi Rizky Kamil untuk
                                diskusi proyek?
                                <span className="ms-auto">
                                    <span className="icon ms-4">
                                        <Image
                                            className="icon-plus"
                                            src="/assets/img/icons/plus.svg"
                                            alt="plus"
                                        />
                                        <Image
                                            className="icon-minus d-none"
                                            src="/assets/img/icons/minus.svg"
                                            alt="minus"
                                        />
                                    </span>
                                </span>
                            </button>
                        </h4>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <p>
                                    Anda dapat menghubungi Rizky Kamil melalui
                                    form kontak di halaman ini, atau dengan
                                    menekan tombol &quot;Book A Call&quot; untuk
                                    membuat janji konsultasi, serta bisa
                                    mengirim email melalui tombol &quot;Copy
                                    Email&quot;.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h4 className="accordion-header" id="headingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Apa pengalaman utama yang dimiliki Rizky Kamil?
                                <span className="ms-auto">
                                    <span className="icon ms-4">
                                        <Image
                                            className="icon-plus"
                                            src="/assets/img/icons/plus.svg"
                                            alt="plus"
                                        />
                                        <Image
                                            className="icon-minus d-none"
                                            src="/assets/img/icons/minus.svg"
                                            alt="minus"
                                        />
                                    </span>
                                </span>
                            </button>
                        </h4>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <p>
                                    Rizky Kamil adalah pengembang web
                                    berpengalaman dengan spesialisasi di backend
                                    development. Ia telah mengerjakan berbagai
                                    proyek besar selama 4 tahun terakhir dan
                                    berhasil menangani lebih dari 10+ proyek.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h4 className="accordion-header" id="headingFour">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                            >
                                Apakah Rizky Kamil menerima kolaborasi untuk
                                proyek desain dan pengembangan?
                                <span className="ms-auto">
                                    <span className="icon ms-4">
                                        <Image
                                            className="icon-plus"
                                            src="/assets/img/icons/plus.svg"
                                            alt="plus"
                                        />
                                        <Image
                                            className="icon-minus d-none"
                                            src="/assets/img/icons/minus.svg"
                                            alt="minus"
                                        />
                                    </span>
                                </span>
                            </button>
                        </h4>
                        <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <p>
                                    Ya, Rizky Kamil terbuka untuk kolaborasi
                                    dalam pengembangan web dan desain. Anda
                                    dapat mengisi form kontak di halaman ini
                                    untuk mendiskusikan ide atau kebutuhan Anda.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h4 className="accordion-header" id="headingFive">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                            >
                                Di mana saya bisa melihat proyek-proyek yang
                                telah dikerjakan oleh Rizky Kamil?
                                <span className="ms-auto">
                                    <span className="icon ms-4">
                                        <Image
                                            className="icon-plus"
                                            src="/assets/img/icons/plus.svg"
                                            alt="plus"
                                        />
                                        <Image
                                            className="icon-minus d-none"
                                            src="/assets/img/icons/minus.svg"
                                            alt="minus"
                                        />
                                    </span>
                                </span>
                            </button>
                        </h4>
                        <div
                            id="collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <p>
                                    Anda dapat melihat portofolio proyek Rizky
                                    Kamil dengan mengunjungi halaman
                                    &quot;Works&quot; di situs ini. Di sana
                                    terdapat daftar lengkap proyek-proyek yang
                                    telah dikerjakan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
