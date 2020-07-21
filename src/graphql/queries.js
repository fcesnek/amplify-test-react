/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGym = /* GraphQL */ `
  query GetGym($id: ID!) {
    getGym(id: $id) {
      id
      name
      location
      studio {
        items {
          id
          title
          gymID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGyms = /* GraphQL */ `
  query ListGyms(
    $filter: ModelGymFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGyms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location
        studio {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudio = /* GraphQL */ `
  query GetStudio($id: ID!) {
    getStudio(id: $id) {
      id
      title
      gymID
      gym {
        id
        name
        location
        studio {
          nextToken
        }
        createdAt
        updatedAt
      }
      devices {
        items {
          id
          studioID
          createdAt
          updatedAt
        }
        nextToken
      }
      sessions {
        items {
          id
          studioID
          coachID
          clientID
          zoomMeetID
          start_time
          end_time
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listStudios = /* GraphQL */ `
  query ListStudios(
    $filter: ModelStudioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        gymID
        gym {
          id
          name
          location
          createdAt
          updatedAt
        }
        devices {
          nextToken
        }
        sessions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
      id
      studioID
      studio {
        id
        title
        gymID
        gym {
          id
          name
          location
          createdAt
          updatedAt
        }
        devices {
          nextToken
        }
        sessions {
          nextToken
        }
        createdAt
        updatedAt
      }
      zoomMeet {
        id
        start_url
        topic
        join_url
        password
        start_time
        duration
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDevices = /* GraphQL */ `
  query ListDevices(
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studioID
        studio {
          id
          title
          gymID
          createdAt
          updatedAt
        }
        zoomMeet {
          id
          start_url
          topic
          join_url
          password
          start_time
          duration
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
      id
      studioID
      studio {
        id
        title
        gymID
        gym {
          id
          name
          location
          createdAt
          updatedAt
        }
        devices {
          nextToken
        }
        sessions {
          nextToken
        }
        createdAt
        updatedAt
      }
      coachID
      coach {
        id
        name
        createdAt
        updatedAt
      }
      clientID
      client {
        id
        name
        createdAt
        updatedAt
      }
      zoomMeetID
      zoomMeet {
        id
        start_url
        topic
        join_url
        password
        start_time
        duration
        createdAt
        updatedAt
      }
      start_time
      end_time
      createdAt
      updatedAt
    }
  }
`;
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studioID
        studio {
          id
          title
          gymID
          gym {
            id
            name
            location
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        coachID
        coach {
          id
          name
          createdAt
          updatedAt
        }
        clientID
        client {
          id
          name
          createdAt
          updatedAt
        }
        zoomMeetID
        zoomMeet {
          id
          start_url
          topic
          join_url
          password
          start_time
          duration
          createdAt
          updatedAt
        }
        start_time
        end_time
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCoach = /* GraphQL */ `
  query GetCoach($id: ID!) {
    getCoach(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listCoachs = /* GraphQL */ `
  query ListCoachs(
    $filter: ModelCoachFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoachs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getZoomMeet = /* GraphQL */ `
  query GetZoomMeet($id: ID!) {
    getZoomMeet(id: $id) {
      id
      start_url
      topic
      join_url
      password
      start_time
      duration
      createdAt
      updatedAt
    }
  }
`;
export const listZoomMeets = /* GraphQL */ `
  query ListZoomMeets(
    $filter: ModelZoomMeetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listZoomMeets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        start_url
        topic
        join_url
        password
        start_time
        duration
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
