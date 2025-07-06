import React, { useEffect, useRef, useState} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(); 

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTY2YTYzNzI5MGE4YTgzZjA1ZmRmYjg3YjlhNDJkYyIsIm5iZiI6MTc1MTc0MDMyMi42MjUsInN1YiI6IjY4Njk2ZmEyNWEzYzQwYzYwMDUzZjVjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YPT2J-3WwkVsPsxlaqYiSp-__H8Hf5CyW6SzClliv7c'
  }
};

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])

  return (
    <div className= "title-cards">
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={'https://image.tmdb.org/t/p/w500'+ card.backdrop_path} alt="Card" />
              <p>{card.original_title}</p>
            </div>
          )
        })} 
      </div>
    </div>
  )
}

export default TitleCards
