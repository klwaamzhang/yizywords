import React from "react";
import { Container, Grid } from "@material-ui/core";
import Topbar from "./components/Topbar";
import { useStyles } from "./styles/global";
import MainSection from "./components/MainSection";
import SideMenu from "./components/SideMenu";
import { AppContextProvider } from "./context";
import WordDialog from "./components/WordDialog";

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <AppContextProvider>
      <div className={classes.root}>
        <Topbar />
        <WordDialog />
        <Container
          className={classes.noLeftRightPadding + " " + classes.displayColumn}
          maxWidth="md"
        >
          <Grid
            container
            spacing={0}
            style={{ height: "100%", backgroundColor: "#eee" }}
          >
            <SideMenu />
            <MainSection />
          </Grid>
        </Container>
      </div>
    </AppContextProvider>
  );
};

export default App;
