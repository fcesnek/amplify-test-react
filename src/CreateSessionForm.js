import React from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import {
  createZoomMeetApi,
  createSession as CreateSession,
  createZoomMeet
} from './graphql/mutations'
import {
  listStudios as ListStudios,
  listUsers as ListUsers,
} from './graphql/queries'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

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
      topic: '',
      start_time: '',
      end_time: ''
    }
  }

  async componentDidMount() {
    try {
      const studiosData = await API.graphql(graphqlOperation(ListStudios))
      const coachesData = await API.graphql(graphqlOperation(ListUsers))
      const clientsData = await API.graphql(graphqlOperation(ListUsers))
      this.setState({
        studios: studiosData.data.listStudios.items,
        coaches: coachesData.data.listUsers.items,
        clients: clientsData.data.listUsers.items,
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

  handleStartChange = date => {
    this.setState({
      start_time: date
    });
  };

  handleEndChange = date => {
    this.setState({
      end_time: date
    });
  };

  createSession = async() => {
    const { selectedStudio, selectedCoach, selectedClient, topic, start_time, end_time } = this.state;
    const duration = parseInt(Math.abs(end_time.getTime() - start_time.getTime()) / (1000 * 60) % 60);
    
    if (selectedStudio === '' || selectedCoach === '' || selectedClient === '' || topic === '') return
    try {
      const zoomMeetApiData = (await API.graphql(graphqlOperation(createZoomMeetApi, { topic, start_time, duration }))).data.createZoomMeetApi;
      const zoomMeetData = {
        join_url: zoomMeetApiData.join_url,
        password: zoomMeetApiData.password,
        start_url: zoomMeetApiData.start_url,
        start_time: zoomMeetApiData.start_time,
        duration: zoomMeetApiData.duration
      };
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

    const session = { studioID: selectedStudio, coachID: selectedCoach, clientID: selectedClient, zoomMeetID: zoomMeet.createZoomMeet.id, start_time, end_time }
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
      zoomMeet: {},
      start_time: '',
      end_time: ''
    })
  }

  render() {
    const { start_time, end_time } = this.state;
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
        <DatePicker
          selected={start_time}
          onChange={this.handleStartChange}
          showTimeSelect
          placeholderText="Select starting time"
          dateFormat="Pp"
        />
        <DatePicker
          selected={end_time}
          onChange={this.handleEndChange}
          showTimeSelect
          placeholderText="Select ending time"
          dateFormat="Pp"
        />
        <button onClick={this.createSession}>Create Session</button>
      </>
    );
  }
}
