import React, { Component } from "react";
import { Auth } from "aws-amplify";
import './SignUp.css'

export default class SignUp extends Component {
  state = {
    group: "client",
  };
  handleSignUp = (event) => {
    event.preventDefault();
    const { username, email, password, phone_number } = this.props.inputs;
    const { group } = this.state;

    Auth.signUp({
      username,
      password,
      attributes: {
        email, // optional
        phone_number, // optional - E.164 number convention
        "custom:group": group,
      },
      validationData: [], //optional
    })
      .then((data) => console.log(data))
      .then(() => this.props.switchComponent("Verify")) // switches Sign Up to Verification
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    this.setState({ group: e.target.value });
  };

  render() {
    return (
      <div class="form-style-2">
        <div class="form-style-2-heading">Sign Up</div>
        <form className="authentication__form">
          <label for="username">
            <span>
              Username <span class="required">*</span>
            </span>
            <input type="text" name="username" value={this.props.username} placeholder="Username" onChange={this.props.handleFormInput} />
          </label>
          <label for="email">
            <span>
              Email <span class="required">*</span>
            </span>
            <input type="email" name="email" value={this.props.email} placeholder="Email" onChange={this.props.handleFormInput} />
          </label>
          <label for="password">
            <span>
              Password <span class="required">*</span>
            </span>
            <input type="password" name="password" value={this.props.password} placeholder="Password" onChange={this.props.handleFormInput} />{" "}
          </label>
          <label for="phone_number">
            <span>
              Password <span class="required">*</span>
            </span>
            <input type="text" name="phone_number" value={this.props.phone_number} placeholder="Phone Number" onChange={this.props.handleFormInput} />
          </label>
          <label for="user_group">
            <span>User group</span>
            <select name="user_group" class="select-field" value={this.state.group} onChange={this.handleChange}>
              <option value="client">Client</option>
              <option value="coach">Coach</option>
            </select>
          </label>
          <label>
            <span> </span>
            <input type="submit" value="SIGN UP" onClick={this.handleSignUp} />
          </label>
          <input type="button" value="Click here to sign in" onClick={() => this.props.switchComponent("SignIn")} />
        </form>
      </div>
    );
  }
}
