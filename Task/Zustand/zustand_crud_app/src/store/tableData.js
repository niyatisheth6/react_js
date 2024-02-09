import { create } from "zustand";

const useOldDataStore = create((set) => ({
  tableData: [],
  setTableData: (data) => set(() => ({ tableData: data })),
}));

export default useOldDataStore;

