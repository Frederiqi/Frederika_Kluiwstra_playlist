import React from "react";
import trashbin from "../img/trashbin.png";

function ListItem(props) {
  return (
    <li key={props.item.id} className="list-item" value={props.item.title}>
      <section className="list_id" key={props.item.id + 99}>
        {props.item.id}{" "}
      </section>
      <section className="list_song" key={props.item.id + 1}>
        {props.item.title}{" "}
      </section>
      <section className="list_artist" key={props.item.id + 2}>
        {props.item.artist}
      </section>
      <section className="list_genre" key={props.item.id + 3}>
        {props.item.genre}
      </section>
      <section className="list_rating" key={props.item.id + 4}>
        {props.item.rating}
      </section>
      <img
        key={props.item.id + 5}
        src={trashbin}
        alt="trashbin"
        className="trashbin"
        onClick={props.deleteSong}
      />
    </li>
  );
}

export default ListItem;