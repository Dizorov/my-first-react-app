import React from 'react';

const MoviesWillWatch = props => {
  return (
    <ul className="list-group">
      {props.moviesWillWatch.map(movie => (
        <li key={movie.id} className="list-group-item">
          <div className="d-flex justify-content-between">
            <p>{movie.title}</p>
            <p>{movie.vote_average}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default MoviesWillWatch;
