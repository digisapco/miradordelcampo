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

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

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
        <BackgroundImage
          style={{ backgroundSize: "cover" }}
          fluid={data.banner.childImageSharp.fluid}
          className="page-header"
        >
          <div className="banner">
            <h2>¡El espacio perfecto para ti!</h2>
            <div className="typo">
              <p>Excelente calidad de vida a sólo 42 kilómetros de Bogotá</p>
            </div>

            <Link className="prices">Ver precios</Link>
          </div>
        </BackgroundImage>
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
        <div className="container">
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
        <div className="container">
          <div className="caract">
            <h2
              style={{
                color: "#84C226",
              }}
            >
              CARACTERÍSTICAS
            </h2>
          </div>
          <div className="logos"></div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="ubicacion">
            <h2>Ubicación</h2>
            <Img fluid={data.ubicacion.childImageSharp.fluid} />
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
              <strong>Dirección:</strong> Cra 7 #5-89 Tocancipá. Cundinamarca
            </p>
            <p>
              <strong>Teléfono:</strong> 878-5778
            </p>
            <p>
              <strong>Celular:</strong>316 337 1703 – 300 211 8917
            </p>
            <p>
              <strong>Horario:</strong>Lunes a Domingo 10:00 am – 5:00 pm.
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
            <div>
              <img src={corfi}></img>
            </div>
            <div>
              <img src={fidu}></img>
            </div>
            <div>
              <img src={fidu}></img>
            </div>
          </div>
        </div>
      </div>

      <div className="sectionform">
        <div className="container">
          <div className="containerform">
            <Userform></Userform>
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
