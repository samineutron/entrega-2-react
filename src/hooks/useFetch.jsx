import { useState, useEffect } from "react";

function useFetch(url){
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{

        async function getData(){
            try {
                const res = await fetch(url);

                if (!res.ok) {
                    throw new Error("Error al obtener los datos");
                }

                const result = await res.json();
                setData(result)
                
            } catch (error) {
                console.log(error)
                setError(error)
            }
        }

        getData();
        console.log(data)

    }, [url]);


    return { data, error }
}

export default useFetch;