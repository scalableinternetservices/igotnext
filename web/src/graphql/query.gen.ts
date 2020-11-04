/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchUserContext
// ====================================================

export interface FetchUserContext_self {
  __typename: "User";
  id: number;
  name: string;
  userType: UserType;
}

export interface FetchUserContext {
  self: FetchUserContext_self | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchCourt
// ====================================================

export interface FetchCourt_courtind_game {
  __typename: "Game";
  matchID: number;
  status: string;
}

export interface FetchCourt_courtind {
  __typename: "Court";
  courtID: number;
  courtName: string;
  lobby: number;
  roster: string | null;
  featured: boolean;
  game: (FetchCourt_courtind_game | null)[] | null;
}

export interface FetchCourt {
  courtind: FetchCourt_courtind | null;
}

export interface FetchCourtVariables {
  court_ID: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchGames
// ====================================================

export interface FetchGames_game {
  __typename: "Game";
  matchID: number;
  status: string;
  roster: string | null;
}

export interface FetchGames {
  game: FetchGames_game | null;
}

export interface FetchGamesVariables {
  matchId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchAllGames
// ====================================================

export interface FetchAllGames_allGames {
  __typename: "Game";
  matchID: number;
  status: string;
  roster: string | null;
}

export interface FetchAllGames {
  allGames: (FetchAllGames_allGames | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchParks
// ====================================================

export interface FetchParks_park_courts_game {
  __typename: "Game";
  matchID: number;
  status: string;
}

export interface FetchParks_park_courts {
  __typename: "Court";
  courtID: number;
  courtName: string;
  lobby: number;
  roster: string | null;
  featured: boolean;
  game: (FetchParks_park_courts_game | null)[] | null;
}

export interface FetchParks_park {
  __typename: "Park";
  parkID: number;
  parkName: string;
  longitude: number;
  latitude: number;
  courts: (FetchParks_park_courts | null)[] | null;
}

export interface FetchParks {
  park: (FetchParks_park | null)[] | null;
}

export interface FetchParksVariables {
  latitude: number;
  longitude: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchPark
// ====================================================

export interface FetchPark_parkind_courts_game {
  __typename: "Game";
  matchID: number;
  status: string;
}

export interface FetchPark_parkind_courts {
  __typename: "Court";
  courtID: number;
  courtName: string;
  lobby: number;
  roster: string | null;
  featured: boolean;
  game: (FetchPark_parkind_courts_game | null)[] | null;
}

export interface FetchPark_parkind {
  __typename: "Park";
  parkID: number;
  parkName: string;
  longitude: number;
  latitude: number;
  courts: (FetchPark_parkind_courts | null)[] | null;
}

export interface FetchPark {
  parkind: FetchPark_parkind | null;
}

export interface FetchParkVariables {
  park_id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchSurveys
// ====================================================

export interface FetchSurveys_surveys_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface FetchSurveys_surveys_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: FetchSurveys_surveys_currentQuestion_answers[];
}

export interface FetchSurveys_surveys {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: FetchSurveys_surveys_currentQuestion | null;
}

export interface FetchSurveys {
  surveys: FetchSurveys_surveys[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: SurveySubscription
// ====================================================

export interface SurveySubscription_surveyUpdates_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface SurveySubscription_surveyUpdates_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: SurveySubscription_surveyUpdates_currentQuestion_answers[];
}

export interface SurveySubscription_surveyUpdates {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: SurveySubscription_surveyUpdates_currentQuestion | null;
}

export interface SurveySubscription {
  surveyUpdates: SurveySubscription_surveyUpdates | null;
}

export interface SurveySubscriptionVariables {
  surveyId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchSurvey
// ====================================================

export interface FetchSurvey_survey_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface FetchSurvey_survey_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: FetchSurvey_survey_currentQuestion_answers[];
}

export interface FetchSurvey_survey {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: FetchSurvey_survey_currentQuestion | null;
}

export interface FetchSurvey {
  survey: FetchSurvey_survey | null;
}

export interface FetchSurveyVariables {
  surveyId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddToCourt
// ====================================================

export interface AddToCourt {
  addUserToCourt: boolean;
}

export interface AddToCourtVariables {
  court_id: number;
  nickname?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddGame
// ====================================================

export interface AddGame {
  addGame: boolean | null;
}

export interface AddGameVariables {
  courtID?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AnswerSurveyQuestion
// ====================================================

export interface AnswerSurveyQuestion {
  answerSurvey: boolean;
}

export interface AnswerSurveyQuestionVariables {
  input: SurveyInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: NextSurveyQuestion
// ====================================================

export interface NextSurveyQuestion_nextSurveyQuestion_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface NextSurveyQuestion_nextSurveyQuestion_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: NextSurveyQuestion_nextSurveyQuestion_currentQuestion_answers[];
}

export interface NextSurveyQuestion_nextSurveyQuestion {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: NextSurveyQuestion_nextSurveyQuestion_currentQuestion | null;
}

export interface NextSurveyQuestion {
  nextSurveyQuestion: NextSurveyQuestion_nextSurveyQuestion | null;
}

export interface NextSurveyQuestionVariables {
  surveyId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Court
// ====================================================

export interface Court_game {
  __typename: "Game";
  matchID: number;
  status: string;
}

export interface Court {
  __typename: "Court";
  courtID: number;
  courtName: string;
  lobby: number;
  roster: string | null;
  featured: boolean;
  game: (Court_game | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Game
// ====================================================

export interface Game {
  __typename: "Game";
  matchID: number;
  status: string;
  roster: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Park
// ====================================================

export interface Park_courts_game {
  __typename: "Game";
  matchID: number;
  status: string;
}

export interface Park_courts {
  __typename: "Court";
  courtID: number;
  courtName: string;
  lobby: number;
  roster: string | null;
  featured: boolean;
  game: (Park_courts_game | null)[] | null;
}

export interface Park {
  __typename: "Park";
  parkID: number;
  parkName: string;
  longitude: number;
  latitude: number;
  courts: (Park_courts | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Survey
// ====================================================

export interface Survey_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface Survey_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: Survey_currentQuestion_answers[];
}

export interface Survey {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: Survey_currentQuestion | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SurveyQuestion
// ====================================================

export interface SurveyQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface SurveyQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: SurveyQuestion_answers[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserType {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface SurveyInput {
  questionId: number;
  answer: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
