import React  from 'react';
import 'tachyons';

function Nav({SignOut})
{
	return(
          
      <nav style ={{display:"flex" , justifyContent:'flex-end'}}>
       <p className="f3 link dim black underline pa3 pointer" onClick = {SignOut}> Sign Out </p>
      </nav>    
     

		);
}

export default Nav;