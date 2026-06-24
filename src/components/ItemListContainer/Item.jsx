export default function Item({title, category, price, image}){
    
    return(
        <>
        <div className="card bg-base-100 w-70 shadow-sm my-6">
            <figure>
                <img
                src={image}
                alt={title} />
            </figure>
            <div className="card-body">
                <p>{category}</p>
                <h2 className="card-title">{title}</h2>
                <div className="card-actions flex justify-end items-center font-bold">
                    <p className=" text-xl text-secondary-content text-">${price}</p>
                    <button className="btn btn-primary">Comprar ahora</button>
                </div>
            </div>
            </div>
        </>
    )
}