import { Link } from "react-router-dom";
import { StHeader } from "./styles";

export function Header() {
  return(
    <StHeader>
      <Link to={"/"} className="brand">
          <img src="https://via.placeholder.com/200x40" alt="" />
      </Link>

      <nav>
        <Link to={"contact"}>
          Contato
        </Link>
        <Link to={"/about"}>
          Sobre
        </Link>
        <Link to={"/projects"}>
          Projetos
        </Link>

        <span></span>
      </nav>
    </StHeader>
  );
}