import type { Group } from "@prisma/client";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserState {
  user: User;
  group: Group;
  setGroup: (group: Group) => void;
  setUser: (user: User) => void;
}

const useStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: {
          username: "",
          name: "",
          encrypted_password: "",
          is_admin: false,
          id: "",
          image: "",
          points: 0,
          weekly_points: 0,
          group_id: 0,
        },
        group: { id: 1, name: "kc1" },
        setGroup: (group: Group) => set(() => ({ group: group })),
        setUser: (user: User) => set(() => ({ user: user })),
      }),
      {
        name: "user-storage",
      }
    )
  )
);

export default useStore;
