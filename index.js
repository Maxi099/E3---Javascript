const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];



const d =document;
const $nombre = d.getElementById("nombre").children;
const $card = d.getElementById("card");
const $img = d.getElementById("img");
const $precio = d.getElementById("precio");
const $input =d.getElementById("form_input");
const $boton = d.getElementById ("boton");
const $mensaje = d.getElementById ("mensaje");
const $form = d.getElementById ("form");





const validarDatos = () =>{
  let mensaje = ""; 
  if (!$input.value.length)
 return mensaje = "El campo esta vacio";
 if (/\D */.test($input.value))
  return mensaje = "El dato ingresado es incorrecto";
   return mensaje;
}


const existePizza =()=>{
  let existe=false;  
for(let i=0; i<pizzas.length;i++)
{
  if (pizzas[i].id === parseInt($input.value)) 
  {
    localStorage.setItem('index', i);
    $form.reset()
    $input.classList.remove ("incorrecto");
    $mensaje.textContent = "";
    renderPIzza(i);
    existe = true;
    break;    
  }
}
return existe;
}


const renderPIzza =(i)=>{  
  $card.style.display = "flex";
  $nombre[0].textContent = pizzas[i].nombre;
  $nombre[1].textContent = `ID: ${pizzas[i].id}`;
  $precio.textContent = `$ ${pizzas[i].precio}`; 
  switch (i){
    case 0:
      $img.setAttribute ("src", "./img/muzzarella.png");
      break;
      case 1:
      $img.setAttribute ("src", "./img/cebolla.png");
      break;
      case 2:
      $img.setAttribute ("src", "./img/4quesos.png");
      break;
      case 3:
      $img.setAttribute ("src", "./img/especial.png");
      break;
      case 4:
      $img.setAttribute ("src", "./img/anana.png");
      break;
      
  }

}


const error =()=>{
  $card.style.display = "none";
  $input.classList.add ("incorrecto");
  localStorage.clear();

}
  

 
const ingresarDatos = (e)=>{
   e.preventDefault();   
  if (validarDatos()!="")
  {
    $mensaje.textContent = validarDatos();
    error();
    return;
    }
    if (!existePizza())
    {
      $mensaje.textContent = "El ID no existe";
      error();
      return;
    }
    



  
    
}



const init = ()=>
{
 if (localStorage.getItem('index') != null)
  renderPIzza(parseInt(localStorage.getItem('index')))
  $boton.onclick = ingresarDatos; 
}

init();