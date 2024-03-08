import { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import ListPatients from './components/ListPatients'

const App = () => {
  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  const deletePatient = id => {
    const response = confirm('¿Deseas eliminar un paciente?')
    if (response) {
      const patientsUpdate = patients.filter(p => p.id !== id)
      setPatients(patientsUpdate)
    }
  }

  return (
    <div className='container mx-auto mt-10'>
      <Header /> 
      <div className='mt-12 md:flex md:gap-5 px-4 md:px-0 space-y-10 md:space-y-0 pb-10 md:pb-0'>
        <Form patient={patient} patients={patients} setPatients={setPatients} />
        <ListPatients patients={patients} setPatient={setPatient} deletePatient={deletePatient} />
      </div>
    </div>
  )
}

export default App
