import Link from "next/link";

export default function ScrollingInfo() {
    return (
        <div className="work-together-slider">
            <div className="slider-main d-flex gap-4 align-items-center">
                <div className="slider-item">
                    <Link href="/contact">Let&apos;s 👋 Work Together</Link>
                    <Link href="/contact">Let&apos;s 👋 Work Together</Link>
                </div>
                <div className="slider-item">
                    <Link href="/contact">Let&apos;s 👋 Work Together</Link>
                    <Link href="/contact">Let&apos;s 👋 Work Together</Link>
                </div>
            </div>
        </div>
    );
}
