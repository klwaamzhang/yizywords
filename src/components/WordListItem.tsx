import React from "react";
import {
  IconButton,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { useAppActions } from "../actions";
import { filterMainSectionData, AppContext } from "../context";

export default function WordListItem(props: any) {
  const {
    deleteWordItem,
    updateCategories,
    setUpdateWordDialog,
    switchMainSectionMenu,
  } = useAppActions();
  const { state } = React.useContext(AppContext);
  const index = props.index;
  const item = props.item;
  const labelId = `checkbox-list-label-${index}`;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteWord = () => {
    deleteWordItem(item);
    updateCategories();
    handleClose();
  };

  const openUpdateWordDialog = () => {
    setUpdateWordDialog(item);
    handleClose();
  };

  return (
    <ListItem key={index} role={undefined} button>
      <ListItemText id={labelId} primary={item.text} secondary={item.notes} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="menu" onClick={handleClick}>
          <MoreVert />
        </IconButton>
        <Menu
          id={"simple-menu" + index}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={openUpdateWordDialog}>Update</MenuItem>
          <MenuItem onClick={deleteWord}>Delete</MenuItem>
        </Menu>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
