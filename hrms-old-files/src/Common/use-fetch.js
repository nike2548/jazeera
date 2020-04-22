import React, { useEffect } from "react";
import axios from "axios";

const fetchReducer = (state, action) => {
  switch (action.type) {
    case "FAILURE":
      return {
        data: null,
        isLoading: false,
        errorMessage: action.error
      };
    case "SUCCESS":
      return {
        data: action.data,
        isLoading: false,
        errorMessage: ""
      };
    default:
      return state;
  }
};

function useFetch(url) {
  const initialState = { data: null, isLoading: true, errorMessage: "" };
  const [state, dispatch] = React.useReducer(fetchReducer, initialState);

  const fetchData = async url => {
    try {
      const { data } = await axios.get(url);
      dispatch({ type: "SUCCESS", data: data.data });
    } catch (error) {
      dispatch({ type: "FAILURE", error: error.message || error });
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);
  return state;
}

export default useFetch;
