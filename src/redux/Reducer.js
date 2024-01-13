import { data } from "../data";

const initialData = {
  myData: data,
};

export const reducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case "ADD_MY_DATA":
      return { ...state, myData: payload };
    default:
      return state;
  }
};
