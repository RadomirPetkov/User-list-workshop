const baseUrl = "http://localhost:3005/api/users"


export const getAllData = async () => {
  const result = await fetch(`${baseUrl}`)
  const { count, users } = await result.json()
  return users
}

export const getOneUser = async (userId) => {
  const result = await fetch(`${baseUrl}/${userId}`)
  const data = await result.json()
  return data
}