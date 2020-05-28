type OPEN_SIDE_MANU = "OPEN_SIDE_MANU";
type CLOSE_SIDE_MANU = "CLOSE_SIDE_MANU";

type actionType = {
  OPEN_SIDE_MANU: OPEN_SIDE_MANU;
  CLOSE_SIDE_MANU: CLOSE_SIDE_MANU;
};

export const NavActionType: actionType = {
  OPEN_SIDE_MANU: "OPEN_SIDE_MANU",
  CLOSE_SIDE_MANU: "CLOSE_SIDE_MANU",
};

export type NavAction = { type: OPEN_SIDE_MANU } | { type: CLOSE_SIDE_MANU };
