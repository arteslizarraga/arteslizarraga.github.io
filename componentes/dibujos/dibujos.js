import { CargaVista } from '../cargaVista.js';


export class Dibujos extends CargaVista
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
            { href: "img/dibujos/grande-1.png", src: "img/dibujos/mini-1.png" },
            { href: "img/dibujos/grande-2.png", src: "img/dibujos/mini-2.png" },
            { href: "img/dibujos/grande-3.png", src: "img/dibujos/mini-3.png" },
            { href: "img/dibujos/grande-4.png", src: "img/dibujos/mini-4.png" },
            { href: "img/dibujos/grande-5.png", src: "img/dibujos/mini-5.png" },
            { href: "img/dibujos/grande-6.png", src: "img/dibujos/mini-6.png" },
            { href: "img/dibujos/grande-7.png", src: "img/dibujos/mini-7.png" }
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
                    
                    <fieldset style=" background: lightblue; ">
                        <p style="color: black; ">  <br/> 
                        El dibujo sirve como una herramienta para la representación de objetos reales o ideas que, a veces, no es posible expresar fielmente con palabras. 
                        De las primeras civilizaciones perduran escasos ejemplares de dibujos, normalmente, por la fragilidad del material en el que fueron ejecutados 
                        (se han hallado en ostraca y pinturas murales inacabadas). En la Edad Media se utilizó profusamente el dibujo, generalmente coloreado, para 
                        representar sobre pergaminos temas religiosos a modo de explicación o alegoría de las historias escritas, privando así lo simbólico sobre lo 
                        realista, incluso las proporciones y cánones de la época. 	<br/><br/>
                            
                        Es en el Renacimiento cuando el dibujo eclosiona, logrando alcanzar sublimes cotas. Por primera vez se estudia el método de reflejar la realidad 
                        con la mayor fidelidad posible, con arreglo a normas matemáticas y geométricas impecables: con Filippo Brunelleschi surge la perspectiva cónica. 	
                            
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

