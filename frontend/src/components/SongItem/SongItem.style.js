import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr 1fr;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;

  h4 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    letter-spacing: 2px;
  }

  p {
    color: var(--clr-grey-5);
  }
`;

export const Image = styled.img`
  width: 4rem;
  height: 5rem;
  object-fit: cover;
  border-radius: var(--radius);
`;

export const Content = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    flex: 2;
  }

  h4:last-child {
    flex: 1;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  display: flex;
  height: 50px;
  background: ${({ color }) =>
    color ? "var(--clr-red-dark)" : "var(--clr-primary-dark)"};
  color: var(--clr-white);
  border: none;
  outline: none;
  border-radius: var(--radius);
  overflow: hidden;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  &:hover {
    background-color: ${({ color }) =>
      color ? "var(--clr-red-light)" : "var(--clr-primary-light)"};
  }

  &:active {
    background-color: ${({ color }) =>
      color ? "var(--clr-red-light)" : "var(--clr-primary-light)"};
    transform: scale(0.95);
  }

  span {
    display: flex;
    align-items: center;
    padding: 0 25px;
    height: 100%;
    color: var(--white);
  }
  span:last-child {
    font-size: 1.5rem;
    background: rgba(0, 0, 0, 0.08);
  }
`;
