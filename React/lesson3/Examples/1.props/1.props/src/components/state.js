import React from 'react';

export class State1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {welcome: "Добро пожаловать на сайт!"};

        if(props.value == 2) {
            this.state = {welcome: "Корзина"};
        }
    }
    render() {
        return <h1>{this.state.welcome}</h1>;
    }
}

export class ClickButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {class: "off", label: "Нажми"};

        this.press = this.press.bind(this);
    }
    press(){
        let className = (this.state.class==="off")?"on":"off";
        this.setState({class: className});
    }
    render() {
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
    }
}