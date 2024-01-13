import { data } from "../data";

const initialData = {
  myData: data,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_MY_DATA":
      console.log(payload);
      return { ...state, myData: payload };
  }
};
