import { create } from 'zustand'

export const userStore = create((set) => ({
  user:  { 
    title: "Sumit Kumar Dey"
  },
  updateUser: (newUser: any) => set((state: any) => ({
    user: {...state.user, ...newUser}
  }))

  
}))