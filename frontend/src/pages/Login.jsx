
import Input from "../components/Input";
import Button from "../components/Button";
import { FaArrowLeft } from "react-icons/fa";
import Layout from '../components/Layout'
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";



function Login() {
    const navigate = useNavigate();

    const [loginCredential, setLoginCredential] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            navigate("/dashboard");
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setLoginCredential((prev) => ({
            ...prev,
            [name]: value
        }));

    };

    const handleLogin = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginCredential)
            })
            const data = await res.json()
            console.log(data);

            if (!res.ok) {
                alert(data.error);
                return;
            }

            localStorage.setItem("token", data.token);
            navigate("/dashboard");

        } catch (error) {
            console.log("login error", error)
        }

    }
    return (
        <div className="login-form container pages">

            <Layout title="User Login" />
            <div className="d-flex justify-content-center gap-4 mb-4">

                <Button
                    text="Login"
                    className={`w-100 px-4 py-4 `}
                />

                <Button
                    onClick={() => navigate("/register")}
                    text="Register"
                    className="w-100 px-4 py-4"
                    style={{ cursor: "default" }}
                />
            </div>

            <Input
                label="Email/Employee ID"
                placeholder='email'
                name='email'
                value={loginCredential.email}
                onChange={handleChange}
                required />

            <Input
                label="Password"
                placeholder='Enter your password'
                name='password'
                onChange={handleChange}
                value={loginCredential.password}
                required
            />

            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <Button
                        text='Login'
                        className="w-100 py-4"
                        onClick={handleLogin}
                    />
                </div>
            </div>


            <div className="text-center mb-4 mt-4">

                <FaArrowLeft
                    size={22}
                    style={{ cursor: "pointer" }}
                    className="me-2"
                />

                <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                    Back to the Home Page
                </span>
            </div>
        </div>
    )
}

export default Login;