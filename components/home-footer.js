import Styles from '@/styles/Home-footer.module.css';
import { Col, Row, Container } from 'react-bootstrap';

function Footer() {
   return (
      <footer>
         <div className={Styles.contact}>
            <Container>
               <Row>
                  <Col lg={6} md={6}>
                     <h2>Get in touch 🤙</h2>
                     <a className={Styles.email} href="mailto:fadlannizar5@gmail.com">fadlannizar5@gmail.com</a>
                  </Col>
                  <Col lg={6} md={6}>
                     <div className={Styles.widget_footer}>
                     <a href="https://www.instagram.com/nizariyf_/">
                        <svg class="w-6" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M28.3333 3.33325H11.6666C7.06427 3.33325 3.33331 7.06421 3.33331 11.6666V28.3333C3.33331 32.9356 7.06427 36.6666 11.6666 36.6666H28.3333C32.9357 36.6666 36.6666 32.9356 36.6666 28.3333V11.6666C36.6666 7.06421 32.9357 3.33325 28.3333 3.33325Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26.6668 18.95C26.8725 20.3371 26.6356 21.7537 25.9897 22.9984C25.3439 24.243 24.3221 25.2524 23.0695 25.8828C21.817 26.5132 20.3976 26.7327 19.0131 26.5099C17.6287 26.2871 16.3497 25.6335 15.3582 24.6419C14.3667 23.6504 13.713 22.3715 13.4903 20.987C13.2675 19.6026 13.4869 18.1832 14.1174 16.9306C14.7478 15.6781 15.7571 14.6562 17.0018 14.0104C18.2464 13.3646 19.6631 13.1277 21.0501 13.3333C22.465 13.5432 23.7749 14.2025 24.7863 15.2139C25.7977 16.2253 26.457 17.5351 26.6668 18.95Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M29.1667 10.8333H29.1833" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                     </a>
                     <a href="https://twitter.com/nizariyf_/">
                        <svg class="w-6" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M38.3333 4.99991C36.7373 6.12571 34.9702 6.98676 33.1 7.54991C32.0962 6.39577 30.7622 5.57773 29.2784 5.20646C27.7945 4.83518 26.2325 4.92857 24.8035 5.474C23.3744 6.01943 22.1474 6.99058 21.2883 8.25611C20.4292 9.52163 19.9795 11.0205 20 12.5499V14.2166C17.071 14.2925 14.1688 13.6429 11.5517 12.3257C8.93456 11.0084 6.68385 9.06431 4.99999 6.66658C4.99999 6.66658 -1.66668 21.6666 13.3333 28.3332C9.90087 30.6632 5.81192 31.8315 1.66666 31.6666C16.6667 39.9999 35 31.6666 35 12.4999C34.9985 12.0357 34.9538 11.5726 34.8667 11.1166C36.5677 9.43907 37.768 7.3211 38.3333 4.99991V4.99991Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                     </a>
                     <a href="https://www.facebook.com/nizariyf/">
                        <svg class="w-6" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M30.0001 3.33325H25.0001C22.7899 3.33325 20.6703 4.21123 19.1075 5.77403C17.5447 7.33683 16.6667 9.45645 16.6667 11.6666V16.6666H11.6667V23.3333H16.6667V36.6666H23.3334V23.3333H28.3334L30.0001 16.6666H23.3334V11.6666C23.3334 11.2246 23.509 10.8006 23.8216 10.4881C24.1341 10.1755 24.5581 9.99992 25.0001 9.99992H30.0001V3.33325Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                     </a>
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
      </footer>
   )
}

export default Footer;