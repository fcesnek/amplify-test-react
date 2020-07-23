// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Rating = {
  "VERY_LOW": 1,
  "LOW": 2,
  "MEDIUM": 3,
  "HIGH": 4,
  "VERY_HIGH": 5
};

const { ZoomMeet, Gym, Studio, Device, Session, User, IntakeFormDetails, PersonalDetails, ExerciseHistory, MedicalHistory, ActivityLimit, BehavioralQuestions, TrainerPreferences } = initSchema(schema);

export {
  ZoomMeet,
  Gym,
  Studio,
  Device,
  Session,
  User,
  Rating,
  IntakeFormDetails,
  PersonalDetails,
  ExerciseHistory,
  MedicalHistory,
  ActivityLimit,
  BehavioralQuestions,
  TrainerPreferences
};
