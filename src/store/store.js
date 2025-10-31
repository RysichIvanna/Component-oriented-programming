import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  player: null, 
  wins: 0,
};

function gameReducer(state = initialState, action) {
  switch(action.type) {
    case "SET_PLAYER":
      return { ...state, player: action.payload };
    case "ADD_WIN":
      return { ...state, wins: state.wins + 1 };
    default:
      return state;
  }
}

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});
