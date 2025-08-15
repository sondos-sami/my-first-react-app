import { Helmet } from 'react-helmet-async';

function Contact() {
    return (
        <div>
            <Helmet>
                <title>Contact</title>
                <meta name="description" content="Welcome to our homepage" />
            </Helmet>
            
          
            <div className="inner w-100 w-md-50 p-md-5  mx-auto">
                <div className="container p-2  p-md-5">
                    <h2 className="text-basic-color text-uppercase text-center fw-bolder">contact section</h2>
                    
                    <div className="d-flex justify-content-center mb-3 align-items-center">
                        <span className="line"></span>
                        <i className="mx-2 fa fa-star" aria-hidden="true"></i>
                        <span className="line"></span>
                    </div>
                    
                    
                    <input type="text" placeholder="userName" className="w-100 p-3 my-2 rounded-2 border-0 border-bottom" />
                    <input type="text" placeholder="userAge" className="w-100 p-3 my-2 rounded-2 border-0 border-bottom" />
                    <input type="email" placeholder="userEmail" className="w-100 p-3 my-2 rounded-2 border-0 border-bottom" />
                    <input type="password" placeholder="userPassword" className="w-100 p-3 my-2 rounded-2 border-0 border-bottom" />
                    
                    <button className="btn btn-success mt-3">Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;