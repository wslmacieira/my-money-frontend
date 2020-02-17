import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList } from '../billingCycle/billingCycleActions'

class BillingCycleList extends Component {

  componentWillMount() {
    this.props.getList()
  }

  renderRows() {
    const list = this.props.list || []
    return list.map((billing) => (
      <tr key={billing._id}>
        <td>{billing.name}</td>
        <td>{billing.month}</td>
        <td>{billing.year}</td>
      </tr>
    ))
  }
  
  render() {
    console.log(this.props.list)
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: state.billingCycle.list
})
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)
