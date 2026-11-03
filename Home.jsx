import React, { useEffect, useState } from "react";

export default function Home() {
  const [foodImage, setFoodImage] = useState(null);
  const [dogImage, setDogImage] = useState(null);
  const [artImage, setArtImage] = useState(null);

  useEffect(() => {
    fetch("https://foodish-api.herokuapp.com/api/") 
      .then(res => res.json()) 
      .then(data => setFoodImage(data.image));

    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => setDogImage(data.message));

    fetch("https://picsum.photos/200/300") 
      .then(res => setArtImage(res.url));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#fff7f0" }}>
      <h1 style={{color:"#7a381f"}}>Merceditas - Productos del Valle Calchaquí</h1>
      <p style={{ fontSize: "18px", maxWidth: "600px" }}>
        Bienvenidos a Merceditas, orgullosos productores artesanales de quesos de cabra, 
        carnes de cordero y cabrito, y artesanías hechas con astas de cabra. 
        Traemos desde Cafayate lo mejor de nuestra tierra y tradición.
      </p>
      <section style={{display:"flex", gap:"20px", marginTop:"30px", justifyContent:"center"}}>
        {foodImage && (
          <div style={{textAlign:"center", width:"250px"}}>
            <img src={foodImage} alt="Queso o comida" style={{width:"100%", borderRadius:"8px"}} />
            <h3>Quesos y quesillos</h3>
            <p>Delicias frescas de cabra, nuestro orgullo local.</p>
          </div>
        )}
        {dogImage && (
          <div style={{textAlign:"center", width:"250px"}}>
            <img src={dogImage} alt="Carne de cabrito" style={{width:"100%", borderRadius:"8px"}} />
            <h3>Carne de cabrito y cordero</h3>
            <p>Productos de calidad de nuestra crianza natural.</p>
          </div>
        )}
        {artImage && (
          <div style={{textAlign:"center", width:"250px"}}>
            <img src={artImage} alt="Artesanías" style={{width:"100%", borderRadius:"8px"}} />
            <h3>Artesanías</h3>
            <p>Artículos hechos a mano con astas de cabra.</p>
          </div>
        )}
      </section>
    </div>
  );
}
