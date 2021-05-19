import { CargaVista } from '../cargaVista.js';


export class Pinturas extends CargaVista
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

    probando() {
        alert("hola desde la clase Pinturas");
    }
    
    cargarVista()
    {
        //this.cargarHtml({ rutaArchivo: "componentes/pinturas/index.html" });  
        
        var arreglo = [
            { href: "img/pinturas/grande-1.png", src: "img/pinturas/mini-1.png" },
            { href: "img/pinturas/grande-2.png", src: "img/pinturas/mini-2.png" },
            { href: "img/pinturas/grande-3.png", src: "img/pinturas/mini-3.png" },
            { href: "img/pinturas/grande-4.png", src: "img/pinturas/mini-4.png" },
            { href: "img/pinturas/grande-5.png", src: "img/pinturas/mini-5.png" },
            { href: "img/pinturas/grande-6.png", src: "img/pinturas/mini-6.png" },
            { href: "img/pinturas/grande-7.png", src: "img/pinturas/mini-7.png" },
            { href: "img/pinturas/grande-8.png", src: "img/pinturas/mini-8.png" },
            { href: "img/pinturas/grande-9.png", src: "img/pinturas/mini-9.png" },
            { href: "img/pinturas/grande-10.png", src: "img/pinturas/mini-10.png" }
        ];
        
        var texto = `
        <section class="camada_principal">

            <br/>

            <div id="camada_contenido">

                <div id="content">

                    ${arreglo.map((c, index) => 
                    { 
                        return `
                        <a rel="trabajos" class="fade" href="${c.href}" title="Trabajo ${index + 1}">
                            <img src="${c.src}" alt="">
                        </a>
                        ` 
                    }).join("")} 
 
                    <br/><br/><br/>
                    
                    <fieldset style=" background: lightblue; padding: 1em; text-align: left;">
                        <p style="color: black; ">  <br/> 
                            El uso del óleo se conoce desde la Antigüedad y estaba ya extendido entre los artistas de la Edad Media, aunque de modo minoritario ya que en 
                            esa época predominaba la pintura al temple o al fresco. A fines del siglo XIV y durante el siglo XV, se comenzó a generalizar el uso del óleo 
                            en detrimento de otras técnicas, ya que permitía un secado más lento de la pintura, correcciones en la ejecución de la misma y una excelente 
                            estabilidad y conservación del color. Fueron los pintores de Flandes los primeros en usar el óleo de forma habitual. <br/><br/>
                            
                            La preparación del soporte para recibir la pintura varía según la naturaleza del mismo. Normalmente se suelen aplicar una serie de capas de 
                            cola animal y yeso, que consiguen que la superficie quede lisa y uniforme; esto se denomina imprimación.
                            
                            <br/><br/>
                        </p>
                    </fieldset>
                    
                    
                </div>

            </div>  <!-- fin camada_contenido -->	

        </section>  <!-- Fin camada principal -->
        `;

        this.cargarHtml({ textoHtml: texto });    
    }
};

