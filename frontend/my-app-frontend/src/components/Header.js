import React from "react";
import {Link} from "react-router-dom"

function Header() {
  return (
    <header>
      
      <h1>
        Zellar Gallery
      </h1>
      
        <img src="https://emoji-maker.com/storage/images/emoji_save/20211008200850199421.png"></img>
     
      <Link to={`/`}><button className="headerButton">Home</button></Link>
      <Link to={`/art/new`}><button className="headerButton">Add New Art Piece</button></Link>
      <Link to={`/art/sellers`}><button className="headerButton">Seller Page</button></Link>
    </header>
  );
}

export default Header;