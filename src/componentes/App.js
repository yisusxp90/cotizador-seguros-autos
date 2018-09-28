import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';
import Resultado from './Resultado';


class App extends Component {

  state = {
    resultado: '',
    datos: {}
  }

  cotizarSeguro = (datos) => {
    const {marca, plan, year} = datos;
    //agregar una base de 2000
    let resultado = 2000;
    // obtener diferencia de años 
    const diferencia = obtenerDiferenciaAnio(year);
    //y por cada año restar 3 %
    resultado -= ((diferencia * 3) * resultado) / 100;
    //Americano 15% asiatico 5% europeo 30%
    resultado = calcularMarca(marca) * resultado;
    //el plan basico incremente 20 % y completo 50%
    let incrementoPlan = obtenerPlan(plan);
    resultado = resultado * incrementoPlan;
    const datosAuto = {
      marca : marca,
      plan : plan,
      year : year
    }
    this.setState( { 
      resultado : resultado,
      datos : datosAuto
    })
  }
  render() {
    return (
      <div className="contenedor">
        <Header 
          titulo="cotizador seguros de auto"
        />

        <div className="contenedor-formulario">
          <Formulario
          cotizarSeguro={this.cotizarSeguro}
          />

          <Resumen 
            datos={this.state.datos}
            resultado={this.state.resultado}
          />

          <Resultado
            resultado={this.state.resultado}
          />

        </div>
      </div>
    );
  }
}

export default App;
