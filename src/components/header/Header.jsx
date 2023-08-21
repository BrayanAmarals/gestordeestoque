import "./styles.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <nav>
        <h1>Gerenciador de Estoque</h1>
        <div id="buttons">
          <Link to={"/dashboard"}>Início</Link>
          <Link to={"/items"}>Itens</Link>
        </div>
      </nav>
    </>
  );
}
