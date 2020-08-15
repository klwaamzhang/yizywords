import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store/reduxStore";
import RealmApp from "./realm/RealmApp";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#673ab7",
      contrastText: "#fff",
    },
    secondary: {
      main: "#8e24aa",
      contrastText: "#000",
    },
  },
});

ReactDOM.render(
  // <React.StrictMode>
  <RealmApp>
    <Provider store={store}>
      <BrowserRouter basename="/yizywords">
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  </RealmApp>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
