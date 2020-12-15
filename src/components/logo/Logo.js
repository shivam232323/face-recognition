import React from 'react';
import Tilt from 'react-tilt';
import 'tachyons';
import brain from './smart.jpg';

const Logo = () =>{

  return(

     <div>
         <Tilt className="Tilt  " options={{ max : 25 }} style={{ height: 200, width: 250 ,color:'green'}} >
              <div className="Tilt-inner"> 
              <img className=" pa0" height="200"  alt="new" src={brain}>
              </img>
              </div>
         </Tilt>
     </div>
  	);

}

 export default Logo;