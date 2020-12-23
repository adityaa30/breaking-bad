import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.text())
      .then((res) => {
        setLoading(false);
        setData(JSON.parse(res) as T);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
