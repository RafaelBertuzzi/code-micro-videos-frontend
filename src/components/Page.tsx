import { ReactNode } from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

interface IProps {
  title: string;
  children: ReactNode;
}

export function Page({ title, children }: IProps): JSX.Element {
  const styles = useStyles();

  return (
    <Container>
      <Typography className={styles.title} variant={"h5"}>
        {title}
      </Typography>
      {children}
    </Container>
  );
}

const useStyles = makeStyles({
  title: {
    color: "#999999",
  },
});
