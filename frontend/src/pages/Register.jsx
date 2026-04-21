
import Button from "../components/Button";
import { validateField } from "../utils/validation";
import { isFormValid } from "../utils/validation"
import Layout from "../components/Layout";
import Input from "../components/Input";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
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
    const [error, setError] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterationData((prev) => ({
            ...prev,
            [name]: value
        }));
        const err = validateField(name, value);
        setError((prev) => ({
            ...prev,
            [name]: err
        }));
    };

    const handleSubmit = async () => {
        try {
            const res = fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                header: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(registrationData)
            });
            const data = (await res).json()

            setMessage(data.message || "User registered successfully");

            // setRegisterationData({
            //     emp_id: "",
            //     name: "",
            //     email: "",
            //     division_name: "",
            //     phn_no: "",
            //     password: ""
            // });

            // setError({}); // clear errors
        } catch (error) {
            console.log(error);
            setMessage("Server error");
        }
    }

    return (
        <div className="register-form container pages">

            <Layout title="Employee Registration" />
            <div className="d-flex gap-2 mt-2 mb-3">
                <Button text='New Registration' /><Button text='Go to Login' onClick={()=> navigate("/login")} />
            </div>
            <Input
                label="Employee ID"
                placeholder='e.g., EMP001'
                value={registrationData.emp_id || ""}
                onChange={handleChange}
                name='emp_id'
                required />
            {error.emp_id && (
                <small className="text-danger">{error.emp_id} </small>
            )}
            <Input
                label="Name"
                placeholder='Enter the name'
                value={registrationData.name || ""}
                onChange={handleChange}
                name='name'
                required />
            {error.name && (
                <small className="text-danger">{error.name}</small>
            )}
            <Input
                label="Email"
                placeholder='Enter your email'
                value={registrationData.email || ""}
                onChange={handleChange}
                name='email'
                required />
            {error.email && (
                <small className="text-danger">{error.email}</small>
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

            {error.division_name && (
                <small className="text-danger">{error.division_name}</small>
            )}
            <Input
                label="Contact Number"
                placeholder='Enter your Mobile no'
                value={registrationData.phn_no || ""}
                onChange={handleChange}
                name='phn_no'
                required />
            {error.phn_no && (
                <small className="text-danger">{error.phn_no}</small>
            )}
            <Input
                label="Password"
                placeholder='Enter your password'
                value={registrationData.password || ""}
                onChange={handleChange}
                name='password'
                required />
            {error.password && (
                <small className="text-danger">{error.password}</small>
            )}

            <Button
                text='Register'
                disabled={true}
                onClick={handleSubmit}
                disabled={!isFormValid(registrationData, error)
                }
            />
        </div>



    );

}




export default Register;