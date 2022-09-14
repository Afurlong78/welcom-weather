import styled from "styled-components";

export const MainContainer = styled.div`
  height: fit-content;
  max-width: 1000px;
  max-height: 100%;

  width: 90%;
  box-sizing: border-box;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: white;

  margin-top: 50px;

  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  border-radius: 8px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 4.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid white;

  transition: all 300ms ease-in-out;

  /* @media all and (max-width: 750px) {
    justify-content: center;
  } */
`;

export const Header = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 4.5rem;
  color: white;

  @media all and (max-width: 1000px) {
    font-size: 3rem;
  }

  @media all and (max-width: 800px) {
    font-size: 2rem;
  }

  @media all and (max-width: 550px) {
    font-size: 1.5rem;
  }
`;

//-------------------------------------------------//
//-------------------form--------------------------//
//-------------------------------------------------//

export const FormContainer = styled.form`
  height: auto;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 25px;
`;

export const FormRow = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: start;

  gap: 1rem;

  @media all and (max-width: 750px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 400px;
  /* width: 80%; */

  box-sizing: border-box;
  padding: 5px;

  height: 2.5rem;

  position: relative;

  border-radius: 4px;
  border: 2px solid white;

  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: black;

  @media all and (max-width: 750px) {
    width: 100%;
    max-width: 750px;
  }
`;

export const Btn = styled.button`
  border: 2px solid white;
  border-radius: 4px;
  height: 2.5rem;

  background: white;
  color: black;

  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    background: transparent;
    color: white;
  }
`;
