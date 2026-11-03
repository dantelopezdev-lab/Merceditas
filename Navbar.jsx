import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const style = {
    padding: "10px 20px",
    backgroundColor: "#b65a2a",
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };
  const linkStyle = { color: "white", textDecoration: "none", fontWeight: "bold" };
  return (
    <nav style={style}>
      <Link to="/" style={linkStyle}>Inicio</Link>
      <Link to="/productos" style={linkStyle}>Productos</Link>
      <Link to="/contacto" style={linkStyle}>Contacto</Link>
    </nav>
  );
}
