import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

export const Create = () => {
  //estados
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [nacimiento, setNacimiento] = useState(0);
  const [especialidad, setEspecialidad] = useState("");

  //redireccion
  const navigate = useNavigate();

  // instanciar la coleccion
  const heroesCollection = collection(db, "heroes");

  // funcion para crear heroes

  const createHeroe = async (e) => {
    e.preventDefault();
    await addDoc(heroesCollection, {
      nombre: nombre,
      apellido: apellido,
      nacimiento: Number(nacimiento),
      especialidad: especialidad,
    });
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Crear Heroe</h1>
          <form onSubmit={createHeroe}>
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
              Crear Heroe
            </button>
            <Link to="/">
              <button className="btn btn-danger">CANCELAR</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
