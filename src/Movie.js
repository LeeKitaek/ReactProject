import React, { Component} from "react";
import "./Movie.css";

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster />
                <h1>hello this is a mivie</h1>
            </div>            
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src = "https://file.philgo.com/data/upload/6/2057156" />
        )
    }
}

export default Movie;