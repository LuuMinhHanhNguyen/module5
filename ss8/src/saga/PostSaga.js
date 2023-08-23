import { put, takeEvery } from "redux-saga/effects";
import {
  GET_POSTS_FETCH,
  GET_POSTS_SUCCESS,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  DELETE_POST,
  UPDATE_POST,
  DELETE_POST_SUCCESS,
  UPDATE_POST_SUCCESS,
} from "../redux/action";
import axios from "axios";

function* workGetPostsFetch() {
  try {
    const response = yield axios.get("http://localhost:3000/posts");
    yield put({ type: GET_POSTS_SUCCESS, payload: { posts: response.data } });
  } catch (err) {
    console.log("error - getPosts: ", err);
  }
}

function* workDeletePost(payload) {
  try {
    const response = yield axios.delete(
      "http://localhost:3000/posts/" + payload.payload.id
    );
    yield put({
      type: DELETE_POST_SUCCESS,
      payload: { deletedId: payload.payload.id },
    });
    console.log("delete");
    console.log(JSON.stringify(response.data));
  } catch (err) {
    console.log(err);
  }
}

function* workUpdatePost(payload) {
  try {
    const response = yield axios.put(
      "http://localhost:3000/posts/" + payload.payload.updatedPost.id,
      payload.payload.updatedPost
    );
    yield put({
      type: UPDATE_POST_SUCCESS,
      payload: { updatedPost: response.data },
    });
    console.log("UPdaTe");
    console.log(JSON.stringify(response.data));
  } catch (err) {
    console.log(err);
  }
}

function* workCreatePost(payload) {
  try {
    const newPost = yield axios.post(
      "http://localhost:3000/posts",
      payload.payload.newPost
    );
    console.log("return ");
    console.log(JSON.stringify(newPost.data));
    yield put({
      type: CREATE_POST_SUCCESS,
      payload: { newPost: newPost.data },
    });
  } catch (err) {
    console.log(err);
  }
}

function* postSaga() {
  yield takeEvery(GET_POSTS_FETCH, workGetPostsFetch);
  yield takeEvery(CREATE_POST, workCreatePost);
  yield takeEvery(DELETE_POST, workDeletePost);
  yield takeEvery(UPDATE_POST, workUpdatePost);
}

export default postSaga;
