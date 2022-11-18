import React, { useContext } from "react";
import { Movie } from "../../@types/movie";
import { modalContext } from "../../contextos/Modal";
import "./index.css";

interface MovieCardProps {
  movie: Movie;
}
const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { setChosenMovie, setShowModal, showModal } = useContext(modalContext);
  const toggleModal = () => {
    setChosenMovie(movie as Movie);
    setShowModal(!showModal);
  };

  return (
    <div className="movieCard" onClick={() => toggleModal()}>
      <img src={movie.image} className="img-fluid" />
    </div>
  );
};

export default MovieCard;
