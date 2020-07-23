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
        username
        email
        userGroup
        createdAt
        updatedAt
      }
      clientID
      client {
        id
        username
        email
        userGroup
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
          createdAt
          updatedAt
        }
        coachID
        coach {
          id
          username
          email
          userGroup
          createdAt
          updatedAt
        }
        clientID
        client {
          id
          username
          email
          userGroup
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      userGroup
      intakeFormDetails {
        personalDetails {
          fullName
          dateOfBirth
          height
          weight
          sex
          phoneNumber
          emergencyContactName
          emergencyContactNumber
        }
        exerciseHistory {
          exerciseImportance
          weeklyExercise
          ageOfMostConsistency
          athleticismLevel
          exercisePrograms
          wantedExerciseAchievements
          confidenceToAchieveGoals
        }
        medicalHistory {
          hasMedicalConditions
          injuries
          surgeries
          chronicDisease
          medications
        }
        behavioralQuestions {
          barrierToExercise
          confidenceToOvercomeBarrier
          friendAndFamilySupport
          exerciseImportance
          motivation
          resultsExpectation
        }
        trainerPreferences {
          language
          trainerSex
          coachPersonality
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        userGroup
        intakeFormDetails {
          personalDetails {
            fullName
            dateOfBirth
            height
            weight
            sex
            phoneNumber
            emergencyContactName
            emergencyContactNumber
          }
          exerciseHistory {
            exerciseImportance
            weeklyExercise
            ageOfMostConsistency
            athleticismLevel
            exercisePrograms
            wantedExerciseAchievements
            confidenceToAchieveGoals
          }
          medicalHistory {
            hasMedicalConditions
            toldToLimitActivity {
              hasBeenToldToLimitActivity
              reasonForActivityLimit
            }
            injuries
            surgeries
            chronicDisease
            medications
          }
          behavioralQuestions {
            barrierToExercise
            confidenceToOvercomeBarrier
            friendAndFamilySupport
            exerciseImportance
            motivation
            resultsExpectation
          }
          trainerPreferences {
            language
            trainerSex
            coachPersonality
          }
        }
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
