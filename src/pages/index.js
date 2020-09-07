import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Bio from "../components/bio"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import Userform from "../components/form"
import corfi from "../../content/assets/corficolombiana.svg"
import fidu from "../../content/assets/fiducoldex.svg"
import solida from "../../content/assets/solida.jpg"
import gym from "../../content/assets/gym.svg"
import piscina from "../../content/assets/piscina.svg"
import salon from "../../content/assets/salon.svg"
import juegos from "../../content/assets/juegos.svg"
import plano1 from "../../content/assets/precio.png"
import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import "react-awesome-slider/dist/styles.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const AutoplaySlider = withAutoplay(AwesomeSlider)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Home"
        keywords={[
          `Miradores`,
          `Home`,
          `gatsby`,
          `Miradores del campo`,
          `Apartamentos`,
        ]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <Slider {...settings}>
          <BackgroundImage
            style={{ backgroundSize: "cover" }}
            fluid={data.banner.childImageSharp.fluid}
            className="page-header"
          >
            <div className="overlay">
              <div className="banner">
                <h2>¡El espacio perfecto para ti!</h2>
                <div className="typo">
                  <p>
                    Excelente calidad de vida a sólo 42 kilómetros de Bogotá
                  </p>
                </div>

                <Link to="#footer" className="prices">
                  Más información
                </Link>
              </div>
            </div>
          </BackgroundImage>

          <BackgroundImage
            style={{ backgroundSize: "cover" }}
            fluid={data.banner2.childImageSharp.fluid}
            className="page-header"
          >
            <div className="overlay">
              <div className="banner">
                <h2>¡El espacio perfecto para ti!</h2>
                <div className="typo">
                  <p>
                    Excelente calidad de vida a sólo 42 kilómetros de Bogotá
                  </p>
                </div>

                <Link to="#footer" className="prices">
                  Más información
                </Link>
              </div>
            </div>
          </BackgroundImage>
        </Slider>
      )}
      <div className="section">
        <div className="container">
          <div className="arquitectura">
            <div>
              <h2>
                <span style={{ color: "#84C226" }}>
                  Arquitectura en armonía
                </span>{" "}
                con la naturaleza
              </h2>
              <p>
                Mirador del Campo es un proyecto ubicado en Zipaquirá con Seis
                torres de cinco niveles, un municipio con tintes campestres a
                sólo 42 kilómetros de Bogotá.
              </p>
            </div>
            <div>
              <Img fluid={data.montaje.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="containerverde">
          <div>
            <p
              style={{
                textAlign: "center",
              }}
            >
              Algunos sitios de interés cercanos a Mirador del Campo son el
              Estadio Héctor “El Zipa” González, el Supermercado Colsubsidio, el
              Colegio San Juan Bautista de La Salle y Surtimax.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="containerlogos">
          <div className="caract"></div>
          <div className="logogrid">
            <div className="logos">
              <div className="titlelogo">
                <h2
                  style={{
                    color: "#84C226",
                  }}
                >
                  CARACTERÍSTICAS
                </h2>
              </div>
              <img src={gym}></img>
              <img src={piscina}></img>
              <img src={salon}></img>
              <img src={juegos}></img>
            </div>
            <div className="imagepiscina">
              <Img fixed={data.piscina.childImageSharp.fixed} />
            </div>
          </div>

          <div className="logosmobile">
            <AutoplaySlider
              organicArrows={true}
              bullets={false}
              mobileTouch={true}
            >
              <div className="logmobile">
                <Img fixed={data.gympng.childImageSharp.fixed} />
              </div>
              <div className="logmobile">
                <Img fixed={data.piscinapng.childImageSharp.fixed} />
              </div>
              <div className="logmobile">
                <Img fixed={data.juegospng.childImageSharp.fixed} />
              </div>
              <div className="logmobile">
                <Img fixed={data.socialpng.childImageSharp.fixed} />
              </div>
            </AutoplaySlider>
          </div>
        </div>
      </div>

      <div className="section" id="apartamentos">
        <div className="containercarrusel">
          <div className="gridplanos">
            <div className="planos">
              <AutoplaySlider
                organicArrows={false}
                mobileTouch={true}
                infinite={true}
              >
                <div className="itemcarrusel">
                  <img src={plano1}></img>
                </div>
                <div className="itemcarrusel">
                  <img src={plano1}></img>
                </div>
              </AutoplaySlider>
            </div>
          </div>
          <div className="textosplanos">
            <h4 style={{ textAlign: "center" }}>Completas zonas comunes </h4>
            <h4
              style={{
                textAlign: "center",
                color: "#FF5527",
                textTransform: "uppercase",
              }}
            >
              apartamentos de 62 m² y 68 m²,
            </h4>
            <p style={{ textAlign: "center" }}>
              con dos o tres habitaciones, dos baños, sala, comedor, cocina,
              zona de ropas, estudio y balcón.
            </p>
          </div>
        </div>
      </div>

      <div className="sectiongaleria">
        <div className="containergaleria">
          <div>
            <h2>Galería</h2>
            <AwesomeSlider>
              <div className="itemgaleria">
                <Img fluid={data.img1.childImageSharp.fluid} />
              </div>
              <div className="itemgaleria">
                <Img fluid={data.img2.childImageSharp.fluid} />
              </div>
              <div className="itemgaleria">
                <Img fluid={data.img3.childImageSharp.fluid} />
              </div>
              <div className="itemgaleria">
                <Img fluid={data.img4.childImageSharp.fluid} />
              </div>
            </AwesomeSlider>
          </div>
        </div>
      </div>

      <div className="section" id="ubicacion">
        <div className="container">
          <div className="ubicacion">
            <h2>Ubicación</h2>
            <Img fluid={data.ubicacion.childImageSharp.fluid} />
          </div>
          <div className="containeruta">
            <a
              href="https://goo.gl/maps/WdTTE8ExHDdCD2f79"
              target="_blank"
              className="ruta"
            >
              Crear mi ruta en Google Maps
            </a>
            <hr className="lineanegra"></hr>
          </div>
        </div>
      </div>

      <BackgroundImage
        fluid={data.sectionventas.childImageSharp.fluid}
        className="sectionventas"
      >
        <div className="containerventas">
          <h2>Visita nuestra sala de ventas</h2>
        </div>
      </BackgroundImage>

      <div className="section">
        <div className="containercontacto">
          <div>
            <p>
              <strong>Dirección: </strong> Cra 7 #5-89 Tocancipá. Cundinamarca
            </p>
            <p>
              <strong>Teléfono: </strong> <a href="tel:8785778">878-5778</a>
            </p>
            <p>
              <strong>Celular: </strong>{" "}
              <a href="tel:3163371703">316 337 1703</a> –{" "}
              <a href="tel:3002118917">300 211 8917</a>
            </p>
            <p>
              <strong>Horario: </strong>Lunes a Domingo 10:00 am – 5:00 pm.
            </p>
            <p className="mensajecontigencia">
              *Mientras estamos en contingencia vamos a atender por Whatsapp y
              Celular
            </p>
          </div>

          <div>
            <Img fluid={data.footerimg.childImageSharp.fluid} />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="logosfooter">
            <div className="logofooter">
              <Img fluid={data.corficol.childImageSharp.fluid} />
            </div>
            <div className="logofooter">
              <Img fluid={data.fiducol.childImageSharp.fluid} />
            </div>
            <div>
              <img src={solida}></img>
            </div>
          </div>
        </div>
      </div>

      <div className="sectionfooter">
        <div className="containerfooter">
          <div>
            <h2>¿Deseas qué te contactemos?</h2>
            <p>Por favor diligencia el formulario de contacto</p>
          </div>
        </div>
      </div>

      <div className="sectionform" id="footer">
        <div className="containerformulario">
          <div className="containerform">
            <div className="colform">
              <Img fixed={data.imgcontact.childImageSharp.fixed} />
            </div>
            <div className="colform">
              {" "}
              <Userform></Userform>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    banner: file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    banner2: file(relativePath: { eq: "banner2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    montaje: file(relativePath: { eq: "montaje.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ubicacion: file(relativePath: { eq: "mapa.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sectionventas: file(relativePath: { eq: "sectionventas.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    footerimg: file(relativePath: { eq: "footerimg.png" }) {
      childImageSharp {
        fluid(maxWidth: 581, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    corficolombiana: file(relativePath: { eq: "corficolombiana.png" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fiducoldex: file(relativePath: { eq: "fiducoldex.png" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    plano1: file(relativePath: { eq: "precio.png" }) {
      childImageSharp {
        fixed(width: 650, height: 505, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    plano2: file(relativePath: { eq: "plano2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1189, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img1: file(relativePath: { eq: "img1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "img2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "img3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "img4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    corficol: file(relativePath: { eq: "corficolombiana.png" }) {
      childImageSharp {
        fluid(maxWidth: 175, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fiducol: file(relativePath: { eq: "fiducoldex.png" }) {
      childImageSharp {
        fluid(maxWidth: 175, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    piscina: file(relativePath: { eq: "piscina.png" }) {
      childImageSharp {
        fixed(width: 605, height: 505) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    imgcontact: file(relativePath: { eq: "imgcontact.png" }) {
      childImageSharp {
        fixed(width: 672, height: 496) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    gympng: file(relativePath: { eq: "gimnasio.png" }) {
      childImageSharp {
        fixed(width: 90, height: 116) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    piscinapng: file(relativePath: { eq: "pool.png" }) {
      childImageSharp {
        fixed(width: 71, height: 119) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    socialpng: file(relativePath: { eq: "salonsocial.png" }) {
      childImageSharp {
        fixed(width: 114, height: 112) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    juegospng: file(relativePath: { eq: "juegos.png" }) {
      childImageSharp {
        fixed(width: 162, height: 108) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
