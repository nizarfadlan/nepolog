import Head from 'next/head'
import Meta from '@/components/meta'
import Header from '@/components/header'
import { motion } from 'framer-motion'
import Styles from '@/styles/Project.module.css'
import { Container } from 'react-bootstrap'
import Layout from '@/components/project'

export default function Project() {
   return(
      <>
         <Head>
            <title>Project - Nizar</title>
            <Meta />
         </Head>
         <Header/>
         <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
         <main className="mt-5">
            <section className={Styles.project}>
               <Container>
                  <div className="section_header">
                        <h2>My Project <div className="divider"></div></h2>
                  </div>
                  <Layout />
               </Container>
            </section>
         </main>
         </motion.div>
      </>
   )
}