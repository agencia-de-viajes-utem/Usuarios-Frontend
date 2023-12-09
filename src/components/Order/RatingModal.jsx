import React, { useState } from "react";
import StarRating from "react-rating-stars-component";
import Input from "../Form/Input";
import { Formik, Form } from "formik";
import "./Modal.css";

const RatingModal = ({ onCancel, onConfirm }) => {
    const [calificacion, setCalificacion] = useState(0);

    const handleRatingChange = (newRating) => {
        setCalificacion(newRating);
    };

    const handleSubmit = (values, formikBag) => {
        // Realizar acción con la calificación y el comentario
        console.log("Calificación:", calificacion);
        console.log("Comentario:", values.comentario);

        onConfirm(); // Llama a la función onConfirm para cerrar el modal
        formikBag.resetForm();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <Formik
                    initialValues={{
                        comentario: "",
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div>
                            <h1 className="titulo">Calificar</h1>
                            <p className="titulo">Ingrese su calificación</p>
                        </div>
                        <StarRating
                            count={5}
                            onChange={handleRatingChange}
                            size={30}
                            activeColor="#ffd700"
                        />
                        <Input
                            name="comentario"
                            type="text"
                            content="Comentario"
                            placeholder="Ingrese su comentario (opcional)"
                        />
                        <button className="boton" type="submit">
                            Calificar
                        </button>
                        <button className="boton" onClick={onCancel}>
                            Cancelar
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default RatingModal;
