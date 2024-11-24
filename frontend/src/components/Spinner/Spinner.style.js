import styled from "@emotion/styled";

export const Spinner = styled.div`
  border: 5px solid #000;
  border-top: 3px solid #fff;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
