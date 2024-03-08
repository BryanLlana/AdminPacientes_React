import Form from './components/Form'
import Header from './components/Header'
import ListPatients from './components/ListPatients'

const App = () => {
  return (
    <div className='container mx-auto mt-10'>
      <Header /> 
      <div className='mt-12 md:flex px-4 md:px-0'>
        <Form />
        <ListPatients />
      </div>
    </div>
  )
}

export default App
