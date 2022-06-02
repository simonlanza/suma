import React, {Component} from 'react';
import estilos from '../styles/Suma.module.css';

class Suma extends Component {
    state = {numero: 0};
    num = 0;
    suma = () => {
        this.setState({numero : this.state.numero + 1});
    }
    resta = () => {
        if(this.state.numero <= 0){
            alert("No puedes restar menos de 0");
            this.setState({numero: 0});
        } else {
            this.setState({numero : this.state.numero - 1});

        }
    }
    render() {
        return (
            <div className={estilos.contenedor}>
                <button className={estilos.btnresta} onClick={this.resta}>-</button>
                <p className={estilos.numero}>{this.state.numero}</p>
                <button className={estilos.btnsuma} onClick={this.suma}>+</button>
            </div>
        );
    } 
}

export default Suma;


