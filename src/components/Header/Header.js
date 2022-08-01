import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../images/avatar.png";
import { useState } from "react";
import "./Header.scss";
import { useDispatch } from "react-redux";
import {
  fetchAllMovies,
  fetchAllShows,
} from "../../features/movies/MovieSlice";
const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAllMovies(search));
    dispatch(fetchAllShows(search));
    setSearch("");
  };

  return (
    <div className="header">
      <div className="logo">
        {" "}
        <Link to="/">Movie App </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={avatar} alt="user" />
      </div>
    </div>
  );
};

export default Header;
