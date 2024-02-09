import { create } from "zustand";

//DEFINE TYPES
export const types = {
  increseCount: INCREASECOUNT,
  decreaseCount: DECREASECOUNT,
  increseCountBy: INCREASECOUNTBT,
  decreaseCountBy: DECREASECOUNTBY,
  resetCounter: RESETCOUNTER,
};
//DEFINE REDUCRE

const reducer = (state, action) => {
  switch (action.type) {
    case types.increseCount:
      return { counter: state.counter + 1 };
    case types.increseCountBy:
      return { counter: state.counter + action.payload };
    case types.decreaseCount:
      return { counter: state.counter - 1 };
    case types.decreaseCountBy:
      return { counter: state.counter - action.payload };
    case types.resetCounter:
      return { counter: 0 };
  }
};

const initialState = {
  counter: 0,
};

const useStore = create((set, get) => ({
  ...initialState,
  dispatch: (action) => set((state) => reducer(state, action)),
  //4. dispatch

  //3.read State From actions
  // increseCount: () => {
  //   const counter = get().counter + 1;
  //   set(() => ({ counter }));
  // },
  // decreaseCount: () => {
  //   const counter = get().counter - 1;
  //   set(() => ({ counter }));
  // },
  // increseCountBy: (num) => {
  //   const counter = get().counter + num;
  //   set(() => ({ counter }));
  // },
  // decreaseCountBy: (num) => {
  //   const counter = get().counter - num;
  //   set(() => ({ counter }));
  // },
  // resetCounter: () => set(initialState),

  //1.when we use action in seprate file at that time we can't use bellow line

  // increseCount: () => set((state) => ({ counter: state.counter + 1 })),
  // decreaseCount: () => set((state) => ({ counter: state.counter - 1 })),
  // increseCountBy: (num) => set((state) => ({ counter: state.counter + num })),
  // decreaseCountBy: (num) => set((state) => ({ counter: state.counter - num })),
  // resetCounter: () => set(initialState),
}));

//2.go to adction.js file
export default useStore;
