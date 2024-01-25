"use client"

import style from "./dogs.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";

function Dogs(){
    const [dog,setDog]=useState("/vercel.svg");
    const url="https://dog.ceo/api/breeds/image/random";
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{setDog(data.message)})
    },[])
    return (
        <div className={style.box}>
            <h1 className={style.title}>Dogs</h1>
            <Image className={style.image} src={dog} alt="dog" width={500} height={500}/>
        </div>
    );
}

export default Dogs;