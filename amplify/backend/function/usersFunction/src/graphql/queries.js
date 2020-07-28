"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listZoomMeets = exports.getZoomMeet = exports.listUsers = exports.getUser = exports.listSessions = exports.getSession = exports.listDevices = exports.getDevice = exports.listStudios = exports.getStudio = exports.listGyms = exports.getGym = void 0;

/* eslint-disable */
// this is an auto generated file. This will be overwritten
const getGym =
/* GraphQL */
`
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
exports.getGym = getGym;
const listGyms =
/* GraphQL */
`
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
exports.listGyms = listGyms;
const getStudio =
/* GraphQL */
`
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
          title
          isCanceled
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
exports.getStudio = getStudio;
const listStudios =
/* GraphQL */
`
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
exports.listStudios = listStudios;
const getDevice =
/* GraphQL */
`
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
exports.getDevice = getDevice;
const listDevices =
/* GraphQL */
`
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
exports.listDevices = listDevices;
const getSession =
/* GraphQL */
`
  query GetSession($id: ID!) {
    getSession(id: $id) {
      id
      title
      isCanceled
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
        profileInformation {
          firstName
          lastName
          emailAddress
          contactNumber
          coachRate
          cancellationRate
          about
          languages
          skills
        }
        createdAt
        updatedAt
      }
      clientID
      client {
        id
        username
        email
        userGroup
        profileInformation {
          firstName
          lastName
          emailAddress
          contactNumber
          coachRate
          cancellationRate
          about
          languages
          skills
        }
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
exports.getSession = getSession;
const listSessions =
/* GraphQL */
`
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        isCanceled
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
exports.listSessions = listSessions;
const getUser =
/* GraphQL */
`
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
          email
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
      profileInformation {
        firstName
        lastName
        emailAddress
        contactNumber
        coachRate
        cancellationRate
        about
        languages
        skills
      }
      createdAt
      updatedAt
    }
  }
`;
exports.getUser = getUser;
const listUsers =
/* GraphQL */
`
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
        profileInformation {
          firstName
          lastName
          emailAddress
          contactNumber
          coachRate
          cancellationRate
          about
          languages
          skills
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
exports.listUsers = listUsers;
const getZoomMeet =
/* GraphQL */
`
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
exports.getZoomMeet = getZoomMeet;
const listZoomMeets =
/* GraphQL */
`
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
exports.listZoomMeets = listZoomMeets;
