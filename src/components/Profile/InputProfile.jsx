import { Field, ErrorMessage } from "formik";
import "./InputProfile.css";
function Input({ name, content, ...rest }) {
    return (
        <div className="box_input2">
            <label htmlFor={name}>{content}</label>
            <Field {...rest} name={name} id={name} />
            <ErrorMessage name={name} component="div" className="" />
        </div>
    );
}

export default Input;
