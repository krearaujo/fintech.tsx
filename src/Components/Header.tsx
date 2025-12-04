import DateRange from "./DateRange";
import Months from "./Months";
import React from "react";

const Header = () => {
  const [title, setTitle] = React.useState("Resumo");

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
