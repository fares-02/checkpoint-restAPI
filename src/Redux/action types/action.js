import axios from "axios";
import { GET_ALL } from "./actionType";

export const getAll = () => async (dispatch) => {
  try {
    const contact = await axios.get("/contact");

    dispatch({ type: GET_ALL, payload: contact.data });
  } catch (error) {
    console.log(error);
  }
};

export const addContact = (data) => async (dispatch) => {
  try {
    await axios.post("/contact", data);
    dispatch(getAll());
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/contact/${id}`);
    dispatch(getAll());
  } catch (error) {
    console.log(error);
  }
};
