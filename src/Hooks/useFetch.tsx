import React from "react";

function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const optionsRef = React.useRef(options);
  optionsRef.current = options;

  React.useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url, {
          ...optionsRef.current,
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error("Erro ao buscar dados");
        }
        const result = await response.json();
        setData(result);
      } catch (erro) {
        setError((erro as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
