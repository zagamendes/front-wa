import { useContext, useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";
import { Movie } from "../@types/movie";
import Alert from "../components/Alert";
import Loading from "../components/Loading";
import Modal from "../components/Modal";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import UpdateDb from "../components/UpdateDb";
import { AlertContext } from "../contextos/AlertContext";
import { bancoContext } from "../contextos/Banco";

import api from "../utils/api";
const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const { wasUpdated } = useContext(bancoContext);
  const { setMessage, showAlert, setShowAlert, setType } =
    useContext(AlertContext);
  const getMovies = async () => {
    try {
      setIsLoading(true);

      const page = !searchParams.get("page") ? "1" : searchParams.get("page");

      const { data } = await api<Movie[]>(`/movies?page=${page}`).catch(
        (e: Error) => {
          throw new Error(e.message);
        }
      );
      setMovies(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setMessage(e as string);
      setType("danger");
      setShowAlert(!showAlert);
    }
  };

  useEffect(() => {
    getMovies();
  }, [searchParams.get("page"), wasUpdated]);
  if (isLoading) return <Loading />;
  return (
    <div className="container">
      <Modal />
      <Pagination />
      <UpdateDb />
      <Alert />

      <div className="d-flex justify-content-between flex-wrap mx-auto">
        {movies.map((movie) => {
          return <MovieCard movie={movie} key={movie._id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
