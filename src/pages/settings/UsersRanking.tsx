import { GetServerSideProps } from "next";
import prisma from "../../utils/prisma";

interface Props {
  users: User[];
}
export default function UsersRanking({ users }: Props) {
  console.log(users);
  const ranking = users.map((user) => {
    return (
      <div key={user.id}>
        <p>{user.name}</p>
        <p>{user.points}</p>
      </div>
    );
  });

  return <div>{ranking}</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const users = await prisma.user.findMany();
  return {
    props: {
      users: users,
    },
  };
};
