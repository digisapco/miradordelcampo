import React, { useState, useEffect } from "react"
import { db } from "../firebase/firebaseConfig"
import { useForm } from "react-hook-form"
import { Link } from "gatsby"
import "./form.css"
import swal from "sweetalert"

const Userform = () => {
  const [formData, setFormData] = useState({})

  const {
    register,
    errors,
    handleSubmit,
    reset,
    formState: { isSubmitted },
  } = useForm()

  useEffect(() => {
    if (isSubmitted && !Object.keys(errors).length) {
      reset()
      swal(
        "Mensaje enviado con éxito",
        "Estaremos en contacto contigo",
        "success"
      )
    }
  }, [errors, reset, isSubmitted])

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (data, e) => {
    e.preventDefault()
    console.log(data)
    sendEmail()
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
      alcobas: "",
      politicas: "",
    })
  }

  const sendEmail = () => {
    fetch("https://us-central1-landingmirador.cloudfunctions.net/submit", {
      method: "POST",
      mode: "no-cors",
      referrerPolicy: "no-referrer",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(res => {
        db.collection("emails").add({
          nombre: formData.name,
          email: formData.empresa,
          telefono: formData.email,
          mensaje: formData.telefono,
          alcobas: formData.message,
          politicas: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <>
      <div className="wrapperform">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="Nombre"
              name="nombre"
              onChange={updateInput}
              value={formData.nombre || ""}
              ref={register({ required: true })}
            />
          </div>
          <div>
            <input
              onChange={updateInput}
              value={formData.email || ""}
              type="text"
              placeholder="E-mail"
              name="email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
          </div>
          <div>
            <input
              onChange={updateInput}
              value={formData.telefono || ""}
              type="tel"
              placeholder="Número"
              name="telefono"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <textarea
              placeholder="Mensaje"
              onChange={updateInput}
              value={formData.mensaje || ""}
              name="mensaje"
              ref={register}
            />
          </div>
          <div className="soyadmininput">
            <label>Interesado en:</label>
            <div>
              <input
                onChange={updateInput}
                value={formData.alcobas || ""}
                name="alcobas"
                type="radio"
                value="2 alcobas"
                ref={register({ required: true })}
              />
              <label>2 Alcobas</label>
            </div>
            <div>
              <input
                onChange={updateInput}
                value={formData.alcobas || ""}
                name="alcobas"
                type="radio"
                value="3 alcobas"
                ref={register({ required: true })}
              />
              <label>3 Alcobas</label>
            </div>
          </div>
          <div>
            <input
              onChange={updateInput}
              value={formData.politicas || ""}
              type="checkbox"
              placeholder="politicas"
              name="politicas"
              ref={register}
            />
            <label>
              Acepto términos y{" "}
              <Link className="linkito" to="/politicas">
                políticas de privacidad.
              </Link>
            </label>
          </div>
          <div>
            <input className="boton" type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </>
  )
}

export default Userform
