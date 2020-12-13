import React from "react";

function Sort(props) {
  return (
    <div>
      <select
        className="sort"
        value="sort"
        onChange={props.handleSort}
        name="sort"
      >
        <option value="default">Sort by</option>
        <option value="song">Song title</option>
        <option value="artist">Artist</option>
        <option value="genre">Genre</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}

export default Sort;