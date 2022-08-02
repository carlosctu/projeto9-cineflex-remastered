import axios from "axios";

function getMovies() {
  const promise = axios.get(
    "https://mock-api.driven.com.br/api/v7/cineflex/movies"
  );
  return promise;
}

function getMovieShowTime(movieId) {
  const promise = axios.get(
    `https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId}/showtimes`
  );
  return promise;
}

function getMovieSession(movieId) {
  const promise = axios.get(
    `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${movieId}/seats`
  );
  return promise;
}

function postReservationInfo(userInfo){
    const promise = axios.post(
        "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
        userInfo
      );
      return promise;
}

export { getMovies, getMovieShowTime, getMovieSession, postReservationInfo };

