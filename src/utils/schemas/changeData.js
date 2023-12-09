import * as Yup from "yup";

export const ChangeData = Yup.object().shape({
    name: Yup.string().optional(),
    lastName: Yup.string().optional(),
    lastName2: Yup.string().optional(),
    cellphone: Yup.string().optional(),
});
