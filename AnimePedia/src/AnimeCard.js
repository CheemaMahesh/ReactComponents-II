import { Component } from "react";

// Complete the AnimeCard Component
class AnimeCard extends Component {
  render() {
    return <div className="anime-card">
      <img src={this.props.animes.image}/>
      <p>{this.props.animes.name}</p>
      
    </div>;
  }
}

export default AnimeCard;
