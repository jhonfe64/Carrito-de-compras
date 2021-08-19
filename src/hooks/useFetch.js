/*
Este hook personalizado tiene como tarea hacer fetch a las urls que se le envien y retornar la lista de productos
si hay error en la consulta retorna ese error.

el estado data guarda los resultados de la consulta, se inicializa como un array vacio, al hacer la consulta
guarda un array de objetos.

este hook se usa en componets/Results


*/

import {useState, useEffect} from 'react';

const useFetch = (url) => {
    
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

   useEffect(()=>{
        const getData = async (url) => {
            try {
                const info = await fetch(url)

                if(!info.ok){
                    throw new Error(`HTTP error! status: ${info.status}`);
                }else{
                    const jsonInfo = await info.json();
                    setData(jsonInfo);
                }
            }
            catch(e){
                setError(e.name + " " + e.message);
            }
        }
        getData(url);
   },[])
    return [data, error]
}

export default useFetch;
