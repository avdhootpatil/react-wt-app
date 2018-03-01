import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FortCard from './Card.js';


// let fakeFortData = {

// } 
 

// let defaultHeaderStyle = {
//   'font-size' : '54px'
// }

// let defaultCardStyle ={
//   'background': '#373737',
//   'height' : '315px',
//   'margin' : '20px 40px 20px 40px',
//   'border-radius' : '5px'
  
// }

// class Filter extends Component{
//   render () {
//     return(
//         <div style={{marginBottom: '3em'}}>
//           <input type ='text'/>
//         </div>
//     );
//   }
// }


// class TestCard extends Component{
//   render () {
//     return(
//       <div style={{...defaultCardStyle,display : "inline-block",width :"25%"}}>
//          <h2 NAME/>
//           <img style={{background : '#F4F4F4',height:'40%'}} />
//           <p efuidf dfuyd fiydt fdsifutds fudt fdusf df/>
//       </div>
//     );
//   }
// }



class App extends Component {
  render() {
    return (
      <div className="App" >
        <header >
          <h1>Forts in Maharashtra</h1>
        </header>
         
        <div>
        <MuiThemeProvider>
          <FortCard />
          <FortCard />  
          <FortCard />
          <FortCard />
          <FortCard />
          <FortCard />  
               
        </MuiThemeProvider>
        
        </div>
        
           
      </div>
    );
  }
}

export default App;
