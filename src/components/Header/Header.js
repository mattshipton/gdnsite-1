import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav className="navbar navbar-gdn">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#gnd-navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">{props.siteName}</Link>
        </div>

        <div className="collapse navbar-collapse" id="gdn-navbar">
          <ul className="nav navbar-nav">
            <li className="active"><Link to="https://discord.gg/sWsrrJQ" target="_blank">Join</Link></li>
            <li><Link to="https://itch.io/jam/game-dev-network-blueberry-jam" target="_blank">Game Jam</Link></li>
            <li><Link to="/vote">Vote for game jam themes</Link></li>

          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/login">Login</Link></li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
