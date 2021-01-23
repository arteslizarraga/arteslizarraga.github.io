

import { Inicio } from "../componentes/inicio/inicio.js";
import { Pinturas } from "../componentes/pinturas/pinturas.js";
import { Dibujos } from "../componentes/dibujos/dibujos.js";
import { Esculturas } from "../componentes/esculturas/esculturas.js";
import { Contacto } from "../componentes/contacto/contacto.js";


export const rutasProyecto = [
    {nombre: "inicio", componente: Inicio, default: true},
    {nombre: "pinturas", componente: Pinturas},
    {nombre: "dibujos", componente: Dibujos},
    {nombre: "esculturas", componente: Esculturas},
    {nombre: "contacto", componente: Contacto}
];


{/* <li><a href="#" link="#pinturas">Pintura</a></li>
<li><a href="#" link="#dibujos">Dibujo</a></li>
<li><a href="#" link="#esculturas">Escultura</a></li>	
<li><a href="#" link="#contacto">Contacto</a></li>	 */}



