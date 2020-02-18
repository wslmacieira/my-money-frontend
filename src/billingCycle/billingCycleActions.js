import axios from 'axios'
const BASE_URL ='http://localhost:3333/api'

export function getList() {
  const response = axios.get(`${BASE_URL}/billingCycles`)
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: response
  }
}

export function create(values) {
  axios.post(`${BASE_URL}/billingCycles`, values)
  return {
    type: 'TEMP'
  }
}