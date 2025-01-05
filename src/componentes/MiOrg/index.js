import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //useState() -> retorna un arreglo con dos elementos
    //const [nombreVariable, funcionActualizarVariable] = useState(valorInicial);
    
    //const [mostrar, actualizarMostrar] = useState(true);

    //const manejarClick = () => {
    //    console.log("Mostrar/Ocultar elemento",!mostrar);
    //    actualizarMostrar(!mostrar);
    //}

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}


export default MiOrg;