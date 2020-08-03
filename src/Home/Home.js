import React from "react";
import homePage from "./home.jpg";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <img className="home_image" src={homePage} alt="" />
      <div className="home_row">
        <Product
          id="12e23432"
          title="Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)"
          price={150.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY218_.jpg"
        />
        <Product
          id="12e23432"
          title="HP Pavilion x360 Core i7 8th Gen 14-inch Touchscreen 2-in-1 FHD Thin"
          price={950.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/712apOL4JaL._AC_UY218_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12e23432"
          title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black)"
          price={1100.96}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/51Y0UPkomKL._AC_US160_FMwebp_QL70_.jpg"
        />
        <Product
          id="12e23432"
          title="Nikon D3500 W/AF-P DX Nikkor 18-55mm f/3.5-5.6G VR with 16GB Memory Card"
          price={550.96}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/71TSinb4usL._AC._SR360,460.jpg"
        />
        <Product
          id="12e23432"
          title="OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage"
          price={106.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/71ncRs6HzyL._AC_UY218_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12e23432"
          title="Mi TV 4A PRO 108 cm (43 Inches) Full HD Android LED TV (Black) | With Data Saver"
          price={980.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/71f-d89oqvL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
