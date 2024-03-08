export const formatDate = d => {
  const date = new Date(d)
  date.setDate(date.getDate() + 1)
  return date.toLocaleDateString('es-PE', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
}

export const generateId = () => {
  const random = Math.random().toString(36).substring(2)
  const fecha = Date.now().toString(36)
  return random + fecha
}