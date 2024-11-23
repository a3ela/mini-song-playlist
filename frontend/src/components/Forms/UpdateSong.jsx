import React, { useState, useEffect } from "react";
import { Content, ButtonContainer, Button } from "./Form.style";
import { useDispatch, useSelector } from "react-redux";
import { updateSong } from "../../features/songSlice";

const UpdateSong = ({ id, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    artist: "",
    year: "",
    image: null,
  });

  const { songs, isLoading, error } = useSelector((state) => state.songs);

  useEffect(() => {
    const song = songs.find((song) => song._id === id);
    if (song) {
      setFormData({
        name: song.name,
        artist: song.artist,
        year: song.year,
        image: song.image,
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const sendFormData = new FormData();
    sendFormData.append("name", formData.name);
    sendFormData.append("artist", formData.artist);
    sendFormData.append("year", formData.year);
    sendFormData.append("image", formData.image);
    dispatch(updateSong({ id, sendFormData }));
    onClose();
  };
  return (
    <Content>
      <h4>Update Song</h4>
      <form onSubmit={handleUpdate}>
        <label htmlFor="title">
          Title
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="artist">
          Artist
          <input
            type="artist"
            name="artist"
            value={formData.artist}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="year">
          Year
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="image">
          Year
          <input
            type="file"
            name="image"
            onChange={(e) => {
              setFormData({ ...formData, image: e.target.files[0] });
            }}
          />
        </label>
        <ButtonContainer>
          <Button type="submit">Update</Button>
          <Button color={"red"} type="button" onClick={onClose}>
            Cancel
          </Button>
        </ButtonContainer>
      </form>
    </Content>
  );
};

export default UpdateSong;
