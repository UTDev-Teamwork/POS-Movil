export const ListaArticulo=({props})=>{
    return(
        <ul>
            {
                props.map((articulo,index)=>(
                    <a href="#" key={index}>
                        <div className="card">
                            <img src={articulo.imagen} className="card-img-top" alt="Sudadera Personajes Kimetsu" id="producto"/>
                            <div className="card-body">
                                <p className="card-text" id="nombreArticulo">{articulo.descripcion}</p>
                                <p className="card-text" id="precioArticulo">$ {articulo.precio_venta}</p>
                            </div>
                        </div>
                    </a>
                ))
            }
        </ul>
    );
};