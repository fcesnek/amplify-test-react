import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import "./App.css";
import { Auth } from "aws-amplify";
import { listSessions as ListSessions, getStudio, listDevices, listUsers } from "./graphql/queries";

import { updateDevice as UpdateDevice } from "./graphql/mutations";

import { onCreateSession } from "./graphql/subscriptions";

import CreateGymForm from "./CreateGymForm";
import CreateStudioForm from "./CreateStudioForm";
import CreateDeviceForm from "./CreateDeviceForm";
import CreateSessionForm from "./CreateSessionForm";

class App extends React.Component {
  // define some state to hold the data returned from the API
  state = {
    sessions: [],
    devices: [],
    user: null
  };

  // execute the query in componentDidMount
  async componentDidMount() {
    try {
      const sessionsData = await API.graphql(graphqlOperation(ListSessions));
      const devicesData = await API.graphql(graphqlOperation(listDevices));
      const usersData = await API.graphql(graphqlOperation(listUsers));
      const test = await API.get("myGymRestApi", "/users", {});
      console.log("test", test);
      console.log("sessions", sessionsData);
      console.log("users", usersData);
      Auth.currentAuthenticatedUser({
        bypassCache: true // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      })
        .then(data => {
          let user = {username:data.username,...data.attributes}
          this.setState({user})
          console.log("user", this.state.user);
        })
        .catch(err => console.log(err));
      this.setState({
        sessions: sessionsData.data.listSessions.items,
        devices: devicesData.data.listDevices.items,
      });
    } catch (err) {
      console.log("error fetching sessions...", err);
    }
  }
  
  logOut = async () => {
    try {
      await Auth.signOut();
      window.location.reload(false);
    } catch (error) {
        console.log('error signing out: ', error);
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
      <>
        <input
          type="button"
          onClick={this.logOut}
          value="Sign out"
        />
        <div class="row">
          <div class="column">
            <div className="center">
              <CreateGymForm />
              <br />
              <CreateStudioForm />
              <br />
              <CreateDeviceForm />
              <br />
            </div>
          </div>
        </div>
        <div className="session">
          <CreateSessionForm />
        </div>
        <div className="tables">
          <h3>Sessions</h3>
          <div className="sessions-table">
            <table>
              <tr>
                <th>Gym</th>
                <th>Studio</th>
                <th>Coach</th>
                <th>Client</th>
                <th>Zoom meet url</th>
                <th>Zoom meet password</th>
                <th>Start time</th>
              </tr>
              {this.state.sessions.map((session, index) => (
                <tr key={index}>
                  <td>{session.studio.gym.name}</td>
                  <td>{session.studio.title}</td>
                  <td>{session.coach.username}</td>
                  <td>{session.client.username}</td>
                  <td>{session.zoomMeet.join_url}</td>
                  <td>{session.zoomMeet.password}</td>
                  <td>{String(new Date(session.start_time))}</td>
                  <td>{String(new Date(session.end_time))}</td>
                </tr>
              ))}
            </table>
          </div>
          <h3>Devices</h3>
          <div className="devices-table">
            <table>
              <tr>
                <th>id</th>
                <th>Studio</th>
                <th>Zoom Meet url</th>
              </tr>
              {this.state.devices.map((device, index) => (
                <tr key={index}>
                  <td>{device.id}</td>
                  <td>{device.studio.title}</td>
                  <td>{device.zoomMeet ? device.zoomMeet.join_url : ""}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default App;
