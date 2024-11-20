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

  form {
    margin-right: 2rem;
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

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

  button {
    background: transparent;
    border: none;
  }
  svg {
    font-size: 1.5rem;
    color: var(--clr-white);
    cursor: pointer;
  }
`;
