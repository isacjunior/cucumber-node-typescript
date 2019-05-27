import SwapiApi from './api/swapi'
import { AxiosPromise } from 'axios'
import { People } from '../types/people'

const SwapiService = {
  getPeople: (id: string): AxiosPromise<People> => SwapiApi.get(`/people/${id}`),
}

export default SwapiService