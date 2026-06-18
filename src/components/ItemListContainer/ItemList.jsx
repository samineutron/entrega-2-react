import "./ItemList.css";

function ItemList({keygen, titulo, categoria, precio, imagen}) {
    /*Puse una imagen estatica para todos las cards por mientras */
    return (
        <>
        <div className="card bg-base-100 w-70 shadow-sm my-6">
            <figure>
                <img
                src={imagen}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <p>{categoria}</p>
                <h2 className="card-title">{titulo}</h2>
                <div className="card-actions flex justify-end items-center font-bold">
                    <p className=" text-xl text-secondary-content text-">${precio}</p>
                    <button className="btn btn-primary">Comprar ahora</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default ItemList