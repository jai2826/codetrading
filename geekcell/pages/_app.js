import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Script from 'next/script'
import '../styles/globals.css'
import { useState,useEffect } from 'react'


function MyApp({ Component, pageProps }) {
  return <>
    <Script strategy='lazyOnload' src={"https://www.googletagmanager.com/gtag/js?id=G-C2GW04W1L3"}></Script>
    <Script strategy='lazyOnload'>
    {
     `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-C2GW04W1L3');` 
    }

    </Script>
    <Navbar />
    <Component   {...pageProps} />
    <Footer />
  </>
}
export default MyApp




// const [reloadKey, setReloadKey] = useState(1)
// const [category, setCategory] = useState("Null")
// let checkcategory="Null"

//  let time = 0
//  const validity=(time)=>{
//     if(time===12){
//       setCategory("Annually")
//       setReloadKey(Math.random())
//     }
//     else if(time===6){
//       setCategory("Semi-annually")
//       setReloadKey(Math.random())
//     }
//     else if(time===1)
//     {
//       setCategory("Monthly");
//       setReloadKey(Math.random())
//     }
//     else if(time===0)
//     {
//       setCategory("Null");
//       setReloadKey(Math.random())
//     }
//   }
{/* <Component  key={reloadKey} validity={validity} checkcategory={category} {...pageProps} /> */}


