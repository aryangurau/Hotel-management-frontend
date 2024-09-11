import { useEffect, useState } from "react";
import { instance } from "../utils/axios";

const useApi = ({ url }) => {
  const [loading, setLoading] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      const response = await instance
        .get(url, {
          signal: controller.signal,
        })
        .catch((e) => {
          setErrMsg(e?.response.statusText);
          setLoading(false);
        });
      setData(response?.data);
      setLoading(false);
    };
    try {
      setLoading(true);
      setErrMsg("");
      fetchData();
    } catch (e) {
      setErrMsg(e.toString());
      setLoading(false);
    }
    return () => controller.abort();
  }, [url]);

  return {
    data,
    loading,
    errMsg,
  };
};

export default useApi;
