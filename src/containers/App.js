import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import { setYear } from '../actions/PageActions'
import './App.css'

class App extends Component {
  render() {
    const { user, page, setYear } = this.props

    return (
      <div className="row">
        <Page photos={page.photos} year={page.year} setYear={setYear} />
        <User name={user.name} />
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store)
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => ({
  // setYearAction: year => { console.log(year) },
  setYear: year => dispatch(setYear(year)),
})

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
