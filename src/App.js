
import Movie from "./Movie"
import React from "react"
import './App.css';
import movie from './movie.png'
import roll from "./roll.png"

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      //attributes: {
        hasSearched:false,
        movieName:"",
        movie:"",
        year:"",
        rating:"",
        plot:"",
        director:"",
        poster:"",
        genre:"",
        errormsg:"",
        loaded:false,
        actors:"",
        rated:"",
        languages:"",
        runtime:"",
        production:"",
        awards:""
      //}
    }
  }
  componentDidMount() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  };

apiCall= async (moviename)=>{
 
  await fetch("https://www.omdbapi.com/?apikey=51b33037&t="+moviename).then(res=>res.json()).then((response)=>{
    if(response.Response==="False"){
      alert(response.Error)

    }
    else{
      console.log(response)
      this.setState({movie:response.Title})
      this.setState({year:response.Year})
      this.setState({rating:response.imdbRating})
      this.setState({plot:response.Plot})
      this.setState({poster:response.Poster})
      this.setState({genre:response.Genre})
      this.setState({director:response.Director})
      this.setState({loaded:true})
      this.setState({actors:response.Actors})
      this.setState({awards:response.Awards})
      this.setState({production:response.Production})
      this.setState({runtime:response.Runtime})
      this.setState({languages:response.Language})
      this.setState({rated:response.Rated})
      alert("Movie Details loaded. Please scroll down if not visible")
    }
   
  })
  this.setState({movieName:" "})
}
  render(){  
      return (
            <div className="App">
              <header className="App-header">
                <h1 className="imdb" > IMDB Movie App</h1>
                <img className="movieimage"src={movie} alt="movielogo"/>
                <img width="20%"className="movieimage" src={roll} alt="rolllogo"/>

            <center><h2>Search for any movie and get details!</h2></center>
            <br></br>
            <input  className="input100" type="text" name="username" onChange={(e)=>{this.setState({movieName:e.target.value})}}/>
            <br></br>
            <div 
              onClick={()=>{this.apiCall(this.state.movieName)}} 
              class="button_cont" align="center">
                <a class="example_a"  rel="nofollow noopener">Search Movie</a>
            </div>
            {
              this.state.loaded &&
                <Movie 
                  poster={this.state.poster} 
                  actors={this.state.actors}  
                  awards={this.state.awards} 
                  languages={this.state.languages} 
                  runtime={this.state.runtime}   
                  production={this.state.production} 
                  moviename={this.state.movie} 
                  plot={this.state.plot} 
                  year={this.state.year} 
                  actors={this.state.actors} 
                  director={this.state.director} 
                  genre={this.state.genre} 
                  rating={this.state.rating}/>
            }
          <h4>© Souritra Kar 2020</h4>
       
          </header>
        </div>
        );
    } //RENDER
} //CLASS
