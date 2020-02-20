import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3333/api'
const INITIAL_VALUES = {}

export function getList() {
  const response = axios.get(`${BASE_URL}/billingCycles`)
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: response
  }
}

export function create(values) {
  return dispath => {
    axios
      .post(`${BASE_URL}/billingCycles`, values)
      .then(resp => {
        toastr.success('Sucesso', 'Operação Realizada com sucesso.')
        dispath(init())
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error('Erro', error))
      })
  }
}

export function showUpdate(billingCycle) {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle)
  ]
}

export function init() {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES)
  ]
}
