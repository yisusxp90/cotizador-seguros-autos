import React, { Component } from 'react';
import {primeraMayuscula} from '../helper';

class Resumen extends Component{

    mostrarResumen = () =>{
        const {marca, plan, year} =  this.props.datos;
        if(!marca || !plan || !year) return null;
        return (
            
            <div className="resumen">
                <h2>Resumen de la Cotizacion</h2>
                <li>marca: {primeraMayuscula( marca) }</li>
                <li>plan: {primeraMayuscula( plan ) }</li>
                <li>Año del auto: {primeraMayuscula( year) }</li>
            </div>
        )
    }
    render(){
        
        return (
            
            <div>
                {this.mostrarResumen()}
            </div>
        )
    }
}

export default Resumen;