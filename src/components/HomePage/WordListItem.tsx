import React from "react";
import {
  IconButton,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Menu,
  MenuItem,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { useAppActions, useDialogActions } from "../../actions";

const useStyles = makeStyles(() =>
  createStyles({
    secondary: {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  })
);

export default function WordListItem(props: any) {
  const classes = useStyles();

  const { updateWordItem } = useAppActions();
  const { openUpdateWordPage, openConfirmationPage } = useDialogActions();

  const index = props.index;
  const item = props.item;
  const labelId = `checkbox-list-label-${index}`;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const deleteWord = () => {
    updateWordItem({ ...item, status: "deleted" });
    closeMenu();
  };

  const updateWord = () => {
    openUpdateWordPage(item);
    closeMenu();
  };

  const restoreWord = () => {
    updateWordItem({ ...item, status: "active" });
  };

  const openConfirmationDialog = () => {
    openConfirmationPage(item);
    closeMenu();
  };

  return (
    <ListItem key={index} role={undefined}>
      <ListItemText
        classes={{ secondary: classes.secondary }}
        id={labelId}
        primary={item.text}
        secondary={item.notes}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="menu" onClick={handleClick}>
          <MoreVert />
        </IconButton>
        <Menu
          id={"simple-menu" + index}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={closeMenu}
        >
          {item.status !== "deleted" ? (
            // consider to use an array???
            <span>
              <MenuItem onClick={updateWord}>Update</MenuItem>
              <MenuItem onClick={deleteWord}>Delete</MenuItem>
            </span>
          ) : (
            <span>
              <MenuItem onClick={restoreWord}>Restore</MenuItem>
              <MenuItem onClick={openConfirmationDialog}>
                Delete Permanently
              </MenuItem>
            </span>
          )}
        </Menu>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
