import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";

/* SWEET ALERT */
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const mySwal = withReactContent(Swal);

export const Show = () => {
  //1 CONFIGURAR USESTATE (HOOK)
  const [heroes, setHeroes] = useState([]);

  // 2 referenciamos a la base de datos (coleccion) de firestore
  const heroesCollection = collection(db, "heroes");

  //3 funcion para mostrar todos los documentos
  /*     const getHeroes = async()=>{
        const data = await getDocs (heroesCollection)

      setHeroes (
        data.docs.map((doc)=>({
...doc.data(), id:doc.id
        }))
      )
    } */
  /*     console.log(heroes); */

  /* 4 funcion para eliminar un doc */
  const deleteHeroe = async (id) => {
    const heroeDoc = doc(db, "heroes", id); // heroesCollection
    await deleteDoc(heroeDoc);
  };

  //5 funcion para la confirmacion de sweet alert
  const confirmDelete = (id) => {
    Swal.fire({
      title: "Segurola?",
      text: "Esto no tiene vuelta atras!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borralo!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteHeroe(id);
        Swal.fire({
          title: "Borrado!",
          text: "Tu heroe ha sido Borrado",
          icon: "success",
        });
      }
    });
  };

  // useEffect
  useEffect(() => {
    const getHeroes = async () => {
      const data = await getDocs(heroesCollection);

      setHeroes(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getHeroes();
  }, [heroes]);

  return (
    <>
      <div className="container">
        <div className="col">
          <div className="row">
            <div className="d-grid gap-2">
              <Link to="/create" className="btn btn-secondary mt-2 mb-2">
                {" "}
                CREAR{" "}
              </Link>
            </div>

            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <td>Nombre</td>
                  <td>Apellido</td>
                  <td>Especialidad</td>
                  <td>Nacimiento</td>
                  <td>Acciones</td>
                </tr>
              </thead>

              <tbody>
                {heroes.map((heroe) => (
                  <tr key={heroe.id}>
                    <td>{heroe.nombre}</td>
                    <td>{heroe.apellido}</td>
                    <td>{heroe.especialidad}</td>
                    <td>{heroe.nacimiento}</td>
                    <td>
                      <Link to={`edit/${heroe.id}`} className="btn btn-light">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => confirmDelete(heroe.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
