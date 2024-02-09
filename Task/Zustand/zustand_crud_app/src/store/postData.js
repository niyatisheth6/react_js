import { create } from "zustand";

const usePostStore = create((set) => ({
  postData: [],
  setPostData: (post) => set((state) => ({ post: [...state.postData, post] })),
}));

export default usePostStore;
