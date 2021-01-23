import { CargaVista } from '../cargaVista.js';


export class Contacto extends CargaVista
{
    constructor()
    {
        super();

        for (var prop in this) { window[prop] = this[prop]; }                                          // Coloca los atributos de la clase para que esten disponibles desde el html
        Object.getOwnPropertyNames(this.constructor.prototype).forEach(c=> { window[c] = this[c]; });  // Coloca los metodos de la clase para que esten disponibles desde el html
        
        this.cargarVista();
    }

    destructor() {
        for (var prop in this) { delete window[prop]; }                                             // Remueve los atributos de la clase para que no queden en la ventana
        Object.getOwnPropertyNames(this.constructor.prototype).forEach(c=> { delete window[c]; });  // Remueve los metodos de la clase para que no queden en la ventana
    }
    
    cargarVista()
    {
        var texto = `
       <section class="camada_principal">

            <br/>

            <div id="camada_contenido">

            <br/><br/><br/>

            <article id="info-contacto">
                <p>
                    Nombre:
                    <span class="datos-contacto">José Miguel Lizárraga</span>
                    <br />

                    Ciudad:
                    <span class="datos-contacto">Santiago de Chile</span>
                    <br />	

                    Profesi&oacute;n:
                    <span class="datos-contacto">Artista visual. Universidad Finis Terrae</span>
                    <br />		
                </p>
            </article>
           
            <br/><br/><br/>				 
                
            </div>  <!-- fin camada_contenido -->	

        </section>  <!-- Fin camada principal -->
        `;

        this.cargarHtml({ textoHtml: texto });    
    }
};

