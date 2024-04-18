import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Card from "./Card"
/* import Boton from "./Boton" */
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
{/*     <Boton numero = {1} nombre = "Boton 1"/>
    <Boton numero = {2} nombre = "Boton2"/> */}

    <Card apellido = "Messi" 
          nacimiento={1987} 
          clubes={["Newells ", "Barcelona ", "PSG ", "Inter MIAMI "]}
          mundial = {true}
          late={false}
          />

<Card apellido = "Ronaldo" 
          nacimiento={1984} 
          clubes={["Lisboa ", "Manchester ", "R. Madrid", "Juventus ", "Al-Nasar"]}
          mundial = {false}
          late={true}
          />

    </>
)
