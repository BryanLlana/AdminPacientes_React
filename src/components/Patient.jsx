import { formatDate } from "../helpers"

const Patient = ({patient}) => {
  return (
    <div className="mt-4 bg-white shadow-md px-5 py-5 rounded-xl space-y-1">
      <p className="font-bold text-gray-700">Nombre:
        <span className="font-normal"> {patient.name}</span>
      </p>
      <p className="font-bold text-gray-700">Propietario:
        <span className="font-normal"> {patient.ownerName}</span>
      </p>
      <p className="font-bold text-gray-700">E-mail:
        <span className="font-normal"> {patient.email}</span>
      </p>
      <p className="font-bold text-gray-700">Fecha de Alta:
        <span className="font-normal"> {formatDate(patient.date)}</span>
      </p>
      <p className="font-bold text-gray-700">Síntomas:
        <span className="font-normal"> {patient.symptoms}</span>
      </p>
    </div>
  )
}

export default Patient