import { useState } from "react";
import "./formulario.css";
import Campo from "../campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const {registrarColaborador, crearEquipo} =props;
    
    const manejarEnvio = (evento) => {
        evento.preventDefault();
        console.log("Manejar envio");
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        };
        registrarColaborador(datosAEnviar);
    }


    const manejarNuevoEquipo = (evento) => {
        evento.preventDefault();
        crearEquipo({titulo, colorPrimario:color}); 
        
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                label="Nombre" 
                placeholder="Ingresar nombre" 
                required={true} 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />

            <Campo 
                label="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />

            <Campo 
                label="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={foto} 
                actualizarValor={actualizarFoto}
            />

            <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos}/>

            <Boton>
                Crear
            </Boton>

        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                label="Titulo" 
                placeholder="Ingresar titulo" 
                required
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />

            <Campo 
                label="Color" 
                placeholder="Ingresar el color en Hexadecimal" 
                required
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>Registrar equipo</Boton>
            </form>
    </section>
}

export default Formulario;