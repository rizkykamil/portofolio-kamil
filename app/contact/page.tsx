import ProfileCard from '../components/profileCard';

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
                                        <div className="comments-box">
                                            <form
                                                id="contact-form"
                                                action="/contact-post"
                                                method="POST"
                                            >
                                                <input
                                                    type="hidden"
                                                    name="recaptcha_token"
                                                    id="recaptcha_token"
                                                />
                                                <div className="row gx-3">
                                                    <div className="col-md-6">
                                                        <div className="mb-4">
                                                            <label className="form-label">
                                                                Name
                                                            </label>
                                                            <input
                                                                name="name"
                                                                required
                                                                type="text"
                                                                id="name"
                                                                className="form-control shadow-none"
                                                                placeholder="John Doe"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-4">
                                                            <label className="form-label">
                                                                Email
                                                            </label>
                                                            <input
                                                                name="email"
                                                                required
                                                                type="email"
                                                                id="email"
                                                                className="form-control shadow-none"
                                                                placeholder="test@gmail.com"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-4">
                                                            <label className="form-label">
                                                                Subject
                                                            </label>
                                                            <input
                                                                name="subject"
                                                                required
                                                                type="text"
                                                                id="subject"
                                                                className="form-control shadow-none"
                                                                placeholder="Inquiry about Product"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-4">
                                                            <label className="form-label">
                                                                Phone
                                                            </label>
                                                            <input
                                                                name="phone"
                                                                required
                                                                type="text"
                                                                id="phone"
                                                                className="form-control shadow-none"
                                                                placeholder="+62 812 3456 7890"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="mb-4">
                                                            <label className="form-label">
                                                                Inquiry Type
                                                            </label>
                                                            <select
                                                                name="InquiryType"
                                                                className="form-select shadow-none"
                                                                id="InquiryType"
                                                            >
                                                                <option value="">
                                                                    Select
                                                                </option>
                                                                <option value="Recruitment Office">
                                                                    Recruitment
                                                                    Office
                                                                </option>
                                                                <option value="Freelance">
                                                                    Freelance
                                                                </option>
                                                                <option value="Feedback">
                                                                    Feedback
                                                                </option>
                                                                <option value="Other">
                                                                    Other
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="mb-4">
                                                            <label className="form-label">
                                                                Comment
                                                            </label>
                                                            <textarea
                                                                name="message"
                                                                className="form-control shadow-none"
                                                                rows={4}
                                                                id="message"
                                                                placeholder="Please describe your inquiry"
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button
                                                            type="button"
                                                            className="submit-btn"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#verificationModal"
                                                            id="submit-btn"
                                                        >
                                                            Send Message
                                                            <svg
                                                                className="icon"
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M17.5 11.6665V6.6665H12.5"
                                                                    stroke="white"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                ></path>
                                                                <path
                                                                    d="M17.5 6.6665L10 14.1665L2.5 6.6665"
                                                                    stroke="white"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                ></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                            <p className="ajax-response mb-0"></p>
                                        </div>
                                    </div>
                                    <div className="contact-map-area">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15864.720020361712!2d107.0657552!3d-6.2399913!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sid!2sid!4v1726279953408!5m2!1sid!2sid"
                                            allowFullScreen={true}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                    <div className="frequently-asked-questions">
                                        <h2 className="main-common-title">
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="frequently-asked-questions-main">
                                            <div
                                                className="accordion"
                                                id="accordionExample"
                                            >
                                                <div className="accordion-item">
                                                    <h4
                                                        className="accordion-header"
                                                        id="headingOne"
                                                    >
                                                        <button
                                                            className="accordion-button"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseOne"
                                                            aria-expanded="true"
                                                            aria-controls="collapseOne"
                                                        >
                                                            Apa saja layanan
                                                            yang ditawarkan oleh
                                                            Rizky Kamil?
                                                            <span className="ms-auto">
                                                                <span className="icon ms-4">
                                                                    <img
                                                                        className="icon-plus"
                                                                        src="/assets/img/icons/plus.svg"
                                                                        alt="plus"
                                                                    />
                                                                    <img
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
                                                                Rizky Kamil
                                                                menawarkan
                                                                layanan
                                                                pengembangan web
                                                                penuh, dengan
                                                                keahlian di
                                                                bagian backend
                                                                dan lebih dari 4
                                                                tahun pengalaman
                                                                dalam lebih dari
                                                                10+ proyek.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h4
                                                        className="accordion-header"
                                                        id="headingTwo"
                                                    >
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo"
                                                            aria-expanded="false"
                                                            aria-controls="collapseTwo"
                                                        >
                                                            Bagaimana cara
                                                            menghubungi Rizky
                                                            Kamil untuk diskusi
                                                            proyek?
                                                            <span className="ms-auto">
                                                                <span className="icon ms-4">
                                                                    <img
                                                                        className="icon-plus"
                                                                        src="/assets/img/icons/plus.svg"
                                                                        alt="plus"
                                                                    />
                                                                    <img
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
                                                                Anda dapat
                                                                menghubungi
                                                                Rizky Kamil
                                                                melalui form
                                                                kontak di
                                                                halaman ini,
                                                                atau dengan
                                                                menekan tombol
                                                                "Book A Call"
                                                                untuk membuat
                                                                janji
                                                                konsultasi,
                                                                serta bisa
                                                                mengirim email
                                                                melalui tombol
                                                                "Copy Email".
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h4
                                                        className="accordion-header"
                                                        id="headingThree"
                                                    >
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseThree"
                                                            aria-expanded="false"
                                                            aria-controls="collapseThree"
                                                        >
                                                            Apa pengalaman utama
                                                            yang dimiliki Rizky
                                                            Kamil?
                                                            <span className="ms-auto">
                                                                <span className="icon ms-4">
                                                                    <img
                                                                        className="icon-plus"
                                                                        src="/assets/img/icons/plus.svg"
                                                                        alt="plus"
                                                                    />
                                                                    <img
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
                                                                Rizky Kamil
                                                                adalah
                                                                pengembang web
                                                                berpengalaman
                                                                dengan
                                                                spesialisasi di
                                                                backend
                                                                development. Ia
                                                                telah
                                                                mengerjakan
                                                                berbagai proyek
                                                                besar selama 4
                                                                tahun terakhir
                                                                dan berhasil
                                                                menangani lebih
                                                                dari 10+ proyek.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h4
                                                        className="accordion-header"
                                                        id="headingFour"
                                                    >
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseFour"
                                                            aria-expanded="false"
                                                            aria-controls="collapseFour"
                                                        >
                                                            Apakah Rizky Kamil
                                                            menerima kolaborasi
                                                            untuk proyek desain
                                                            dan pengembangan?
                                                            <span className="ms-auto">
                                                                <span className="icon ms-4">
                                                                    <img
                                                                        className="icon-plus"
                                                                        src="/assets/img/icons/plus.svg"
                                                                        alt="plus"
                                                                    />
                                                                    <img
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
                                                                Ya, Rizky Kamil
                                                                terbuka untuk
                                                                kolaborasi dalam
                                                                pengembangan web
                                                                dan desain. Anda
                                                                dapat mengisi
                                                                form kontak di
                                                                halaman ini
                                                                untuk
                                                                mendiskusikan
                                                                ide atau
                                                                kebutuhan Anda.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h4
                                                        className="accordion-header"
                                                        id="headingFive"
                                                    >
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseFive"
                                                            aria-expanded="false"
                                                            aria-controls="collapseFive"
                                                        >
                                                            Di mana saya bisa
                                                            melihat
                                                            proyek-proyek yang
                                                            telah dikerjakan
                                                            oleh Rizky Kamil?
                                                            <span className="ms-auto">
                                                                <span className="icon ms-4">
                                                                    <img
                                                                        className="icon-plus"
                                                                        src="/assets/img/icons/plus.svg"
                                                                        alt="plus"
                                                                    />
                                                                    <img
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
                                                                Anda dapat
                                                                melihat
                                                                portofolio
                                                                proyek Rizky
                                                                Kamil dengan
                                                                mengunjungi
                                                                halaman "Works"
                                                                di situs ini. Di
                                                                sana terdapat
                                                                daftar lengkap
                                                                proyek-proyek
                                                                yang telah
                                                                dikerjakan.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
