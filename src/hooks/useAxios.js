// import { useState, useEffect } from "react";
// import axios from "axios";

// const useAxios = (url, method = "get") => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let isMounted = true; // предпазва от промени след unmount

//     const fetchData = async () => {
//       try {
//         const response = await axios[method](url);
//         if (isMounted) {
//           setData(response.data);
//           setLoading(false);
//         }
//       } catch (err) {
//         if (isMounted) {
//           setError(err);
//           setLoading(false);
//         }
//       }
//     };

//     fetchData();

//     return () => {
//       isMounted = false; // cleanup
//     };
//   }, [url, method]);

//   return { data, loading, error };
// };

// export default useAxios;
//--------------------------------------------

import { useState, useEffect } from "react";
// import api from "../api/axios"; kogato izpolzvash http://localhost:3001/projects v Components
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(url); //smeni s api.get(url) kogato izpolzvash http://localhost:3001/projects v Components
        if (isMounted) {
          setData(response.data.projects || response.data); // поддържа json-server или static db.json
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
};

export default useAxios;
