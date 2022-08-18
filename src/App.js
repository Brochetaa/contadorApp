import React from 'react';
import './App.css';
import logo from './imagenes/logo.png';
import Boton from './components/Boton.js';
import Contador from './components/Contador.js';
// import { useState } from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicks: 0
    };
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClick() {
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 }));
  }

  reiniciarContador() {
    this.setState({ numClicks: 0 });
  }

  render() {
    return (
      <div className='App'>
        <div className='logo-contenedor'>
          <img 
            className='main-logo'
            src={logo}
            alt='main-logo' />
        </div>
        <div className='contenedor-principal'>
          <Contador numClicks={this.state.numClicks} />
          <Boton 
            texto='Click'
            esBotonDeClick={true}
            manejarClick={this.manejarClick} />
            <Boton 
            texto='Reiniciar'
            esBotonDeClick={false}
            manejarClick={this.reiniciarContador} 
          />
        </div>
      </div>
    );
  }
}

// function App() {

//   const [numClicks, setNumClicks] = useState(0);

//   const manejarClick = () => {
//     setNumClicks(numClicks + 1);
//   }

//   const reiniciarContador = () => {
//     setNumClicks(0);
//   }

//   return (
//     <div className='App'>
//       <div className='logo-contenedor'>
//         <img 
//           className='main-logo'
//           src={logo}
//           alt='main-logo' />
//       </div>
//       <div className='contenedor-principal'>
//         <Contador numClicks={numClicks} />
//         <Boton 
//           texto='Click'
//           esBotonDeClick={true}
//           manejarClick={manejarClick} />
//           <Boton 
//           texto='Reiniciar'
//           esBotonDeClick={false}
//           manejarClick={reiniciarContador} 
//         />
//       </div>
//     </div>
//   );
// }

export default App;
