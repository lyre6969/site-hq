import Navbar from "./Navbar";
import SearchBar from "./SearchBar"; // 1. Importe o novo componente
import "./index.css";
// import pow from "../img/POW!.png"; // Comentado pois você já usa o path direto no src abaixo

function App() {
  return (
    <div className="app-container">
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

      {/* 2ª Seção: O GIF (Sobre/Thanos) */}
      <section className="section-gif">
        <div className="content">
            <h2 className="titulo-secao">Sobre</h2>
        </div>
      </section>

      {/* 3ª Seção: Fundo Preto (HQs) */}
      <section className="section-black">
        <div className="content">
            <h2 className="titulo-secao">News</h2>
        </div>
      </section>

      {/* 4ª Seção: Nova Imagem de Fundo */}
      <section className="section-footer-bg">
        <div className="content">
        </div>
      </section>
    </div>
  );
}

export default App;