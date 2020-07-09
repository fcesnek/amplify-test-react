import React from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import {
  createDevice as CreateDevice,
} from './graphql/mutations'
import {
  listStudios as ListStudios,
} from './graphql/queries'

export default class CreateDeviceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {studios: [], selectedStudio: ''}
  }

  async componentDidMount() {
    try {
      const studiosData = await API.graphql(graphqlOperation(ListStudios))
      console.log('studiosData:', studiosData)
      this.setState({
        studios: studiosData.data.listStudios.items
      })
    } catch (err) {
      console.log('error fetching studios...', err)
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state);
  }

  createDevice = async() => {
    const { selectedStudio } = this.state
    if (selectedStudio === '') return

    const device = { studioID: selectedStudio }
    this.setState({
      selectedStudio: ''
    })

    try {
      await API.graphql(graphqlOperation(CreateDevice, { input: device }))
      console.log('item created!')
    } catch (err) {
      console.log('error creating device...', err)
    }
  }

  render() {
    return (
      <>
        <input
          list="studios"
          name="selectedStudio"
          id="selectedStudio"
          value={this.state.selectedStudio}
          onChange={this.onChange}
          placeholder="Select a studio"
        />
        <datalist id="studios">
          {
            this.state.studios.map((studio) =>{
              return (
                <option name='selectedStudio' value={studio.id} key={studio.id}>{studio.title}</option>
              );
            } )
          }
        </datalist>
        <button onClick={this.createDevice}>Create Device</button>
      </>
    );
  }
}
