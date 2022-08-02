import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovieShowTime } from "../../services/api";
import Footer from "../fixed_components/footer";

export default function MovieAvailability() {
  const [movieShowtime, setMovieShowtime] = useState("");
  const moviesId = useParams();
  useEffect(() => {
    getMovieShowTime(moviesId.moviesId).then((response) => {
      setMovieShowtime(response.data);
    });
    getMovieShowTime(moviesId.moviesId).catch((error) =>
      console.log("error: " + error)
    );
  }, [moviesId]);
  return (
    <>
      <Wrapper>
        <Title>Selecione o horário</Title>
        {movieShowtime ? <ShowTimes movieShowtime={movieShowtime.days} /> : ""}
      </Wrapper>
      <Footer showTime={movieShowtime}>{movieShowtime.title}</Footer>
    </>
  );
}

function ShowTimes({ movieShowtime }) {
  return movieShowtime.map((showtime, index) => {
    return (
      <Body key={index}>
        <MovieDate>{`${showtime.weekday} - ${showtime.date}`}</MovieDate>
        <MovieHour>
          {showtime.showtimes.map((hour) => {
            return (
              <Link key={hour.id} to={`/assentos/${hour.id}`}>
                <button>{hour.name}</button>
              </Link>
            );
          })}
        </MovieHour>
      </Body>
    );
  });
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 67px;
  padding-bottom: 117px;
  font-family: "Roboto", sans-serif;
`;
const Title = styled.div`
  height: 110px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
`;
const Body = styled.div``;
const MovieDate = styled.div`
  width: 281px;
  height: 35px;
  margin-left: 23px;
  font-size: 18px;
  line-height: 22px;
  padding-left: 8px;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
`;
const MovieHour = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 8px;
  button {
    width: 83px;
    height: 43px;
    font-size: 14px;
    font-weight: 400;
    background-color: #ee8959;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    margin: 16px 8px 23px 0;
    cursor: pointer;
  }
`;
