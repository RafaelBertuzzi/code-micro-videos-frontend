import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

import LogoPNG from "../../static/logo.png";

import { Menu } from "./Menu";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: "#000000",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  logo: {
    width: 100,
    [theme.breakpoints.up("sm")]: {
      width: 170,
    },
  },
}));

export function Navbar(): JSX.Element {
  const styles = useStyles();

  return (
    <AppBar>
      <Toolbar className={styles.toolbar}>
        <Menu />
        <Typography className={styles.title}>
          <img src={LogoPNG} alt={"CodeFlix"} className={styles.logo} />
        </Typography>
        <Button color={"inherit"}>Login</Button>
      </Toolbar>
    </AppBar>
  );
}
