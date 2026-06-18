import ItemList from "./ItemList";
import imagen from "../../assets/default.webp";
import { useParams } from "react-router-dom";

function ItemListContainer({catalogo}) {

    const category = useParams(catalogo.category)
    
    return (
        <>
            <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center gap-4 pt-6 px-5">
                {/* Lo de arriba en la clase me ayude de la IA para hacerlo responsivo dependiendo del espacio disponible */}
                {catalogo.map(c => {
                    return (
                        <ItemList key={c.id} titulo={c.title} categoria={c.category} precio={c.price} descripcion={c.description} imagen={c.image} />
                    )
                })
                }
            </section>
        </>
    )
}

export default ItemListContainer