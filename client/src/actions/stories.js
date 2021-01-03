import axios from "axios";
import {
  GET_STORIES,
  GET_STORY,
  STORY_ERROR,
  ADD_STORY,
  UPDATE_STORY,
  DELETE_STORY,
  UPDATE_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
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

// Add like
export const addLike = (storyId) => async (dispatch) => {
  try {
    const res = await axios.put(`/stories/like/${storyId}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { storyId, likes: res.data.likes },
    });

    window.location.reload({ forceReload: false });
  } catch (err) {
    dispatch({
      type: STORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Remove like
export const removeLike = (storyId) => async (dispatch) => {
  try {
    const res = await axios.put(`/stories/unlike/${storyId}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { storyId, likes: res.data },
    });

    window.location.reload({ forceReload: false });
  } catch (err) {
    dispatch({
      type: STORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add comment
export const addComment = (storyId, formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      `/stories/comment/${storyId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: STORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete comment
export const deleteComment = (storyId, commentId) => async (dispatch) => {
  try {
    await axios.delete(`/stories/comment/${storyId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    });
  } catch (err) {
    dispatch({
      type: STORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
