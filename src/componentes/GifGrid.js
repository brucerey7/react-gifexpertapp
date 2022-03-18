import React, { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { GiftGridItem } from "./GifGridItem";
import { useFetchGifs } from "./hooks/useFetchGifs";

export const GifGrid = ({category}) => {
    
    // const [count, setCount] = useState(0);

    // const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs(category);

    // useEffect( () => {
    //     getGifs(category)
    //         // .then(imgs => setImages(imgs));
    //         .then(setImages);
    // }, [category])

    // getGift();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            
            {/* {loading? 'Cargando...' : 'Carga finalizada'} */}
            {loading && <p className="animate__animated animate__flash">Loading...</p>}

            <div className="card-grid">

                {/* <h3>{count}</h3>
                <button onClick={() => setCount(count + 1)}></button> */}
                {/* <ol>
                    <li>key={gifts.id}
                                category={gifts.title} </li>
                </ol> */}
                {/* {
                    images.map(({id, title}) => (
                        <li key={id}>{title}</li>
                    ))
                } */}
                {
                    images.map((img) => (
                        <GiftGridItem 
                            key={img.id}
                            // img={img} 
                            {...img}
                        />
                    ))
                }
            </div>
        </>
        
    )    
}