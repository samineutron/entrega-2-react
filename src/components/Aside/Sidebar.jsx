import {Link} from "react-router-dom";
import "./Sidebar.css";

function Sidebar({catalogo}) {
    const uniquesCategories = [...new Set(catalogo.map(item => item.category))];

    return(
    <aside className="">
        <h2 className="text-center text-2xl py-3 font-bold">Categorías</h2>
        <ul className="flex gap-2 flex-col">
            <Link className="btn" to="/" >
                <li className="text-lg" >
                    Todas
                </li>
            </Link>
            {uniquesCategories.map(c => (
                
                <Link className="btn" key={c} to={`/categories/${c}`} >
                    <li className="text-lg ">
                        {c}
                    </li>
                </Link>
                
            ))}
        </ul>

    </aside>
)}

export default Sidebar;