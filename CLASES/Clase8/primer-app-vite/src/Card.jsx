import "./Card.css"

const Card = ({apellido,nacimiento,clubes,mundial,late}) =>{

let color = mundial?"dorado":"plateado"

    return (
        <>
{/*         <h2 style={{backgroundColor:mundial?"gold":"silver"}}  >{apellido}</h2> */}
    <h2 className={color} >{apellido}</h2> 
        <small>{nacimiento}</small>
        <p>{clubes}</p>
        <p>{mundial?"Gano un mundial 🏆":"Sigue Participando🥶"}</p>
        <p>{late?"Late✅": "Nola❌"}</p>
        </>
    )
}
export default Card