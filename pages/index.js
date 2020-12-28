import Meta from '@/components/meta'
import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/header'
import Project from '@/components/project'
import Skill from '@/components/skill'
import Footer from '@/components/home-footer'
import Styles from '@/styles/Home.module.css'
import { Jumbotron, Container, Row, Col, Card, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import Date from '@/components/date'
import { getAllArticlesForHome } from '@/lib/api'

export async function getStaticProps() {
  const Articles = await getAllArticlesForHome()
  return {
    props: { Articles },
  }
}

const fadeInUp = {
  initial: {
    y: 60,
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

const fadeInRight = {
  initial: {
    x: 60,
    opacity: 0
  },
  animate: {
    x: 0,
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

function Index({ Articles }) {
  return(
    <>
      <Head>
        <title>Nizar</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
        <Meta />
      </Head>
      <Header/>
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <main>
        <Jumbotron fluid className={Styles.jumbotron}>
          <Container>
            <motion.div variant={stagger} >
              <motion.div initial={{x:60,opacity:0}} animate={{x:0,opacity:1}} transition={{delay: 0.5}} className={Styles.jumbotron_img}>
                <img src="/img/aku.svg" className={Styles.akuimg} />
                <ul className={`list_unstyled ${Styles.icon_jumbotron}`}>
                  <li><img src="/img/icon1.svg"/></li>
                  <li><img src="/img/icon2.svg"/></li>
                </ul>
              </motion.div>
              <Row>
                <Col lg={12}>
                  <div className={`${Styles.jumbotron_text} mt-5`}>
                    <motion.div variants={fadeInUp}>
                      <h1 className={Styles.display_1}>Hi, i’m Nizar</h1>
                      <h2 className={Styles.display_2}>Currently Learning Web Programming and Create Bot.</h2>
                      <p className={Styles.lead}>I am a high school student and have always liked the world of IT, especially in programming. Learn programming from Youtube, Google, Programming Forums. Starting from like playing games and knowing how to make games, I started to find out since then. The programming languages ​​I like are PHP, JavaScript, Python.</p>
                    </motion.div>
                    <motion.div initial={{y:-60,opacity:0}} animate={{y:0,opacity:1}} transition={{delay: 0.3}}>
                    <button href="#" className={`${Styles.btn_jumbotron} btn rounded_50`}><i className="ti-download mr-2"></i> Download  Resume</button>
                    </motion.div>
                  </div>
                </Col>
              </Row>
            </motion.div>
          </Container>
        </Jumbotron>
        <section className={Styles.project}>
            <Container>
              <div className="section_header text-center">
                    <h2>Selected Projects <div className="divider mx-auto"></div></h2>
              </div>
              <div className="section_body">
                <Project />
                <div className="center mt-5">
                  <Link href="/project">
                    <Button as="a" href="/project" className="btn_outline btn rounded_50">See More <i className="ti-arrow-right ml-2"></i></Button>
                  </Link>
                </div>
              </div>
            </Container>
        </section>
        <section className={Styles.blog}>
          <Container>
            <div className={`section_header ${Styles.blog_header}`}>
              <Row>
                <Col>
                  <h2>Blog</h2>
                  <div className="divider"></div>
                </Col>
                <Col>
                  <Link href="/blog" as="/blog">
                    <Button className={`btn_no_outline ${Styles.btn_blog} btn rounded_50`}>More Article</Button>
                  </Link>
                </Col>
              </Row>
            </div>
            <div className="section_body">
              <Row>
                {Articles?.articles.map(({ id, slug, date, title, author }) => (
                <Col lg={4} md={6} key={id} className="mt-4">
                  <Card className={Styles.bcard}>
                    <Card.Body className={Styles.bcard_body}>
                      <Card.Title className={Styles.bcard_title}>
                        <Link href={`blog/${slug}`}>
                          <a as="a" href={`blog/${slug}`}>
                            {title}
                          </a>
                        </Link>
                      </Card.Title>
                      <Card.Text className={`${Styles.bcard_text}`}>
                        <div className="article_author">
                            <img src={author.picture.formats.small.url} loading="lazy" className="mr-2 rounded-circle" />{author.name}
                            <span className="float-right mt-8"><Date dateString={date} /></span>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section>
        <Skill />
        <section className={`${Styles.build} mt-5`}>
          <Container>
            <div className="section-body">
              <Row>
                <div className={Styles.build_body}>
                  <svg xmlns="http://www.w3.org/2000/svg" focusable="false" class="text-5xl" width="1.66em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 309"><path d="M120.81 80.561h96.568v7.676h-87.716v57.767h82.486v7.675h-82.486v63.423h88.722v7.675H120.81V80.561zm105.22 0h10.26l45.467 63.423L328.23 80.56L391.441 0l-103.85 150.65l53.515 74.127h-10.663l-48.686-67.462l-48.888 67.462h-10.461l53.917-74.128l-50.296-70.088zm118.898 7.676V80.56h110.048v7.676h-50.699v136.54h-8.852V88.237h-50.497zM0 80.56h11.065l152.58 228.323l-63.053-84.107L9.254 91.468l-.402 133.31H0V80.56zm454.084 134.224c-1.809 0-3.165-1.4-3.165-3.212c0-1.81 1.356-3.212 3.165-3.212c1.83 0 3.165 1.401 3.165 3.212c0 1.811-1.335 3.212-3.165 3.212zm8.698-8.45h4.737c.064 2.565 1.937 4.29 4.693 4.29c3.079 0 4.823-1.854 4.823-5.325v-21.99h4.823v22.011c0 6.252-3.617 9.853-9.603 9.853c-5.62 0-9.473-3.493-9.473-8.84zm25.384-.28h4.78c.409 2.953 3.294 4.828 7.45 4.828c3.875 0 6.717-2.005 6.717-4.764c0-2.371-1.809-3.794-5.921-4.764l-4.005-.97c-5.62-1.316-8.181-4.032-8.181-8.602c0-5.54 4.521-9.227 11.303-9.227c6.308 0 10.916 3.686 11.196 8.925h-4.694c-.452-2.867-2.95-4.657-6.567-4.657c-3.81 0-6.35 1.833-6.35 4.635c0 2.22 1.635 3.493 5.683 4.441l3.423.841c6.373 1.488 9 4.075 9 8.753c0 5.95-4.607 9.68-11.97 9.68c-6.89 0-11.52-3.558-11.864-9.12z" fill="#000"></path></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="3.85em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 133"><g fill-rule="evenodd"><g fill="#8E75FF"><path d="M110.293 20.379H36.024v37.238h36.544a2.359 2.359 0 0 1 2.358 2.358v36.04h37.725V22.74a2.358 2.358 0 0 0-2.358-2.362z"/><path d="M36.02 20.379v37.238H1.18a1.181 1.181 0 0 1-.829-2.022l35.67-35.216zm40.915 110.89a1.181 1.181 0 0 1-2.009-.84V96.013h37.725l-35.716 35.25v.005z" opacity=".405"/><path d="M36.02 57.617h37.73c.646 0 1.176.526 1.176 1.177v37.22H38.383a2.358 2.358 0 0 1-2.359-2.358v-36.04h-.004z" opacity=".405"/></g><path d="M493.07 18.03c2.108 2.086 4.596 3.125 7.467 3.125c2.962 0 5.496-1.04 7.604-3.126c2.109-2.086 3.16-4.543 3.16-7.384c0-2.837-1.051-5.32-3.16-7.45a10.316 10.316 0 0 0-7.604-3.194c-2.871 0-5.359 1.065-7.467 3.19c-2.108 2.134-3.16 4.613-3.16 7.458c0 2.837 1.052 5.294 3.16 7.38zM264.332 45.24a.402.402 0 0 1-.401.397h-14.808v27.676c0 2.306.586 3.992 1.75 5.057c1.164 1.064 2.871 1.66 5.113 1.793c2.052.125 4.552.116 7.505-.022l.418-.021a.397.397 0 0 1 .419.396v14.791a.397.397 0 0 1-.354.397l-.271.03c-11.597 1.22-19.8.086-24.603-3.397c-4.889-3.548-7.329-9.89-7.329-19.024V45.637H220.46a.397.397 0 0 1-.396-.397V29.535c0-.215.177-.396.396-.396h11.308v-10.98c0-.32.19-.604.479-.733l16.32-7.1a.397.397 0 0 1 .561.362v18.45h14.804c.216 0 .397.177.397.397V45.24h.004zm31.47-4.656c1.612-4.26 4.28-7.453 8-9.583a24.357 24.357 0 0 1 12.046-3.19a.4.4 0 0 1 .4.4v18.042a.646.646 0 0 1-.71.642c-5.006-.448-9.502.643-13.485 3.268c-4.169 2.746-6.251 7.316-6.251 13.705v31.4a.397.397 0 0 1-.401.397h-16.563a.397.397 0 0 1-.396-.397V29.531c0-.216.176-.397.396-.397h16.563c.215 0 .396.177.396.397v11.045l.005.008zm82.063-11.445a.397.397 0 0 0-.401.396v7.458c-5.2-6.48-12.51-9.717-21.93-9.717c-8.967 0-16.662 3.393-23.072 10.178c-6.415 6.786-9.622 15.102-9.622 24.948s3.207 18.162 9.622 24.947c6.41 6.786 14.105 10.178 23.072 10.178c9.42 0 16.727-3.237 21.93-9.712v7.453c0 .216.181.397.4.397h16.56a.4.4 0 0 0 .4-.397V29.531a.397.397 0 0 0-.4-.397h-16.56v.005zm-32.418 46.834c3.496 3.461 7.932 5.19 13.32 5.19c5.38 0 9.842-1.755 13.386-5.26c3.543-3.5 5.31-8 5.31-13.501c0-5.5-1.767-10.002-5.31-13.506c-3.544-3.5-8.006-5.255-13.39-5.255c-5.38 0-9.82 1.754-13.32 5.259c-3.493 3.5-5.247 8.001-5.247 13.502c0 5.5 1.75 10.023 5.25 13.57zm126.526-38.519c-6.415-6.785-14.153-10.178-23.21-10.178c-9.42 0-16.684 3.238-21.797 9.713v-7.454a.397.397 0 0 0-.396-.396h-16.563a.397.397 0 0 0-.396.396v92.34c0 .22.176.401.396.401h16.563a.402.402 0 0 0 .396-.4V87.815c5.113 6.475 12.377 9.712 21.797 9.712c9.057 0 16.795-3.392 23.21-10.178c6.41-6.785 9.617-15.101 9.617-24.947c0-9.846-3.207-18.162-9.617-24.948zm-39.76 38.519c3.5 3.461 7.936 5.19 13.32 5.19c5.38 0 9.843-1.755 13.386-5.26c3.544-3.5 5.316-8 5.316-13.501c0-5.5-1.772-10.002-5.316-13.506c-3.543-3.5-8.005-5.255-13.385-5.255c-5.385 0-9.82 1.754-13.321 5.259c-3.496 3.5-5.247 8.001-5.247 13.502c0 5.5 1.75 10.023 5.247 13.57zm60.112 19.692a.397.397 0 0 1-.397-.397V29.531c0-.216.177-.397.397-.397h16.562c.22 0 .397.177.397.397v65.742a.397.397 0 0 1-.397.396h-16.562v-.004zM182.864 52.357c-2.38-1.108-3.565-2.552-3.565-4.324c0-1.685.737-3.017 2.22-3.991c1.478-.975 3.34-1.466 5.582-1.466c4.298 0 7.545 1.66 9.743 4.975a.573.573 0 0 0 .703.215l14.648-6.41a.397.397 0 0 0 .181-.56c-.168-.282-.34-.56-.517-.837c-2.505-3.901-5.75-6.811-9.825-9.023c-4.483-2.44-9.462-3.66-14.933-3.66c-7.268 0-13.342 1.884-18.235 5.656c-4.884 3.768-7.328 8.937-7.328 15.498c0 4.35 1.19 7.962 3.565 10.846a20.981 20.981 0 0 0 8.678 6.32a91.042 91.042 0 0 0 10.225 3.324c3.406.888 6.303 1.888 8.678 2.996c2.375 1.108 3.565 2.548 3.565 4.324c0 3.815-3.095 5.72-9.281 5.72c-5.893 0-9.976-2.155-12.248-6.457a.798.798 0 0 0-1.026-.375l-14.605 6.401a.397.397 0 0 0-.198.535l.163.332c5.105 10.088 14.408 15.131 27.914 15.131c7.712 0 14.148-1.84 19.304-5.518c5.16-3.685 7.738-8.94 7.738-15.77c0-4.526-1.19-8.293-3.565-11.311a19.83 19.83 0 0 0-8.678-6.45a90.491 90.491 0 0 0-10.225-3.194c-3.41-.844-6.303-1.819-8.678-2.931v.004z" fill="#2F2E8B"/></g></svg>
                </div>
              </Row>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      </motion.div>
    </>
  )
}

export default Index;