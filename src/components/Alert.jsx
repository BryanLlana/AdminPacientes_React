const Alert = ({ children }) => {
  return (
    <div className="bg-red-800 text-white py-2 text-center rounded-lg font-bold">
      { children }
    </div>
  )
}

export default Alert