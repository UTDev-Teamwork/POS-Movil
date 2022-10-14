export const ListaArticulo=({props})=>{
    return(
        <ul>
            {
                props.map((articulo,index)=>(
                    <div className="card">
                        <img src={articulo.imagen} className="card-img-top" alt="Sudadera Personajes Kimetsu" id="producto" />
                        <div className="card-body">
                            <p className="card-text" id="nombreArticulo">{articulo.descripcion}</p>
                            <p className="card-text" id="precioArticulo">$ {articulo.precio_venta}</p>

                            <div className="btn-group" id="cantidad">
                                <button type="button" className="btn btn-primary" id="botonCantidad">Cantidad</button>
                                <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" id="flechaCantidad">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">1</a></li>
                                    <li><a className="dropdown-item" href="#">2</a></li>
                                    <li><a className="dropdown-item" href="#">3</a></li>
                                    <li><a className="dropdown-item" href="#">4</a></li>
                                    <li><a className="dropdown-item" href="#">5</a></li>
                                    <li><a className="dropdown-item" href="#">6</a></li>
                                    <li><a className="dropdown-item" href="#">7</a></li>
                                    <li><a className="dropdown-item" href="#">8</a></li>
                                    <li><a className="dropdown-item" href="#">9</a></li>
                                    <li><a className="dropdown-item" href="#">10</a></li>
                                </ul>
                            </div>

                            <a href="#" className="btn btn-primary" id="btnCards">AGREGAR</a>
                        </div>

                        
                    </div>
                ))
            }
        </ul>
    );
};