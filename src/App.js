import React from "react";
import { withAuthenticator, AmplifyGreetings } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";

import {
  listSessions as ListSessions,
  getStudio,
} from "./graphql/queries";

import {
  updateDevice as UpdateDevice,
} from "./graphql/mutations";

import { onCreateSession } from "./graphql/subscriptions";

import CreateGymForm from "./CreateGymForm";
import CreateStudioForm from "./CreateStudioForm";
import CreateDeviceForm from "./CreateDeviceForm";
import CreateCoachForm from "./CreateCoachForm";
import CreateClientForm from "./CreateClientForm";
import CreateSessionForm from "./CreateSessionForm";

class App extends React.Component {
  // define some state to hold the data returned from the API
  state = {
    sessions: [],
  };

  // execute the query in componentDidMount
  async componentDidMount() {
    try {
      const sessionsData = await API.graphql(graphqlOperation(ListSessions));
      console.log(sessionsData);
      this.setState({
        sessions: sessionsData.data.listSessions.items,
      });
    } catch (err) {
      console.log("error fetching sessions...", err);
    }
  }

  async componentDidUpdate() {
    await API.graphql(graphqlOperation(onCreateSession)).subscribe({
      next: async (eventData) => {
        const studioDevicesResponse = await API.graphql(graphqlOperation(getStudio, { id: eventData.value.data.onCreateSession.studioID }));
        const studioDevices = studioDevicesResponse.data.getStudio.devices.items;
        for (const device of studioDevices) {
          try {
            const variables = {
              input: {
                id: device.id, deviceZoomMeetId: eventData.value.data.onCreateSession.zoomMeetID
              }
            }
            await API.graphql(graphqlOperation(UpdateDevice, variables));
          } catch (err) {
            console.log(err);
          }
        }
      },
    });
  }
  render() {
    return (
      <>
        <AmplifyGreetings></AmplifyGreetings>
        <CreateGymForm />
        <br />
        <CreateStudioForm />
        <br />
        <CreateDeviceForm />
        <br />
        <CreateCoachForm />
        <br />
        <CreateClientForm />
        <br />
        <CreateSessionForm />
        {this.state.sessions.map((session, index) => (
          <div key={index}>
            <h3>Gym: {session.studio.gym.name}</h3>
            <h3>Studio: {session.studio.title}</h3>
            <h3>Coach: {session.coach.name}</h3>
            <h3>Client: {session.client.name}</h3>
            <h3>Zoom Meet</h3>
            <h5>Start url: {session.zoomMeet.start_url}</h5>
            <h5>Password: {session.zoomMeet.password}</h5>
          </div>
        ))}
      </>
    );
  }
}

export default withAuthenticator(App);
