import Styles from '@/styles/Project.module.css';
import { Card, Badge, Col, Row } from 'react-bootstrap';

function Project() {
   return (
      <Row>
         <Col lg={4} md={6} className="mb-5">
            <Card className={Styles.card}>
               <Card.Img variant="top" src="/img/project/xample-portofolio.png" className={Styles.card_img_top}/>
               <Card.Body className={Styles.card_body}>
                  <Card.Title className={Styles.card_title}>
                  Xample Portofolio
                  </Card.Title>
                  <Card.Text className={Styles.card_description}>
                  Xample Portofolio - The portfolio website template from the slicing results comes from the Wibucode Team design.
                  </Card.Text>
               </Card.Body>
               <Card.Footer className={Styles.card_footer}>
                  <Badge className={Styles.badge_project}>Bootstrap 4</Badge>
               </Card.Footer>
            </Card>
         </Col>
         <Col lg={4} md={6} className="mb-5">
            <Card className={Styles.card}>
               <Card.Img variant="top" src="/img/project/homepage-wibucode.png" className={Styles.card_img_top}/>
               <Card.Body className={Styles.card_body}>
                  <Card.Title className={Styles.card_title}>Wibucode.com</Card.Title>
                  <Card.Text className={Styles.card_description}>
                  Website for Wibucode, namely the programming community.
                  </Card.Text>
               </Card.Body>
               <Card.Footer className={Styles.card_footer}>
                  <Badge className={Styles.badge_project}>Bootstrap 4</Badge>
               </Card.Footer>
            </Card>
         </Col>
         <Col lg={4} md={6} className="mb-5">
            <Card className={Styles.card}>
               <Card.Img variant="top" src="/img/project/evot.png" className={Styles.card_img_top}/>
               <Card.Body className={Styles.card_body}>
                  <Card.Title className={Styles.card_title}>E-Vot</Card.Title>
                  <Card.Text className={Styles.card_description}>
                  E-Vot - Website for selecting class president, student council president, etc.
                  </Card.Text>
               </Card.Body>
               <Card.Footer className={Styles.card_footer}>
                  <Badge className={Styles.badge_project}>PHP Codeigniter 3</Badge>
                  <Badge className={Styles.badge_project}>Bootstrap 4</Badge>
               </Card.Footer>
            </Card>
         </Col>
         <Col lg={4} md={6} className="mb-5">
            <Card className={Styles.card}>
               <Card.Img variant="top" src="/img/project/fesco.png" className={Styles.card_img_top}/>
               <Card.Body className={Styles.card_body}>
                  <Card.Title className={Styles.card_title}>Fesco</Card.Title>
                  <Card.Text className={Styles.card_description}>
                  Fesco - Website to organize class systems such as lesson schedules, picket schedules, class members, and others.
                  </Card.Text>
               </Card.Body>
               <Card.Footer className={Styles.card_footer}>
                  <Badge className={Styles.badge_project}>PHP Codeigniter 3</Badge>
                  <Badge className={Styles.badge_project}>Bootstrap 4</Badge>
               </Card.Footer>
            </Card>
         </Col>
         <Col lg={4} md={6} className="mb-5">
            <Card className={Styles.card}>
               <Card.Img variant="top" src="/img/project/bot-jadwal-telegram.png" className={Styles.card_img_top}/>
               <Card.Body className={Styles.card_body}>
                  <Card.Title className={Styles.card_title}>Bot Jadwal - Telegram</Card.Title>
                  <Card.Text className={Styles.card_description}>
                  Bots are used to find school schedules or to keep track of lesson time.
                  </Card.Text>
               </Card.Body>
               <Card.Footer className={Styles.card_footer}>
                  <Badge className={Styles.badge_project}>NodeJS</Badge>
               </Card.Footer>
            </Card>
         </Col>
         <Col lg={4} md={6} className="mb-5">
            <Card className={Styles.card}>
               <Card.Img variant="top" src="/img/project/bot-scrapig-whatsapp.PNG" alt="Belum Di ScreenShot" className={Styles.card_img_top}/>
               <Card.Body className={Styles.card_body}>
                  <Card.Title className={Styles.card_title}>Bot Scraping IG - Whatsapp</Card.Title>
                  <Card.Text className={Styles.card_description}>
                  Bots for scraping Instagram data via Whatsapp.
                  </Card.Text>
               </Card.Body>
               <Card.Footer className={Styles.card_footer}>
                  <Badge className={Styles.badge_project}>NodeJS</Badge>
               </Card.Footer>
            </Card>
         </Col>
      </Row>
   )
}

export default Project;