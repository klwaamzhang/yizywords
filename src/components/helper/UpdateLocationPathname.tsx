import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppActions } from "../../@types/app";

export default function UpdateLocationPathname() {
  const location = useLocation();
  const dispatch = useDispatch();

  console.log("Component: Location Pathname");

  useEffect(() => {
    console.log("useEffect: Location Pathname");
    dispatch({
      type: AppActions.UPDATE_MULTIPLE,
      payload: { urlLocationPathname: location.pathname },
    });
  }, [dispatch, location.pathname]);
  return <span></span>;
}
