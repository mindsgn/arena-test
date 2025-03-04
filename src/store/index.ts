import { create } from 'zustand'

interface StoreState {
  ready: boolean;
  setReady: () => void;
}

export const useStore = create<StoreState>((set) => ({
  ready: false,
  setReady: () => {
    console.log("ready")
    set({
        ready: true
    })
  }
}))