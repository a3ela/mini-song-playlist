import React, { useState } from "react";
import { Wrapper, Content } from "./Navbar.style";

// icons
import { MdPostAdd } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import CreateSong from "../Forms/CreateSong";
import Modal from "../Modal";
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Wrapper>
      {isModalOpen && (
        <Modal>
          <CreateSong onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
      <h3>Songs List</h3>
      <Content>
        <form>
          <input type="search" />
          <button type="submit">
            <IoSearchSharp />
          </button>
        </form>
        <button onClick={() => setIsModalOpen(true)}>
          <MdPostAdd />
        </button>
      </Content>
    </Wrapper>
  );
};

export default Navbar;
