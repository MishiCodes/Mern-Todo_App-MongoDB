import axios from "axios";
import { GET_TODOS, ADD_TODO, DELETE_TODO, TODOS_LOADING } from "./types";

export const getTodos = () => dispatch => {
  dispatch(setTodosLoading());
  axios.get("/api/items").then(res =>
    dispatch({
      type: GET_TODOS,
      payload: res.data
    })
  );
};

export const addTodo = todo => dispatch => {
  axios.post("/api/items", todo).then(res =>
    dispatch({
      type: ADD_TODO,
      payload: res.data
    })
  );
};

export const deleteTodo = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_TODO,
      payload: id
    })
  );
};

export const setTodosLoading = () => {
  return {
    type: TODOS_LOADING
  };
};
