import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background: var(--clr-primary);
  padding: 1.25rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin-bottom: 0;
    letter-spacing: 1px;
    color: var(--clr-white);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  input {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
    color: var(--clr-white);
    border-bottom: 2px solid var(--clr-white);
    margin: 0 1rem;
    -moz-selection: red;
  }

  input::placeholder {
    color: var(--clr-white);
  }

  button {
    background: transparent;
    border: none;
    margin-right: 2rem;
  }

  svg {
    font-size: 1.5rem;
    color: var(--clr-white);
    cursor: pointer;
  }
`;
