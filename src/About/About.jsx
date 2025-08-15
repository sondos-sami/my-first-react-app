import { Helmet } from 'react-helmet-async';
function About() {
    return (
        <div>
             <Helmet>
                    <title>About</title>
                    <meta name="description" content="Welcome to our homepage" />
                  </Helmet>
            <div className="bg-success p-5">
                
                <div className="container text-white p-5 m-5">
                    <h2 className="text-center">ABOUT COMPONENT</h2>
                    <div className="d-flex justify-content-center mb-3 align-items-center">
        <span className="line bg-white"></span>
        <i class=" mx-2 fa fa-star  " aria-hidden="true"></i>
        <span className="line bg-white"></span>
      </div>
 <div className="row ">
                    <div className="col-md-6">
                        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                    </div>
                    <div className="col-md-6">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization</div>
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default About
