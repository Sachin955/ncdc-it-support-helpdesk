import Input from "../components/Input";
import Button from "../components/Button";
function Register() {
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
                        <Input label="Employee ID" placeholder='e.g., EMP001'  required />
                        <Input  label="Full Name"placeholder='Enter Your Full Name' required />
                        <Input label="Email ID" placeholder='Enter Your Email ID' required />
                        <select className="form-control mb-3">
                            <option disabled selected>Select Department</option>
                            <option>IT</option>
                            <option>HR</option>
                        </select>
                        <Input label="Division" placeholder='10-digit-mobile-number' required/>
                        <Input label="Mobile" placeholder='Create Password' type='password' required/>
                        <Button text='Register' />
                    </div>
                </div>



            </div>

        </div>

    );

}

export default Register;