const Layout = ({ title, children }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card p-4 shadow">

            {/* Logo */}
            <div className="text-center mb-4">
              <img
                src="/NCDC_India_Logo_2020.png"
                alt="logo"
                className="img-fluid"
                style={{ height: "100px" }}
              />
            </div>

            {/* Title */}
            <h4 className="text-center mb-4">{title}</h4>

            {/* Dynamic content */}
            {children}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;