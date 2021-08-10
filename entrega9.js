class Planta {
    constructor(nombre, altura, tipo, precio){
        this.nombre = nombre;
        this.altura = altura;
        this.tipo = tipo;
        this.precio = precio;
    };

    toString(){
        return `${this.nombre} - $${this.precio}`
    }
    
    iva(){
        return parseFloat(this.precio) * 0.19;
    }

    precioTotal(){
        return parseFloat(this.precio) + parseFloat(this.iva());
    }
}


let arreglo_de_plantas = [];



function crearElementoPlanta () {
    const elementoPlanta = document.createElement('div');
    elementoPlanta.classList.add('producto');
    return elementoPlanta
}


function crearImagenPlanta(){
    const elementoImg = document.createElement('img');
    elementoImg.src = 'monstera.jpeg';
    return elementoImg
}

function crearNombrePlanta(planta) {
    const nombreProductoElement = document.createElement('p');
    nombreProductoElement.classList.add('nombreProducto');
    nombreProductoElement.innerHTML = planta.nombre;
    return nombreProductoElement
}

function crearElementoCategoriaPlanta(planta) {
    const categoriaProductoElement = document.createElement('p');
    categoriaProductoElement.classList.add('categoriaProducto');
    categoriaProductoElement.innerHTML = planta.tipo;
    return categoriaProductoElement
}

function crearElementoValorPlanta(planta){
    const valorProductoElement = document.createElement('p');
    valorProductoElement.classList.add('valorProducto');
    valorProductoElement.innerHTML = planta.precio;
    return valorProductoElement
}

const formulario = document.getElementById("formulario-agregar-planta");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submit", e)
    let formulario = e.target;
    const nombre = formulario.children[0].value;
    const tipo = formulario.children[1].value;
    const altura = formulario.children[2].value;
    const precio = formulario.children[3].value;
    const planta = new Planta(nombre, altura, tipo, precio);

    arreglo_de_plantas.push(planta);

    mostrarPlantas(arreglo_de_plantas);
})

function mostrarPlantas(plantas){
    const contenedor = document.getElementById('contenedor-plantas');
    contenedor.innerHTML = '';
    for(const planta of plantas){
        //Div producto
        const elementoPlanta = crearElementoPlanta();
        //Imagen
        const imgPlanta = crearImagenPlanta();
        //Nombre
        const nombrePlanta = crearNombrePlanta(planta);
        //Categoria
        const categoriaPlanta = crearElementoCategoriaPlanta(planta);
        //Valor
        const valorPlanta = crearElementoValorPlanta(planta);
        elementoPlanta.appendChild(imgPlanta);
        elementoPlanta.appendChild(nombrePlanta);
        elementoPlanta.appendChild(categoriaPlanta);
        elementoPlanta.appendChild(valorPlanta);
        contenedor.appendChild(elementoPlanta);
    }
    
    
}