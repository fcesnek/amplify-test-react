"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onDeleteZoomMeet = exports.onUpdateZoomMeet = exports.onCreateZoomMeet = exports.onDeleteUser = exports.onUpdateUser = exports.onCreateUser = exports.onDeleteSession = exports.onUpdateSession = exports.onCreateSession = exports.onDeleteDevice = exports.onUpdateDevice = exports.onCreateDevice = exports.onDeleteStudio = exports.onUpdateStudio = exports.onCreateStudio = exports.onDeleteGym = exports.onUpdateGym = exports.onCreateGym = void 0;

/* eslint-disable */
// this is an auto generated file. This will be overwritten
const onCreateGym =
/* GraphQL */
`
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
exports.onCreateGym = onCreateGym;
const onUpdateGym =
/* GraphQL */
`
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
exports.onUpdateGym = onUpdateGym;
const onDeleteGym =
/* GraphQL */
`
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
exports.onDeleteGym = onDeleteGym;
const onCreateStudio =
/* GraphQL */
`
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
exports.onCreateStudio = onCreateStudio;
const onUpdateStudio =
/* GraphQL */
`
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
exports.onUpdateStudio = onUpdateStudio;
const onDeleteStudio =
/* GraphQL */
`
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
exports.onDeleteStudio = onDeleteStudio;
const onCreateDevice =
/* GraphQL */
`
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
exports.onCreateDevice = onCreateDevice;
const onUpdateDevice =
/* GraphQL */
`
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
exports.onUpdateDevice = onUpdateDevice;
const onDeleteDevice =
/* GraphQL */
`
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
exports.onDeleteDevice = onDeleteDevice;
const onCreateSession =
/* GraphQL */
`
  subscription OnCreateSession {
    onCreateSession {
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
exports.onCreateSession = onCreateSession;
const onUpdateSession =
/* GraphQL */
`
  subscription OnUpdateSession {
    onUpdateSession {
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
exports.onUpdateSession = onUpdateSession;
const onDeleteSession =
/* GraphQL */
`
  subscription OnDeleteSession {
    onDeleteSession {
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
exports.onDeleteSession = onDeleteSession;
const onCreateUser =
/* GraphQL */
`
  subscription OnCreateUser {
    onCreateUser {
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
exports.onCreateUser = onCreateUser;
const onUpdateUser =
/* GraphQL */
`
  subscription OnUpdateUser {
    onUpdateUser {
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
exports.onUpdateUser = onUpdateUser;
const onDeleteUser =
/* GraphQL */
`
  subscription OnDeleteUser {
    onDeleteUser {
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
exports.onDeleteUser = onDeleteUser;
const onCreateZoomMeet =
/* GraphQL */
`
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
exports.onCreateZoomMeet = onCreateZoomMeet;
const onUpdateZoomMeet =
/* GraphQL */
`
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
exports.onUpdateZoomMeet = onUpdateZoomMeet;
const onDeleteZoomMeet =
/* GraphQL */
`
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
exports.onDeleteZoomMeet = onDeleteZoomMeet;
