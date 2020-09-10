import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import whatsapp from "../../content/assets/whatsapp.png"
import telefono from "../../content/assets/telefono.svg"
import mensaje from "../../content/assets/mensaje.svg"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 150, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      guasa: file(relativePath: { eq: "whatsapp.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu">
              {/* <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li> */}
              <li className="nav-about" role="menuitem">
                <Link
                  onClick={() => setToggleNav(!toggleNav)}
                  to="#apartamentos"
                >
                  Apartamentos
                </Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link onClick={() => setToggleNav(!toggleNav)} to="#ubicacion">
                  Ubicación
                </Link>
              </li>
              <li className="nav-tags" role="menuitem">
                <Link onClick={() => setToggleNav(!toggleNav)} to="#footer">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              <Img fluid={data.logo.childImageSharp.fluid} className="logo" />
            </Link>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        <div className="sectionwpp">
          <div className="containerwpp">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=573002118917&text=Hola,%20estoy%20interesad@%20en%20el%20proyecto%20Mirador%20del%20campo"
            >
              <img id="daleboquita" src={whatsapp}></img>
            </a>
          </div>
        </div>
        <div className="calltosection">
          <div className="calltocontainer">
            <div>
              <img src={telefono}></img>
            </div>
            <div>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=573002118917&text=Hola,%20estoy%20interesad@%20en%20el%20proyecto%20Mirador%20del%20campo"
              >
                <img id="daleboquita" src={whatsapp}></img>
              </a>
            </div>
            <div>
              <a href="#footer">
                <img src={mensaje}></img>
              </a>
            </div>
          </div>
        </div>
        Copyright &copy; {new Date().getFullYear()}{" "}
        <Link to={`/`}>{title}</Link> &mdash; Desarrollado por{" "}
        <a
          href="https://digisap.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Digisap
        </a>
      </footer>
    </div>
  )
}

export default Layout
