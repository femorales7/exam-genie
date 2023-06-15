import { useReducer } from "react";

export const ACTIONS = {
  SET_MODAL_OPEN: "SET_MODAL_OPEN",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: action.payload,
      };
    default:
      return state;
  }
};

export default function useApplicationData() {
  const initialState = {
    isModalOpen: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleAddPlayerModal = () => {
    dispatch({ type: ACTIONS.SET_MODAL_OPEN, payload: true });
    // console.log("im here", isModalOpen);
  };
  
  return { handleAddPlayerModal, isModalOpen: state.isModalOpen };
}
