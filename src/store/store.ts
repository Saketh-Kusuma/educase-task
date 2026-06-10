import { create } from 'zustand'

interface User {
    name: string
    email: string
    addUser: (name: string, email: string) => void
}

export const useStore = create<User>()((set) => ({
    name: 'Marry Doe',
    email: 'Marry@Gmail.Com',
    addUser: (name, email) => set({ name, email }),
})) 