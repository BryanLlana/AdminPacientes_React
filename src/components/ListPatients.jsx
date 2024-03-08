import Patient from "./Patient"

const ListPatients = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-lg mt-2 text-center">
        Administra tus 
        <span className="text-indigo-600 font-bold"> Pacientes y Citas</span>
      </p>
      { patients.map(patient => (
        <Patient patient={patient} setPatient={setPatient} deletePatient={deletePatient} key={patient.id}/>
        )) }
      { patients.length === 0 && <p className="text-center mt-4">No hay pacientes</p>}
    </div>
  )
}

export default ListPatients