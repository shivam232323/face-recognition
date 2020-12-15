import React ,{Component} from 'react';
import './App.css';
import Clarifai from 'clarifai';
import FaceDetection from './components/FaceDetection/FaceDetection.js';
import Nav from './components/nav/Nav.js';
import Register from './components/Register/Register.js';
import Signup from './components/signup/Signup.js';
import Logo from './components/logo/Logo.js';
import Rank from './components/rank/Rank.js';
import Particles from 'react-particles-js';
import Imagelinkform from './components/imagelinkform/Imagelinkform.js';



const app = new Clarifai.App({
 apiKey: '5eaab8fe49ee46d9bdc753a171b35053'
});


const initialState = {
  input: " ",
  imageUrl:" " ,
  box:{},
  rote:'sigin',
  Register: 'in ',
  body:' ',
  users:{
   id:'',
   name:'',
   email:'',
   pass:'',
   join:0,
   date:new Date() 
  }
}

class App extends Component 
{
   
  constructor()
  {

    super();
    this.state= initialState;
    
  }
    

  loaduser = (data) =>{
  
    this.setState({ 
      users:{
        id:data.id,
      name:data.name,
      email:data.email,
      pass:data.pass,
      join:0,
      }
    });

    

  }
   

    onInputChange = (event) =>
    {
      this.setState({input: event.target.value});
      
    }

      calculateFaceLocation = (data) =>
       {
         
            const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
                   const image = document.getElementById('inputimage');
                      const width = Number(image.width);
                       const height = Number(image.height);
                         return {
                                      leftCol: clarifaiFace.left_col * width,
                                          topRow: clarifaiFace.top_row * height,
                                             rightCol: width - (clarifaiFace.right_col * width),
                                                 bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }


          displayFaceBox = (box) => {

             this.setState({box: box});
            
              }

    OnClick = () =>
    {
      
      this.setState({imageUrl: this.state.input});
      app.models
      .predict(
        '53e1df302c079b3db8a0a36033ed2d15',
        this.state.input)
          .then(response => 
          {
                 this.displayFaceBox(this.calculateFaceLocation(response));
           }
        ).catch(error => console.log(error));

        

        }



        onrotechange = () =>
        {   

          this.setState({rote : 'home'});
          this.setState({body:'body'})
           this.setState({rote : 'sign'})


        }



        loginpage = () =>
        {

          this.setState({rote : 'sigin'})
          this.setState({body:'boy'})
          this.setState({Register:'ind'})
          this.setState(initialState)
          
        }


        Register = () =>
        {

          this.setState({Register:'in'})
          this.setState({rote : 'sig'})
        }


    render()
  {

  return (
    <div className="App">
 <Particles className="particle"
    params={{
      "particles": {
          "number": {
              "value":150
          },
          "size": {
              "value": 2
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
  }} />

      <Nav SignOut ={this.loginpage} />

      {  
        (this.state.Register === "in")?

         <Register Load ={this.loaduser} SignIn={this.loginpage} />

        :(this.state.rote === 'sigin')?

        <Signup  SignIn={this.onrotechange}  Register={this.Register}/>

      :(this.state.body ==='body')?

      <div>
      <Logo />
      <Rank />
      <Imagelinkform InputChange={this.onInputChange}  Click ={this.OnClick} />
      <FaceDetection Url ={this.state.imageUrl}  box ={this.state.box}/>
       </div>

       :(
         console.log('WELCOME TO SMART BRAIN')
        )
        
     }
    
    </div>
    )
  

  }

}


export default App;
