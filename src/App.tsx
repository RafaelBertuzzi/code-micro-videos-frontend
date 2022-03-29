import React from "react";
import { Box } from "@material-ui/core";

import { Navbar } from "./components/Navbar";
import { Page } from "./components/Page";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Box paddingTop={"70px"}>
        <Page title={"Categorias"}>Conteudo</Page>
      </Box>
    </>
  );
}

export default App;
