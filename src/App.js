import React from "react";
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignUp } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from "aws-amplify";
import "./App.css";

import { listSessions as ListSessions, getStudio, listDevices } from "./graphql/queries";

import { updateDevice as UpdateDevice } from "./graphql/mutations";

import { onCreateSession } from "./graphql/subscriptions";

import CreateGymForm from "./CreateGymForm";
import CreateStudioForm from "./CreateStudioForm";
import CreateDeviceForm from "./CreateDeviceForm";
import CreateCoachForm from "./CreateCoachForm";
import CreateClientForm from "./CreateClientForm";
import CreateSessionForm from "./CreateSessionForm";

import Authentication from "./Authentication";

class App extends React.Component {
  // define some state to hold the data returned from the API
  state = {
    sessions: [],
    devices: [],
  };

  // execute the query in componentDidMount
  async componentDidMount() {
    try {
      const sessionsData = await API.graphql(graphqlOperation(ListSessions));
      const devicesData = await API.graphql(graphqlOperation(listDevices));
      this.setState({
        sessions: sessionsData.data.listSessions.items,
        devices: devicesData.data.listDevices.items,
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
                id: device.id,
                deviceZoomMeetId: eventData.value.data.onCreateSession.zoomMeetID,
              },
            };
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
      <Authentication />
    );
  }
}

export default App;
