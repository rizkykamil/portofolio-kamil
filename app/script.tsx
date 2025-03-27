import Script from 'next/script';

export default function Scripts() {
    return (
        <>
            {/* <Script
                src="https://cdn.jsdelivr.net/npm/clipboard@2.0.11/dist/clipboard.min.js"
                strategy="beforeInteractive"
            />

            <Script
                src="https://code.jquery.com/jquery-3.6.0.min.js"
                strategy="beforeInteractive"
            />

            <Script src="/assets/js/bootstrap.bundle.min.js" />
            <Script src="/assets/js/jquery.magnific-popup.min.js" />
            <Script src="/assets/js/ajax-form.js" />
            <Script src="/assets/js/slick.min.js" />
            <Script src="/assets/js/script.js" /> */}


            
            <Script src="/assets/js/vendor/jquery-3.6.0.min.js" />
            <Script src="/assets/js/bootstrap.bundle.min.js" />
            <Script src="/assets/js/jquery.magnific-popup.min.js" />
            <Script src="/assets/js/ajax-form.js" />
            <Script src="/assets/js/clipboard.min.js" />
            <Script src="/assets/js/slick.min.js" />
            <Script src="/assets/js/script.js" />
        </>
    );
}
