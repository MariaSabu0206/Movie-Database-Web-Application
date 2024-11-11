import React, { useEffect, useState } from 'react'
import { imageUrl, latestMovies } from './url'
import axios from 'axios'

const Banner = () => {
    // State to hold the movie data
    const [banner, setbanner] = useState([])
    // State to hold the selected random movie (image, title, description)
    const [randomMovie, setRandomMovie] = useState(null);

    // Fetch movies on component mount
    useEffect(() => {
        axios.get(latestMovies).then((res) => {
            setbanner(res.data.results);
        });
    }, []);

    // Use useEffect to select a random movie after banner data is set
    useEffect(() => {
        if (banner.length > 0) {
            // Function to select a random movie from the banner array      const randomIndex = Math.floor(Math.random() * banner.length);
            const randomIndex = Math.floor(Math.random() * banner.length);
            const selectedMovie = banner[randomIndex];
            setRandomMovie(selectedMovie);
        }
    }, [banner]); // This effect runs whenever the 'banner' array changes

    if (!randomMovie) {
        return null; // Return null while loading
    }


    return (

        <div
            style={{
                backgroundImage: `url(${imageUrl + randomMovie?.poster_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "125vh",
                width: "98.9vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                textAlign: "center",
            }}>


            <div style={{ color: "white", textShadow: "2px 2px 4px black, 0 0 25px black, 0 0 5px black" }}>
                <h1 style={{fontFamily:"revert-layer"}}> {randomMovie?.title}</h1>
                <h3>{randomMovie?.overview}</h3>
            </div>


        </div>

    )
}

export default Banner