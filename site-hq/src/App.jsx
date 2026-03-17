import React, { useRef } from "react"; 
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import "./index.css";

// Importe o seu vídeo MP4 aqui
import videoHq from "../img/testeGifMaisQualidade.mp4";

function App() {
  const container = useRef(); 

  useGSAP(() => {
    // Animação da SearchBar
    gsap.from(".search-container", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    });

    // Animação do fundo Avengers
    gsap.from(".avenFundo", {
      x: 100,           
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.6       
    });

    // Texto "Lorem" da Avengers
    gsap.from(".textoAven p", {
      opacity: 0,
      y: -20,           
      stagger: 0.2,    
      duration: 0.6,
      ease: "back.out(1.7)", 
      delay: 1.2      
    });
  
    // Explosão do POW!
    gsap.from(".pow", {
      scale: 0,
      rotation: -30,
      duration: 0.8,
      ease: "back.out(2)",
      delay: 0.5
    });

    // Textos do Frame Principal
    gsap.from(".textoFrame p", {
      x: -100,
      opacity: 0,
      stagger: 0.2, 
      duration: 0.8,
      ease: "power2.out",
      delay: 0.8
    });

  }, { scope: container });

  return (
    <div className="app-container" ref={container}> 
      <Navbar />

      {/* 1ª Seção: Homem Aranha (Topo) */}
      <section className="section-hero">
        <div className="content">
          <SearchBar />

          <div className="frames">
            <img src="../img/POW!.png" className="pow" alt="POW!" />
            <p className="textoPow">Lorem ipsum dolor sit amet.</p>
            
            <img src="../img/AvenFundo01.png" className="avenFundo" alt="fundo" />

            <div className="textoAven">
              <p>Lorem</p>
              <p>Lorem</p>
              <p>Lorem</p>
            </div>

            <img src="../img/PrimeiraLinhaDoFrame01.png" className="linha1" alt="linha" />
            <img src="../img/frameDeTextos01.png" className="frameTexto" alt="frame" />
            
            <div className="textoFrame">
              <p className="p1">Lorem ipsum dolor. </p>
              <p className="p2">Lorem ipsum sit amet, adipiscing elit. </p>
              <p className="p3">Lorem ipsum dolor sit amet, consectetur .</p>
              <p className="p4">Lorem ipsum dolor sit amet,. </p>
              <p className="p5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <img src="../img/SegundaLinhaDoFrame01.png" className="linha2" alt="linha" />
          </div>
        </div>
      </section>

      {/* 2ª Seção: VÍDEO MP4 (Substituindo o GIF) */}
      <section className="section-gif">
        {/* O vídeo de fundo */}
        <video autoPlay loop muted playsInline className="video-background">
          <source src={videoHq} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        
        {/* Overlay para os gradientes (definido no seu CSS) */}
        <div className="video-overlay"></div>

        <div className="content">
            <h2 className="titulo-secao">Sobre</h2>
        </div>
      </section>

      {/* 3ª Seção: News */}
      <section className="section-black">
        <div className="content">
            <h2 className="titulo-secao">News</h2>
        </div>
      </section>

      {/* 4ª Seção: Footer / Surfista Prateado */}
      <section className="section-footer-bg">
        <div className="content">
        </div>
      </section>
    </div>
  );
}

export default App;