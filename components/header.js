import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'
import Styles from '@/styles/Header.module.css'

function Header() {
   return (
      <Navbar expand="lg" className={Styles.navbar}>
         <Navbar.Brand className={Styles.navbarBrand} href="#">
            <img src="/favicon/logo.png"/>
         </Navbar.Brand>
         <Navbar.Toggle className={Styles.navbarToggler} aria-controls="basic-navbar-nav">
            <div className="animated-icon">
               <span></span>
               <span></span>
               <span></span>
            </div>
         </Navbar.Toggle>
         <Navbar.Collapse className={Styles.navbarCollapse} id="basic-navbar-nav">
            <Nav className="ml-auto">
               <Link href="/">
                  <Nav.Link as="a" href="/" className={Styles.navLink}>Home</Nav.Link>
               </Link>
               <Link href="/project">
                  <Nav.Link as="a" href="/project" className={Styles.navLink}>Project</Nav.Link>
               </Link>
               <Link href="/blog">
                  <Nav.Link as="a" href="/blog" className={Styles.navLink}>Blog</Nav.Link>
               </Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   )
}

export default Header;