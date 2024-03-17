import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  background: #dff5dd;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  font-size: 0.9em;
  margin: 0;
  padding: 0.25em 1em;
  margin-bottom: 1em;
  cursor: pointer;
`;

export const Header = styled.header`
  display: flex;
  background-color: #333;
  color: white;
  flex-direction: row;
  align-content: center;
  padding: 5px;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
`;

export const BtnLink = styled.button`
  background-color: white;
  padding: 0.5em;
  border-radius: 5px;
  border: 0px;
  cursor: pointer;
  margin-right: 0.7em;
  margin-top: 0.7em;
`;

export const DetailsCont = styled.div`
  background-color: aliceblue;
  padding: 0.9em;
  border-radius: 10px;
  margin-top: 1.2em;
  width: 100%;
  margin: 0 auto;
  h3, h4{
    color: #333;
  }
`;

export const CenteredCont = styled.div`
  height: 100vh;
  width: 60%;
  margin: 0 auto;
`;

export const CenteredDiv = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; */

`;