import React from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import {
  createUser as CreateUser,
} from './graphql/mutations'

export default class CreateCoachForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ''}
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  createCoach = async() => {
    const { name } = this.state
    if (name === '') return

    const coach = { name }
    this.setState({
      name: ''
    })

    try {
      await API.graphql(graphqlOperation(CreateUser, { input: coach }))
      console.log('item created!')
    } catch (err) {
      console.log('error creating coach...', err)
    }
  }

  render() {
    return (
      <>
      <input
          name='name'
          onChange={this.onChange}
          value={this.state.name}
          placeholder='name'
        />
        <button onClick={this.createCoach}>Create Coach</button>
      </>
    );
  }
}
