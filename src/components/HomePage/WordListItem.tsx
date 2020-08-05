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
import { useDialogActions } from "../../actions";

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

  const { openUpdateWordPage, openConfirmationPage } = useDialogActions();

  const { wordActions, index, item } = props;
  const labelId = `checkbox-list-label-${index}`;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const updateWordPage = () => {
    openUpdateWordPage(item);
    closeMenu();
  };

  const deleteWord = async () => {
    await wordActions.updateWord(item._id, { status: "deleted" });
    closeMenu();
  };

  const restoreWord = async () => {
    await wordActions.updateWord(item._id, { status: "active" });
    closeMenu();
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
          open={Boolean(anchorEl)}
          onClose={closeMenu}
        >
          {item.status !== "deleted" ? (
            // consider to use an array???
            <span>
              <MenuItem onClick={updateWordPage}>Update</MenuItem>
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
