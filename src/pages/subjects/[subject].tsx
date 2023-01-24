import ListClasses from "../../components/classes/ListClasses";
import { GetServerSideProps } from "next";
import prisma from "../../utils/prisma";

interface Props {
  classes: Class[];
}

export default function Subjects(props: Props): JSX.Element {
  return <ListClasses classes={props.classes}></ListClasses>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const subject = context.query.subject;
  const classes = await prisma.class.findMany({
    where: { subject_name: subject },
  });

  return {
    props: {
      classes: classes,
    },
  };
};
