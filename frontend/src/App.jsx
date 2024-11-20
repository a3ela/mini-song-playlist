import React from "react";

// Gobal styling
import { Global } from "@emotion/react";
import globalStyles from "./GlobalStyles";

// Components
import SongContainer from "./components/SongContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Global styles={globalStyles} />
      {isOpen && <Modal />}
      <Navbar />
      <SongContainer />
    </>
  );
}
export default App;
