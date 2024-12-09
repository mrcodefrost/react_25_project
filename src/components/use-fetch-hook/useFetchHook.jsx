import { useEffect, useState } from "react";


export default function UseFetch(url, options = {}) {


    // 3 States
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);


    async function fetchData() {
        setPending(true);
        try {
            const respone = await fetch(url, { ...options });

            if (!respone.ok) {
                throw new Error(respone.statusText);
            }

            const result = await respone.json();
            setData(result);
            setError(null);
            setPending(false);

        } catch (error) {
            setError(`Error occured:  ${error}`);
            setPending(false);
        }
    }


    useEffect(() => {
        fetchData();
    }, [url]);


    return { data, error, pending };
}