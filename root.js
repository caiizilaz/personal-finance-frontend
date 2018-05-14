import React from 'react'
import { connect } from 'react-redux'
import Authed from './components/common/Authed'
import UnAuth from './components/common/UnAuth'

class Root extends React.Component {
  render() {
    let { isAuth } = this.props.auth
    return (
      isAuth ? <Authed /> : <UnAuth />
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Root)