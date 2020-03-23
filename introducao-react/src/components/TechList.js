import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {

    // Não foi necessário criar o constructor para definir o state
    // Por causa de um plugin do babel
    state = {
        newTech: '',
        techs: [
            "NodeJs",
            "ReactJs",
            "React Native"
        ]
    };

    //LifeCicle: Executa a função assim que cria o componente
    componentDidMount() {

    }

    //LifeCicle: Executa função toda vez que atualiza o ambiente
    componentDidUpdate() {

    }

    //LifeCicle: Executa função antes de deletar componente
    componentWillUnmount() {

    }

    // Função em Arrow function pois uma função normal não tem acesso ao this
    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            techs: [...this.state.techs, this.state.newTech],
            newTech: ''
        })
    }

    // Função em Arrow function pois uma função normal não tem acesso ao this
    handleInputChange = e => {
        this.setState({ newTech: e.target.value })
    }

    handleRemove = tech => {
        this.setState({
            techs: this.state.techs.filter(t => t !== tech)
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>TechList</h1>
                <ul>
                    {this.state.techs.map(tech =>
                        <TechItem key={tech} tech={tech} onDelete={() => this.handleRemove(tech)} />
                    )}
                </ul>
                <input type="text" onChange={this.handleInputChange} value={this.state.newTech}></input>
                <button type="submit">Enviar</button>
            </form>
        )
    }
}

export default TechList;