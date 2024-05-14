import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";


export const Edit = () =>{

  //estados
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [nacimiento, setNacimiento] = useState(0);
  const [especialidad, setEspecialidad] = useState("");

  //redireccion
  const navigate = useNavigate();

/*   capturo el id */
const {id} = useParams ()

// funcion que actualiza un documento
const update = async (e)=>{
    e.preventDefault();
    const heroeDoc = doc (db,"heroes",id)
    const data = {
            nombre: nombre,
            apellido: apellido,
            nacimiento: Number(nacimiento),
            especialidad: especialidad,
    };
    await updateDoc (heroeDoc,data)
    navigate("/")
}

/* funcion que trae un doc por su id */

const getHeroeById = async (id)=>{
    const heroeDoc = await getDoc(doc(db,"heroes",id));
    if (heroeDoc.exists()){
        setNombre(heroeDoc.data().nombre);
        setApellido(heroeDoc.data().apellido);
        setNacimiento(heroeDoc.data().nacimiento);
        setEspecialidad(heroeDoc.data().especialidad);
    } else {
        console.log("no Existe");
    }
}

// traigo el heroe apenas carga el componente Edit
useEffect(()=>{
getHeroeById(id)
},[])


    return (

        <div className="container">
        <div className="row">
          <div className="col">
            <h1>Actualizar Heroe</h1>
            <form onSubmit={update}>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>
  
              <div className="mb-3">
                <label className="form-label">Apellido</label>
                <input
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>
  
              <div className="mb-3">
                <label className="form-label">Nacimiento</label>
                <input
                  value={nacimiento}
                  onChange={(e) => setNacimiento(e.target.value)}
                  className="form-control"
                  type="number"
                />
              </div>
  
              <div className="mb-3">
                <label className="form-label">Especialidad</label>
                <input
                  value={especialidad}
                  onChange={(e) => setEspecialidad(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>
  
              <button type="submit" className="btn btn-primary">
                Editar Heroe
              </button>
              <Link to="/">
                <button className="btn btn-danger">CANCELAR</button>
              </Link>
            </form>
          </div>
        </div>
      </div>

    )
}