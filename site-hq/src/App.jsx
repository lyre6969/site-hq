import React, { useRef } from "react"; 
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

import videoHq from "../img/testeGifMaisQualidade.mp4";

function App() {
  const container = useRef(); 

  useGSAP(() => {
    // Animações de Entrada
    gsap.from(".search-container", { y: -100, opacity: 0, duration: 1, ease: "power4.out" });
    gsap.from(".avenFundo", { x: 100, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.6 });
    gsap.from(".textoAven p", { opacity: 0, y: -20, stagger: 0.2, duration: 0.6, ease: "back.out(1.7)", delay: 1.2 });
    gsap.from(".pow", { scale: 0, rotation: -30, duration: 0.8, ease: "back.out(2)", delay: 0.5 });
    gsap.from(".textoFrame p", { x: -100, opacity: 0, stagger: 0.2, duration: 0.8, ease: "power2.out", delay: 0.8 });

    // Animação do Texto Lateral e dos Cards
    gsap.from(".sobre-texto-lateral, .card-sobre", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".cards-wrapper", 
        start: "top 80%",
        toggleActions: "play none none reverse",
        onRefresh: (self) => self.progress > 0 && self.animation.progress(1)
      }
    });

  }, { scope: container });

  return (
    <div className="app-container" ref={container}> 
      <Navbar />

      <section className="section-hero">
        <div className="content">
          <SearchBar />
          <div className="frames">
            <img src="../img/POW!.png" className="pow" alt="POW!" />
            <p className="textoPow">Lorem ipsum dolor sit amet.</p>
            <img src="../img/AvenFundo01.png" className="avenFundo" alt="fundo" />
            <div className="textoAven">
              <p>Lorem</p><p>Lorem</p><p>Lorem</p>
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

      <section className="section-gif">
        <video autoPlay loop muted playsInline className="video-background">
          <source src={videoHq} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>

        <div className="content">
          <h2 className="titulo-secao">Sobre</h2>
          
          <div className="cards-wrapper">
            {/* TEXTO À ESQUERDA DOS CARDS */}
            <div className="sobre-texto-lateral">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="card-sobre card-1">
              <div className="card-video-box">
                <img src="../img/gifPant.gif" alt="Pantera" className="card-img" />
              </div>
              <div className="card-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>

            <div className="card-sobre card-2">
              <div className="card-video-box">
                <img src="../img/gifThor.gif" alt="Thor" className="card-img" />
              </div>
              <div className="card-text">
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-black">
        <div className="content"><h2 className="titulo-secao">News</h2></div>
      </section>
    </div>
  );
}

export default App;