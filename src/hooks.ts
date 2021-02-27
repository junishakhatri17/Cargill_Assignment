import { useState, useEffect } from "react";
import { any } from "prop-types";


function useFetch(url: any) {
  const [data, setData] = useState<any[]>([]);
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data];
}
export { useFetch };