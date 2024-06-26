import React from "react";
import st from './Header.module.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className={st.content}>
          <h1 className={st.logo}>MyFinance</h1>
        <div className={st.links}>
          <Link to="/" className={st.link}>Home</Link>
          <Link to="/transacoes" className={st.link}>Transações</Link>
        </div>
      </div>
      </header>
    </>
  );
};

export default Header;
