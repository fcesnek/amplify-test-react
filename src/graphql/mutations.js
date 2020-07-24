/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createZoomMeetApi = /* GraphQL */ `
  mutation CreateZoomMeetApi(
    $topic: String
    $start_time: AWSDateTime
    $duration: Int
  ) {
    createZoomMeetApi(
      topic: $topic
      start_time: $start_time
      duration: $duration
    ) {
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
export const createGym = /* GraphQL */ `
  mutation CreateGym(
    $input: CreateGymInput!
    $condition: ModelGymConditionInput
  ) {
    createGym(input: $input, condition: $condition) {
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
export const updateGym = /* GraphQL */ `
  mutation UpdateGym(
    $input: UpdateGymInput!
    $condition: ModelGymConditionInput
  ) {
    updateGym(input: $input, condition: $condition) {
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
export const deleteGym = /* GraphQL */ `
  mutation DeleteGym(
    $input: DeleteGymInput!
    $condition: ModelGymConditionInput
  ) {
    deleteGym(input: $input, condition: $condition) {
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
export const createStudio = /* GraphQL */ `
  mutation CreateStudio(
    $input: CreateStudioInput!
    $condition: ModelStudioConditionInput
  ) {
    createStudio(input: $input, condition: $condition) {
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
export const updateStudio = /* GraphQL */ `
  mutation UpdateStudio(
    $input: UpdateStudioInput!
    $condition: ModelStudioConditionInput
  ) {
    updateStudio(input: $input, condition: $condition) {
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
export const deleteStudio = /* GraphQL */ `
  mutation DeleteStudio(
    $input: DeleteStudioInput!
    $condition: ModelStudioConditionInput
  ) {
    deleteStudio(input: $input, condition: $condition) {
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
export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
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
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
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
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
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
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
      id
      title
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
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
      id
      title
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
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
      id
      title
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createZoomMeet = /* GraphQL */ `
  mutation CreateZoomMeet(
    $input: CreateZoomMeetInput!
    $condition: ModelZoomMeetConditionInput
  ) {
    createZoomMeet(input: $input, condition: $condition) {
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
export const updateZoomMeet = /* GraphQL */ `
  mutation UpdateZoomMeet(
    $input: UpdateZoomMeetInput!
    $condition: ModelZoomMeetConditionInput
  ) {
    updateZoomMeet(input: $input, condition: $condition) {
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
export const deleteZoomMeet = /* GraphQL */ `
  mutation DeleteZoomMeet(
    $input: DeleteZoomMeetInput!
    $condition: ModelZoomMeetConditionInput
  ) {
    deleteZoomMeet(input: $input, condition: $condition) {
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
