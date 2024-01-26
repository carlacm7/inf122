"use client"
import Image from "next/image";
import style from "./foto.module.css";
import { useEffect, useState } from "react";

function Foto (){
    const [perrito, setPerrito]=useState("/vercel.svg");
    const [estado, setEstado]=useState("esperando");
    const [habilidad, setHabilidad]=useState("habilidad");
    
    const [poke, setPoke]= useState('pikachu');
    const [nuevoPoke, setNuevoPoke]= useState('');
    const buscar=()=>{
        setPoke(nuevoPoke);
        setNuevoPoke('');
        }
    const url=`https://pokeapi.co/api/v2/pokemon/${poke}`;

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{setPerrito(data.sprites.front_default), 
        setEstado(data.species.name),
        setHabilidad(data.abilities[0].ability.name)})
    },[poke]);


    return(
        <div className={style.contenedor}>
            <input type="text" value={nuevoPoke} onChange={(e) => setNuevoPoke(e.target.value)}/>
            <button className="boton" onClick={buscar}>Buscar</button>
            <h1>{estado}</h1>
            <Image src={perrito} alt="" width={300} height={300}/>
            <h1>{habilidad}</h1>
        </div>
    );
}

export default Foto;