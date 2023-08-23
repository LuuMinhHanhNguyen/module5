import {
  CREATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  GET_POSTS_SUCCESS,
  UPDATE_POST_SUCCESS,
} from "./action";

const postsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      console.log("hihi  " + JSON.stringify(action.payload.posts));
      return { ...state, posts: action.payload.posts };
    case CREATE_POST_SUCCESS:
      const newPost = action.payload.newPost;
      return { ...state, newPost };
    case DELETE_POST_SUCCESS:
      console.log("id : " + action.payload.deletedId);
      const newList = state.posts.filter(
        (el) => el.id != action.payload.deletedId
      );
      console.log("DELETE LIST");
      console.log(JSON.stringify(newList));
      return { ...state, posts: newList };

    case UPDATE_POST_SUCCESS:
      const updatedPost = action.payload.updatedPost;
      const newPosts = state.posts.map((el) =>
        el.id == updatedPost.id ? updatedPost : el
      );
      return { ...state, posts: newPosts };
    default:
      return state;
  }
};
export default postsReducer;
