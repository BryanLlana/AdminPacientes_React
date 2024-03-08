import { useState } from "react"
import Alert from "./Alert"
import { generateId } from "../helpers"

const Form = ({ patients, setPatients }) => {
  const [name, setName] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [symptoms, setSymptoms] = useState('')
  const [alert, setAlert] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    if ([name, ownerName, email, date, symptoms].includes('')) {
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 3000)
      return
    }
    const patient = {id: generateId(), name, ownerName, email, date, symptoms}
    setPatients([...patients, patient])

    setName('')
    setOwnerName('')
    setEmail('')
    setDate('')
    setSymptoms('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-2 text-center">
        Añade Pacientes y 
        <span className="text-indigo-600 font-bold"> Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mt-4 space-y-5">
        { alert && <Alert>Todos los campos son obligatorios</Alert>}
        <div>
          <label
            className="block text-gray-700 font-bold"
            htmlFor="name"
          >Nombre Mascota
          </label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            id="name"
            placeholder="Ejm: Firulais"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-bold"
            htmlFor="ownerName"
          >Nombre Propietario
          </label>
          <input
            value={ownerName}
            onChange={e => setOwnerName(e.target.value)}
            type="text"
            id="ownerName"
            placeholder="Ejm: Bryan"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-bold"
            htmlFor="email"
          >E-mail
          </label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Ejm: bryan@gmail.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-bold"
            htmlFor="date"
          >Fecha de Alta
          </label>
          <input
            value={date}
            onChange={e => setDate(e.target.value)}
            type="date"
            id="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-bold"
            htmlFor="symptoms"
          >Síntomas
          </label>
          <textarea
            value={symptoms}
            onChange={e => setSymptoms(e.target.value)}
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white text-lg font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Agregar Paciente"
        />
      </form>
    </div>
  )
}

export default Form