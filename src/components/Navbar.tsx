import { NavLink } from "react-router-dom";
import './Navbar.css'

export default function Navbar (){

return (
    <ul className="navStev">
        <li className="liStev">
            <span>
            <NavLink to="/inicio">
                Inicio
            </NavLink>
            </span>
        </li>

      

        <li className="liStev">
        <span>
            <NavLink to="/usuario">
                Usuarios
            </NavLink>
            </span>
        </li>

        <li className="liStev">
        <span>
            <NavLink to="/preguntas">
                Preguntas
            </NavLink>
            </span>
        </li>

        
        <li className="liStev">
        <span>
            <NavLink to="/cuestionario">
                Cuestionario
            </NavLink>
            </span>
        </li>

        <li className="liStev">
        <span>
            <NavLink to="/evaluacion">
                Evaluación
            </NavLink>
            </span>
        </li>

        <li className="liStev">
        <span>
            <NavLink to="/contactos">
                Contactos                                  
            </NavLink>
            </span>
        </li>
    </ul>
);

}