import Navbar from "./Navbar";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* 1ª Seção: Homem Aranha (Topo) */}
      <section className="section-hero">
        <div className="content">
          {/* Conteúdo do Frame 2 */}
        </div>
      </section>

      {/* 2ª Seção: O GIF (Sobre/Thanos) */}
      <section className="section-gif">
        <div className="content">
           <h2 className="titulo-secao">Sobre</h2>
           {/* Conteúdo do Frame 3 */}
        </div>
      </section>

      {/* 3ª Seção: Fundo Preto (HQs) */}
      <section className="section-black">
        <div className="content">
           <h2 className="titulo-secao">News</h2>
           {/* Seus cards de HQs aqui */}
        </div>
      </section>

      {/* 4ª Seção: Nova Imagem de Fundo (Surfista Prateado/Final) */}
      <section className="section-footer-bg">
        <div className="content">
           {/* Conteúdo do Frame 4 */}
        </div>
      </section>
    </div>
  );
}

export default App;