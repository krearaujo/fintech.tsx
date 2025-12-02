import { useData } from "../Context/DataContext";
import SellItem from "../Components/SellItem";

const Sells = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <ul>
      {data.map((sell) => (
        <li key={sell.id}>
          <SellItem sell={sell} />
        </li>
      ))}
    </ul>
  );
};

export default Sells;
