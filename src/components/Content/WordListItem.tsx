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
import { useAppActions, useDialogActions } from "../../actions";

export default function WordListItem(props: any) {
  const { updateWordItem } = useAppActions();
  const { openUpdateWordDialog } = useDialogActions();

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
    updateWordItem({ ...item, status: "deleted" });
    handleClose();
  };

  const updateWord = () => {
    openUpdateWordDialog(item);
    handleClose();
  };

  const restoreWord = () => {
    updateWordItem({ ...item, status: "active" });
  };

  // console.log("Component: Word List Item");

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
          {item.status !== "deleted" ? (
            // consider to use an array???
            <span>
              <MenuItem onClick={updateWord}>Update</MenuItem>
              <MenuItem onClick={deleteWord}>Delete</MenuItem>
            </span>
          ) : (
            <MenuItem onClick={restoreWord}>Restore</MenuItem>
          )}
        </Menu>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
