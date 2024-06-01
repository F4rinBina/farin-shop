import { useFormik } from "formik";
import Container from "../../components/container/Container";
import * as yup from 'yup';

function Login() {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: yup.object().shape({
            username: yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            password: yup.string()
                .min(7, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),

        }),
        onSubmit: (values) => {
            const { password, username } = values
            console.log(password, username);

        }
    })
    return (
        <Container>
            <div className="flex justify-center my-72 ">
                <div className="bg-cyan-700 p-4 h-60 rounded-md">
                    <form onSubmit={formik.handleSubmit}>
                        <input value={formik.values.username} onChange={formik.handleChange} name="username" className="p-3 w-full rounded-md" type="text" />
                        {formik.errors.username && formik.touched.username ? (
                            <div className="text-slate-50">{formik.errors.username}</div>
                        ) : null}
                        <input value={formik.values.password} onChange={formik.handleChange} name="password" className=" p-3 w-full mt-4 rounded-md" type="password" />
                        {formik.errors.password && formik.touched.password ? (
                            <div className="text-slate-50">{formik.errors.password}</div>
                        ) : null}
                        <button type="submit" className="bg-cyan-500 p-3 px-9 mt-3 rounded">login</button>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default Login