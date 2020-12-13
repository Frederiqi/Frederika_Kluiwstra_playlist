import React from "react";
import ListItem from "./ListItem";

function List(props) {
  let playlistArray = props.playlist.map(item => (
    <ListItem key={item.id} item={item} deleteSong={props.deleteSong} />
  ));
  return (
    <div className="list">
      <div className="header">
        <section className="header_title">Song title</section>
        <section className="header_artist">Artist</section>
        <section className="header_genre">Genre</section>
        <section className="header_rating">Rating</section>
      </div>
      {playlistArray}
    </div>
  );
}

export default List;