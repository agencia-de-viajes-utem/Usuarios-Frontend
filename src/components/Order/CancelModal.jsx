import "./Modal.css";
import React, { useState } from "react";

const CancelModal = ({ onCancel, onConfirm }) => {
    const [cancelSuccess, setCancelSuccess] = useState(null);

    const handleConfirm = () => {
        // Aquí deberías agregar tu lógica para confirmar la cancelación
        // Por ejemplo, podrías hacer una llamada a una API o ejecutar alguna lógica de negocio.
        // Supongamos que seteas cancelSuccess basado en el resultado de esa lógica.

        const cancellationSuccessful = /* Aquí establece si la cancelación fue exitosa o no */ true;

        if (cancellationSuccessful) {
            setCancelSuccess(true);
            // Ejemplo: Si la cancelación es exitosa, puedes cerrar el modal después de unos segundos
            setTimeout(() => {
                setCancelSuccess(null);
                onConfirm(); // Cierra el modal
            }, 2000);
        } else {
            setCancelSuccess(false);
            // No cerramos el modal si la cancelación no fue exitosa, para dar la oportunidad de volver a intentar
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                {cancelSuccess === true && (
                    <p style={{ color: "green", marginBottom: "15px", textAlign: "center" }}>
                        ¡Se canceló correctamente!
                    </p>
                )}
                {cancelSuccess === false && (
                    <p style={{ color: "red", marginBottom: "15px", textAlign: "center" }}>
                        No se pudo cancelar.
                    </p>
                )}
                {cancelSuccess === null && (
                    <>
                        <p style={{ marginBottom: "15px", textAlign: "center" }}>
                            ¿Estás seguro de que deseas cancelar este pedido?
                        </p>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <button className="boton" onClick={handleConfirm}>
                                Sí
                            </button>
                            <button className="boton" onClick={onCancel}>
                                No
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CancelModal;
