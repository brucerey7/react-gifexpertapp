import React, { useState } from "react";
import { AddCategory } from "./componentes/AddCategory";
import { GifGrid as GifGrid } from "./componentes/GifGrid";
import { ResetCategory } from "./componentes/ResetCategory";

export const GifExpertApp = () => {
    
    // const categories = ['One Pounch', 'Samurai X', 'Dragon Ball', 'Super Campeones'];
    const [categories, setCategories] = useState([]);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Super Campeones']);
    //     setCategories(categories => [...categories, 'Super Campeones']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <ResetCategory setCategories={setCategories} />
            <hr></hr>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    // categories.map( category => {
                    //     // return <li>Hola mundo</li>
                    //     // return <li key={i}>Hola mundo</li>
                    //     return <li key={category}>{category}</li>
                    // })
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category+':'} 
                        />
                    ))
                }
            </ol>

        </>
    )
}