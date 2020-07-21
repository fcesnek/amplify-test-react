import React, { Component } from "react";
import { Auth } from "aws-amplify";

export default class Verify extends Component {
  handleVerification = (event) => {
    event.preventDefault();
    const { username, code } = this.props.inputs;
    // After retrieveing the confirmation code from the user
    Auth.confirmSignUp(username, code, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true,
    })
      .then((data) => console.log(data))
      .then(() => this.props.switchComponent("SignIn"))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="form-style-2">
        <div className="form-style-2-heading">Verify code</div>
        <form>
          <label for="code">
            <span>
              Verification code <span class="required">*</span>
            </span>
            <input type="text" name="code" value={this.props.code} placeholder="Verification Code" onChange={this.props.handleFormInput} />
          </label>
          <label>
            <span> </span>
            <input type="submit" value="SUBMIT VERIFICATION" onClick={this.handleVerification} />
          </label>
        </form>
      </div>
    );
  }
}
