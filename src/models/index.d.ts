import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Rating {
  VERY_LOW = "VERY_LOW",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  VERY_HIGH = "VERY_HIGH"
}

export declare class IntakeFormDetails {
  readonly personalDetails?: PersonalDetails;
  readonly exerciseHistory?: ExerciseHistory;
  readonly medicalHistory?: MedicalHistory;
  readonly behavioralQuestions?: BehavioralQuestions;
  readonly trainerPreferences?: TrainerPreferences;
  constructor(init: ModelInit<IntakeFormDetails>);
}

export declare class PersonalDetails {
  readonly fullName?: string;
  readonly dateOfBirth?: string;
  readonly height?: string;
  readonly weight?: number;
  readonly sex?: string;
  readonly phoneNumber?: string;
  readonly emergencyContactName?: string;
  readonly emergencyContactNumber?: string;
  constructor(init: ModelInit<PersonalDetails>);
}

export declare class ExerciseHistory {
  readonly exerciseImportance?: Rating | keyof typeof Rating;
  readonly weeklyExercise?: Rating | keyof typeof Rating;
  readonly ageOfMostConsistency?: number;
  readonly athleticismLevel?: Rating | keyof typeof Rating;
  readonly exercisePrograms?: string[];
  readonly wantedExerciseAchievements?: string[];
  readonly confidenceToAchieveGoals?: Rating | keyof typeof Rating;
  constructor(init: ModelInit<ExerciseHistory>);
}

export declare class MedicalHistory {
  readonly hasMedicalConditions?: boolean;
  readonly toldToLimitActivity?: ActivityLimit;
  readonly injuries?: boolean;
  readonly surgeries?: boolean;
  readonly chronicDisease?: boolean;
  readonly medications?: boolean;
  constructor(init: ModelInit<MedicalHistory>);
}

export declare class ActivityLimit {
  readonly hasBeenToldToLimitActivity?: boolean;
  readonly reasonForActivityLimit?: string;
  constructor(init: ModelInit<ActivityLimit>);
}

export declare class BehavioralQuestions {
  readonly barrierToExercise?: string;
  readonly confidenceToOvercomeBarrier?: Rating | keyof typeof Rating;
  readonly friendAndFamilySupport?: Rating | keyof typeof Rating;
  readonly exerciseImportance?: Rating | keyof typeof Rating;
  readonly motivation?: Rating | keyof typeof Rating;
  readonly resultsExpectation?: Rating | keyof typeof Rating;
  constructor(init: ModelInit<BehavioralQuestions>);
}

export declare class TrainerPreferences {
  readonly language?: string;
  readonly trainerSex?: string;
  readonly coachPersonality?: string;
  constructor(init: ModelInit<TrainerPreferences>);
}

export declare class ZoomMeet {
  readonly id: string;
  readonly start_url: string;
  readonly topic?: string;
  readonly join_url: string;
  readonly password: string;
  readonly start_time?: string;
  readonly duration?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ZoomMeet>);
  static copyOf(source: ZoomMeet, mutator: (draft: MutableModel<ZoomMeet>) => MutableModel<ZoomMeet> | void): ZoomMeet;
}

export declare class Gym {
  readonly id: string;
  readonly name: string;
  readonly location: string;
  readonly studio?: Studio[];
  constructor(init: ModelInit<Gym>);
  static copyOf(source: Gym, mutator: (draft: MutableModel<Gym>) => MutableModel<Gym> | void): Gym;
}

export declare class Studio {
  readonly id: string;
  readonly title: string;
  readonly gym?: Gym;
  readonly devices?: Device[];
  readonly sessions?: Session[];
  constructor(init: ModelInit<Studio>);
  static copyOf(source: Studio, mutator: (draft: MutableModel<Studio>) => MutableModel<Studio> | void): Studio;
}

export declare class Device {
  readonly id: string;
  readonly studio?: Studio;
  readonly zoomMeet?: ZoomMeet;
  constructor(init: ModelInit<Device>);
  static copyOf(source: Device, mutator: (draft: MutableModel<Device>) => MutableModel<Device> | void): Device;
}

export declare class Session {
  readonly id: string;
  readonly studio?: Studio;
  readonly coachID: string;
  readonly coach?: User;
  readonly clientID: string;
  readonly client?: User;
  readonly zoomMeetID: string;
  readonly zoomMeet?: ZoomMeet;
  readonly start_time: string;
  readonly end_time: string;
  constructor(init: ModelInit<Session>);
  static copyOf(source: Session, mutator: (draft: MutableModel<Session>) => MutableModel<Session> | void): Session;
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly userGroup: string;
  readonly intakeFormDetails?: IntakeFormDetails;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}