import { useState } from "react";
import { IconButton, MenuItem, Menu as MuiMenu } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import routes, { IRouteProps } from "../../routes";

const listRoutes = ["dashboard", "categories.list"];
const menuRoutes = routes.filter((route) => listRoutes.includes(route.name));

export function Menu(): JSX.Element {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: any): void => setAnchorEl(event.currentTarget);
  const handleClose = (): void => setAnchorEl(null);

  return (
    <>
      <IconButton
        color={"inherit"}
        edge={"start"}
        aria-label={"open-drawer"}
        aria-controls={"menu-appbar"}
        aria-haspopup={true}
        onClick={handleOpen}
      >
        <MenuIcon />
      </IconButton>
      <MuiMenu
        id={"menu-appbar"}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        getContentAnchorEl={null}
      >
        {listRoutes.map((routeName) => {
          const route = menuRoutes.find(
            (route) => route.name === routeName
          ) as IRouteProps;
          return (
            <MenuItem
              key={route.name}
              component={Link}
              to={route.path as string}
              onClick={handleClose}
            >
              {route.label}
            </MenuItem>
          );
        })}
      </MuiMenu>
    </>
  );
}
