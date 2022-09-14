import styled from "styled-components";

export const Row = styled.div`
  height: 100%;

  display: flex;
  justify-content: start;
  align-items: start;

  gap: 1rem;

  @media all and (max-width: 750px) {
    justify-content: space-between;
    align-self: center;
    width: 100%;

    margin-top: -15px;
    margin-bottom: 15px;
  }
`;

export const Column = styled.div`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  @media all and (max-width: 750px) {
    width: 100%;
  }
`;

export const ErrorContainer = styled.div`
  height: auto;
  width: 100%;
`;

export const Error = styled.p`
  height: 1rem;
  width: 400px;
  font-size: 0.8rem;

  border-radius: 4px;
  box-sizing: border-box;
  padding: 5px;

  color: white;
  background: red;

  margin-top: 1px;

  font-family: "Poppins", sans-serif;
  font-weight: 500;

  display: flex;
  justify-content: start;
  align-items: center;

  @media all and (max-width: 750px) {
    max-width: 750px;
    width: 100%;
  }
`;
export const Placeholder = styled.p`
  height: 1rem;
  width: 400px;
  font-size: 0.8rem;

  border-radius: 4px;
  box-sizing: border-box;
  padding: 5px;

  color: white;
  background: transparent;

  margin-top: 1px;

  font-family: "Poppins", sans-serif;
  font-weight: 500;

  display: flex;
  justify-content: start;
  align-items: center;

  @media all and (max-width: 750px) {
    max-width: 750px;
    width: 100%;
  }
`;

const Styled = {
  Row,
  Column,
  Error,
  Placeholder,
};

export default Styled;
