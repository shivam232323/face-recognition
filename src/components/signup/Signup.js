import React ,{Component} from 'react';
import 'tachyons';
import './style.css'

class Signup extends Component 
{
    constructor(props)
    {
    	super(props);

      this.state={

        email:" ",
        password:" "
      }	


    }


    getEmail = (event) =>
    {
      
      this.setState({email: event.target.value});
      
     
    }

    getPassword = (event) =>
    {
    	this.setState({password: event.target.value});
    }

   
    sendDetail =() =>
    {
      
    
      fetch('https://smart1-server.herokuapp.com/signin', {

      	method:'post',
      	headers:{'Content-Type':'application/json'},
      	body: JSON.stringify({
      		email:this.state.email,
      		password:this.state.password
      	})
      }).then(response => response.json())
      .then(value => {
           console.log(value)  
               
        if(value === 'pass')
        {
          this.props.SignIn();
        
         
       }
       
       else
       {
      
        document.getElementById('tag').innerHTML = 'USER NOT FOUND!' 
       } 
            
      }
      	);
        
     }


    

	render()
	{
		const{ Register} = this.props;

       return(

    <article className="center br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l ">
    <main className="pa4 black-80 shadow-3 head  ">
  <div className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" 
        onChange={this.getEmail}/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" 
        onChange={this.getPassword}/>
      </div>
    </fieldset> 
    <div className="">
      <input className="b ph3 pv2 input-reset w-50 ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={this.sendDetail}/>
    </div>
    <div className="lh-copy mt3">
      <a href="#0" className="f6 link dim black db" onClick={Register} >Sign up</a>
      <h1 id ="tag"> </h1>
    </div>
  </div>
</main>
 </article>

);


	}



}

export default Signup;