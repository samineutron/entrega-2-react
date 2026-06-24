import { Link } from "react-router-dom"

export default function Item({id, title, category, price, image}){
    
    return(
        <>
        <div className="card bg-base-100 w-70 shadow-sm my-6">
            <figure className="min-h-[200px]">
                <img className="w-full"
                src={image}
                alt={title} />
            </figure>
            <div className="card-body flex flex-col">
                <p className="max-h-[30px]">{category}</p>
                <h2 className="card-title item-start">{title}</h2>
                <div className="card-actions mt-auto flex justify-end items-center font-bold">
                    <p className=" text-xl text-secondary-content text-">${price}</p>
                    <Link className="btn btn-primary" to={`/items/${id}`} >
                        Ver detalles
                    </Link>
                </div>
            </div>
            </div>
        </>
    )
}