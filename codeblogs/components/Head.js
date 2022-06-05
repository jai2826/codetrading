import React from 'react'
import Head from 'next/head'

const Header = () => {
    return (
        <Head>
            <script id='GTM_SCRIPT'
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NJSCBKF');`,
            }}></script>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-WWD26CNE2R"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());

                gtag('config', 'G-WWD26CNE2R');
            </script>

        </Head>
    )
}

export default Header