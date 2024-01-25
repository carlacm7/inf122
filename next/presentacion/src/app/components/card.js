import style from './card.module.css';
import Image from "next/image";

function Card(){
    return (
       <div className={style.encabezado}>
            <figure>
                <Image className={style.foto} src="/imagenes/foto.jpeg" alt="foto" width={200} height={200}/>
            </figure>
            <div className={style["text-encabezado"]}>
                <h1>Carla Cuevas</h1>
                <p>Super Junior Front-end Dev</p>
                <div className={style["container-icons"]}>
                    <a href="https://github.com/carlacm7"><Image src="/imagenes/github.png" alt="github"  width={30} height={30} className={style.icon}/></a>
                    <a href="https://www.linkedin.com/in/carla-patricia-cuevas-mamani-17a200246"><Image src="/imagenes/linkedin.png" alt="in" width={30} height={30} className={style.icon}/></a>
                    <a href="https://www.instagram.com/sam77cm/"><Image src="/imagenes/instagram.png" alt="instagram" width={30} height={30} className={style.icon}/></a>
                </div>
            </div>
       </div>
    );
}

export default Card;

/*<Image className={style.image} src={dog} alt="dog" width={500} height={500}/>*/
