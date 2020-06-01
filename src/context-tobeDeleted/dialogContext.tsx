import React from "react";
import { createCtx } from "../utilities/createCtx";
import { dialogReducer } from "../reducers";
import { DialogState, DialogAction } from "../@types/dialog";

const initialState: DialogState = {
  isWordDialogOpened: false,
  currFormData: null,
};

export const [DialogContext, DialogCtxProvider] = createCtx<
  DialogState,
  DialogAction
>(dialogReducer, initialState);

export function DialogContextProvider(props: React.PropsWithChildren<{}>) {
  return <DialogCtxProvider>{props.children}</DialogCtxProvider>;
}
