import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Content } from "./Navbar.style";
import { search } from "../../features/songSlice";
// icons
import { MdPostAdd } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
// components
import CreateSong from "../Forms/CreateSong";
import Modal from "../Modal";

const Navbar = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state.songs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSeach = (e) => {
    dispatch(search(e.target.value));
    setQuery("");
  };
  return (
    <Wrapper>
      {isModalOpen && (
        <Modal>
          <CreateSong onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
      <h3>Songs List</h3>
      <Content>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSeach}
          placeholder="Search songs..."
        />
        <button type="button" onClick={handleSeach}>
          <IoSearchSharp />
        </button>

        <button onClick={() => setIsModalOpen(true)}>
          <MdPostAdd />
        </button>
      </Content>
    </Wrapper>
  );
};

export default Navbar;
