import {
  GET_STORIES,
  GET_STORY,
  ADD_STORY,
  UPDATE_STORY,
  DELETE_STORY,
  STORY_ERROR,
  UPDATE_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "../actions/types";

const initialState = {
  stories: [],
  story: null,
  loading: true,
  error: {},
};

export const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORIES:
      return {
        ...state,
        stories: action.payload,
        loading: false,
      };
    case GET_STORY:
      return {
        ...state,
        story: action.payload,
        loading: false,
      };
    case ADD_STORY:
      return {
        ...state,
        stories: [...state.stories, action.payload],
        loading: false,
      };
    case UPDATE_STORY:
      return {
        ...state,
        story: action.payload,
        loading: false,
      };
    case DELETE_STORY:
      return {
        ...state,
        stories: state.stories.filter((story) => story._id !== action.payload),
        loading: false,
      };
    case STORY_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case UPDATE_LIKES:
      return {
        ...state,
        stories: state.stories.map((story) =>
          story._id === action.payload.id
            ? { ...story, likes: action.payload.likes }
            : story
        ),
        loading: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        story: { ...state.story, comments: action.payload },
        loading: false,
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        story: {
          ...state.story,
          comments: state.story.comments.filter(
            (comment) => comment._id !== action.payload
          ),
        },
        loading: false,
      };
    default:
      return state;
  }
};
