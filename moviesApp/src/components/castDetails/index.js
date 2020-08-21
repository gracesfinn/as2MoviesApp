import React from "react";
import "./castDetails.css";


const CastDetails = ({movie}) => {

  return (
    <>
      <h4>Cast</h4>

      <div class="row">
  <div class="column">
  {movie.cast.map(ca => (
    <div class="card" id="castList">
      <img
        className="card-img-tag center"
          alt={ca.name}
          src={
             `https://image.tmdb.org/t/p/w500/${ca.profile_path}`
            }
        
        

          />
      <div class="container">
        <h2>{ca.name}</h2>
        <p class="title">{ca.character}</p>
       </div>
    </div>
  ))}
  </div>
  </div>
  </>
  )
  }
      
  {/*    <table id="castList" class="table table-bordered">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Actor</th>
      <th scope="col">Character</th>
      
    </tr>
  </thead>
  {movie.cast.map(ca => (
  <tbody>
    <tr>
    <td><img
        className="card-img-tag center"
          alt={ca.name}
          src={
             `https://image.tmdb.org/t/p/w500/${ca.profile_path}`
            }
        

          /></td>
      <td>{ca.name}</td>
      <td>{ca.character}</td>
     
    </tr>
    
  </tbody>
  ))}
</table>

      <p>{movie.overview}</p>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Runtime (min.)
        </li>
        <li key="rut" className="list-group-item ">
          {movie.runtime}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Release Date
        </li>
        <li key="rdv" className="list-group-item ">
          {movie.release_date}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          Genres
        </li>
        {movie.genres.map(g => (
          <li key={g.name} className="list-group-item">
            {g.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="ca" className="list-group-item list-group-item-dark">
          Cast
        </li>
        {movie.cast.map(ca => (
          <li key={ca.name} className="list-group-item">
            {ca.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="slh" className="list-group-item list-group-item-dark">
          Spoken Languages
        </li>
        {movie.spoken_languages.map(lang => (
          <li key={lang.name} className="list-group-item">
            {lang.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
          Production Companies
        </li>
        {movie.production_companies.map(pc => (
          <li key={pc.name} className="list-group-item">
            {pc.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
          Production Countries
        </li>
        {movie.production_countries.map(pc => (
          <li key={pc.name} className="list-group-item">
            {pc.name}
          </li>
        ))}
      </ul>
    </>
  );
};*/}

export default CastDetails ;