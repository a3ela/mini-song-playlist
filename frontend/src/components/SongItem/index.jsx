import React from "react";
import {
  Wrapper,
  Image,
  Content,
  ButtonContainer,
  Button,
} from "./SongItem.style";

//icons
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const SongItem = ({ song }) => {
  const { image, name, artist, year } = song;
  return (
    <Wrapper>
      <Image src={image} />
      <Content>
        <div>
          <h4>{name}</h4>
          <p>{artist}</p>
        </div>
        <h4>{year}</h4>
      </Content>
      <ButtonContainer>
        <Button>
          <span>Edit</span>
          <span>
            <CiEdit />
          </span>
        </Button>
        <Button color={"red"}>
          <span>Delete</span>
          <span>
            <MdDeleteOutline />
          </span>
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default SongItem;