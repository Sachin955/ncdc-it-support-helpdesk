
import Layout from "../components/Layout";
import Button from "../components/Button";
import {useNavigate} from "react-router-dom"
function LandingPage({ text, onClick, disabled, className = "mt-6" }) {

    const navigate = useNavigate()
    return (
        <div className="landing-page container pages ">
            <Layout title="Employee Support System"  />
            
                <Button 
                onClick={() => navigate("/login")}
                 text="Employee Login / Register"
                  className={`btn custom-btn w-100 ${className}`}
 />
            


        </div>
    )

}

export default LandingPage;