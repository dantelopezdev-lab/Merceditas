import React from "react";
import productos from "../productosData";

export default function Productos() {
  return (
    <div style={{ padding: "20px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#fff7f0" }}>
      <h1 style={{color:"#7a381f"}}>Productos Merceditas</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "20px", marginTop: "30px" }}>
        {productos.map(p => (
          <div key={p.id} style={{ border: "1px solid #c99a6b", borderRadius: "8px", padding: "10px", backgroundColor: "white", textAlign:"center" }}>
            <img src={p.imagen} alt={p.nombre} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "6px" }} />
            <h3 style={{ margin: "10px 0 5px", color: "#7a381f" }}>{p.nombre}</h3>
            <p style={{ color: "#5b3a1a" }}>{p.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
