
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom"
function LandingPage({ text, onClick, disabled }) {

    const navigate = useNavigate()
    return (
        <div className="landing-page container pages ">
            <Layout title="Welcome to NCDC IT_Unit Helpdesk" />
            <div className="row justify-content-center">
                <p className="text-center fs-4 "> An Online Ticket Helpdesk</p>
            </div>


            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <Button
                        onClick={() => navigate("/login")}
                        text="Employee Login / Register"
                        className="w-100 py-4"
                    />
                </div>

            </div>





        </div>
    )

}

export default LandingPage;