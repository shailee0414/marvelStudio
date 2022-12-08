import { api } from "../apis";

const arr = [
  { id: "a", value: "A", offset: 0 },
  { id: "b", value: "B", offset: 85 },
  { id: "c", value: "C", offset: 190 },
  { id: "d", value: "D", offset: 300 },
  { id: "e", value: "E", offset: 381 },
  { id: "f", value: "F", offset: 416 },
  { id: "g", value: "G", offset: 455 },
  { id: "h", value: "H", offset: 518 },
  { id: "i", value: "I", offset: 595 },
  { id: "j", value: "J", offset: 633 },
  { id: "k", value: "K", offset: 700 },
  { id: "l", value: "L", offset: 780 },
  { id: "m", value: "M", offset: 840 },
  { id: "n", value: "N", offset: 910 },
  { id: "o", value: "O", offset: 950 },
  { id: "p", value: "P", offset: 1000 },
  { id: "q", value: "Q", offset: 1030 },
  { id: "r", value: "R", offset: 1060 },
  { id: "s", value: "S", offset: 1100 },
  { id: "t", value: "T", offset: 1150 },
  { id: "u", value: "U", offset: 1200 },
  { id: "v", value: "V", offset: 1250 },
  { id: "w", value: "W", offset: 1300 },
  { id: "x", value: "X", offset: 1350 },
  { id: "y", value: "Y", offset: 1400 },
  { id: "z", value: "Z", offset: 1500 },
];

export const fetchName = () => async (dispatch) => {
  dispatch({ type: "FETCH_NAME", payload: arr });
};

export const fetchComics =
  (limit, offset, dateDescriptor, nameStartsWith) => async (dispatch) => {
    const response = await api(
      limit,
      offset,
      dateDescriptor,
      nameStartsWith
    ).get("/comics");
    dispatch({ type: "FETCH_COMICS", payload: response?.data?.data?.results });
  };
export const fetchCharactersByLetter =
  (limit, offset, dateDescriptor,  nameStartsWith) =>
  async (dispatch) => {
    const response = await api(
      limit,
      offset,
      dateDescriptor,
      nameStartsWith
    ).get("/characters");

    dispatch({
      type: "FETCH_CHARACTERS_BY_LETTER",
      payload: response?.data?.data?.results,
    });
  };

export const fetchComicsById = (id) => async (dispatch) => {
  const response = await api().get(`/comics/${id}`);
  dispatch({
    type: "FETCH_COMICS_BY_ID",
    payload: response?.data?.data?.result,
  });
};

export const fetchSeries =
  (limit, offset, dateDescriptor, nameStartsWith) => async (dispatch) => {
    const response = await api(
      limit,
      offset,
      dateDescriptor,
      nameStartsWith
    ).get("/series");
    dispatch({ type: "FETCH_SERIES", payload: response?.data?.data?.results });
  };

export const fetchCharacters =
  (limit, offset, dateDescriptor, nameStartsWith) => async (dispatch) => {
    const response = await api(
      limit,
      offset,
      dateDescriptor,
      nameStartsWith
    ).get("/characters");
    console.log("mm", response?.data?.data?.results);
    dispatch({
      type: "FETCH_CHARACTERS",
      payload: response?.data?.data?.results,
    });
  };

export const fetchCreators =
  (limit, offset, dateDescriptor, nameStartsWith) => async (dispatch) => {
    const response = await api(
      limit,
      offset,
      dateDescriptor,
      nameStartsWith
    ).get("/creators");
    dispatch({
      type: "FETCH_CREATORS",
      payload: response?.data?.data?.results,
    });
  };

export const fetchEvents =
  (limit, offset, dateDescriptor, nameStartsWith) => async (dispatch) => {
    const response = await api(
      limit,
      offset,
      dateDescriptor,
      nameStartsWith
    ).get("/events");
    dispatch({ type: "FETCH_EVENTS", payload: response?.data?.data?.results });
  };
export const fetchCreatorsByLetter =
  (limit, offset, dateDescriptor, nameStartsWith,firstNameStartsWith) => async (dispatch) => {
    const response = await api(
      limit,
      offset,
      dateDescriptor,
      nameStartsWith,
      firstNameStartsWith
    ).get("/creators");
    dispatch({
      type: "FETCH_CREATORS_BY_LETTERS",
      payload: response?.data?.data?.results,
    });
  };
