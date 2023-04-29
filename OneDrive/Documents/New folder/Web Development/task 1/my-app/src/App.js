import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './Movie';
const App = () => {
  const [popular, setPopular] = useState([]);

  const fetchPopular = async () => {
    const data = await fetch(
      `https://app.codescreen.com/api/assessments/films`,
      {
        method: 'GET',
        headers: {
          Authorization: '8c5996d5-fb89-46c9-8821-7063cfbc18b1',
        },
      }
    );
    const movies = await data.json();
    console.log(movies);
    setPopular(movies);
  };
  useEffect(() => {
    fetchPopular();
  }, []);
  return (
    <>
  <div>

        <h1 className='rounded-pill border border-light-subtle lp'>Movies Of The Day</h1>
        <div className="container-lg mt-4 ">
<div className="row text-center ">
                  {
                    popular.map((movie) => {
                      return(
                        
                        <div className="col-17 col-md-6 mt-1 ">
        <div class="card p-2 ">
                 <div class="d-flex align-items-center ">
                   <div class="image"> <img src="./p1.jpg " alt='' class="rounded" width="155"/> </div>
                   <div class="ml-3 w-100">
                      <h4 class="mb-0 mt-0 textLeft">MovieName</h4> <span className="textLeft">{movie.name}</span>
                      <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div class= "d-flex flex-column"> <span class="director">Director Name</span> <span class="number1">{movie.directorName}</span></div>
                        <div class="d-flex flex-column"> <span class="releaseDate">Release Date</span> <span class="number2">{movie.releaseDate}</span></div>
                        <div class="d-flex flex-column"> <span class="rating">Rating</span> <span class="number3">{movie.rating}</span></div>
                      </div>


                        </div>
                      </div>
                   </div>
          </div>
                      )
                    })
                  }
      

      </div>
    </div>
   
                  </div>
    </>
  );
};
export default App;

