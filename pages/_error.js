import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

function CustomError({ statusCode }) {
   const router = useRouter()
   const title = statusCode === 404 ? 'Page Not Found' : (statusCode && 'Internal Server Error' || 'An unexpected error has occurred');
   const msg = statusCode === 404 ? 'We’re sorry, the page you have looked for doesn’t exist in our website! Please check that the page path contains typos' : (statusCode && 'That’s an error. There was an error. Please try again later. That’s all we know.');
   return (
      <>
         <Head>
            <title>{statusCode} - Page Nizar</title>
            <link rel="icon" href="/img/logo.png" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         </Head>
         <style jsx>{`

            .error_area{
               background: -webkit-linear-gradient(180deg, rgba(255,255,255,0.93) 0%, rgba(255,255,255,0.9) 100%), url(/img/error_bg.png) no-repeat scroll center 100%;
               display: flex;
               align-items: center;
               position: relative;
               z-index: 1;
               height: 100vh;
               min-height: 650px;
               text-align: center;
               font-family: "Poppins", sans-serif;
               color: #6A5CB6;
            }

            .error_shap {
               position: absolute;
               right: 0;
               top: 0;
               z-index: -1;
            }

            .error_contain h1 {
               font-size: 15vw;
               line-height: 14vw;
               margin-bottom: 10px;
               font-weight: 700;
            }

            .error_contain h2 {
               letter-spacing: 8px;
               margin-bottom: 30px;
               font-size: 40px;
               font-weight: 400;
            }

            .error_contain p{
               font-size: 16px;
               font-weight: 400;
               letter-spacing: 1px;
               margin: 0 220px;
            }

            .error_btn{
               margin-top: 40px;
               font: 500 14px "Poppins", sans-serif;
               padding: 17px 28px;
               border: 2px solid #6A5CB6;
               border-radius: 50px;
               color: #6A5CB6;
               display: inline-block;
               transition: all 0.3s ease;
               min-width: 230px;
               box-shadow: 0px 20px 30px 0px rgba(15, 0, 57, 0.1);
               overflow: hidden;
               z-index: 1;
               cursor: pointer;
            }

            .error_btn:hover{
               background: #6A5CB6;
               color: #fdfdfd;
            }

            a{
               text-decoration:none;
            }

            a:hover{
               text-decoration:none;
            }

            @media (max-width: 990px){
               .error_contain p{
                  margin: 0 !important;
               }
            }

            @media (max-width: 768px){
               .error_contain h1 {
                  font-size: 20vw;
                  line-height: 22vw;
               }

               .error_contain h2 {
                  letter-spacing: 5px;
                  font-size: 35px;
               }

               .error_contain p{
                  font-size: 14px !important;
               }
            }
         `}</style>
         <section className="error_area">
            <img className="error_shap" src="/img/breadcrumb/banner_bg.png" alt="" />
            <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate" className="container flex">
               <div className="error_contain text-center">
                  <h1>{statusCode}</h1>
                  <h2>{title}</h2>
                  <p>{msg}</p>
                  <Link href="/">
                     <a className="error_btn">Go Back to Home Page</a>
                  </Link>
               </div>
            </motion.div>
         </section>
      </>
   );
}

function getInitialProps({ res, err }) {
   let statusCode;
   if (res) {
      statusCode = res.statusCode;
   } else if (err) {
      statusCode = err.statusCode;
   } else {
      statusCode = null;
   }
   return { statusCode };
}

CustomError.getInitialProps = getInitialProps;

export default CustomError;