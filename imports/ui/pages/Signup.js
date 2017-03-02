import React from 'react';
import { Link } from 'react-router';
import handleSignup from '../../modules/signup';

export default class Signup extends React.Component {
  componentDidMount() {
    handleSignup({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Signup">
        <section className="section">
          <div className="container">
            <h1 className="title">Sign up</h1>
            <hr />
            <form
              ref={form => (this.loginForm = form) }
              className="login"
              onSubmit={ this.handleSubmit }
            >
              <div className="columns">
                <div className="column is-half">
                  <label htmlFor="firstName" className="label">First Name</label>
                  <p className="control">
                    <input type="text" className="input" placeholder="First Name" name="firstName" />
                  </p>
                  <label htmlFor="lastName" className="label">Last Name</label>
                  <p className="control">
                    <input type="text" className="input" placeholder="Last Name" name="lastName" />
                  </p>
                  <label htmlFor="emailAddress" className="label">Email Address</label>
                  <p className="control">
                    <input type="text" className="input" placeholder="Email Address" name="emailAddress" />
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
