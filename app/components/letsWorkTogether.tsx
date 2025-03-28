import Link from 'next/link'

export default function LetsWorkTogether() {
    return (
        <div className="col-xl-4">
            <div className="card lets-talk-together-card">
                <div className="card-body">
                    <div className="scrolling-info">
                        <div className="slider-item">
                            <p>
                                Available For Hire 🚀 Web Developer 💻 Available
                                For Hire 🚀 Web Developer 💻
                            </p>
                        </div>
                    </div>
                    <h3 className="card-title">
                        Let&apos;s👋
                        <span className="d-block">Work Together</span>
                    </h3>
                    <Link className="link-btn" href="/contact">
                        Let&apos;s Talk
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
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M17.5 6.6665L10 14.1665L2.5 6.6665"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}
