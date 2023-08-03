
import { Component } from "react";
 import AnimeCard from "./AnimeCard";
class AnimeList extends Component {
  render() {
    const values = this.props.anime;

    return (
      <div className="anime-list">
        {values.map((an, i) => {
          return <AnimeCard animes={an} key={i}/>;
        })}
      </div>
    );
  }
}

export default AnimeList;
