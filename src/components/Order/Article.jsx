import "./Order.css";
import CancelModal from "./CancelModal";
import RatingModal from "./RatingModal";
import React, { useState, useEffect } from "react";

export default function Article({
    id,
    Freserva,
    Fviaje,
    origen,
    destino,
    estado,
    detalles,
}) {
    const [showModal, setShowModal] = useState(false);

    const [state, setState] = useState(true);
    useEffect(() => {
        if (estado === "Pendiente") {
            setState("A");
        } else if (estado === "Realizado") {
            setState("B");
        } else {
            setState("C");
        }
    }, [estado]);

    const handleCancelClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <article className="Article-container">
            <div className="state">
                <h1 className={state}>{estado}</h1>
            </div>
            <div className="left-section">
                <div className="site">
                    <span>origen: {origen}</span>
                    <span>destino: {destino}</span>
                </div>
            </div>
            <div className="center-section">
                <div className="datos">
                    <span>
                        Fecha de reserva:
                        <br /> {Freserva}
                    </span>
                    <span>
                        Fecha de viaje:
                        <br /> {Fviaje}
                    </span>
                </div>
            </div>
            <div className="right-section">
                <div className="details">
                    <span>Asiento: {detalles.asiento}</span>
                    <span>Clase: {detalles.clase}</span>
                    <span>Precio: {detalles.precioTotal}</span>
                </div>
            </div>
            {state ? (
                <div className="buttons">
                    {state === "A" && (
                        <button
                            className="boton-cancelar"
                            onClick={handleCancelClick}
                        >
                            Cancelar
                        </button>
                    )}
                    {state === "B" && (
                        <button
                            className="boton-calificar "
                            onClick={handleCancelClick}
                        >
                            Calificar
                        </button>
                    )}

                    {showModal && (
                        <CancelModal
                            onCancel={handleCloseModal}
                            onConfirm={() => {
                                /*  lógica para confirmar la cancelación */
                                handleCloseModal();
                            }}
                        />
                    )}
                </div>
            ) : null}
        </article>
    );
}
