import React from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import {
  createZoomMeetApi,
  createSession as CreateSession,
  createZoomMeet
} from './graphql/mutations'
import {
  listStudios as ListStudios,
  listCoachs as ListCoaches,
  listClients as ListClients,
} from './graphql/queries'

export default class CreateSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      coaches: [],
      studios: [],
      selectedClient: '',
      selectedCoach: '',
      selectedStudio: '',
      zoomMeet: {},
      topic: ''
    }
  }

  async componentDidMount() {
    try {
      const studiosData = await API.graphql(graphqlOperation(ListStudios))
      const coachesData = await API.graphql(graphqlOperation(ListCoaches))
      const clientsData = await API.graphql(graphqlOperation(ListClients))
      this.setState({
        studios: studiosData.data.listStudios.items,
        coaches: coachesData.data.listCoachs.items,
        clients: clientsData.data.listClients.items,
      })

      console.log('state:', this.state)
    } catch (err) {
      console.log('error fetching studios...', err)
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  createSession = async() => {
    const { selectedStudio, selectedCoach, selectedClient, topic } = this.state
    if (selectedStudio === '' || selectedCoach === '' || selectedClient === '' || topic === '') return
    try {
      const { join_url, password, start_url } = (await API.graphql(graphqlOperation(createZoomMeetApi, { topic }))).data.createZoomMeetApi;
      const zoomMeetData = { join_url, password, start_url };
      const createdMeet = (await API.graphql(graphqlOperation(createZoomMeet, { input: zoomMeetData }))).data;
      this.setState({
        zoomMeet: createdMeet,
      })
      console.log('meet created!')
    } catch (err) {
      console.log('error creating meet...', err)
    }

    const { zoomMeet } = this.state;
    console.log("zmeet", zoomMeet)

    const session = { studioID: selectedStudio, coachID: selectedCoach, clientID: selectedClient, zoomMeetID: zoomMeet.createZoomMeet.id }
    console.log("session?", session);

    try {
      await API.graphql(graphqlOperation(CreateSession, { input: session }))
      console.log('item created!')
    } catch (err) {
      console.log('error creating session...', err)
    }


    this.setState({
      selectedStudio: '',
      selectedCoach: '',
      selectedClient: '',
      topic: '',
      zoomMeet: {}
    })
  }

  render() {
    return (
      <>
      <input
          name='topic'
          onChange={this.onChange}
          value={this.state.topic}
          placeholder='topic'
        />
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
            })
          }
        </datalist>
        <input
          list="coaches"
          name="selectedCoach"
          id="selectedCoach"
          value={this.state.selectedCoach}
          onChange={this.onChange}
          placeholder="Select a coach"
        />
        <datalist id="coaches">
          {
            this.state.coaches.map((coach) =>{
              return (
                <option name='selectedCoach' value={coach.id} key={coach.id}>{coach.name}</option>
              );
            })
          }
        </datalist>
        <input
          list="clients"
          name="selectedClient"
          id="selectedClient"
          value={this.state.selectedClient}
          onChange={this.onChange}
          placeholder="Select a client"
        />
        <datalist id="clients">
          {
            this.state.clients.map((client) =>{
              return (
                <option name='selectedClient' value={client.id} key={client.id}>{client.name}</option>
              );
            })
          }
        </datalist>
        <button onClick={this.createSession}>Create Session</button>
      </>
    );
  }
}
