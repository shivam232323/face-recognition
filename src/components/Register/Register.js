import React, { Component } from 'react';
import 'tachyons';

class  Register extends Component
{
  constructor(props)
  {
    super(props);

    this.state ={
      user:" ",
      email:" ",
      password:" "
    }
    

  }

  EnterUser= (event) =>{
    
    this.setState({user : event.target.value })
    

  }


  EnterEmail= (event) =>{
    
    this.setState({email : event.target.value })

  }

  EnterPassword= (event) =>{
    
    this.setState({password : event.target.value })

  }

  Registered =() =>
    {
      
    
      fetch('https://smart1-server.herokuapp.com/register', {

      	method:'post',
      	headers:{'Content-Type':'application/json'},
      	body: JSON.stringify({
          name:this.state.user,
      		email:this.state.email,
      		pass:this.state.password
      	})
      }).then(response => response.json())
        .then(result => {
        console.log(result.name)
        this.props.Load(result);
      }

      );

      this.props.SignIn();

    }



  render()
  {

    return(

 
   
    <article className="center br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l  ">
    <main className="pa4 black-80 shadow-3 head  ">
  <div className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">REGISTER</legend>
      <div className="mt3">
          <label htmlFor="name" className="db fw6 lh-copy f6">Name <span className="normal black-60"></span></label>
             <input id="name" className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" aria-describedby="name-desc" onChange={this.EnterUser}/>
                 
       </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Enter Your Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.EnterEmail}/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Enter Your Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.EnterPassword} />
      </div>
    </fieldset> 
    <div className="">
      <input className="b ph3 pv2 input-reset w-50 ba b--black bg-transparent grow pointer f6 dib"  onClick={this.Registered} type="submit" value="Register" />
    </div>
  </div>
</main>
 </article>
);


}


}

export default Register;