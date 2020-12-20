import axios from "axios";
import { loadUser } from "./auth";
import {
  GET_STORIES,
  GET_STORY,
  STORY_ERROR,
  ADD_STORY,
  UPDATE_STORY,
  DELETE_STORY,
} from "./types";

// Get stories
export const getStories = () => async (dispatch) => {
  try {
    const res = await axios.get("/stories");
    dispatch({
      type: GET_STORIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: STORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get story by id
export const getStory = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/stories/${id}`);
    console.log(res);
    dispatch({
      type: GET_STORY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: STORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add story
export const addStory = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/stories/add", formData, config);

    dispatch({
      type: ADD_STORY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: STORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update or edit story
export const updateStory = (formData, id) => async (dispatch) => {
  try {
    const res = await axios.put(`/stories/${id}`, formData);

    dispatch({
      type: UPDATE_STORY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: STORY_ERROR,
    });
  }
};

// Delete story
export const deleteStory = (id) => async (dispatch) => {
  try {
    await axios.delete(`/stories/${id}`);

    dispatch({
      type: DELETE_STORY,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: STORY_ERROR,
    });
  }
};
