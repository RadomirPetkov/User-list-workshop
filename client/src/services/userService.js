const baseUrl = "http://localhost:3005/api"


export const getAllData = async () => {
    const result = await fetch(`${baseUrl}/users`)
    const {count, users} = await result.json()
return users
  }
