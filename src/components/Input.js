import React from "react";
import Sort from "./Sort";

function Input(props) {
  return (
    <div className="input_container">
      <form autoComplete="off" className="form" onSubmit={props.handleSubmit}>
        <input
          className="input_song"
          type="text"
          name="song"
          value={props.song}
          placeholder="Song title"
          onChange={props.handleChange}
          required
        ></input>
        <input
          className="input_artist"
          type="text"
          name="artist"
          value={props.artist}
          placeholder="Artist"
          onChange={props.handleChange}
          required
        ></input>
        <select
          className="input_genre"
          value={props.genre}
          onChange={props.handleChange}
          name="genre"
        >
          <option value="none">Set genre</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="christmas">Christmas</option>
          <option value="jazz">Jazz</option>
          <option value="dance">Dance</option>
        </select>
        <select
          className="input_rating"
          value={props.rating}
          onChange={props.handleChange}
          name="rating"
        >
          <option value="0">Set rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button className="add-button" type="submit">
          Add
        </button>
      </form>
      <Sort className="input_sort" handleSort={props.handleSort} />
    </div>
  );
}

export default Input;