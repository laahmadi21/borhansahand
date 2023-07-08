import { useEffect, useState } from "react";
import axios from "axios";


const instance = axios.create({
  baseURL: "https://react-mini-projects-api.classbon.com/",
});

const useAxios = (axiosParams) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [response, setResponse] = useState(null);

  const fetchData = async () => {
    try {
      const result = await instance.request(axiosParams);
      setResponse(result.data);
    } catch {
      setError(error);
    } finally {
      setLoading(false);
    }

  };

  
  useEffect(()=>{
    fetchData();
},[])

  return{response, error, loading}
};

export default useAxios;
