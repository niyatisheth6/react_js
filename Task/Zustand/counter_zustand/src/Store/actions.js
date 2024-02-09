import useStore from "./store";
export const increseCount = () => {
  useStore.setState((state) => ({ counter: state.counter + 1 }));
};
export const decreaseCount = () => {
  useStore.setState((state) => ({ counter: state.counter - 1 }));
};
export const increseCountBy = (num) => {
  useStore.setState((state) => ({ counter: state.counter + num }));
};
export const decreaseCountBy = (num) => {
  useStore.setState((state) => ({ counter: state.counter - num }));
};
export const resetCounter = () => {
  useStore.setState(()=>({counter:0}));
};
