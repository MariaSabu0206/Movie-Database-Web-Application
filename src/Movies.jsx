import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { imageUrl } from './url'
import Card from 'react-bootstrap/Card';
import { movie_context } from './SinglePageHeader';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';



const Movies = ({ movielist, title }) => {
  const { detailmovie, setdetailmovie, movieid, setmovieid } = useContext(movie_context)


  const [movies, setmovies] = useState([])
  useEffect(() => {
    axios.get(movielist).then((response) => {
      setmovies(response.data.results);
      setdetailmovie(response.data.results)
    }
    )
  }, [movielist, movies])


  console.log(detailmovie);

  const getMovieID = (id) => {
    setmovieid(id)
  }
  console.log(movieid);

  return (
    <div style={{ backgroundColor: "white", padding: "20px" }}>
      <h1 className='text-center pt-5' style={{ color: "##00224D" }}>{title}</h1>
      <div className='d-flex flex-wrap justify-content-around m-5'>
        {movies.map((i) => {
          return (
            <>
              <Card onClick={() => getMovieID(i.id)} style={{ backgroundColor: "#00224D", color: "white", width: '20rem', margin: "auto", height: "585px", border: "solid #FFF0D1 2px", marginBottom: "20px", borderRadius: "20px" }}>
                <Card.Img className='movieImg' variant="top" src={imageUrl + i.poster_path} style={{ height: "350px", width: "20rem", padding: "23px",borderRadius: "32px" }} />
                <Card.Body>
                  <Card.Title style={{ fontSize: "22px" }}><b>{i.title}</b></Card.Title>
                  <Card.Text>
                    <h6 style={{ fontSize: "22px" }}><b>{i.name}</b></h6>
                    {/* <h6>Overview: {i.overview}</h6> */}
                    <p>Rating :</p><Rating name="customized-10" defaultValue={i.vote_average} max={10} />


                    <h6>Release Date: {i.first_air_date}</h6>

                  </Card.Text>
                  <Link to='/detail'>
                    <button className='btn1' style={{ color: "white", backgroundColor: "black", border: "#C7253E 1px solid", height: "40px", width: "130px", borderRadius: "12px" }}><b>Overview</b></button>
                  </Link>
                </Card.Body>
              </Card>

            </>
          )
        })}
      </div>

    </div>

  )

}
export default Movies


