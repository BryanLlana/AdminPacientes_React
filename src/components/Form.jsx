const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-2 text-center">
        Añade Pacientes y 
        <span className="text-indigo-600 font-bold"> Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mt-4 space-y-5 mb-10">
        <div>
          <label
            className="block text-gray-700 font-bold"
            htmlFor="name"
          >Nombre Mascota
          </label>
          <input
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