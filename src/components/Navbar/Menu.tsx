import { useState } from "react";
import { IconButton, MenuItem, Menu as MuiMenu } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

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
        <MenuItem>Categorias</MenuItem>
      </MuiMenu>
    </>
  );
}
