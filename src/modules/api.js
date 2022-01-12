import axios from 'axios'
import { makeUseAxios } from 'axios-hooks'

export const useApi = makeUseAxios({
  axios: axios.create({ baseURL: '/api' })
})

export const authAsPassengerUri = '/auth/passenger';