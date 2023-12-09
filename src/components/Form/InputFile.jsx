import React from "react";
import { useFormikContext, Field } from "formik";
import "./InputFile.css"; // Asegúrate de importar tus estilos CSS
import { UploadIcon } from "../Icons";
const InputFile = () => {
    const { setFieldValue } = useFormikContext();

    const handleFileChange = (e) => {
        // Aquí asumimos que sólo subes una imagen
        const file = e.currentTarget.files[0];
        setFieldValue("file", file); // Aquí "file" es el nombre del campo en tus valores de Formik
    };

    return (
        <div className="file-upload-container">
            <Field
                type="file"
                id="file-upload"
                name="file"
                className="custom-file-upload-hidden"
                onChange={handleFileChange}
            />
            <label
                htmlFor="file-upload"
                className="custom-file-upload-label"
            >
                <UploadIcon />
            </label>
        </div>
    );
};

export default InputFile;
