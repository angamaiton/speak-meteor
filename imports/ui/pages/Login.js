import React from 'react';
import { Link } from 'react-router';
// import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import handleLogin from '../../modules/login';

export default class Login extends React.Component {
  componentDidMount() {
    handleLogin({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="login">
        <section className="section">
          <div className="container">
            <h1 className="title">Log in</h1>
            <hr />
            <form
              ref={form => (this.loginForm = form) }
              className="login"
              onSubmit={ this.handleSubmit }
            >
              <div className="columns">
                <div className="column is-half">
                  <label htmlFor="username" className="label">Username</label>
                  <p className="control">
                    <input type="text" className="input" placeholder="Enter your username" name="emailAddress" />
                  </p>
                  <label htmlFor="password" className="label">Password</label>
                  <p className="control">
                    <input type="password" className="input" placeholder="Enter your password" name="password" />
                  </p>
                  <button className="button is-primary" type="submit">Log in</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}
