
import Button from "../components/Button";
import { validateField } from "../utils/validation";
import { isFormValid } from "../utils/validation"
import Layout from "../components/Layout";
import Input from "../components/Input";
import { useState } from "react";
import { FaArrowLeft, FaCentercode } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
function Register() {

    const navigate = useNavigate()
    const [registrationData, setRegisterationData] = useState({
        emp_id: '',
        name: '',
        email: '',
        division_name: '',
        phn_no: '',
        password: ''
    })
    const [message, setMessage] = useState('')
    const [formError, setFormError] = useState({})
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterationData((prev) => ({
            ...prev,
            [name]: value
        }));
        const err = validateField(name, value);
        setFormError((prev) => ({
            ...prev,
            [name]: err
        }));
    };

    const handleSubmit = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(registrationData)
            });
            const data = await res.json()

            console.log('data', data)

            if (!res.ok) {
                setErrorMessage(data.error || "Something went wrong");
                setMessage("");
                return;
            }

            setMessage(`${data.user.name} you are ${data.message}`);
            setErrorMessage("");

            setTimeout(() => {
                navigate(("/login"))
            },3000)


            setRegisterationData({
                emp_id: "",
                name: "",
                email: "",
                division_name: "",
                phn_no: "",
                password: ""
            });

            // setFormError({}); // clear FormErrors
        } catch (error) {
            console.log('error', error);
            setErrorMessage("Server error, please try again");
            setMessage("");
        }
    }

    return (
        <div className="register-form container pages">

            <Layout title="User Registration" />
            {message && (
                <div className="text-success text-center mb-3 fs-3">
                    {message}
                </div>
            )}
            {errorMessage && (
                <div className="text-danger text-center mb-3 fs-3">
                    {errorMessage}
                </div>
            )}
            <div className="d-flex justify-content-center gap-4 mb-4">
                <Button
                    text='Please fill to Register'
                    className="w-100 px-4 py-4 register-btn"
                />
            </div>
            <Input
                label="Employee ID"
                placeholder='e.g., EMP001'
                value={registrationData.emp_id || ""}
                onChange={handleChange}
                name='emp_id'
                required />
            {formError.emp_id && (
                <small className="text-danger">{formError.emp_id} </small>
            )}
            <Input
                label="Name"
                placeholder='Enter the name'
                value={registrationData.name || ""}
                onChange={handleChange}
                name='name'
                required />
            {formError.name && (
                <small className="text-danger">{formError.name}</small>
            )}
            <Input
                label="Email"
                placeholder='Enter your email'
                value={registrationData.email || ""}
                onChange={handleChange}
                name='email'
                required />
            {formError.email && (
                <small className="text-danger">{formError.email}</small>
            )}
            <select

                className="form-control mb-3"
                name="division_name"
                value={registrationData.division_name}
                onChange={handleChange}
            >
                <option value="">Select Division</option>
                <option value="IT">Central Library</option>
                <option value="HR">Centre for AIDS and Related Diseases</option>
                <option value="HR">Centre for Arboviral and Zoonotic Diseases</option>
                <option value="HR">Centre for Bacterial Disease and Drug Resistance and Antimicrobial Resistance Containment</option>
                <option value="HR">Centre for Environmental & Occupational Health, Climate Change & Health</option>
                <option value="HR">Centre for Medical Entomology and Vector Management</option>
                <option value="HR">Centre for One Health</option>
                <option value="HR">Department of Parasitic Disease</option>
                <option value="HR">Division of Biochemistry and Toxicology</option>
                <option value="HR">Division of Epidemiology</option>
                <option value="HR">Division of Microbiology - Respiratory & Teratogenic Viruses</option>
                <option value="HR">Division of Statistical Monitoring & Evaluation</option>
                <option value="HR">Enterovirus Division</option>
                <option value="HR">Integrated Disease Surveillance Programme (IDSP)</option>
                <option value="HR">Microbiology - Respiratory Viruses Division and TB Division</option>
                <option value="HR">NPMU- Establishment and strengthening</option>
                <option value="HR">Public Health Preparedness & Non-Communicable Diseases</option>
                <option value="HR">Viral Hepatitis & Biotechnology Division</option>
            </select>

            {formError.division_name && (
                <small className="text-danger">{formError.division_name}</small>
            )}
            <Input
                label="Contact Number"
                placeholder='Enter your Mobile no'
                value={registrationData.phn_no || ""}
                onChange={handleChange}
                name='phn_no'
                required />
            {formError.phn_no && (
                <small className="text-danger">{formError.phn_no}</small>
            )}
            <Input
                label="Password"
                placeholder='Enter your password'
                value={registrationData.password || ""}
                onChange={handleChange}
                name='password'
                required />
            {formError.password && (
                <small className="text-danger">{formError.password}</small>
            )}


            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-md-4">
                    <Button
                        text='Register'
                        onClick={handleSubmit}
                        disabled={!isFormValid(registrationData, formError)
                        }
                        className="w-100 py-4"
                    />
                </div>
            </div>

            <div className="text-center mb-4 mt-4">
                <FaArrowLeft
                    size={22}
                    style={{ cursor: "pointer" }}
                    className="me-2"
                />

                <span onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
                    Back to the Login Page
                </span>
            </div>
        </div>



    );

}




export default Register;