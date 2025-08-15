import "../App.css";
import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <div className="basic-color py-5">
        <div className="row w-75 mx-auto py-3 gy-5">
          <div className="col-md-4 text-white text-center">
            <h3>lOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 text-white text-center">
            <h3>AROUND THE WEB</h3>
            <span>
           <i className="fa-brands icon fa-facebook-f m-1 p-2 border border-2 border-white rounded-circle"></i>

            </span>
            <span>
             
              <i className="fa-brands icon fa-linkedin-in m-1 p-2 border border-2 border-white rounded-circle"></i>
            </span>
            <span>
              <i className="fa-brands icon fa-twitter m-1 p-2 border border-2 border-white rounded-circle" aria-hidden="true"></i>
            </span>
            <span>
              <i className="fa fa-globe icon m-1 p-2 border border-2 border-white rounded-circle" aria-hidden="true"></i>
            </span>
          </div>
          <div className="col-md-4   text-white text-center">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="footer-color text-center text-white p-3">
        <p>Copyright © Your Website 2021</p>
      </div>
    </React.Fragment>
  );
}

export default Footer;
