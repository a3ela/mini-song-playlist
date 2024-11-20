import React from "react";
// conponents
import source from "../../source.js";
import SongItem from "../SongItem";

// styles
import { Wrapper, Header, Footer } from "./SongContainer.style";
const SongContainer = () => {
  return (
    <Wrapper>
      <Header>
        <h3>Songs Total: {source.length}</h3>
      </Header>
      <div>
        {source.map((song) => (
          <SongItem key={song.id} song={song} />
        ))}
      </div>
      <Footer>
        <hr />
        <p>This is a Mini Song list App</p>
      </Footer>
    </Wrapper>
  );
};

export default SongContainer;
