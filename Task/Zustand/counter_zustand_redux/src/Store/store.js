import { create } from "zustand";
import { devtools, redux } from "zustand/middleware";
const INCREASECOUNT = "INCREASECOUNT";
const DECREASECOUNT = "DECREASECOUNT";
const INCREASECOUNTBY = "INCREASECOUNTBY";
const DECREASECOUNTBY = "DECREASECOUNTBY";
const RESETCOUNTER = "RESETCOUNTER";
//DEFINE TYPES
export const types = {
  increaseCount: INCREASECOUNT,
  decreaseCount: DECREASECOUNT,
  increaseCountBy: INCREASECOUNTBY,
  decreaseCountBy: DECREASECOUNTBY,
  resetCounter: RESETCOUNTER,
};
//DEFINE REDUCRE

const reducer = (state, { type, payload }) => {
  switch (type) {
    case types.increaseCount:
      return { counter: state.counter + 1 };
    case types.increaseCountBy:
      return { counter: state.counter + payload };
    case types.decreaseCount:
      return { counter: state.counter - 1 };
    case types.decreaseCountBy:
      return { counter: state.counter - payload };
    case types.resetCounter:
      return { counter: 0 };
    default:
      return state;
  }
};

const initialState = {
  counter: 0,
};

const useStore = create(devtools(redux(reducer, initialState)));

export default useStore;
