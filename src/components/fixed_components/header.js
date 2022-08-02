import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Header() {
  return (
    <Link to="/">
      <Wrapper>CINEFLEX</Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 67px;
  width: 100vw;
  background-color: #e76f51;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;
