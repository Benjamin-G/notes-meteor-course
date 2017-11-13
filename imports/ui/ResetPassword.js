import React from 'react'
import { Link } from 'react-router'
import { Accounts } from 'meteor/accounts-base'
import { createContainer } from 'meteor/react-meteor-data'

export class ResetPassword extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      emailSent: ''
    }
  }

  onSubmitEmail(e) {
    e.preventDefault()

    let email = this.refs.email.value.trim()

    this.props.forgotPassword({ email }, (err) => {
      if (err) {
        this.setState({error: err.reason})
      } else {
        this.setState({error: ''})
      }
    })

    this.state.error ? undefined : this.setState({emailSent: 'Has been submitted'})

  }

  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Reset Password Below</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}
          {this.state.emailSent ? <p>{this.state.emailSent}</p> : undefined}

          <form onSubmit={this.onSubmitEmail.bind(this)} noValidate className="boxed-view__form">
            <input type="email" ref="email" name="email" placeholder="Email"/>
            <button className="button">Send to email</button>
          </form>
        </div>
      </div>
    )
  }
}

ResetPassword.propTypes ={
  createUser: React.PropTypes.func.isRequired
}

export default createContainer(() => {
  return {
    createUser: Accounts.createUser,
    forgotPassword: Accounts.forgotPassword

  }
}, ResetPassword)
