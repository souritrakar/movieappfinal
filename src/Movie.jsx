import React from "react"

export default function Movie(props){
    var count = 0;
    var stars = [];
    while (count < Math.ceil(props.rating)){
        count+=1;
        if((count <= Math.floor(props.rating))){stars.push(<span>⭐</span>);}
        else{stars.push(<img src="https://img.icons8.com/color/48/000000/star-half.png"/>)}
    }
    return(
        <div className="moviecard">
            <img className="posterimg" src={props.poster} alt="poster" />
            <h2>{props.moviename}</h2>
            <h4>{props.plot}</h4>
            
            <h4>Released in:{props.year}</h4>
            <h5>Director:{props.director}</h5>
        
            <h5>Actors:{props.actors} etc.</h5>
            <h5>Genre:{props.genre}</h5>
            <h5>Rated : {stars}  {props.rating}</h5>
            <h5>Languages : {props.languages}</h5>
            <h5>Awards: {props.awards}</h5>
            <h5>Production: {props.production}</h5>
            <h5>Runtime : {props.runtime}</h5>
        </div>
    )
}