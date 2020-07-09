import React from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import {
  createGym as CreateGym,
} from './graphql/mutations'

export default class CreateGymForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', location: ''}
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  createGym = async() => {
    const { name, location } = this.state
    if (name === '' || location === '') return

    const gym = { name, location }
    this.setState({
      name: '', location: ''
    })

    try {
      await API.graphql(graphqlOperation(CreateGym, { input: gym }))
      console.log('item created!')
    } catch (err) {
      console.log('error creating gym...', err)
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
        <input
          name='location'
          onChange={this.onChange}
          value={this.state.location}
          placeholder='location'
        />
        <button onClick={this.createGym}>Create Gym</button>
      </>
    );
  }
}
