import React, { useState } from "react";
import { Content, ButtonContainer, Button } from "./Form.style";
import { createSong } from "../../features/songSlice";
import { useDispatch } from "react-redux";

const CreateSong = ({ onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    artist: "",
    year: "",
    image: null,
  });

  const handleAddSong = async (e) => {
    e.preventDefault();
    const sendFormData = new FormData();
    sendFormData.append("name", formData.name);
    sendFormData.append("artist", formData.artist);
    sendFormData.append("year", formData.year);
    sendFormData.append("image", formData.image);
    dispatch(createSong(sendFormData));
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Content>
      <h4>Create Song</h4>
      <form onSubmit={handleAddSong}>
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
          <Button type="submit">Create</Button>
          <Button color={"red"} type="button" onClick={onClose}>
            Cancel
          </Button>
        </ButtonContainer>
      </form>
    </Content>
  );
};

export default CreateSong;
