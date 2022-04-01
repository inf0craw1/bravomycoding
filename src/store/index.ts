import create from "zustand";
import {StoreInterface} from "./it";


const useStore = create<StoreInterface>(set => ({
  num: 1,
  setNum: () => set(state => ({ num: state.num + 1 })),
}))