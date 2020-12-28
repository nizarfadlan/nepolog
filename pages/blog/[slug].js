import Meta from '@/components/meta'
import Head from 'next/head'
import Header from '@/components/header'
import { motion } from 'framer-motion'
import { getAllArticlesWithSlug, getArticles } from '@/lib/api'
import Date from '@/components/date'
import Styles from '@/styles/BlogSingle.module.css'
import { Card } from 'react-bootstrap'
import Link from 'next/link'
import { DiscussionEmbed } from 'disqus-react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const renderers = {
   code: ({language, value}) => {
      return <SyntaxHighlighter language={language} children={value} />
   }
}

export async function getStaticProps({ params }) {
   const data = await getArticles(params.slug)

   return {
      props: {
         article: {
            ...data,
         },
      },
   }
}

export async function getStaticPaths() {
   const allArticles = await getAllArticlesWithSlug()
   const paths = allArticles.articles.map((article) => `/blog/${article.slug}`)
   
   return { 
      paths, 
      fallback: false, 
   }
}

const fadeInDown = {
   initial: {
      y: -100,
      opacity: 0
   },
   animate: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 0.8,
         ease: [0.6, -0.05, 0.01, 0.99]
      }
   }
}

const stagger = {
   animate: {
      transition: {
         staggerChildren: 0.2
      }
   }
}

export default function Article({ article }) {
   const disqusShortname = "nizar-2"
   const disqusConfig = {
      url: `http://localhost:3000/blog/${article.articles[0].slug}`,
      identifier: article.articles[0].id,
      title: article.articles[0].title,
   }

   return(
      <>
         <Head>
            <title>{article.articles[0].title}</title>
            <Meta />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="Nizar" />
            <meta name="twitter:title" content={article.articles[0].title} />
            <meta name="twitter:description" content={article.articles[0].excerpt} />
            <meta name="twitter:image" content={article.articles[0].coverImage.formats.small.url} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={article.articles[0].title} />
            <meta property="og:site_name" content="Nizar" />
            <meta property="og:url" content="https://nidev.me/blogs" />
            <meta property="og:image" content={article.articles[0].coverImage.formats.small.url}/>

            <meta name="author" content={article.articles[0].author.name} />
            <meta name="description" content={article.articles[0].excerpt} />
         </Head>
         <Header/>
         <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
         <main>
            <motion.div variant={stagger} className={Styles.article}>
               <Link href="/blog">
                  <a className={Styles.back}>
                     <i className={`${Styles.row} ti-arrow-left`}></i>
                     Back to Blog
                  </a>
               </Link>
               <div className={Styles.wrapper}>
                  <div className={Styles.wrapper_div}>
                     <h1 className={`${Styles.title} text-center`}>{article.articles[0].title}</h1>
                     <motion.img variants={fadeInDown} src={article.articles[0].coverImage.formats.large.url} className={Styles.image}/>
                  </div>
               </div>
               <div className={Styles.cartic}>
                  <Card className={Styles.card}> 
                     <Card.Body>
                        <div className="article_author px-3">
                           <img src={article.articles[0].author.picture.formats.medium.url} className="mr-2 rounded-circle" />{article.articles[0].author.name}
                           <span className={`${Styles.date}`}><i className="ti-calendar mr-2"></i><Date dateString={article.articles[0].date} /></span>
                        </div>
                        <ReactMarkdown className={Styles.content} renderers={renderers} plugins={[gfm]} children={article.articles[0].content} />
                     </Card.Body>
                  </Card>
                  <div className={`${Styles.disqus} mt-10`}>
                     <DiscussionEmbed
                        shortname={disqusShortname}
                        config={disqusConfig}
                        />
                  </div>
               </div>
            </motion.div>
         </main>
         </motion.div>
      </>
   )
}