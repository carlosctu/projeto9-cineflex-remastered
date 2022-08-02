import styled from "styled-components";

export default function Footer(props) {
  const { showTime, children } = props;
  return (
    <Wrapper>
      <ImageContainer>
        <img src={showTime.posterURL} alt={showTime.title} />
      </ImageContainer>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  height: 117px;
  width: 100%;
  background-color: #e76f51;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
  font-weight: 400;
  display: flex;
  align-items: center;
  bottom: 0;
  right: 0;
`;

const ImageContainer = styled.div`
  width: 64px;
  height: 89px;
  margin: 0 22px 0px 10px;
  background-color: #d3d3d3;
  img {
    padding: 8.5px 8px;
    width: 48px;
    height: 72px;
  }
`;
