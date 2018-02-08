import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Nova Lima</h1>
    <NavLink exact to="/" activeClassName="selected">
      Início
    </NavLink>
    <NavLink to="/adiantamento" activeClassName="selected">
      Adiantamento de Recursos
    </NavLink>
    <NavLink to="/vale-feira" activeClassName="selected">
      Vale Feira
    </NavLink>
    <NavLink to="/vale-gas" activeClassName="selected">
      Vale Gás
    </NavLink>
  </div>
);
export default Header;
