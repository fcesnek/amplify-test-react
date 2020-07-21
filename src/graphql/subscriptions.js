/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGym = /* GraphQL */ `
  subscription OnCreateGym {
    onCreateGym {
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
export const onUpdateGym = /* GraphQL */ `
  subscription OnUpdateGym {
    onUpdateGym {
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
export const onDeleteGym = /* GraphQL */ `
  subscription OnDeleteGym {
    onDeleteGym {
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
export const onCreateStudio = /* GraphQL */ `
  subscription OnCreateStudio {
    onCreateStudio {
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
export const onUpdateStudio = /* GraphQL */ `
  subscription OnUpdateStudio {
    onUpdateStudio {
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
export const onDeleteStudio = /* GraphQL */ `
  subscription OnDeleteStudio {
    onDeleteStudio {
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
export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice {
    onCreateDevice {
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice {
    onUpdateDevice {
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice {
    onDeleteDevice {
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
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession {
    onCreateSession {
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession {
    onUpdateSession {
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession {
    onDeleteSession {
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
export const onCreateCoach = /* GraphQL */ `
  subscription OnCreateCoach {
    onCreateCoach {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCoach = /* GraphQL */ `
  subscription OnUpdateCoach {
    onUpdateCoach {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCoach = /* GraphQL */ `
  subscription OnDeleteCoach {
    onDeleteCoach {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient {
    onCreateClient {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient {
    onUpdateClient {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient {
    onDeleteClient {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateZoomMeet = /* GraphQL */ `
  subscription OnCreateZoomMeet {
    onCreateZoomMeet {
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
export const onUpdateZoomMeet = /* GraphQL */ `
  subscription OnUpdateZoomMeet {
    onUpdateZoomMeet {
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
export const onDeleteZoomMeet = /* GraphQL */ `
  subscription OnDeleteZoomMeet {
    onDeleteZoomMeet {
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
