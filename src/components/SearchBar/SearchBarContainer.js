// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">

      <div className="image-wrapper">
  {/* add fa-3x to adjust size of icon  */}
        <i className="fab fa-instagram iconMain fa-3x "   />
        <p className="logoText" style={{
          //  added font and size to text
          fontFamily:"Grand Hotel",
          fontSize:"2rem",
        }}>Instagram</p>
      </div>

      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
        />
      </form>

      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass customIcons" />
        </div>
        <div className="social">
          <i className="far fa-heart customIcons" />
        </div>
        <div className="social">
          <i className="far fa-user-circle customIcons" />
        </div>
      </div>

    </div>
  );
};

export default SearchBar;
