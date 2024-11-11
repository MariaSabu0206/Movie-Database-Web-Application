import React, { useContext, useEffect } from 'react'
import { movie_context } from './SinglePageHeader'
import { imageUrl } from './url';
import Rating from '@mui/material/Rating';

const MovieDetail = ({setshowpage}) => {

  useEffect(() => {
    setshowpage(false);
  
    return () => {
     setshowpage(true)
    }
  }, [setshowpage]);
  

  const { detailmovie, movieid } = useContext(movie_context);
  console.log(detailmovie);
  

 
const [selectedmovie] = detailmovie.filter(m => m.id === movieid);
console.log('selectedmovie:', selectedmovie);
  
  return (
    <div className='d-flex'>
      <div style={{width:"50%",height:"80%",borderRadius:"10%"}}>
        <img src= {imageUrl+selectedmovie?.poster_path} alt="" className='moviedetail_img' style={{height:"100%",width:"100%",padding:"30px"}} />
       </div>
       <div style={{marginTop:"80px",marginRight:"50px"}}> 
        <h2 style={{color:"#D91656",fontSize:"58px"}} className=' text-center'>{selectedmovie?.title}</h2>
        <h2 style={{color:"#D91656",fontSize:"58px"}} className='text-center'>{selectedmovie?.name}  </h2>
        <b style={{fontSize:"18px"}}>Overview :</b>{selectedmovie?.overview} <br />
        <b style={{fontSize:"18px"}}>Language :</b>{selectedmovie?.original_language} <br />

        <b style={{fontSize:"18px"}}>Release Date :</b>{selectedmovie?.release_date} <br />
        <b style={{fontSize:"18px"}}>Popularity :</b>{selectedmovie?.popularity} <br />
        <b style={{fontSize:"18px"}}>Vote Average :</b>{selectedmovie?.vote_average} <br />

        <b style={{fontSize:"18px"}}>Vote Count :</b>{selectedmovie?.vote_count} <br />
        <Rating name="customized-10" defaultValue={selectedmovie?.vote_average} max={10} />

    </div>
    </div>
  )
}

export default MovieDetail