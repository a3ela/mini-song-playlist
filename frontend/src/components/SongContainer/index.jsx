import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// conponents
import SongItem from "../SongItem";
import Modal from "../Modal";
import DeleteForm from "../Forms/DeleteSong.jsx";
import UpdateForm from "../Forms/UpdateSong.jsx";

// redux
import { getSongs } from "../../features/songSlice";
// styles
import { Wrapper, Header, Footer, Center } from "./SongContainer.style";
import { Spinner } from "../Spinner/Spinner.style.js";

const SongContainer = () => {
  const dispatch = useDispatch();

  const { songs, isLoading, searchResults, searchTerm } = useSelector(
    (state) => state.songs
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleEdit = (id) => {
    setModalContent(
      <UpdateForm id={id} onClose={() => setIsModalOpen(false)} />
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

  const songsFiltered = searchTerm ? searchResults : songs;

  if (songsFiltered == []) {
    return <h1>No Results found</h1>;
  }
  return (
    <Wrapper>
      {isModalOpen && <Modal>{modalContent}</Modal>}

      {isLoading ? (
        <>
          <Header>
            <h3>Songs Total: {songsFiltered.length}</h3>
          </Header>
          <div>
            {songsFiltered.map((song) => (
              <SongItem
                key={song._id}
                song={song}
                onEdit={() => handleEdit(song._id)}
                onDelete={() => handleDelete(song._id)}
              />
            ))}
          </div>
        </>
      ) : (
        <Center>
          <Spinner />
        </Center>
      )}
      <Footer>
        <hr />
        <p>This is a Mini Song list App</p>
      </Footer>
    </Wrapper>
  );
};

export default SongContainer;
