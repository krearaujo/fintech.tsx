import type { IVenda } from "../Context/DataContext";

const SellItem = ({ sell }: { sell: IVenda }) => {
  return (
    <div className="sell box">
      <a href="" style={{ fontFamily: "monospace" }}>
        {sell.id}
      </a>
      <div>{sell.nome}</div>
      <div>
        {sell.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default SellItem;
