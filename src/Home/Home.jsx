import avatar from "../assets/home/imgi_1_avataaars.svg";

import { Helmet } from 'react-helmet-async';
 
function Home() {
  return (
    <>
     <Helmet>
        <title>Home</title>
        <meta name="description" content="Welcome to our homepage" />
      </Helmet>
      <div className="bg-success text-white p-5">
        <div className="innter text-center">
          <img src={avatar} alt="home image" className="w-25"/>
          <h2>START FRAMEWORK</h2>
                      <div className="d-flex justify-content-center mb-3 align-items-center">
        <span className="line bg-white"></span>
        <i class=" mx-2 fa fa-star  " aria-hidden="true"></i>
        <span className="line bg-white"></span>
      </div>
          
          <p className="m-0">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}

export default Home;

