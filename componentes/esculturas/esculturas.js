import { CargaVista } from '../cargaVista.js';


export class Esculturas extends CargaVista
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
        //this.cargarHtml({ rutaArchivo: "componentes/pinturas/index.html" });  
        
        var arreglo = [
            { href: "img/escultura/grande-1.png", src: "img/escultura/mini-1.png" },
            { href: "img/escultura/grande-2.png", src: "img/escultura/mini-2.png" },
            { href: "img/escultura/grande-3.png", src: "img/escultura/mini-3.png" },
            { href: "img/escultura/grande-4.png", src: "img/escultura/mini-4.png" },
            { href: "img/escultura/grande-5.png", src: "img/escultura/mini-5.png" },
            { href: "img/escultura/grande-6.png", src: "img/escultura/mini-6.png" },
            { href: "img/escultura/grande-7.png", src: "img/escultura/mini-7.png" },
            { href: "img/escultura/grande-8.png", src: "img/escultura/mini-8.png" },
            { href: "img/escultura/grande-9.png", src: "img/escultura/mini-9.png" },
            { href: "img/escultura/grande-10.png", src: "img/escultura/mini-10.png" }
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
                            A partir de trozos grandes de troncos comienzo a tallar poco a poco la forma que deseo lograr. Considero que el material tiene características 
                            que contribuyen con mi proceso creativo; sobre  todo si se trata de un material que no ha sido fabricado por la mano del hombre. Los nudos de la
                            madera, la dirección de la veta y los anillos de crecimiento, tal como se forman en la naturaleza, son guías que se hallan presentes en el 
                            material y que son un aporte para mí a la hora de realizar una escultura. <br/><br/>
                            
                            El árbol alguna vez fue una semilla y al igual que los demás seres vivos también paso por el proceso de crecimiento, en muchos casos siguiendo 
                            un patrón espiral. Por esa razón he elegido la madera, por que debido a sus características me permite relacionar de forma inmediata mi obra con 
                            la naturaleza, algo que no podría lograr con otros materiales como el plástico o el acero.  <br/><br/>
                        </p>
                    </fieldset>
                                     
                </div>

            </div>  <!-- fin camada_contenido -->	

        </section>  <!-- Fin camada principal -->
        `;

        this.cargarHtml({ textoHtml: texto });    
    }
};

