import type { GetServerSideProps } from "next";
import prisma from "../../utils/prisma";

interface Props {
  users: User[];
}
export default function UsersRanking({ users }: Props) {
  console.log(users);
  const ranking = users.map((user) => {
    return (
      <div key={user.id}>
        <div>
          {user.username}: {user.points} points
        </div>
      </div>
    );
  });

  return <div>{ranking}</div>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await prisma.user.findMany();
  return {
    props: {
      users: users,
    },
  };
};