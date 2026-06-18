import { Routes,Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import Navbar from "./components/NavBar/Navbar.jsx";
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import Sidebar from "./components/Aside/Sidebar.jsx"
import useFetch from "./hooks/useFetch.jsx"

function App() {
  const url = "https://fakestoreapi.com/products"

  const { data, error } = useFetch(url);

  if (error) return <p>{error}</p>;
  
  return (
    <>
      <Navbar />
      <main className='flex'>
        <Sidebar catalogo={data} />
        <div>
          <Routes>
            <Route path="/" element={<ItemListContainer catalogo={data}  />} />
            <Route path="/categories/:category" element={<ItemListContainer catalogo={data} />} />
            <Route path="/items" element={<h3>pene</h3>} />
            <Route path="*" element={<h2>404 Not Found</h2>} />
          </Routes>
        </div>

      </main>


    </>
  )
}

export default App
