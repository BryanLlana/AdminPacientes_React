import { formatDate } from "../helpers"

const Patient = ({patient, setPatient}) => {
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

      <div className="pt-3 flex gap-5 justify-between md:justify-normal">
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg" type="button"
          onClick={() => setPatient(patient)}
        >Editar
        </button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
          type="button"
        >Eliminar
        </button>
      </div>
    </div>
  )
}

export default Patient