import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const Tratamiento = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Tratamiento de datos"
        keywords={[`Tocancipa`, `Ventas`, `Apartamentos`, `Detalles`]}
      />
      <article className="post-content page-template no-image">
        <div className="sectiontratamiento">
          <div className="containertratamiento">
            <h2>AVISO DE PRIVACIDAD PARA EL MANEJO DE DATOS PERSONALES</h2>
            <h4>
              <strong>DEL PERSONAL DE INGENIERÍA SÓLIDA SAS COLOMBIA</strong>
            </h4>
            <p>
              Con el fin de atender a lo dispuesto en la Ley 1581 de 2012 “por
              la cual se dictan disposiciones generales para la protección de
              datos personales” y del Decreto Reglamentario 1377 de 2013 “por el
              cual se reglamenta parcialmente la Ley 1581 de 2012”,{" "}
              <strong>INGENIERÍA SÓLIDA SAS COLOMBIA</strong> ha preparado las
              siguientes políticas orientadas al tratamiento adecuado y
              administración de los datos personales que han sido recolectados y
              almacenados dentro de sus bases de datos.
            </p>
            <p>
              Usted puede contactarnos en la ciudad de Bogotá, en la Carrera 19
              No. 58-51 Piso 5 de Bogotá. El correo electrónico de notificación
              judicial es solida.direccioncomercial@gmail.com y PBX: (57 1) 310
              2626766. Sus datos personales serán recolectados por{" "}
              <strong>INGENIERÍA SÓLIDA SAS COLOMBIA</strong> para ser incluidos
              en sus bases de datos con las siguientes finalidades sin limitarse
              a ellas:
            </p>
            <ol>
              <li>Atención de requerimientos de autoridades.</li>
              <li>
                Manejo interno a efectos de registro de sus clientes de los
                distintos segmentos de negocios.
              </li>
              <li>
                Análisis de riesgo crediticio, análisis estadísticos o de
                seguridad de sus clientes, proveedores o usuarios.
              </li>
              <li>
                Ejecución y/o cumplimiento de los contratos que tiene con
                terceros, y o venta de bienes y servicios o, financiación sea de
                compra para la adquisición de bienes o contratos de otra
                naturaleza comprendidos dentro de su objeto social.
              </li>
              <li>
                El envío de correspondencia, correos electrónicos o contacto
                telefónico con sus clientes, proveedores y usuarios de sus
                distintos programas en desarrollo de actividades publicitarias,
                promocionales, de mercadeo y para planes de fidelidad y
                relacionales, de ejecución de ventas o estudios de mercado
                enfocados a las actividades propias de su objeto social o
                prestación de servicios complementarios.
              </li>
              <li>
                Para compartir información con aliados comerciales para el
                ofrecimiento de bienes o servicios con beneficios para nuestros
                clientes
              </li>
              <li>
                Para compartirlos o enviarlos a terceros con quienes realice
                alianzas o contratos para fines comerciales relacionados con la
                ejecución de las actividades comprendidas dentro de su objeto
                social.
              </li>
              <li>
                Mantenimiento por sí mismo o a través de un tercero, de las
                bases de datos de INGENIERÍA SÓLIDA SAS COLOMBIA
              </li>
              <li>
                Obtención de información de grupos de interés para el
                relacionamiento de la compañía (datos de contacto de periodistas
                y autoridades).
              </li>
              <li>
                Atención a los accionistas sobre sus solicitudes y trámites.
              </li>
              <li>
                Selección de personal, administración de contrataciones y de las
                obligaciones de INGENIERÍA SÓLIDA SAS COLOMBIA en materia
                prestacional y de seguridad social, manejo de relaciones
                laborales y cumplimiento de las obligaciones derivadas de la
                misma, otorgamiento de beneficios a sus empleados por sí mismo o
                a través de terceros, así como permitir el acceso de los
                empleados a los recursos informáticos de la empresa.
              </li>
              <li>
                Envío a distribuidores de productos que comercializa INGENIERÍA
                SÓLIDA SAS COLOMBIA de bases de datos sobre puntos de venta.
              </li>
              <li>
                Transferencia y transmisión de datos a terceros con quienes
                realice alianzas relacionadas con su objeto social, contrate
                estudios o les encargue el tratamiento de datos.
              </li>
              <li>
                Reporte y consulta a centrales de riesgo crediticio legalmente
                constituidas en Colombia principalmente a Datacredito y Cifin.
              </li>
              <li>
                Análisis de prospectos con fines comerciales ya sea de clientes,
                consumidores o proveedores.
              </li>
              <li>Gestiones de cobranzas.</li>
              <li>
                Compartirla con terceros aliados, proveedores y sociedades del
                mismo grupo empresarial ubicadas dentro o fuera del país, en
                particular para la realización de actividades de conocimiento al
                cliente, relacionamiento comercial o publicitario, gestión de
                ventas y actividades de cobranza.
              </li>
              <li>
                Adelantar campañas de seguimiento y verificación de calidad en
                el servicio, encuestas de satisfacción, actualización de datos
                de información, campañas pedagógicas y servicios especiales.
              </li>
              <li>
                Atender Preguntas Quejas, Reclamos y PQRs que sean presentados{" "}
                <strong>INGENIERÍA SÓLIDA SAS COLOMBIA</strong> por clientes,
                proveedores y terceros.
              </li>
            </ol>

            <p>
              Los derechos que le asisten al Titular de los datos, conforme a la
              Ley 1581 de 2012, son los siguientes: a) Conocer, actualizar y
              rectificar sus datos personales frente a los Responsables del
              Tratamiento o Encargados del Tratamiento. Este derecho se podrá
              ejercer, entre otros frente a datos parciales, inexactos,
              incompletos, fraccionados, que induzcan a error, o aquellos cuyo
              Tratamiento esté expresamente prohibido o no haya sido autorizado;
              b) Solicitar prueba de la autorización otorgada al Responsable del
              Tratamiento salvo cuando expresamente se exceptúe como requisito
              para el Tratamiento de conformidad con lo previsto en el artículo
              10 de la Ley 1581 de 2012; c) Ser informado por el Responsable del
              Tratamiento o el Encargado del Tratamiento, previa solicitud,
              respecto del uso que le ha dado a sus datos personales; d)
              Presentar ante la Superintendencia de Industria y Comercio quejas
              por infracciones a lo dispuesto en la presente ley y las demás
              normas que la modifiquen, adicionen o complementen; e) Revocar la
              autorización y/o solicitar la supresión del dato cuando en el
              Tratamiento no se respeten los principios, derechos y garantías
              constitucionales y legales. La revocatoria y/o supresión procederá
              cuando la Superintendencia de Industria y Comercio haya
              determinado que en el Tratamiento el Responsable o Encargado han
              incurrido en conductas contrarias a esta ley y a la Constitución;
              f) Acceder en forma gratuita a sus datos personales que hayan sido
              objeto de Tratamiento. Cuando se recolecten datos personales
              sensibles, el Titular de los datos no estará obligado a responder
              las preguntas que versen sobre los mismos ni a autorizar su
              tratamiento. Informamos a los titulares de datos personales que
              pueden consultar la Política de Tratamiento de la Información de{" "}
              <strong>INGENIERÍA SÓLIDA SAS COLOMBIA </strong> en la página
              www.miradordelcampo.com.co, que contiene los lineamientos,
              directrices y procedimientos sobre el tratamiento de la
              información de terceros por parte de{" "}
              <strong>INGENIERÍA SÓLIDA SAS COLOMBIA</strong> y la forma de
              hacer efectivos sus derechos, consultas y solicitudes de supresión
              de datos. Así mismo podrá consultar allí cualquier actualización a
              dicha política o al presente aviso de privacidad.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
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
      <Tratamiento location={props.location} data={data} {...props} />
    )}
  />
)
