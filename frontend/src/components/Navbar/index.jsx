import React, { useState } from "react";
import { Wrapper, Content } from "./Navbar.style";

// icons
import { MdPostAdd } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import CreateSong from "../Forms/CreateSong";
import { useDispatch } from "react-redux";
import Modal from "../Modal";
import { searchTerm } from "../../features/songSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSeach = (e) => {
    dispatch(searchTerm(query));
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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search songs..."
        />
        <button type="submit" onClick={handleSeach}>
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
