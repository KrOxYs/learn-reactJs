import { useEffect } from 'react';
import { useState } from 'react';
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const AbortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: AbortCont.signal })
        .then((res) => {
          // jika error
          if (res.status !== 200) {
            throw Error('Error');
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setPending(false);
          setError(false);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('Fetch Aborted');
          } else {
            setPending(false);
            setData(null);
            setError(err.message);
          }
        });
    }, 1000);
    return () => AbortCont.abort();
  }, [url]);

  return { data, isPending, error };
};
export default useFetch;
