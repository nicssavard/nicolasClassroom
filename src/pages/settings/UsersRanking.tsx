import type { GetServerSideProps } from "next";
import prisma from "../../utils/prisma";

interface Props {
  users: User[];
}
export default function UsersRanking({ users }: Props) {
  console.log(users);
  const ranking = users.map((user) => {
    return (
      <div key={user.id} className="flex p-2">
        <div className="w-28 text-start">{user.username}</div>
        <div className="">{user.points}</div>
      </div>
    );
  });

  return (
    <div className="flex ">
      <div className="mx-auto my-5 divide-y divide-gray-400 rounded-lg bg-palette-600 px-1">
        {ranking}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await prisma.user.findMany();
  return {
    props: {
      users: users,
    },
  };
};
