import create from "zustand";

interface UserState {
  user: User | undefined;
  addUser: (user: User) => void;
}

export const useStore = create<UserState>((set) => ({
  // initial state
  user: undefined,
  // methods for manipulating state
  addUser: (user: User) => {
    set((state) => ({
      user: user,
    }));
  },
}));
