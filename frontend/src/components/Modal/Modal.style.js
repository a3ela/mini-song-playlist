import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: var(--clr-white);
  width: 80vw;
  max-width: 400px;
  border-radius: var(--radius);
  padding: 2rem 1rem;
  text-align: center;

  h4 {
    margin-bottom: 0;
    line-height: 1.5;
  }

  form {
    margin-top: 1rem;
    display: grid;
    gap: 1rem;
  }

  label {
    display: block;
    text-align: left;
  }

  input {
    width: 100%;
    padding: 0.35rem;
    font-size: 1rem;
    border: 1px solid var(--clr-grey-5);
    border-radius: var(--radius);
  }

  input[type="file"] {
    padding: 0.5rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const Button = styled.button`
  text-transform: uppercase;
  background: transparent;
  color: ${({ color }) =>
    color ? "var(--clr-red-dark)" : "var(--clr-primary)"};
  padding: 0.5rem 1rem;
  border: 1px solid
    ${({ color }) => (color ? "var(--clr-red-dark)" : "var(--clr-primary)")};
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 700;
  transition: var(--transition);
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);

  &:hover {
    color: ${({ color }) =>
      color ? "var(--clr-red-dark)" : "var(--clr-primary)"};
    background: ${({ color }) =>
      color ? "var(--clr-red-light)" : "var(--clr-primary-light)"};
  }
`;
