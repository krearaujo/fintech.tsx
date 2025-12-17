import fintech from "../assets/fintech.svg";
import resume from "../assets/icons/resumo.svg";
import sales from "../assets/icons/vendas.svg";
import webhooks from "../assets/icons/webhooks.svg";
import config from "../assets/icons/configuracoes.svg";
import contact from "../assets/icons/contato.svg";
import logout from "../assets/icons/sair.svg";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <img src={fintech} alt="Fintech logo" />
      <ul>
        <li>
          <span>
            <img src={resume} />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={sales} />
          </span>
          <NavLink to="/sales">Vendas</NavLink>
        </li>
        <li>
          <span>
            <img src={webhooks} />
          </span>
          <a href="">Webhooks</a>
        </li>
        <li>
          <span>
            <img src={config} />
          </span>
          <a href="">Configurações</a>
        </li>
        <li>
          <span>
            <img src={contact} />
          </span>
          <a href="">Contato</a>
        </li>
        <li>
          <span>
            <img src={logout} />
          </span>
          <a href="">Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
