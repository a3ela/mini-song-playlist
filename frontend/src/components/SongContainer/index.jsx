import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../services/songService.js";

// conponents
import source from "../../source.js";
import SongItem from "../SongItem";
import Modal from "../Modal";
import DeleteForm from "../Forms/DeleteSong.jsx";
import CreateForm from "../Forms/CreateSong.jsx";
import UpdateForm from "../Forms/UpdateSong.jsx";

// redux
import { getSongs, getSongsResolved } from "../../features/songSlice";
// styles
import { Wrapper, Header, Footer } from "./SongContainer.style";

const SongContainer = () => {
  const dispatch = useDispatch();

  const { songs, isLoading, error } = useSelector((state) => state.songs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleEdit = (id) => {
    setModalContent(
      <UpdateForm id={id} onClose={() => setIsModalOpen(false)} />
    );
    setIsModalOpen(true);
  };

  const handleCreate = (id) => {
    setModalContent(
      <CreateForm id={id} onClose={() => setIsModalOpen(false)} />
    );
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setModalContent(
      <DeleteForm id={id} onClose={() => setIsModalOpen(false)} />
    );
    setIsModalOpen(true);
  };

  useEffect(() => {
    dispatch(getSongs());
  }, [songs]);

  return (
    <Wrapper>
      {isModalOpen && <Modal>{modalContent}</Modal>}
      <Header>
        <h3>Songs Total: {songs.length}</h3>
      </Header>
      <div>
        {songs.map((song) => (
          <SongItem
            key={song._id}
            song={song}
            onEdit={() => handleEdit(song._id)}
            onDelete={() => handleDelete(song._id)}
          />
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
