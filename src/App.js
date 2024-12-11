import { useState } from 'react';
import './App.css';
import { moviesData } from './component/data';
import MovieList from './component/MovieList';
import FilterByName from './component/FilterByName';
import FilterbyRate from './component/Rating';
import Addmovies from './component/Addmovies';
function App() {
  const[movies,setMovies]=useState(moviesData)
  const [inputSearch,setInputSearch]=useState('')
  const[rating,setRating]=useState(1)
  const add=(newmovie)=>{
    setMovies([...movies,newmovie])
  }
 


  console.log(movies);
  return (
    <div className="App">
      <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch}/>
      <FilterbyRate isMovieRating={false} rating={rating} setRating={setRating} />
      <MovieList movies={movies} inputSearch={inputSearch} rating={rating}/>
      <Addmovies add={add} />
    </div>
  );
}

export default App;
