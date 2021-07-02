import { action } from "@storybook/addon-actions";
import React, { Component } from "react";
import { Cell } from "./Cell"

export interface Props {
  xCount: number;
  yCount: number;
  clickMe?: (x: number, y: number) => void;
  initialValue?: number;
}

interface State {
  counter: number;
}

export class Toggler extends Component {
  state = {
    isChildrenVisible: true
  };

  onClick = () => {
    const { isChildrenVisible } = this.state;
    this.setState({
      isChildrenVisible: !isChildrenVisible,
    })
  }

  render() {
    const { isChildrenVisible } = this.state;
    const { children } = this.props;
    return (
      <>
        <button onClick={this.onClick}>{isChildrenVisible ? "Скрыть children" : "children"}</button>
        <br/>
        {isChildrenVisible && children}
      </>
    );
  }
}

const tt = (y:number, xCount: number, clickMe: (x: number, y: number) => void) => {
  let x: number = 0;
  const row = [];
  while (x < xCount) { 
    row.push(<Cell key={`${x}_${y}`} x={x} y={y} clickMe={clickMe}>{`${x}_${y}`}</Cell>);
    x++; 
  }
  return row;
}

export class CellField extends Component<Props, State> {
  state = {
    counter: this.props.initialValue || 0,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      counter: props.initialValue || 0,
    };
    this.onClick = this.onClick.bind(this);
  }

  //здесь мы инициализируем первичные действия
  componentDidMount() {
      //здесь можно вызывать side-эффекты
      //подписываемся на событие клика мышкой
      document.addEventListener("click", this.documentonClick)
  }

  documentonClick = () => {
    console.warn("documentonClick: Click!");
  }

  onClick = () => {
    this.setState({
      counter: this.state.counter + 1, 
    });
  };

  //lifeciclehook, который решает, надо ли нашему компоненту перерисоываться или нет
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    const c: boolean = nextState.counter % 5 == 0;
    c ? null : console.warn(`shouldComponentUpdate: ${nextState.counter} % 5 != 0`);
    return c; 
  }

  componentDidUpdate() {
    console.warn(`componentDidUpdate: ${this.state.counter} % 5 == 0`);
    console.warn("componentDidUpdate: Updated! this.state.counter + 2");
    this.setState({
      counter: this.state.counter + 2, 
    });
    console.warn(`state.counter =  ${this.state.counter}`); 
  }

  //lifeciclehook для высвобождения ресурсов, на которые был подписан ваш компонент
  //здесь нельзя делать setState
  componentWillUnmount() {
    document.removeEventListener("click", this.documentonClick)
  }

  render() {
    const filed = []
    let y: number = 0;
    const { counter } = this.state;
    while(y < this.props.yCount) {
      filed.push(tt(y, this.props.xCount, this.onClick));
      filed.push(<br key={`${y}`}/>);
      y++;
    }
    return (
    <> 
      {filed}
      <h2>Clicked: {counter}</h2>
    </>
    );
  }
}