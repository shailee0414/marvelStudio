import { combineReducers } from "redux";

const fetchComicsReducer = (state = { comicsArr: [] }, action) => {
  switch (action.type) {
    case "FETCH_COMICS":
      return { ...state, comicsArr: [...state?.comicsArr, ...action.payload] };
    default:
      return state;
  }
};
const fetchSeriesReducer = (state = { seriesArr: [] }, action) => {
  switch (action.type) {
    case "FETCH_SERIES":
      return { ...state, seriesArr: [...state?.seriesArr, ...action.payload] };
    default:
      return state;
  }
};
const fetchComicsByIdReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_COMICS_BY_ID":
      return action.payload;
    default:
      return state;
  }
};
const fetchCharactersReducer = (state = { charactersArr: [] }, action) => {
  switch (action.type) {
    case "FETCH_CHARACTERS":
      return {
        ...state,
        charactersArr: [...state?.charactersArr, ...action.payload],
      };
    default:
      return state;
  }
};
const fetchCreatorsReducer = (state = { creatorsArr: [] }, action) => {
  switch (action.type) {
    case "FETCH_CREATORS":
      return {
        ...state,
        creatorsArr: [...state?.creatorsArr, ...action.payload],
      };
    default:
      return state;
  }
};
const fetchEventsReducer = (state = { eventsArr: [] }, action) => {
  switch (action.type) {
    case "FETCH_EVENTS":
      return { ...state, eventsArr: [...state?.eventsArr, ...action.payload] };
    default:
      return state;
  }
};

const CharacterNameReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_CHARACTERS_BY_LETTER":
      return action.payload;
    default:
      return state;
  }
};
const CreatorsNameReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_CREATORS_BY_LETTERS":
      return action.payload;
    default:
      return state;
  }
};
const letterReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_NAME":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  comics: fetchComicsReducer,
  comicsId: fetchComicsByIdReducer,
  series: fetchSeriesReducer,
  characters: fetchCharactersReducer,
  creators: fetchCreatorsReducer,
  events: fetchEventsReducer,
  letter: letterReducer,
  name: CharacterNameReducer,
  creatorName: CreatorsNameReducer,
});
