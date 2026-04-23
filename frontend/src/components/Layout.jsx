
import "./Layout.css";
const Layout = ({ title, children, colClass="col-12 col-md-6 col-lg-4" }) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className={colClass}>
          <div className="layout-card">

            {/* Logo */}
            <div className="text-center mb-4 logo-wrapper">
              <img
                src="/NCDC_India_Logo_2020.png"
                alt="logo"
                className="img-fluid logo-img"              
              />
            </div>

            {/* Title */}
            <h4 className="text-center mb-4 fw-bold">{title}</h4>

       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;