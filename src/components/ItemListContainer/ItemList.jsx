import Item from "./Item";
import "./ItemList.css";

function ItemList({products}) {
    /*Puse una imagen estatica para todos las cards por mientras */
    return (
        <>
        {products.map((c)=>(
            <Item key={c.id} id={c.id} title={c.title} category={c.category} price={c.price} image={c.image}  />
        ))}
        </>
    )
}

export default ItemList