import { useEffect, useState } from "react";
import { ListaArticulo } from "./articulo.component";

export const Articulo = ({ value }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "http://localhost:7070/articulos"
        );
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
    console.log(data);
  }, []);

  return (
    <>
      <div>
        <h1 id="encabezado">Articulos</h1>
      </div>

      <div className="body">
        <div className="cards">
          <ListaArticulo props={data}></ListaArticulo>
        </div>
      </div>
    </>
  );
};
