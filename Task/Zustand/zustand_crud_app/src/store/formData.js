import { create } from "zustand";

const useFormDataStore = create((set) => ({
  formData: [],
  setFormData: (setFormData) => set(({ formData: setFormData })),
}));
export default useFormDataStore;
