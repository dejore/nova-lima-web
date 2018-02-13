import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
  <div>
    <div className="header">
      <div className="header__logo">
        <img
          src="http://www.associacaodosservidores.org.br/images/logoaspmnl-crop-u1025.png?crc=216891762"
          alt="Logo Associacao Nova Lima"
          className="header__img"
        />
      </div>
      <div className="header__menu">
        <Link className="button__link" exact="true" to="/">
          Início
        </Link>
        <Link className="button__link" to="/vale-gas">
          Vale Gás
        </Link>
        <Link className="button__link" to="/vale-feira">
          Vale Feira
        </Link>
        <Link className="button__link" to="/adiantamento">
          Ad. Recursos
        </Link>
      </div>
    </div>
  </div>
);
export default Header;
