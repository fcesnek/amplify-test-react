export const schema = {
    "models": {
        "ZoomMeet": {
            "name": "ZoomMeet",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "start_url": {
                    "name": "start_url",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "topic": {
                    "name": "topic",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "join_url": {
                    "name": "join_url",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "password": {
                    "name": "password",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "start_time": {
                    "name": "start_time",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "duration": {
                    "name": "duration",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "ZoomMeets",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Gym": {
            "name": "Gym",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "location": {
                    "name": "location",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "studio": {
                    "name": "studio",
                    "isArray": true,
                    "type": {
                        "model": "Studio"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "gym"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Gyms",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Studio": {
            "name": "Studio",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "gym": {
                    "name": "gym",
                    "isArray": false,
                    "type": {
                        "model": "Gym"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "gymID"
                    }
                },
                "devices": {
                    "name": "devices",
                    "isArray": true,
                    "type": {
                        "model": "Device"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "studio"
                    }
                },
                "sessions": {
                    "name": "sessions",
                    "isArray": true,
                    "type": {
                        "model": "Session"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "studio"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Studios",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byGym",
                        "fields": [
                            "gymID"
                        ]
                    }
                }
            ]
        },
        "Device": {
            "name": "Device",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "studio": {
                    "name": "studio",
                    "isArray": false,
                    "type": {
                        "model": "Studio"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "studioID"
                    }
                },
                "zoomMeet": {
                    "name": "zoomMeet",
                    "isArray": false,
                    "type": {
                        "model": "ZoomMeet"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "deviceZoomMeetId"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Devices",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byStudio",
                        "fields": [
                            "studioID"
                        ]
                    }
                }
            ]
        },
        "Session": {
            "name": "Session",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "studio": {
                    "name": "studio",
                    "isArray": false,
                    "type": {
                        "model": "Studio"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "studioID"
                    }
                },
                "coachID": {
                    "name": "coachID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "coach": {
                    "name": "coach",
                    "isArray": false,
                    "type": {
                        "model": "User"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "id"
                    }
                },
                "clientID": {
                    "name": "clientID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "client": {
                    "name": "client",
                    "isArray": false,
                    "type": {
                        "model": "User"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "id"
                    }
                },
                "zoomMeetID": {
                    "name": "zoomMeetID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "zoomMeet": {
                    "name": "zoomMeet",
                    "isArray": false,
                    "type": {
                        "model": "ZoomMeet"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "id"
                    }
                },
                "start_time": {
                    "name": "start_time",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "end_time": {
                    "name": "end_time",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Sessions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byStudio",
                        "fields": [
                            "studioID"
                        ]
                    }
                }
            ]
        },
        "User": {
            "name": "User",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "username": {
                    "name": "username",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "userGroup": {
                    "name": "userGroup",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "intakeFormDetails": {
                    "name": "intakeFormDetails",
                    "isArray": false,
                    "type": {
                        "nonModel": "IntakeFormDetails"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Users",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        }
    },
    "enums": {
        "Rating": {
            "name": "Rating",
            "values": [
                1,
                2,
                3,
                4,
                5
            ]
        }
    },
    "nonModels": {
        "IntakeFormDetails": {
            "name": "IntakeFormDetails",
            "fields": {
                "personalDetails": {
                    "name": "personalDetails",
                    "isArray": false,
                    "type": {
                        "nonModel": "PersonalDetails"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "exerciseHistory": {
                    "name": "exerciseHistory",
                    "isArray": false,
                    "type": {
                        "nonModel": "ExerciseHistory"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "medicalHistory": {
                    "name": "medicalHistory",
                    "isArray": false,
                    "type": {
                        "nonModel": "MedicalHistory"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "behavioralQuestions": {
                    "name": "behavioralQuestions",
                    "isArray": false,
                    "type": {
                        "nonModel": "BehavioralQuestions"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "trainerPreferences": {
                    "name": "trainerPreferences",
                    "isArray": false,
                    "type": {
                        "nonModel": "TrainerPreferences"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PersonalDetails": {
            "name": "PersonalDetails",
            "fields": {
                "fullName": {
                    "name": "fullName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "dateOfBirth": {
                    "name": "dateOfBirth",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "height": {
                    "name": "height",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "sex": {
                    "name": "sex",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phoneNumber": {
                    "name": "phoneNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "emergencyContactName": {
                    "name": "emergencyContactName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "emergencyContactNumber": {
                    "name": "emergencyContactNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ExerciseHistory": {
            "name": "ExerciseHistory",
            "fields": {
                "exerciseImportance": {
                    "name": "exerciseImportance",
                    "isArray": false,
                    "type": {
                        "enum": "Rating"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "weeklyExercise": {
                    "name": "weeklyExercise",
                    "isArray": false,
                    "type": {
                        "enum": "Rating"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "ageOfMostConsistency": {
                    "name": "ageOfMostConsistency",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "athleticismLevel": {
                    "name": "athleticismLevel",
                    "isArray": false,
                    "type": {
                        "enum": "Rating"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "exercisePrograms": {
                    "name": "exercisePrograms",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "wantedExerciseAchievements": {
                    "name": "wantedExerciseAchievements",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "confidenceToAchieveGoals": {
                    "name": "confidenceToAchieveGoals",
                    "isArray": false,
                    "type": {
                        "enum": "Rating"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "MedicalHistory": {
            "name": "MedicalHistory",
            "fields": {
                "hasMedicalConditions": {
                    "name": "hasMedicalConditions",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "toldToLimitActivity": {
                    "name": "toldToLimitActivity",
                    "isArray": false,
                    "type": {
                        "nonModel": "ActivityLimit"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "injuries": {
                    "name": "injuries",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "surgeries": {
                    "name": "surgeries",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "chronicDisease": {
                    "name": "chronicDisease",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "medications": {
                    "name": "medications",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ActivityLimit": {
            "name": "ActivityLimit",
            "fields": {
                "hasBeenToldToLimitActivity": {
                    "name": "hasBeenToldToLimitActivity",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "reasonForActivityLimit": {
                    "name": "reasonForActivityLimit",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "BehavioralQuestions": {
            "name": "BehavioralQuestions",
            "fields": {
                "barrierToExercise": {
                    "name": "barrierToExercise",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "confidenceToOvercomeBarrier": {
                    "name": "confidenceToOvercomeBarrier",
                    "isArray": false,
                    "type": {
                        "enum": "Rating"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "friendAndFamilySupport": {
                    "name": "friendAndFamilySupport",
                    "isArray": false,
                    "type": {
                        "enum": "Rating"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "exerciseImportance": {
                    "name": "exerciseImportance",
                    "isArray": false,
                    "type": {
                        "enum": "Rating"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "motivation": {
                    "name": "motivation",
                    "isArray": false,
                    "type": {
                        "enum": "Rating"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "resultsExpectation": {
                    "name": "resultsExpectation",
                    "isArray": false,
                    "type": {
                        "enum": "Rating"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "TrainerPreferences": {
            "name": "TrainerPreferences",
            "fields": {
                "language": {
                    "name": "language",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "trainerSex": {
                    "name": "trainerSex",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "coachPersonality": {
                    "name": "coachPersonality",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "version": "1a3d16238027f3bb02ab15dcbead8f84"
};
