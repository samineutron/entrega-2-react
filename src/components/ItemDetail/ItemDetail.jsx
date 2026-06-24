import ItemCount from "./ItemCount";
import { useState,useEffect } from "react";

export default function ItemDetail({title, category,  price, description, image, onAdd}) {
    const [count, setCount] = useState(1);

    const increment = function(){
        if (count >= 99) {
            return
        }
        setCount(count + 1);
    }

    const decrement = function() {
        if (count <= 1) return;
        setCount(count - 1);
    }

    const handleAdd = function() {
        onAdd();
        setCount(1);
    }


    return (
        <>
            <div className="card bg-base-100 max-w-100 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                    src={image}
                    alt={title}
                    className="rounded-xl object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p className="text-red-800 text-xl font-bold">${price}</p>
                    <div className="card-actions flex flex-row justify-around w-full">
                        <ItemCount increment={increment} decrement={decrement} count={count}  />
                        <button onClick={handleAdd} className="btn btn-primary">Añadir</button>
                    </div>
                </div>
            </div>
        </>
    )
}