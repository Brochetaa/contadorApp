import React from 'react';
import '../stylesheets/Boton.css';

class Boton extends React.Component {
  render() {
    return (
      <button
        className={this.props.esBotonDeClick ? 'btn-click' : 'btn-reiniciar'}
        onClick={this.props.manejarClick} >
        {this.props.texto}
      </button>
    )
  }
}

// function Boton({ texto, esBotonDeClick, manejarClick}) {
//   return (
//     <button
// 			className={esBotonDeClick ? 'btn-click' : 'btn-reiniciar'}
// 			onClick={manejarClick} >
//       {texto}
//     </button>
//   )
// }

export default Boton;