import axios from "../../utils/apiClient";

export const reqSignUp = async (params) => {
  const [error, data] = await axios.post('/api/auth/signup', params)
    .then(data => [null, data])
    .catch(error => [error.response.data.error, error.response.data.message])

  return [error, data]
}

export const reqSignIn = async (params) => {
  const [error, data] = await axios.post('/api/auth/signin', params)
    .then(data => [null, data])
    .catch(error => [error.response.data.error, error.response.data.message])

  return [error, data]
}


export const reqProfile = async (params) => {
  const [error, data] = await axios.post('/api/auth/signin', params)
    .then(data => [null, data])
    .catch(error => [error.response.data.error, error.response.data.message])

  return [error, data]
}