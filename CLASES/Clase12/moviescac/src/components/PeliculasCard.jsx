import { Link } from "react-router-dom";
import "./PeliculasCard.css";

export const PeliculasCard = ({ peliculaMap }) => {
  const imgURL = `https://image.tmdb.org/t/p/w300${peliculaMap.poster_path}`;
  return (
    <li className="peliculasCard">
      <Link to={`/pelicula/${peliculaMap.id}`}>
        <img className="peliculasImage" src={imgURL} alt={peliculaMap.title} />
        <small>{peliculaMap.title}</small>
      </Link>
    </li>
  );
};
