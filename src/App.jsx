import Form from './components/Form'
import Header from './components/Header'
import ListPatients from './components/ListPatients'

const App = () => {
  return (
    <div className='container mx-auto mt-10'>
      <Header /> 
      <Form />
      <ListPatients />
    </div>
  )
}

export default App
