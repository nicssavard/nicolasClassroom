import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserState {
  user: User;
  group: string;
  setGroup: (group: string) => void;
  setUser: (user: User) => void;
}

const useStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: { name: "", is_admin: false, id: "", image: "", points: 0 },
        group: "kc1",
        setGroup: (group) => set(() => ({ group: group })),
        setUser: (user) => set(() => ({ user: user })),
      }),
      {
        name: "user-storage",
      }
    )
  )
);

export default useStore;
