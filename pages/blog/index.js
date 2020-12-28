import Meta from '@/components/meta'
import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/header'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import Date from '@/components/date'
import Styles from '@/styles/Blog.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export async function getServerSideProps({ query: {page= 1 } }) {
   const countBlogResponse = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/articles/count`)
   const countBlog = await countBlogResponse.json()
   const limit = +page === 1 ? 6 : +page * 6

   const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/articles?_limit=${limit}&_sort=date:desc`)
   const data = await res.json()

   return {
      props: { 
         allArticles: data,
         page: +page,
         countBlog
      },
   }
}

export default function Blogs({ allArticles, page, countBlog }) {
   const router = useRouter()
   const lastPage = Math.ceil(countBlog / 6)

   return(
      <>
         <Head>
            <title>Blog - Nizar</title>
            <Meta />
         </Head>
         <Header/>
         <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
         <main className="mt-5">
            <section className={Styles.project}>
               <Container>
                  <div className="section_header">
                     <h2>Blog</h2>
                     <div className="divider"></div>
                  </div>
                  <div className="section_body">
                     {allArticles && allArticles.length != 0 ?
                        <>
                           <Row>
                              {allArticles.map(({ id, date, slug, title, excerpt, author, coverImage}) => (
                                 <Col lg={4} md={6} className="mb-5" key={id}>
                                    <Card className={Styles.card}>
                                       <Link href={`blog/${slug}`}>
                                          <a as="a" href={`blog/${slug}`}>
                                             <img src={coverImage.formats.medium.url} alt="loading.." className={`${Styles.card_img_top} card-img-top`} loading="lazy" />
                                          </a>
                                       </Link>
                                       <Card.Body className={Styles.card_body}>
                                          <Card.Title className={Styles.card_title}>
                                          <Link href={`blog/${slug}`}>
                                             <a as="a" href={`blog/${slug}`}>
                                                {title}
                                             </a>
                                          </Link>
                                          </Card.Title>
                                          <Card.Text className={Styles.card_description}>
                                          {excerpt}...
                                          </Card.Text>
                                       </Card.Body>
                                       <Card.Footer className={Styles.card_footer}>
                                          <div className="article_author">
                                             <img src={author.picture.formats.small.url} loading="lazy" className="mr-2 rounded-circle" />{author.name}
                                             <span className="float-right mt-8"><Date dateString={date} /></span>
                                          </div>
                                       </Card.Footer>
                                    </Card>
                                 </Col>
                              ))}
                           </Row>
                           <div className="mt-15 text-center">
                              <button className={`${Styles.btn_seemore} btn`} onClick={() => router.push(`/blog?page=${page + 1}`,`/blog`)} disabled={page >= lastPage}>See More <i className="ti-arrow-down ml-1"></i></button>
                           </div>
                        </>
                        : 
                        <h5 className="mt_8 text-center text_primary">No results</h5>
                     }
                  </div>
               </Container>
            </section>
         </main>
         </motion.div>
      </>
   )
}