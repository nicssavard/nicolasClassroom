import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserState {
  user: User;
  setUser: (user: User) => void;
}

const useStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: { name: "", is_admin: false, id: "", image: "", points: 0 },
        setUser: (user) => set(() => ({ user: user })),
      }),
      {
        name: "user-storage",
      }
    )
  )
);

export default useStore;
