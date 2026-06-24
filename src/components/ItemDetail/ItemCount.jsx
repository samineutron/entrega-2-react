import "./ItemCount.css"

export default function ItemCount({count, increment, decrement}){
    
    return(
        <div className="flex flex-row">
            <button onClick={decrement} className="btn btn-neutral font-bold">-</button>
            <p className="font-bold count">{count}</p>
            <button onClick={increment} className="btn btn-neutral font-bold">+</button>
        </div>
    )
}