import React, { useState } from 'react'
import Header from './Header'
import Movies from './Movies'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { comedyMovies, latestMovies, popularMovies } from './url'
import Banner from './Banner'
import MovieDetail from './MovieDetail'
import { createContext } from 'react'

const movie_context = createContext();

const SinglePageHeader = () => {

  const [detailmovie, setdetailmovie] = useState([])
  const [movieid, setmovieid] = useState("");
  const [showpage, setshowpage] = useState(true)




  return (
    <div>
      <movie_context.Provider value={{detailmovie,setdetailmovie,movieid,setmovieid}}>
        <BrowserRouter>
        {showpage ? ( 
          <>
          <Header/>
          <Banner/>
          </>
          ):null}
        
        <Routes>
            
            <Route path='/detail' element={<MovieDetail setshowpage={setshowpage}/>}></Route>
            <Route path='/latest' element={<Movies movielist={latestMovies} title={"Latest Movies"}/>}></Route>
            <Route path='/comedy' element={<Movies  movielist={comedyMovies} title={"Comedy Movies"}/>}></Route>
            <Route path='/popular' element={<Movies  movielist={popularMovies} title={"Popular Movies"}/>}></Route>
        </Routes>
        </BrowserRouter>
        </movie_context.Provider>
    </div>
  )
}

export default SinglePageHeader
export {movie_context}