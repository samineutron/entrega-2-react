import { Routes,Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from "./components/NavBar/Navbar.jsx";
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Sidebar from "./components/Aside/Sidebar.jsx";

function App() {
    const url = "https://fakestoreapi.com/products";
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true);

        async function getData(){
            try {
                const res = await fetch(url);

                if (!res.ok) {
                    throw new Error("Error al obtener los datos");
                }

                const result = await res.json();
                setData(result);

            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        getData();
    },[url]);

    if (loading) return <p>Cargando...</p>;
    if (error) return (<p>{error}</p>);

    return (
    <>
        <Navbar />
        <main className='flex flex-row'>
            <Sidebar catalogo={data} />
            <Routes>
                <Route path="/" element={<ItemListContainer catalogo={data} isLoading={loading}/>} />
                <Route path="/categories/:category" element={<ItemListContainer catalogo={data} isLoading={loading}/>} />
                <Route path="/items" element={<h3>pene</h3>} />
                <Route path="*" element={<h2>404 Not Found</h2>} />
            </Routes>

        </main>
    </>
    )
}

export default App;
