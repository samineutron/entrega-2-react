import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function ItemDetailContainer({catalogo}) {
    const [item, setItem] = useState(null);

    const {itemId} = useParams();

    useEffect(() =>{
        if (itemId){
            const selectedItem = catalogo.find((item) => item.id === Number(itemId));
            setItem(selectedItem ?? null);

        }
    },[catalogo, itemId])

    const handleBuy = function(){
        Swal.fire({
            title: "¡Se añadio a su carrito!",
            showCloseButton: true,
            text: "Su producto se ha añadido a su carrito de compras de forma exitosa",
            icon: "success",
            confirmButtonText: 'OK!'
        });
    }

    return (
        <>
            <section className=" w-full pt-6 px-5 flex justify-center items-center ">
                {item ? <ItemDetail key={item.id} onAdd={handleBuy} title={item.title} category={item.category} price={item.price} description={item.description} image={item.image}/> : <p>No hay producto seleccionado</p>}
            </section>
        </>
    )
}