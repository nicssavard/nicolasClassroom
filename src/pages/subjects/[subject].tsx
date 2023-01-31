import ListClasses from "../../components/classes/ListClasses";
import type { GetServerSideProps } from "next";
import prisma from "../../utils/prisma";

interface Props {
  classes: Class[];
}

export default function Subjects({ classes }: Props): JSX.Element {
  return <ListClasses classes={classes}></ListClasses>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let subject_id: string | number | undefined = Array.isArray(
    context.query.subject
  )
    ? context.query.subject[0]
    : context.query.subject;
  if (subject_id) {
    subject_id = parseInt(subject_id);
  }
  const classes = await prisma.class.findMany({
    where: { subject_id: subject_id },
  });

  return {
    props: {
      classes: classes,
    },
  };
};
