import { create } from "zustand";

const formDataStore = create((set) => ({
  data: [],
  setData: (newData) => set(() => ({ data: newData })),

  toggle: true,
  setToggle: () => set((state) => ({ toggle: !state.toggle })),
}));

export default formDataStore;
