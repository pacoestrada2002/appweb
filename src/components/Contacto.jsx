import Card from "./Card";
import "../assets/styles/contacto.css";

function Contacto() {
  const user = [
    {
      name: "Nombre",
      input: <input type="text"></input>,
      
      
    },
    {
      name: "Apellido",
      input: <input type="text"></input>,
      
      
    },
    {
      name: "Edad",
      input: <input type="number"></input>,
      
      
    },
    {
      name: "Seleccione su genero",
      input: <select name="genero" id="genero">
        <option value="...">...</option>
        <option value="masculino">masculino</option>
        <option value="femenino">femenino</option>
        <option value="otro">otro</option>
      </select>,
      
     
      
    },
    {
      name: "Correo",
      input: <input></input>,

    },
    {
      name: "Contraseña",
      input: <input type="password"></input>,
    },
    {
      name: "Numero de telefono",
      input: <input type="tel"/>,
    },
    {
      name: "Confirma que no eres un bot",
      input: <input type="checkbox"></input>,
    }
    
  ];

  return (
    <div className="centralizar">
      <div className="containerContact">
    <h1 className="containerContact-header">Registro</h1>
    
    <div className="containerContact-main">
      {user.map((user) => {
        return <Card name1={user.name} input1={user.input}/>;
      })}
      
      <div class="enviar">
        <input type="submit"/>
        </div>
        
     
      
    </div>
  </div>
  </div>
    
  );
}

export default Contacto;
