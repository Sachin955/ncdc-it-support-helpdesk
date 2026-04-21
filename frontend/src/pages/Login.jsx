
import Input from "../components/Input";
import Button from "../components/Button";
import { FaArrowLeft } from "react-icons/fa";
import Layout from '../components/Layout'
import { useNavigate } from "react-router-dom";
import "./login.css"

function Login() {
    const navigate = useNavigate()
    return (
        <div className="login-form container pages">

            <Layout title="Employee Login" />
            <div className="d-flex gap-2 mt-2 mb-3">
                <Button text='Login' /><Button text='Register' onClick={() => navigate("/register")} />
            </div>
            <Input
                label="Employee ID"
                placeholder='e.g., EMP001'
                name='emp_id'
                required />

            <Input
                label="Password"
                placeholder='Enter your password'
                name='password'
                required />


            <Button
                text='Login'
                onClick={() => navigate("/register")}
            />

            <div className="text-center mb-4 mt-4">

                <FaArrowLeft
                    size={22}
                    style={{ cursor: "pointer" }}
                    className="me-2"

                />

                <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                    Back to the Main Page
                </span>
            </div>

        </div>




    )
}

export default Login;