import React from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import {
  createStudio as CreateStudio,
} from './graphql/mutations'
import {
  listGyms as ListGyms,
} from './graphql/queries'

export default class CreateStudioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', gyms: [], selectedGym: ''}
  }

  async componentDidMount() {
    try {
      const gymData = await API.graphql(graphqlOperation(ListGyms))
      console.log('gymData:', gymData)
      this.setState({
        gyms: gymData.data.listGyms.items
      })
    } catch (err) {
      console.log('error fetching gyms...', err)
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state);
  }

  createStudio = async() => {
    const { title, selectedGym } = this.state
    if (title === '' || selectedGym === '') return

    const studio = { title, gymID: selectedGym }
    this.setState({
      title: '', selectedGym: ''
    })

    try {
      await API.graphql(graphqlOperation(CreateStudio, { input: studio }))
      console.log('item created!')
    } catch (err) {
      console.log('error creating studio...', err)
    }
  }

  render() {
    return (
      <>
      <input
        name='title'
        onChange={this.onChange}
        value={this.state.title}
        placeholder='title'
      />
        <input
          list="gyms"
          name="selectedGym"
          id="selectedGym"
          value={this.state.selectedGym}
          onChange={this.onChange}
          placeholder="Select a gym"
        />
        <datalist id="gyms">
          {
            this.state.gyms.map((gym) =>{
              return (
                <option name='selectedGym' value={gym.id} key={gym.id}>{gym.name}</option>
              );
            } )
          }
        </datalist>
        <button onClick={this.createStudio}>Create Studio</button>
      </>
    );
  }
}
