import ItemList from "./ItemList";
import imagen from "../../assets/default.webp";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer({catalogo = [], isLoading}) {
    const [filtrados, setFiltrados] = useState([]);

    const {category} = useParams();

    useEffect(()=>{
        if (category){
            const productosFiltrados = catalogo.filter((item) => item.category === category);
            setFiltrados(productosFiltrados);

        } else {
            setFiltrados(catalogo);
        }
    },[category, catalogo])

    return (
        <>
            <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full justify-items-center gap-4 pt-6 px-5">
                {/* Lo de arriba en la clase me ayude de la IA para hacerlo responsivo dependiendo del espacio disponible */}
                {isLoading === true ? (<p>Cargando...</p>) : <ItemList products={filtrados} />}   
            </section>
        </>
    )
}

export default ItemListContainer