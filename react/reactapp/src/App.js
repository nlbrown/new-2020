import React from 'react';
import Paragraph from "./paragraph";
import {movies} from './movies';

const Button = (props) => {
    const {buttonText, onClickFunction} = props;
    return(
        <button onClick={onClickFunction}>{buttonText}</button>
    );}

function show(value){
    var src = document.getElementById("pic");
    src.appendChild(value);
};

const Show = (props) => {
    const {value} = props;
    var src = document.getElementById("pic");
    src.appendChild(value);
};

const MoviePreviews = (props) => {
  const {movie, onClickFunction } = props; 

    return ( 
        <button key={movie.title} style={{display: 'inline-block'}} onClick={() => {onClickFunction(movie)}}>
                <p>{movie.title}</p>
                <p>{movie.rating}</p>
                <p>{movie.releaseYear}</p>
        </button>
         )
    }
  

function App() {
  const [count, setCount] = React.useState(0);
  const [currentMovie, setCurrentMovie] = React.useState(null);
  return (
    <div>
      {
        /* comment   {paragraph()}*/
      }
     
    
      <Paragraph text={'Norm Rocks'}/>
      <Paragraph text={'Norm'}/>
      <Paragraph/>
      <Paragraph/>
      <p>{count}</p>
      <Button buttonText={'Click Me'} onClickFunction={() => alert('You clicked this button')}/>
      <Button buttonText={'Click the other one'} onClickFunction={() => console.log('You clicked the other one')}/>
          
      <Button buttonText={'Increment'}
       onClickFunction={() => setCount( count + 1)}
      />
           
      <Button buttonText={'Decrement'}
       onClickFunction={() => setCount( count - 1)}
      />
    
      <Button buttonText={'Reset Count'}
         onClickFunction={() => setCount( 0)}
      />
      
             
      <h1>Movie Information</h1>
       {
           movies.map((movie) => {
              return(
            <MoviePreviews
              key={movie.title}
              movie={movie}
              onClickFunction={setCurrentMovie}
            />
               )
           })
        }
           
      
        
       <h1>Movie Information</h1>
       {movies.map((movie) => {
           return ( 
                 <div key={movie.title} style={{display: 'inline-block', width: '50px'}}>
                  <p>{movie.title}</p>
                  <p>{movie.rating}</p>
                  <p>{movie.releaseYear}</p>
                  <p>{movie.director}</p>
                  <Button buttonText={<img src={movie.posterUrl}/>}
                    onClickFunction={() => show(movie.posterUrl)}
                   />
                 </div>
               )
       })}
       
    <h1>Movie Information</h1>
       {movies.map((movie) => {
           return ( 
            <button key={movie.title} style={{display: 'inline-block'}} onClick={() => {setCurrentMovie(movie)}}>
                <p>{movie.title}</p>
                <p>{movie.rating}</p>
                <p>{movie.releaseYear}</p>
            </button>
         )
        })}
        
        
        {
         
            currentMovie ?
            <div>
               <p>{currentMovie.title}</p>
               <p>{currentMovie.director}</p>
                <p>{currentMovie.rating}</p>
                <p>{currentMovie.releaseYear}</p>
                <img src={currentMovie.posterUrl}/>
            </div>
            :
            <p>No Movie selected</p>
        }

     
      </div>
     
  )
}

export default App;
