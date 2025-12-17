import { useLocation } from "react-router-dom";
import DateRange from "./DateRange";
import Months from "./Months";
import React from "react";

const Header = () => {
  const [title, setTitle] = React.useState("Resumo");
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
    } else if (location.pathname === "/sales") {
      setTitle("Vendas");
    }
  }, [location]);

  return (
    <header className="mb">
      <div className="dateRange mb">
        <DateRange />
        <h1 className="box">{title}</h1>
      </div>
      <Months />
    </header>
  );
};

export default Header;
