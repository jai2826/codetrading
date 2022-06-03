import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from '../components/Head'
import '../styles/globals.css'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

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


  // let myref = useRef();
  // const [hamactive, setHamactive] = useState(false)
  // useEffect(() => {
  //   document.addEventListener('mousedown', (event) => {
  //     if(!myref.current.contains(event.target))
  //     setHamactive(false)
  //   })

  // }, [])
  return <>
  <Head/>
  <Navbar />
    <Component   {...pageProps} />
    <Footer />
  </>
}

export default MyApp