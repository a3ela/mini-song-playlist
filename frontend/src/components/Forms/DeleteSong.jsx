import React from "react";
import { Content, ButtonContainer, Button } from "./Form.style";
import { deleteSong } from "../../features/songSlice";
import { useDispatch } from "react-redux";

const DeleteSong = ({ id, onClose }) => {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    dispatch(deleteSong(id));
    onClose();
  };
  return (
    <Content>
      <h4>Delete Song</h4>
      <p>Are you sure you want to delete?</p>
      <ButtonContainer>
        <Button color={"red"} type="button" onClick={handleDelete}>
          Yes
        </Button>
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
      </ButtonContainer>
    </Content>
  );
};

export default DeleteSong;
