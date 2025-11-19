import React from "react";
import useFetch from "../Hooks/useFetch";

interface IDataContext {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
}

interface IVenda {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  data: string;
  parcelas: number | null;
}

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) {
    throw new Error("useData deve ser usado dentro de um DataContextProvider");
  }
  return context;
};

const DataContext = React.createContext<IDataContext | null>(null);

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<IVenda[]>(
    "https://data.origamid.dev/vendas/"
  );

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
