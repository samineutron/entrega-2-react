import {Link} from "react-router-dom"

function Sidebar({catalogo}) {
    const uniquesCategories = [...new Set(catalogo.map(item => item.category))];

    return(
    <aside className="justify-start sticky w-3xl">
        <h2>Categorías</h2>
        <ul>
            <Link to="/" >
                <li className="text-2xl btn" >
                    Todas
                </li>
            </Link>
            {uniquesCategories.map(c => (
                <Link to={`/categories/${c}`} >
                    <li key={c} className="text-2xl btn">
                        {c}
                    </li>
                </Link>
            ))}
        </ul>

    </aside>
)}

export default Sidebar;