import React from "react";
import { Wrapper, Content } from "./Navbar.style";

// icons
import { MdPostAdd } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    <Wrapper>
      <h3>Songs List</h3>
      <Content>
        <form>
          <input type="search" />
          <button type="submit">
            <IoSearchSharp />
          </button>
        </form>

        <MdPostAdd />
      </Content>
    </Wrapper>
  );
};

export default Navbar;
