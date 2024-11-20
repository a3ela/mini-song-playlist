import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-height: calc() (100vh - 120px);
  width: 90vw;
  margin: 0 auto;
  margin-top: 10px;
  padding: 2rem 0;
  max-width: var(--fixed-width);

  h3 {
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 3rem;
  }
`;

export const Header = styled.header``;

export const Footer = styled.div`
  margin-top: 3rem;

  p {
    text-align: center;
    font-size: 1.2rem;
    color: var(--clr-grey-5);
    text-transform: lowercase;
  }
`;
