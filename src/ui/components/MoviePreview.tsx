import { IMovie } from "../../model/Movie";


const MoviePreview = ({movie}: {movie: IMovie}) => {
  return (
     <div className="movie-item">
        <div>{`EPISODE ${movie?.episode_id}`}</div>
        <div className="movie-title">{movie?.title}</div>
        <div className="movie-date">{movie?.release_date}</div>
     </div>
  );
};

export default MoviePreview;