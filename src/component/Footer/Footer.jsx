import React from "react";
import st from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className={st.content}>
        <p className={st.direitos}>
          Desenvolvido por @Rafael Bortnik Leivas {" "}
        </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
