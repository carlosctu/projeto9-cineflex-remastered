import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getMovies } from "../services/api";

export default function MoviesList() {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    getMovies().then((response) => {
      setMovie(response.data);
    });
    getMovies().catch((error) => console.log("Erro: " + error));
  }, []);

  return (
    <Wrapper>
      <Title>Selecione o filme</Title>
      <Body>
        {movie ? (
          movie.map((e, index) => {
            return (
              <Movie key={index}>
                <Link to={`/movies/${e.id}`}>
                  <img src={e.posterURL} alt={e.title} />
                </Link>
              </Movie>
            );
          })
        ) : (
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt="loading..."
          />
        )}
      </Body>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  height: 110px;
  margin-top: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
`;

const Body = styled.div`
  height: 100%;
  max-width: 990px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Movie = styled.div`
  width: 138px;
  height: 201px;
  background-color: #ffffff;
  margin: 19px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  img {
    width: 129px;
    height: 193px;
    padding: 8px;
  }
  img:hover {
    cursor: pointer;
  }
`;
