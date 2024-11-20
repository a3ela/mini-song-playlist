import React from "react";

// styles
import { Wrapper, Content, ButtonContainer, Button } from "./Modal.style";

const Modal = () => {
  return (
    <Wrapper>
      <Content>
        <h4>Fill Form</h4>
        <form>
          <label htmlFor="title">
            Title
            <input type="text" name="title" />
          </label>
          <label htmlFor="artist">
            Artist
            <input type="artist" name="artist" />
          </label>
          <label htmlFor="year">
            Year
            <input type="number" name="year" />
          </label>
          <label htmlFor="image">
            Year
            <input type="file" name="image" />
          </label>
          <ButtonContainer>
            <Button type="submit">Submit</Button>
            <Button color={"red"} type="button">
              Cancel
            </Button>
          </ButtonContainer>
        </form>
      </Content>
    </Wrapper>
  );
};

export default Modal;
