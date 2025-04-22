import Image from 'next/image';

export default function Background() {
    return (
        <>
            <div className="background-shapes">
                <div className="shape-1 common-shape">
                    <Image
                        src="/assets/img/bg/banner-shape-1.png"
                        alt="banner-shape-1"
                        className="img-fluid"
                        loading="lazy"
                        width={1088}
                        height={1088}
                    />
                </div>
                <div className="shape-2 common-shape">
                    <Image
                        src="/assets/img/bg/banner-shape-1.png"
                        alt="banner-shape-1"
                        className="img-fluid"
                        loading="lazy"
                        width={1088}
                        height={1088}
                    />
                </div>
                <div className="threed-shape-1 move-with-cursor" data-value="1">
                    <Image
                        src="/assets/img/bg/object-3d-1.png"
                        alt="object-3d-1"
                        className="img-fluid"
                        loading="lazy"
                        width={64}
                        height={64}
                    />
                </div>
                <div className="threed-shape-2 move-with-cursor" data-value="1">
                    <Image
                        src="/assets/img/bg/object-3d-2.png"
                        alt="object-3d-2"
                        className="img-fluid"
                        loading="lazy"
                        width={64}
                        height={64}
                    />
                </div>
            </div>
        </>
    )
}
