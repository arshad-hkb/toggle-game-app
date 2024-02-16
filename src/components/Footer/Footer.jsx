import React from "react";
import { ROUTE_CONSTANTS } from "../../common-constant";
import { Link } from "react-router-dom";
const Footer = () => {
  const { HASIL_ROUTE, INFO_ROUTE, PERMAINON_ROUTE, SAYA, STATEMENT_ROUTE } =
    ROUTE_CONSTANTS;
  return (
    <>
      <nav>
        <div className="footer">
          <Link to={INFO_ROUTE}>Info</Link>
          <Link to={HASIL_ROUTE}>Hasil</Link>
          <Link to={PERMAINON_ROUTE}>Permainon</Link>
          <Link to={STATEMENT_ROUTE}>Statement</Link>
          <Link to={SAYA}>Saya</Link>
        </div>
      </nav>
    </>
  );
};

export default Footer;
