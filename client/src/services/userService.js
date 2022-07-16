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

export const editUser = async (userId, userData) => {
  const response = await fetch(`${baseUrl}/${userId}`, {
    method: "PUT",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  const result = await response.json()
  return result
}

export const addUser = async (userData) => {
  const response = await fetch(`${baseUrl}`, {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  const result = await response.json()
  return result
}

export const deleteUser = async (userId) => {
  const response = await fetch(`${baseUrl}/${userId}`, {
    method: "DELETE"
  })
  const result = await response.json()  
  return result
}