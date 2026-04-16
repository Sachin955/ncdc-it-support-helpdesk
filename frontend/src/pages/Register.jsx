import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
function Register() {
    const [registrationData, setRegisterationData] = useState({
        emp_id: '',
        name: '',
        email: '',
        division_name: '',
        phn_no: '',
        password: ''
    })
    console.log(registrationData)
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">

                <div className="col-12 col-md-6 col-lg-4">

                    <div className="card p-4 shadow">

                        <div className="text-center mb-4">
                            <img src="/NCDC_India_Logo_2020.png" alt="ncdc-logo" className="img-fluid" style={{ height: "100px" }} />
                        </div>

                        <h4 className="text-center mb-4">Employee Registration</h4>
                        <div className="d-flex gap-2 mb-3">
                            <Button text='Login' /><Button text='Register' />
                        </div>
                        <Input label="Employee ID"
                            placeholder='e.g., EMP001'
                            value={registrationData.emp_id}
                            onChange={(e) => {
                                setRegisterationData({
                                    ...registrationData, emp_id: e.target.value
                                })
                            }}
                            required />

                        <Input label="Full Name"
                            placeholder='Enter Your Full Name'
                            value={registrationData.name}
                            onChange={(e) => {
                                setRegisterationData({
                                    ...registrationData, name: e.target.value
                                })
                            }}
                            required />
                        <Input label="Email ID"
                            placeholder='Enter Your Email ID'
                            value={registrationData.email}
                            onChange={(e) => {
                                setRegisterationData({
                                    ...registrationData, email: e.target.value
                                })
                            }}
                            required />
                        <select
                            className="form-control mb-3"
                            value={registrationData.division_name}
                            onChange={(e) =>
                                setRegisterationData({
                                    ...registrationData,
                                    division_name: e.target.value
                                })
                            }
                        >
                            <option value="">Select Department</option>
                            <option value="IT">IT</option>
                            <option value="HR">HR</option>
                        </select>

                        <Input label="Mobile"
                            placeholder='10-digit-mobile-number'
                            type='tel'
                            value={registrationData.phn_no}
                            onChange={(e) => {
                                setRegisterationData({
                                    ...registrationData, phn_no: e.target.value
                                })
                            }}
                            required />
                        <Input label="Password"
                            placeholder='Create Password'
                            type='password'
                            value={registrationData.password}
                            onChange={(e) => {
                                setRegisterationData({
                                    ...registrationData, password: e.target.value
                                })
                            }}
                            required />

                        <Button text='Register' />
                    </div>
                </div>



            </div>

        </div>

    );

}

export default Register;