import "./Data.css";

export default function Data({
    children,
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    fono,
    img,
}) {
    return (
        <div className="container_data">
            <div className="container_img">
                <img
                    src={img ? img : "/predeterminado.png"}
                    alt="Gato"
                />
            </div>
            <div className="info_box">
                <div className="info_item">
                    <label>Nombre</label>
                    <span>{nombre}</span>
                </div>
                <div className="info_item">
                    <label>Apellidos</label>
                    <span>
                        {apellidoPaterno} {apellidoMaterno}
                    </span>
                </div>

                <div className="info_item">
                    <label>Numero</label>
                    <span>{fono}</span>
                </div>
                <div className="info_item">
                    <label>Fecha de nacimiento</label>
                    <span>03-02-1977</span>
                </div>
            </div>
            <div className="button_data">{children}</div>
        </div>
    );
}
